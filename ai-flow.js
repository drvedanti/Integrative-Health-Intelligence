const exploreButton = document.getElementById("explore");
const concern = document.getElementById("concern");
const results = document.getElementById("results");
const language = document.getElementById("siteLanguage");

let ihiState = {
  complaint: "",
  framework: "",
  answers: [],
  history: []
};

const frameworkNames = {
  modern: "Modern Medicine",
  ayurveda: "Ayurveda",
  homeopathy: "Homeopathy"
};

function esc(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    m => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m])
  );
}

function show(html) {
  results.innerHTML = html;
  results.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function busy(message) {
  show(`
    <section class="section">
      <div class="loading">${esc(message)}</div>
    </section>
  `);
}

async function ihiCall(action, extra = {}) {

  const response = await fetch("/api/ihi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action,
      complaint: ihiState.complaint,
      framework: ihiState.framework,
      answers: ihiState.answers,
      history: ihiState.history,
      language: language?.value || "en",
      ...extra
    })
  });

  let data = {};

  try {
    data = await response.json();
  } catch (_) {}

  if (!response.ok) {
    throw new Error(
      data.error || "The AI request could not be completed."
    );
  }

  return data;
}


const activeRecognitions = new WeakMap();

function setupVoiceInput(textareaId, buttonId) {
  const textarea = document.getElementById(textareaId);
  const button = document.getElementById(buttonId);
  if (!textarea || !button) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    button.style.display = "none";
    return;
  }

  if (button.dataset.voiceReady === "1") return;
  button.dataset.voiceReady = "1";

  button.addEventListener("click", event => {
    event.preventDefault();

    if (button.disabled || activeRecognitions.has(button)) return;

    const recognition = new SpeechRecognition();
    const selected = language?.value || "en";

    recognition.lang =
      selected === "hi" || selected === "hi-en" ? "hi-IN" :
      selected === "mr" || selected === "mr-en" ? "mr-IN" :
      "en-IN";

    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    activeRecognitions.set(button, recognition);
    button.textContent = "🎙 Listening…";
    button.disabled = true;

    let captured = "";

    recognition.onresult = event => {
      const result =
        event.results?.[event.results.length - 1]?.[0];

      const spoken =
        result?.transcript?.trim() || "";

      if (spoken && !captured) captured = spoken;
    };

    recognition.onerror = () => {
      activeRecognitions.delete(button);
      button.textContent = "🎙 Speak";
      button.disabled = false;
    };

    recognition.onend = () => {
      if (captured) {
        const existing = textarea.value.trim();

        textarea.value =
          existing ? existing + " " + captured : captured;

        textarea.dispatchEvent(
          new Event("input", { bubbles: true })
        );
      }

      activeRecognitions.delete(button);
      button.textContent = "🎙 Speak";
      button.disabled = false;
    };

    try {
      recognition.start();
    } catch (_) {
      activeRecognitions.delete(button);
      button.textContent = "🎙 Speak";
      button.disabled = false;
    }
  });
}

function voiceButton(id) {
  return '<button type="button" class="btn option" id="' +
    id + '" style="margin-top:10px">🎙 Speak</button>';
}

function chooseFramework() {

  show(`
    <section class="section">

      <div class="eyebrow">
        Step 1
      </div>

      <h2>
        Choose how you want to explore this.
      </h2>

      <p class="section-intro">
        The questions and interpretation change with the framework you choose.
      </p>

      <div class="grid">

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="modern"
        >
          <span class="badge clinical">
            MODERN MEDICINE
          </span>

          <h3>
            Modern Medicine
          </h3>

          <p>
            Evidence-based biomedical reasoning and plausible medical causes.
          </p>
        </button>

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="ayurveda"
        >
          <span class="badge">
            AYURVEDA
          </span>

          <h3>
            Ayurveda
          </h3>

          <p>
            Explore the concern through Ayurvedic concepts and traditional reasoning.
          </p>
        </button>

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="homeopathy"
        >
          <span class="badge">
            HOMEOPATHY
          </span>

          <h3>
            Homeopathy
          </h3>

          <p>
            Explore the individual symptom pattern through Homeopathic theory.
          </p>
        </button>

      </div>

    </section>
  `);

  document
    .querySelectorAll(".framework-choice")
    .forEach(button => {

      button.addEventListener("click", () => {

        ihiState.framework =
          button.dataset.framework;

        loadQuestions();

      });

    });
}

