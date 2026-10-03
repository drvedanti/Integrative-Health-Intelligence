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
      ["Tiny curiosity", "Why does IHI ask about timing?", "Because when something happens can be as useful as what happens."],
      ["Tiny curiosity", "One symptom can have many explanations.", "Good questions help narrow the story."],
      ["Tiny curiosity", "Why ask \"why\"?", "Because understanding the reasoning can be more useful than seeing an answer alone."]
    ],
    hi: [
      ["छोटी-सी जिज्ञासा", "IHI समय के बारे में क्यों पूछता है?", "क्योंकि कोई चीज़ कब होती है, यह भी उतना ही काम का हो सकता है जितना कि वह क्या है।"],
      ["छोटी-सी जिज्ञासा", "एक लक्षण के कई कारण हो सकते हैं।", "सही सवाल कहानी को समझने में मदद करते हैं।"]
    ],
    mr: [
      ["छोटीशी उत्सुकता", "IHI वेळेबद्दल का विचारतो?", "एखादी गोष्ट कधी होते, हे कशामुळे होते हे समजून घेण्यासाठी महत्त्वाचं ठरू शकतं."],
      ["छोटीशी उत्सुकता", "एका लक्षणामागे अनेक शक्यता असू शकतात.", "योग्य प्रश्न विचारल्यामुळे नेमकं काय चाललंय हे समजायला मदत होते."]
    ],
    "hi-en": [
      ["Tiny curiosity", "IHI timing ke baare mein kyun poochta hai?", "Kyuki kuch kab hota hai, ye bhi utna hi useful ho sakta hai jitna ki kya ho raha hai."],
      ["Tiny curiosity", "Ek symptom ke peeche kai explanations ho sakte hain.", "Good questions story ko narrow karne mein help karte hain."]
    ],
    "mr-en": [
      ["Tiny curiosity", "IHI timing बद्दल का विचारतो?", "कारण काही कधी होतं, हे काय होतंय इतकंच useful ठरू शकतं."],
      ["Tiny curiosity", "एका symptom मागे अनेक explanations असू शकतात.", "Good questions मुळे नेमकं काय चाललंय हे समजायला help होते."]
    ]
  };

  let index = 0;

  const wrap = document.createElement("aside");
  wrap.id = "ihiSpark";
  wrap.innerHTML = `
    <div class="ihi-spark-card">
      <button type="button" class="ihi-spark-close" aria-label="Minimize IHI Spark">×</button>
      <div class="ihi-spark-label">✨ IHI Spark</div>
      <div class="ihi-spark-kicker"></div>
      <h4 class="ihi-spark-title"></h4>
      <p class="ihi-spark-text"></p>
      <button type="button" class="ihi-spark-next">Another spark →</button>
    </div>
    <button type="button" class="ihi-spark-mini" aria-label="Open IHI Spark">✨</button>
  `;

  document.body.appendChild(wrap);

  const card = wrap.querySelector(".ihi-spark-card");
  const mini = wrap.querySelector(".ihi-spark-mini");
  const close = wrap.querySelector(".ihi-spark-close");
  const next = wrap.querySelector(".ihi-spark-next");
  const kicker = wrap.querySelector(".ihi-spark-kicker");
  const title = wrap.querySelector(".ihi-spark-title");
  const text = wrap.querySelector(".ihi-spark-text");

  function render() {
    const selected = language?.value || "en";
    const items = sparks[selected] || sparks.en;
    const item = items[index % items.length];

    kicker.textContent = item[0];
    title.textContent = item[1];
    text.textContent = item[2];
  }

  next.addEventListener("click", () => {
    index += 1;
    render();
  });

  close.addEventListener("click", () => {
    card.style.display = "none";
    mini.style.display = "flex";
  });

  mini.addEventListener("click", () => {
    card.style.display = "block";
    mini.style.display = "none";
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
