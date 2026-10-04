"use strict";

/*
  IHI Safety Router — deterministic red-flag matching.

  Two tiers:
    crisis    - thoughts of suicide, self-harm or harming others.
                The app stops and shows support lines; no analysis is given.
    emergency - symptoms that may need emergency care right now.
                The app shows an emergency card first; the user may continue.

  Languages: English, Hindi, Marathi (Devanagari), plus romanized
  Hindi/Marathi (Hinglish/Minglish).

  This is a prototype-grade safety net, not a clinical triage tool. It will
  over-trigger (e.g. "food poisoning", "no chest pain") and miss unusual
  phrasing. Over-triggering is deliberate: the emergency tier lets the user
  continue. The pattern lists should be reviewed by a clinician and by
  native Hindi and Marathi speakers before wider release.
*/

/* Normalise text and pattern sources the same way so both sides agree:
   NFKC, lower-case, drop Devanagari nukta (so "ज़हर" == "जहर"),
   chandrabindu -> anusvara (so "साँस" == "सांस"), tidy whitespace. */
function canon(value) {
  return String(value == null ? "" : value)
    .normalize("NFKC")
    .replace(/[​-‏⁠﻿]/g, "")
    .replace(/़/g, "")
    .replace(/ँ/g, "ं")
    .replace(/[‘’`´]/g, "'")
    .toLowerCase();
}

function normalizeText(value) {
  return canon(value).replace(/\s+/g, " ").trim();
}

function compile(sources) {
  return sources.map(source => new RegExp(canon(source), "i"));
}

/* Each rule: { tier, kind, any: [patterns], all: [[patterns], [patterns]] }
   `any`  - triggers if at least one pattern matches.
   `all`  - triggers if every group has at least one matching pattern. */
const RULES = [

  /* ---------------- CRISIS ---------------- */
  {
    tier: "crisis",
    kind: "self_harm",
    any: [
      // English
      "\\bsuicid(e|al)\\b",
      "\\bkill(ing)? my ?self\\b",
      "\\b(end|take|ending|taking) (my|my own) (own )?life\\b",
      "\\bend it all\\b",
      "\\bwant(ed|ing)? to die\\b",
      "\\b(wish|wished) (i|that i) (was|were) dead\\b",
      "\\bbetter off (dead|without me)\\b",
      "\\b(don'?t|do not|dont) want to (live|be alive|exist|be here)( any ?more)?\\b",
      "\\bno (reason|point) (to|in) (live|living|go on|going on|being alive)\\b",
      "\\bself[- ]?harm(ing)?\\b",
      "\\b(hurt|harm|cut|injure|hurting|harming|cutting|injuring) (my ?self|my own body)\\b",
      "\\bhang(ing)? my ?self\\b",
      "\\bwant(ed)? to (kill|hurt|harm) (someone|somebody|him|her|them|others|my (wife|husband|child|children|kids|baby|mother|father))\\b",
      // Hindi (Devanagari)
      "आत्म ?हत्य",
      "खुदकुशी",
      "(मरना चाहत|मर जाना चाहत|मरने का मन|मरने की इच्छा|मरने को मन)",
      "मर जाऊं(?!ग)",
      "मर जाऊ(?!ं?ग)",
      "जीना नहीं चाहत",
      "जीने की इच्छा नहीं",
      "जीने का मन नहीं",
      "(जिंदगी|ज़िंदगी|जिन्दगी) (खत्म|ख़त्म)",
      "अपनी जान (ले|दे)",
      "खुद को (मार|खत्म|ख़त्म|नुकसान|चोट|काट)",
      // Marathi (Devanagari)
      "मरावं(सं|से|स)? ?वाट",
      "मरण्याचे विचार",
      "जगावं(सं|से|स)? ?वाटत नाही",
      "जगायची इच्छा नाही",
      "जगण्याची इच्छा नाही",
      "आयुष्य संपव",
      "स्वतःला (संपव|इजा|मारून|त्रास)",
      "स्वतःचा जीव",
      "जीव द्यावा",
      "जीव देण",
      // Romanized Hindi / Marathi
      "\\b(aatm|atm)a? ?hatya\\b",
      "\\bkhudkushi\\b",
      "\\bmar(na|jana|jaana) chah(ta|ti|te)\\b",
      "\\bmarne ka (man|mann|mood)\\b",
      "\\bmar ja(u|un|oon)\\b",
      "\\bjeena nahi chah(ta|ti)\\b",
      "\\bji?ne ka (man|mann) nahi\\b",
      "\\bzindagi khatam\\b",
      "\\bapni jaan (de|le)\\b",
      "\\bkhud ko (maar|khatam|nuksan|hurt|chot)\\b",
      "\\bmarav\\w* ?[vw]at\\w*",
      "\\bjag\\w* ichh?a nahi\\b",
      "\\bswatahla (sampv|sampav|ija|maru)\\w*",
      "\\bjeev dyav\\w*",
      "\\baayushya sampv\\w*"
    ]
  },

  /* ---------------- EMERGENCY ---------------- */
  {
    tier: "emergency",
    kind: "cardiac",
    any: [
      "\\bchest (pain|pressure|tightness|heaviness)\\b",
      "\\bpain (in|across|around) (my |the )?chest\\b",
      "\\b(crushing|squeezing) (pain|feeling)\\b",
      "\\bheart attack\\b",
      "सीने (में|मे) (बहुत |तेज |तेज़ )?(दर्द|जकड़न|दबाव|भारीपन)",
      "छाती (में|मे) (बहुत |तेज |तेज़ )?(दर्द|जकड़न|दबाव|भारीपन)",
      "दिल का दौरा",
      "(हार्ट|हर्ट) ?(अटैक|अटॅक)",
      "छातीत (खूप |तीव्र )?(दुखत|दुखू|वेदना|दाब|जड|भार)",
      "हृदयविकाराचा झटका",
      "\\b(seene|seena|chhati|chhaati|chaati|chati|chhatit|chatit)\\b.{0,14}\\b(dard|dukh\\w*|jakdan|dabav|pressure|bhari)\\b"
    ]
  },
  {
    tier: "emergency",
    kind: "stroke",
    any: [
      "\\b(having|had|suffered|think (i|he|she) (had|have|is having|am having)) (a )?stroke\\b",
      "\\bface (is |was )?(drooping|droops|drooped|numb)\\b",
      "\\bslurred (speech|words)\\b",
      "\\bslurring (my )?words\\b",
      "\\bsudden(ly)? (weakness|numbness) (on|in) (one|my (left|right)) (side|arm|leg)\\b",
      "\\bone side of (my|the) (face|body)\\b",
      "\\bworst headache (of|in) my life\\b",
      "\\bsudden (loss of vision|blindness|vision loss)\\b",
      "\\bcan'?t (move|feel) (my|one) (arm|leg|side)\\b",
      "(लकवा|पैरालिसिस|चेहरा टेढ़ा|चेहरा टेढा|चेहरा लटक)",
      "(जबान|जुबान|ज़बान) लड़खड़ा",
      "बोल नहीं पा",
      "(अर्धांगवायू|पक्षाघात|तोंड वाकड|बोलता येत नाही|बोलणे अडखळ)",
      "\\b(lakwa|laqwa|paralysis|ardhangvayu)\\b",
      "\\bchehra (tedha|latak)\\w*",
      "\\bzubaan ladkhada\\w*"
    ]
  },
  {
    tier: "emergency",
    kind: "breathing",
    any: [
      "\\b(can'?t|cannot|can not|unable to) breathe\\b",
      "\\b(trouble|difficulty|struggling|hard) (to )?breath(e|ing)\\b",
      "\\b(severe|extreme|sudden) (shortness of breath|breathlessness)\\b",
      "\\bgasping for (air|breath)\\b",
      "\\bchoking\\b",
      "\\b(blue|bluish) (lips|face|skin)\\b",
      "\\b(stopped|not) breathing\\b",
      "सांस (नहीं|लेने में (बहुत )?(तकलीफ|दिक्कत|परेशानी))",
      "दम घुट",
      "श्वास (घेता येत नाही|घेण्यास (खूप )?त्रास|कोंडतो)",
      "दम (कोंडतो|घुटतो)",
      "\\bsaans? (nahi|nhi) (aa|le)",
      "\\bsans? (nahi|nhi)\\b",
      "\\bsaas lene mein (bahut )?(takleef|dikkat)\\b",
      "\\bdum ghut\\w*",
      "\\bshwas gheta yet nahi\\b",
      "\\bshwas gheny?a(s)? tras\\b"
    ]
  },
  {
    tier: "emergency",
    kind: "bleeding",
    any: [
      "\\b(bleeding|blood) (a lot|heavily|profusely|won'?t stop|will not stop|is not stopping|not stopping|everywhere)\\b",
      "\\bbleeding (that|which) (won'?t|will not|doesn'?t|does not) stop\\b",
      "\\b(won'?t|will not|can'?t|cannot) (stop|control) (the )?bleeding\\b",
      "\\b(heavy|severe|uncontrolled|massive|profuse) (bleeding|blood loss|haemorrhage|hemorrhage)\\b",
      "\\b(vomit(ing|ed)?|throw(ing)? up|cough(ing|ed)?( up)?|spitting( up)?) (some |a lot of )?blood\\b",
      "\\bblood in (my )?vomit\\b",
      "\\bbleeding (from|out of) (my )?(eyes|ears|mouth)\\b",
      "खून (बहुत )?(ज्यादा |ज़्यादा )?(बह रहा|निकल रहा)",
      "खून (नहीं रुक|बंद नहीं|रुक नहीं)",
      "खून की उल्टी",
      "उल्टी में खून",
      "(खांसी|खांसने) (में|पर) खून",
      "रक्तस्राव (थांबत नाही|खूप)",
      "खूप रक्त",
      "(रक्ताची उलटी|उलटीतून रक्त|खोकल्यातून रक्त|खोकल्यात रक्त)",
      "\\bkhoon (nahi|nhi) ruk\\w*",
      "\\b(bahut|zyada|jyada) khoon\\b",
      "\\bkhoon ki ulti\\b",
      "\\braktasrav\\b",
      "\\braktachi ulti\\b"
    ]
  },
  {
    tier: "emergency",
    kind: "poison",
    any: [
      "\\boverdos(e|ed|ing)\\b",
      "\\btook (too many|a lot of|all (of )?(my|the)) (pills|tablets|medication|medicine|meds)\\b",
      "\\bswallowed (poison|bleach|chemical|detergent|a battery|pesticide)\\b",
      "\\bdrank (poison|bleach|pesticide|kerosene|phenyl|acid)\\b",
      "\\bpoison(ed|ing)\\b",
      "जहर (खा|पी)",
      "ओवरडोज",
      "ज्यादा गोलियां खा",
      "विष (प्राशन|घेतल|पिऊ|पिल)",
      "ओव्हरडोस",
      "जास्त गोळ्या खाल्ल",
      "\\bzeh?ar (kha|pi)\\w*",
      "\\bvish (pil|ghet|prashan)\\w*"
    ]
  },
  {
    tier: "emergency",
    kind: "allergy",
    any: [
      "\\banaphyla(xis|ctic)\\b",
      "\\b(throat|tongue|lips|face) (is |are )?(closing|swelling|swollen|swelled)\\b",
      "गला (बंद|सूज)",
      "गले में सूजन",
      "घसा (बंद|सुजल)",
      "\\bgala (band|sooj)\\w*"
    ],
    all: null
  },
  {
    tier: "emergency",
    kind: "seizure",
    any: [
      "\\b(seizure|seizures|convulsion|convulsions|convulsing)\\b",
      "\\bepileptic fit\\b",
      "\\bhaving a fit\\b",
      "\\b(passed out|blacked out|unconscious|unresponsive|collapsed)\\b",
      "\\b(won'?t|will not|not) (wake|waking) up\\b",
      "(दौरा पड़|मिर्गी का दौरा|बेहोश|होश नहीं|बेहोशी)",
      "(फिट आली|फिट येत|झटके येत|बेशुद्ध|शुद्ध हरपली)",
      "\\bdaura pad\\w*",
      "\\bmirgi\\b",
      "\\bbehosh\\b",
      "\\bbeshudd?h?a?\\b",
      "\\bfit (aali|ali)\\b",
      "\\bjhatke yet\\w*"
    ]
  },
  {
    tier: "emergency",
    kind: "pregnancy",
    all: [
      [
        "\\b(pregnan\\w*|expecting)\\b",
        "गर्भवती",
        "गरोदर",
        "\\b(garbhvati|garbhwati|garodar)\\b"
      ],
      [
        "\\bbleeding\\b",
        "\\bsevere (abdominal|stomach|belly) pain\\b",
        "\\bbaby (is )?(not|isn'?t|stopped) mov\\w*",
        "\\breduced (fetal|baby) movement\\b",
        "खून",
        "रक्तस्राव",
        "(तेज|तेज़|तीव्र) (दर्द|वेदना)",
        "बच्चा हिल नहीं",
        "बाळ हलत नाही",
        "\\bkhoon\\b",
        "\\braktasrav\\b",
        "\\btez dard\\b"
      ]
    ]
  },
  {
    tier: "emergency",
    kind: "infant",
    all: [
      [
        "\\b(newborn|infant|navjaat|navjat|nawjat)\\b",
        "नवजात",
        "शिशु",
        "\\b[0-9]+[- ]?(day|days|week|weeks)[- ]?old\\b",
        "\\b(1|2|3|one|two|three)[- ]?months?[- ]?old\\b"
      ],
      [
        "\\b(fever|temperature|bukhar|bukhaar|taap)\\b",
        "बुखार",
        "ताप"
      ]
    ]
  },
  {
    tier: "emergency",
    kind: "child",
    all: [
      [
        "\\b(child|baby|kid|toddler|bachcha|bachha|baccha)\\b",
        "बच्चा",
        "बच्ची",
        "बच्चे",
        "मूल",
        "बाळ"
      ],
      [
        "\\b(not responding|unresponsive|won'?t wake|not breathing|limp)\\b",
        "बेहोश",
        "बेशुद्ध",
        "होश नहीं",
        "उठत नाही",
        "उठ नहीं"
      ]
    ]
  },
  {
    tier: "emergency",
    kind: "injury",
    any: [
      "\\b(head injury|hit (my|his|her) head|serious (accident|injury)|severe burns?|electric shock|electrocuted|drown(ed|ing))\\b",
      "\\b(stabbed|gunshot)\\b",
      "सिर में (गहरी )?चोट",
      "(गंभीर|भयंकर) (चोट|दुर्घटना)",
      "करंट (लग|लगा)",
      "बुरी तरह जल",
      "डोक्याला (मार|इजा|जखम)",
      "गंभीर दुखापत",
      "विजेचा झटका",
      "\\bsir mein chot\\b",
      "\\bcurrent lag\\w*"
    ]
  },
  {
    tier: "emergency",
    kind: "other",
    any: [
      "\\b(i'?m|i am|think i'?m|feel like i'?m) (dying|going to die)\\b",
      "\\bmedical emergency\\b",
      "\\bcall(ing)? (an )?ambulance\\b",
      "\\bambulance\\b",
      "(मर रहा|मर रही) (हूं|हु)",
      "(एम्बुलेंस|एंबुलेंस|ऐम्बुलेंस)",
      "रुग्णवाहिका"
    ]
  }
];

/* Combined rules (pregnancy, infant, child) go first so the more specific
   kind wins over a generic one such as "bleeding". */
const COMPILED = RULES.map(rule => ({
  tier: rule.tier,
  kind: rule.kind,
  any: rule.any ? compile(rule.any) : null,
  all: rule.all ? rule.all.map(compile) : null
})).sort((a, b) => (b.all ? 1 : 0) - (a.all ? 1 : 0));

function matchRule(rule, text) {
  if (rule.any && rule.any.some(re => re.test(text))) return true;
  if (rule.all && rule.all.every(group => group.some(re => re.test(text)))) return true;
  return false;
}

/* Check one piece of text. Returns { route, kind } or null.
   Crisis always wins over emergency. */
function triageText(value, options = {}) {
  const text = normalizeText(value);
  if (!text) return null;

  for (const rule of COMPILED) {
    if (rule.tier === "crisis" && matchRule(rule, text)) {
      return { route: "crisis", kind: rule.kind };
    }
  }

  if (!options.skipEmergency) {
    for (const rule of COMPILED) {
      if (rule.tier === "emergency" && matchRule(rule, text)) {
        return { route: "emergency", kind: rule.kind };
      }
    }
  }

  return null;
}

/* Check several texts; crisis in any text beats emergency in another. */
function triageTexts(values, options = {}) {
  let emergency = null;

  for (const value of values) {
    const hit = triageText(value, options);
    if (!hit) continue;
    if (hit.route === "crisis") return hit;
    if (!emergency) emergency = hit;
  }

  return emergency;
}

module.exports = { triageText, triageTexts, normalizeText };