async function loadQuestions() {

  busy(
    "Building questions around your complaint…"
  );

  try {

    const data =
      await ihiCall("questions");

    const questions =
      Array.isArray(data.questions)
        ? data.questions
        : [];

    if (!questions.length) {
      throw new Error(
        "No questions were returned."
      );
    }

    show(`
      <section class="section">

        <div class="eyebrow">
          Step 2 · ${esc(
            frameworkNames[ihiState.framework]
          )}
        </div>

        <h2>
          A few questions before we interpret it.
        </h2>

        <p class="section-intro">
          Answer what fits. Every question also lets you describe your experience in your own words.
        </p>

        <div id="ihiQuestions"></div>

        <div class="actions">
          <button
            class="btn primary"
            id="ihiAnalyze"
            type="button"
          >
            Continue →
          </button>
        </div>

      </section>
    `);

    const box =
      document.getElementById(
        "ihiQuestions"
      );

    questions.forEach(
      (q, index) => {

        const options =
          (
            Array.isArray(q.options)
              ? q.options
              : []
          )
          .map(
            option => `
              <button
                type="button"
                class="btn option ihi-option"
                data-q="${index}"
                data-value="${esc(option)}"
              >
                ${esc(option)}
              </button>
            `
          )
          .join("");

        box.insertAdjacentHTML(
          "beforeend",
          `
            <div class="card question">

              <h3>
                ${index + 1}.
                ${esc(q.question)}
              </h3>

              <div class="options">
                ${options}
              </div>

              ${
                q.allowFreeText
                  ? `
                    <textarea
                      id="free-${index}"
                      placeholder="Or tell us in your own words…"
                    ></textarea>
                  `
                  : ""
              }

            </div>
          `
        );
      }
    );

    document
      .querySelectorAll(".ihi-option")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                `.ihi-option[data-q="${button.dataset.q}"]`
              )
              .forEach(x =>
                x.classList.remove("selected")
              );

            button.classList.add(
              "selected"
            );

          }
        );

      });

    document
      .getElementById("ihiAnalyze")
      .addEventListener(
        "click",
        async () => {

          const answers =
            questions.map(
              (q, index) => {

                const selected =
                  document
                    .querySelector(
                      `.ihi-option[data-q="${index}"].selected`
                    )
                    ?.dataset.value || "";

                const free =
                  document
                    .getElementById(
                      `free-${index}`
                    )
                    ?.value
                    .trim() || "";

                return {
                  question: q.question,
                  answer:
                    free ||
                    selected ||
                    "Not answered"
                };

              }
            );

          ihiState.answers =
            answers;

          await showAnalysis();

        }
      );

  } catch (error) {

    showError(
      error.message,
      loadQuestions
    );

  }
}

function list(items) {

  return (
    Array.isArray(items)
      ? items
      : []
  )
  .map(
    item =>
      `<li>${esc(item)}</li>`
  )
  .join("");
}

function getInitialAnalysis() {
  return ihiState.history.find(
    item => item.type === "analysis"
  )?.data || null;
}

function renderPractical(data) {
  show(`
    <section class="section">

      <div class="eyebrow">
        Next steps · ${esc(frameworkNames[ihiState.framework])}
      </div>

      <h2>What you can do next</h2>

      <div class="grid two">
        <div class="card">
          <h3>What you can try</h3>
          <ul class="list">${list(data?.try)}</ul>
        </div>

        <div class="card">
          <h3>What to avoid</h3>
          <ul class="list">${list(data?.avoid)}</ul>
        </div>
      </div>

      <div class="card safety" style="margin-top:16px">
        <h3>Safety</h3>
        <ul class="list">${list(data?.safety)}</ul>
      </div>

    </section>
  `);
}

