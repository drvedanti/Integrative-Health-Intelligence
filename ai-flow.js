const exploreButton=document.getElementById("explore");
const concern=document.getElementById("concern");
const results=document.getElementById("results");

let ihiState={complaint:"",framework:"",answers:[],history:[]};

async function ihiCall(action,extra={}){
  const r=await fetch("/api/ihi",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      action,
      complaint:ihiState.complaint,
      framework:ihiState.framework,
      answers:ihiState.answers,
      history:ihiState.history,
      language:document.getElementById("language")?.value||"en",
      ...extra
    })
  });
  const data=await r.json();
  if(!r.ok)throw new Error(data.error||"AI request failed");
  return data;
}

function esc(v){
  return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

function showJourney(html){
  results.style.display="block";
  results.innerHTML=`<section class="section">${html}</section>`;
  results.scrollIntoView({behavior:"smooth",block:"start"});
}

function chooseFramework(){
  showJourney(`
    <h2>How would you like to explore this?</h2>
    <p class="section-intro">Choose one health framework. The questions and interpretation will change with your choice.</p>
    <div class="question-grid">
      <button class="card perspective framework-choice" data-framework="modern">
        <span class="badge clinical">MODERN MEDICINE</span>
        <h3>Modern Medicine</h3>
        <p>Evidence-based clinical reasoning and possible medical causes.</p>
      </button>
      <button class="card perspective framework-choice" data-framework="ayurveda">
        <span class="badge traditional">AYURVEDA</span>
        <h3>Ayurveda</h3>
        <p>Explore the story through Ayurvedic concepts of digestion, balance and disease development.</p>
      </button>
      <button class="card perspective framework-choice" data-framework="homeopathy">
        <span class="badge traditional">HOMEOPATHY</span>
        <h3>Homeopathy</h3>
        <p>Explore the individual symptom pattern through Homeopathic theory.</p>
      </button>
    </div>
  `);

  document.querySelectorAll(".framework-choice").forEach(b=>{
    b.onclick=()=>{
      ihiState.framework=b.dataset.framework;
      loadQuestions();
    };
  });
}

async function loadQuestions(){
  showJourney(`<h2>Let's understand your story better.</h2><p class="section-intro">Generating questions for your chosen framework…</p>`);
  try{
    const data=await ihiCall("questions");
    const questions=data.questions||[];
    showJourney(`
      <h2>A few questions</h2>
      <p class="section-intro">Answer what fits. You can also write your own answer.</p>
      <div id="ihiQuestions"></div>
      <button class="btn primary" id="ihiAnalyze">Continue →</button>
    `);

    const box=document.getElementById("ihiQuestions");
    questions.forEach((q,i)=>{
      box.insertAdjacentHTML("beforeend",`
        <div class="card" style="margin:18px 0">
          <h3>${i+1}. ${esc(q.question)}</h3>
          <div class="question-grid">
            ${q.options.map(o=>`<button class="btn secondary ihi-option" data-q="${i}" data-value="${esc(o)}">${esc(o)}</button>`).join("")}
          </div>
          ${q.allowFreeText?`<textarea id="free-${i}" placeholder="Or tell us in your own words…"></textarea>`:""}
        </div>
      `);
    });

    document.querySelectorAll(".ihi-option").forEach(b=>{
      b.onclick=()=>{
        document.querySelectorAll(`.ihi-option[data-q="${b.dataset.q}"]`).forEach(x=>x.classList.remove("primary"));
        b.classList.add("primary");
      };
    });

    document.getElementById("ihiAnalyze").onclick=async()=>{
      ihiState.answers=questions.map((q,i)=>{
        const selected=document.querySelector(`.ihi-option[data-q="${i}"].primary`)?.dataset.value||"";
        const free=document.getElementById(`free-${i}`)?.value.trim()||"";
        return {question:q.question,answer:free||selected||"Not answered"};
      });
      await showAnalysis();
    };
  }catch(e){
    showJourney(`<h2>Something went wrong</h2><p>${esc(e.message)}</p><button class="btn primary" onclick="chooseFramework()">Try again</button>`);
  }
}

async function showAnalysis(){
  showJourney(`<h2>Putting your story together…</h2><p class="section-intro">IHI is analysing it through the ${esc(ihiState.framework)} framework.</p>`);
  try{
    const data=await ihiCall("analysis");
    ihiState.history.push({type:"analysis",data});

    showJourney(`
      <h2>What may be happening?</h2>
      <div class="card"><p>${esc(data.whatMayBeHappening)}</p></div>

      <h2 style="margin-top:32px">Why might this be happening?</h2>
      <div class="card"><p>${esc(data.why)}</p></div>

      <h2 style="margin-top:32px">Going deeper</h2>
      <div class="card"><p>${esc(data.rootCause)}</p></div>

      <div class="card" style="margin-top:32px">
        <h3>Ask IHI</h3>
        <p>Have another question? Ask it without restarting your story.</p>
        <textarea id="ihiFollowup" placeholder="What would you like to understand next?"></textarea>
        <button class="btn primary" id="ihiAsk">Ask IHI →</button>
      </div>

      <div class="question-grid" style="margin-top:24px">
        <div class="card selfcare">
          <h3>What you can try</h3>
          <ul class="clean-list">${data.try.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h3>What to avoid</h3>
          <ul class="clean-list">${data.avoid.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="card safety" style="margin-top:24px">
        <h3>Safety</h3>
        <ul class="clean-list">${data.safety.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      </div>
    `);

    document.getElementById("ihiAsk").onclick=askIHI;
  }catch(e){
    showJourney(`<h2>Something went wrong</h2><p>${esc(e.message)}</p>`);
  }
}

async function askIHI(){
  const question=document.getElementById("ihiFollowup").value.trim();
  if(!question)return;
  ihiState.history.push({type:"user",question});
  showJourney(`<h2>IHI is thinking…</h2>`);
  try{
    const data=await ihiCall("ask",{question});
    ihiState.history.push({type:"assistant",answer:data.answer});
    showJourney(`
      <h2>Ask IHI</h2>
      <div class="card"><p>${esc(data.answer)}</p></div>
      <div class="card" style="margin-top:24px">
        <h3>Ask another question</h3>
        <textarea id="ihiFollowup" placeholder="What else would you like to understand?"></textarea>
        <button class="btn primary" id="ihiAsk">Ask IHI →</button>
      </div>
    `);
    document.getElementById("ihiAsk").onclick=askIHI;
  }catch(e){
    showJourney(`<h2>Something went wrong</h2><p>${esc(e.message)}</p>`);
  }
}

exploreButton.onclick=()=>{
  const value=concern.value.trim();
  if(!value){
    concern.focus();
    return;
  }
  ihiState={complaint:value,framework:"",answers:[],history:[]};
  chooseFramework();
};