function renderAnalysisPage(data) {
  show(`
    <section class="section">

      <div class="eyebrow">
        Step 3 · ${esc(frameworkNames[ihiState.framework])}
      </div>

      <h2>What may be happening?</h2>

      <div class="card">
        <h3>${esc(data.headline || "A possible explanation")}</h3>
        <p>${esc(data.whatMayBeHappening || "")}</p>
      </div>

      <div class="card" style="margin-top:16px">
        <h3>Why might this be happening?</h3>
        <ul class="list">${list(data.why)}</ul>
      </div>

      <div class="card" style="margin-top:16px">
        <h3>Going a little deeper</h3>
        <ul class="list">${list(data.deeperExplanation)}</ul>
      </div>

      <div class="card" style="margin-top:24px">
        <h3>What next?</h3>

        <p class="notice">
          You can ask IHI something more, or continue directly to practical next steps.
        </p>

        <div class="actions">
          <button type="button" class="btn primary" id="ihiContinue">
            Continue → What you can try
          </button>
        </div>

        <div style="margin-top:18px">
          <h4>Ask IHI</h4>

          <textarea
            id="ihiFollowup"
            placeholder="What would you like to understand next?"
          ></textarea>

          ${voiceButton("ihiFollowupVoice")}

          <div class="actions">
            <button type="button" class="btn primary" id="ihiAsk">
              Ask IHI →
            </button>
          </div>
        </div>
      </div>

      <div id="ihiPractical" class="grid two" style="margin-top:24px">
        <div class="card">
          <h3>What you can try</h3>
          <ul class="list">${list(data.try)}</ul>
        </div>

        <div class="card">
          <h3>What to avoid</h3>
          <ul class="list">${list(data.avoid)}</ul>
        </div>
      </div>

      <div class="card safety" style="margin-top:16px">
        <h3>Safety</h3>
        <ul class="list">${list(data.safety)}</ul>
      </div>

    </section>
  `);

  setupVoiceInput("ihiFollowup", "ihiFollowupVoice");

  document
    .getElementById("ihiAsk")
    .addEventListener("click", askIHI);

  document
    .getElementById("ihiContinue")
    .addEventListener("click", () => {
      document
        .getElementById("ihiPractical")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    });
}

async function showAnalysis() {
  busy("Putting your story together…");

  try {
    const data = await ihiCall("analysis");

    ihiState.history.push({
      type: "analysis",
      data
    });

    renderAnalysisPage(data);

  } catch (error) {
    showError(error.message, showAnalysis);
  }
}

async function askIHI() {
  const input = document.getElementById("ihiFollowup");
  const question = input?.value.trim() || "";

  if (!question) {
    input?.focus();
    return;
  }

  ihiState.history.push({
    type: "user",
    question
  });

  busy("IHI is thinking…");

  try {
    const data = await ihiCall("ask", { question });

    ihiState.history.push({
      type: "assistant",
      answer: data.answer
    });

    const answer =
      data.answer && typeof data.answer === "object"
        ? data.answer
        : {
            headline: "Here is what IHI found",
            whatItAdds: String(data.answer || "")
          };

    show(`
      <section class="section">

        <div class="eyebrow">
          Ask IHI · ${esc(frameworkNames[ihiState.framework])}
        </div>

        <h2>Your question</h2>

        <div class="card">
          <p>${esc(question)}</p>
        </div>

        <div class="card" style="margin-top:16px">
          <h3>${esc(answer.headline || "What this means")}</h3>

          ${answer.whatItAdds
            ? "<p>" + esc(answer.whatItAdds) + "</p>"
            : ""}

          ${answer.whatItMeans
            ? "<h4>What this means</h4><p>" +
              esc(answer.whatItMeans) + "</p>"
            : ""}

          ${Array.isArray(answer.why) && answer.why.length
            ? "<h4>Why this may connect</h4><ul class=\"list\">" +
              list(answer.why) + "</ul>"
            : ""}

          ${Array.isArray(answer.deeperExplanation) &&
          answer.deeperExplanation.length
            ? "<h4>Going one level deeper</h4><ul class=\"list\">" +
              list(answer.deeperExplanation) + "</ul>"
            : ""}

          ${Array.isArray(answer.whatYouCanTry) &&
          answer.whatYouCanTry.length
            ? "<h4>What you can try next</h4><ul class=\"list\">" +
              list(answer.whatYouCanTry) + "</ul>"
            : ""}

          ${Array.isArray(answer.whatToWatch) &&
          answer.whatToWatch.length
            ? "<h4>What to watch for</h4><ul class=\"list\">" +
              list(answer.whatToWatch) + "</ul>"
            : ""}
        </div>

        <div class="card" style="margin-top:24px">
          <h3>What next?</h3>

          <p class="notice">
            You can ask another question, or continue to the practical and safety section.
          </p>

          <div class="actions">
            <button type="button" class="btn primary" id="ihiContinue">
              Continue → What you can try
            </button>
          </div>

          <div style="margin-top:18px">
            <h4>Ask another question</h4>

            <textarea
              id="ihiFollowup"
              placeholder="What else would you like to understand?"
            ></textarea>

            ${voiceButton("ihiFollowupVoice")}

            <div class="actions">
              <button type="button" class="btn primary" id="ihiAsk">
                Ask IHI →
              </button>
            </div>
          </div>
        </div>

      </section>
    `);

    setupVoiceInput("ihiFollowup", "ihiFollowupVoice");

    document
      .getElementById("ihiAsk")
      .addEventListener("click", askIHI);

    document
      .getElementById("ihiContinue")
      .addEventListener("click", () => {
        const analysis = getInitialAnalysis();

        if (analysis) {
          renderPractical(analysis);
        }
      });

  } catch (error) {
    ihiState.history.pop();
    showError(error.message, askIHI);
  }
}

function showError(
  message,
  retry
) {

  show(`
    <section class="section">

      <div class="card error">

        <h2>
          Something went wrong
        </h2>

        <p>
          ${esc(message)}
        </p>

        <div class="actions">

          <button
            type="button"
            class="btn primary"
            id="ihiRetry"
          >
            Try again
          </button>

        </div>

      </div>

    </section>
  `);

  document
    .getElementById("ihiRetry")
    .addEventListener(
      "click",
      retry
    );
}

exploreButton.addEventListener(
  "click",
  () => {

    const value =
      concern.value.trim();

    if (!value) {
      concern.focus();
      return;
    }

    ihiState = {
      complaint: value,
      framework: "",
      answers: [],
      history: []
    };

    chooseFramework();

  }
);

concern.addEventListener(
  "keydown",
  event => {

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key === "Enter"
    ) {
      exploreButton.click();
    }

  }
);

function setupIHISpark() {
  if (document.getElementById("ihiSpark")) return;

  const sparks = {
    en: [
      ["🧠 Interesting Health Fact", "Your brain uses a surprising amount of energy.", "Although it makes up only a small part of your body weight, the brain uses roughly one-fifth of the body's energy at rest."],
      ["💡 Did You Know?", "Your stomach doesn't digest itself.", "Its protective mucus lining and other defenses help shield the stomach wall from its own acid and digestive enzymes."],
      ["😄 Health Joke", "Why did the cell break up with the virus?", "Because it needed some space. 🦠"],
      ["🚀 Health Innovation", "Smart contact lenses are being researched for more than vision.", "Researchers have explored contact lenses that could potentially monitor biological signals or deliver medicines."],
      ["🧠 Interesting Health Fact", "Your bones are living tissue.", "Bone is continuously broken down and rebuilt throughout life. Your skeleton is constantly adapting."],
      ["💡 Did You Know?", "Your skin is an organ.", "In fact, it is the body's largest organ and acts as a barrier between you and the outside world."],
      ["😄 Health Joke", "Why did the doctor carry a red pen?", "In case they needed to draw blood. 🩸"],
      ["🚀 Health Innovation", "3D printing is being explored in medicine.", "Researchers are developing ways to use 3D printing for customized prosthetics, surgical planning and experimental tissue engineering."]
    ],

    "hi": [
      ["🧠 रोचक स्वास्थ्य तथ्य", "आपका दिमाग काफी ऊर्जा इस्तेमाल करता है।", "आराम की स्थिति में भी शरीर की कुल ऊर्जा का लगभग पाँचवाँ हिस्सा दिमाग इस्तेमाल करता है।"],
      ["💡 क्या आपको पता है?", "आपका पेट खुद को पचा नहीं लेता।", "पेट की सुरक्षात्मक परत और दूसरी प्राकृतिक सुरक्षा उसे अपने ही एसिड से बचाती हैं।"],
      ["😄 हेल्थ जोक", "सेल ने वायरस से ब्रेकअप क्यों किया?", "क्योंकि उसे थोड़ी space चाहिए थी। 🦠"],
      ["🚀 हेल्थ इनोवेशन", "मेडिसिन में 3D printing का इस्तेमाल खोजा जा रहा है।", "3D printing से customized prosthetics, surgical planning और tissue engineering जैसे क्षेत्रों में नए प्रयोग हो रहे हैं।"]
    ],

    "mr": [
      ["🧠 मजेदार आरोग्य तथ्य", "आपला मेंदू खूप ऊर्जा वापरतो.", "शरीराच्या वजनाचा छोटासा भाग असूनही, विश्रांतीच्या वेळी मेंदू शरीराच्या एकूण ऊर्जेपैकी सुमारे एक-पंचमांश ऊर्जा वापरतो."],
      ["💡 तुम्हाला माहित आहे का?", "आपले पोट स्वतःला पचवत नाही.", "पोटातील protective mucus layer आणि इतर नैसर्गिक संरक्षण आपल्याला पोटाच्या acid पासून वाचवतात."],
      ["😄 हेल्थ जोक", "Cell ने virus सोबत breakup का केलं?", "कारण त्याला थोडी space हवी होती. 🦠"],
      ["🚀 हेल्थ इनोव्हेशन", "Medicine मध्ये 3D printing वर प्रयोग होत आहेत.", "Customized prosthetics, surgical planning आणि tissue engineering सारख्या क्षेत्रांमध्ये 3D printing चा शोध घेतला जात आहे."]
    ],

    "hi-en": [
      ["🧠 Interesting Health Fact", "Brain surprisingly zyada energy use karta hai.", "Rest ke time bhi brain body ki total energy ka roughly one-fifth use karta hai."],
      ["💡 Did You Know?", "Stomach khud ko digest nahi karta.", "Uski protective lining aur natural defenses stomach ko uske own acid se protect karte hain."],
      ["😄 Health Joke", "Cell ne virus se breakup kyun kiya?", "Because usse thodi space chahiye thi. 🦠"],
      ["🚀 Health Innovation", "Medicine mein 3D printing ka use explore ho raha hai.", "Customized prosthetics, surgical planning aur tissue engineering jaise areas mein researchers 3D printing explore kar rahe hain."]
    ],

    "mr-en": [
      ["🧠 Interesting Health Fact", "आपला brain surprisingly खूप energy वापरतो.", "Resting state मध्येही brain body च्या total energy पैकी roughly one-fifth वापरतो."],
      ["💡 Did You Know?", "आपलं stomach स्वतःला digest करत नाही.", "त्याची protective lining आणि natural defenses त्याला own acid पासून protect करतात."],
      ["😄 Health Joke", "Cell ने virus सोबत breakup का केलं?", "Because त्याला थोडी space हवी होती. 🦠"],
      ["🚀 Health Innovation", "Medicine मध्ये 3D printing explore होत आहे.", "Customized prosthetics, surgical planning आणि tissue engineering सारख्या areas मध्ये 3D printing चा वापर शोधला जात आहे."]
    ]
  };

  let index = 0;

  const wrap = document.createElement("aside");
  wrap.id = "ihiSpark";

  wrap.innerHTML = `
    <button
      type="button"
      class="ihi-spark-tab"
      aria-label="Open IHI Spark"
    >
      ✦ IHI Spark
    </button>

    <div class="ihi-spark-card" style="display:none">
      <button
        type="button"
        class="ihi-spark-close"
        aria-label="Close IHI Spark"
      >×</button>

      <div class="ihi-spark-label">✦ IHI Spark</div>
      <div class="ihi-spark-kicker"></div>
      <h4 class="ihi-spark-title"></h4>
      <p class="ihi-spark-text"></p>

      <button
        type="button"
        class="ihi-spark-next"
      >
        Another spark →
      </button>
    </div>
  `;

  document.body.appendChild(wrap);

  const tab = wrap.querySelector(".ihi-spark-tab");
  const card = wrap.querySelector(".ihi-spark-card");
  const close = wrap.querySelector(".ihi-spark-close");
  const next = wrap.querySelector(".ihi-spark-next");
  const kicker = wrap.querySelector(".ihi-spark-kicker");
  const title = wrap.querySelector(".ihi-spark-title");
  const text = wrap.querySelector(".ihi-spark-text");

  function render() {
    const selected = language?.value || "English";
    const items = sparks[selected] || sparks.en;
    const item = items[index % items.length];

    kicker.textContent = item[0];
    title.textContent = item[1];
    text.textContent = item[2];
  }

  tab.addEventListener("click", () => {
    card.style.display = "block";
    tab.style.display = "none";
    render();
  });

  close.addEventListener("click", () => {
    card.style.display = "none";
    tab.style.display = "inline-flex";
  });

  next.addEventListener("click", () => {
    index += 1;
    render();
  });

  language?.addEventListener("change", render);

  render();
}


window.addEventListener("load", () => {
  setupIHISpark();

  if (!document.getElementById("concern")) return;

  setupVoiceInput("concern", "ihiComplaintVoice");
});
