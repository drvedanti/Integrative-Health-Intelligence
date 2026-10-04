"use strict";

/* Run with:  node --test tests/ */

const test = require("node:test");
const assert = require("node:assert");
const { triageText, triageTexts } = require("../lib/safety");

const CRISIS = [
  // English
  "I want to die",
  "I've been thinking about suicide",
  "I feel suicidal",
  "i want to kill myself",
  "I want to end my life",
  "I don't want to live anymore",
  "dont want to be here any more",
  "there is no point in living",
  "I keep wanting to hurt myself",
  "self harm urges",
  "I think everyone is better off without me",
  "I want to hurt my husband",
  // Hindi
  "मुझे आत्महत्या के विचार आ रहे हैं",
  "मैं मरना चाहता हूँ",
  "मैं जीना नहीं चाहती",
  "अब जीने का मन नहीं करता",
  "मैं खुद को खत्म कर लूँगा",
  "मुझे लगता है कि मर जाऊं तो अच्छा है",
  // Marathi
  "मला आत्महत्येचे विचार येतात",
  "मला मरावंसं वाटतं",
  "मला जगावंसं वाटत नाही",
  "मला आयुष्य संपवायचं आहे",
  "मला स्वतःला इजा करावीशी वाटते",
  // Hinglish / Minglish
  "main marna chahta hoon",
  "mujhe jeena nahi chahti",
  "mujhe aatmahatya ke vichar aate hain",
  "zindagi khatam karna chahta hu",
  "mala marave watate",
  "mala jagaychi ichha nahi",
  "mala swatahla sampvaycha aahe"
];

const EMERGENCY = [
  ["I have crushing chest pain", "cardiac"],
  ["pain in my chest and left arm", "cardiac"],
  ["I think I'm having a heart attack", "cardiac"],
  ["my face is drooping and my speech is slurred", "stroke"],
  ["worst headache of my life", "stroke"],
  ["I can't breathe", "breathing"],
  ["severe shortness of breath since morning", "breathing"],
  ["bleeding that won't stop", "bleeding"],
  ["I am vomiting blood", "bleeding"],
  ["coughing up blood", "bleeding"],
  ["my child swallowed bleach", "poison"],
  ["I took too many pills", "poison"],
  ["throat is swelling after eating peanuts", "allergy"],
  ["she had a seizure", "seizure"],
  ["he is unresponsive", "seizure"],
  ["I am pregnant and bleeding heavily", "pregnancy"],
  ["my 2 week old baby has a fever", "infant"],
  ["I hit my head badly in a fall", "injury"],
  ["I think I'm dying", "other"],
  // Hindi
  ["सीने में तेज दर्द हो रहा है", "cardiac"],
  ["मुझे दिल का दौरा पड़ा है", "cardiac"],
  ["सांस नहीं आ रही", "breathing"],
  ["साँस लेने में बहुत तकलीफ है", "breathing"],
  ["खून की उल्टी हो रही है", "bleeding"],
  ["उसने जहर खा लिया", "poison"],
  ["वह बेहोश हो गया", "seizure"],
  ["चेहरा टेढ़ा हो गया है", "stroke"],
  // Marathi
  ["छातीत खूप दुखतंय", "cardiac"],
  ["श्वास घेता येत नाही", "breathing"],
  ["खूप रक्त जात आहे, रक्तस्राव थांबत नाही", "bleeding"],
  ["तो बेशुद्ध झाला आहे", "seizure"],
  ["तोंड वाकडं झालं आहे", "stroke"],
  // Hinglish / Minglish
  ["seene mein bahut dard hai", "cardiac"],
  ["saans nahi aa rahi", "breathing"],
  ["khoon nahi ruk raha", "bleeding"],
  ["usne zehar kha liya", "poison"],
  ["woh behosh ho gaya", "seizure"],
  ["chhatit dukhtay", "cardiac"],
  ["shwas gheta yet nahi", "breathing"]
];

const BENIGN = [
  "I get acidity and a burning feeling after meals, especially at night.",
  "headache for two days",
  "my knee hurts when I climb stairs",
  "I feel tired all the time",
  "skin rash on my arms",
  "I have a cough and runny nose",
  "trouble sleeping and stress at work",
  "bloating and constipation for a week",
  "what does high cholesterol mean in my report",
  "hair fall and dandruff",
  "मुझे खाने के बाद एसिडिटी होती है",
  "पेट में गैस और भारीपन रहता है",
  "जेवल्यानंतर आम्लपित्त होतं",
  "mujhe khane ke baad acidity hoti hai",
  "pet mein gas aur bhaari-pan rehta hai",
  "mala jevlyanantar acidity hote",
  "my mother died last year and I am sad, what is grief",
  "why do I wake up at 3 am"
];

test("crisis phrases route to crisis", () => {
  for (const phrase of CRISIS) {
    const hit = triageText(phrase);
    assert.ok(hit && hit.route === "crisis", `expected crisis: ${phrase} -> ${JSON.stringify(hit)}`);
  }
});

test("emergency phrases route to emergency with the right kind", () => {
  for (const [phrase, kind] of EMERGENCY) {
    const hit = triageText(phrase);
    assert.ok(hit && hit.route === "emergency", `expected emergency: ${phrase} -> ${JSON.stringify(hit)}`);
    assert.strictEqual(hit.kind, kind, `wrong kind for: ${phrase}`);
  }
});

test("everyday health phrases do not trigger", () => {
  for (const phrase of BENIGN) {
    const hit = triageText(phrase);
    assert.strictEqual(hit, null, `unexpected trigger: ${phrase} -> ${JSON.stringify(hit)}`);
  }
});

test("idiomatic future tense is not treated as a crisis", () => {
  assert.strictEqual(triageText("दर्द से मर जाऊंगा"), null);
  assert.strictEqual(triageText("itna dard hai mar jaunga"), null);
});

test("skipEmergency ignores emergency tier but never crisis", () => {
  assert.strictEqual(triageText("I have chest pain", { skipEmergency: true }), null);
  const hit = triageText("I want to die", { skipEmergency: true });
  assert.ok(hit && hit.route === "crisis");
});

test("crisis in any text beats emergency in another", () => {
  const hit = triageTexts(["chest pain", "I want to die"]);
  assert.strictEqual(hit.route, "crisis");
});

test("nukta and chandrabindu spelling variants match", () => {
  assert.ok(triageText("उसने ज़हर खा लिया"));
  assert.ok(triageText("उसने जहर खा लिया"));
  assert.ok(triageText("साँस नहीं आ रही"));
  assert.ok(triageText("सांस नहीं आ रही"));
});

test("empty and non-string input is safe", () => {
  assert.strictEqual(triageText(""), null);
  assert.strictEqual(triageText(null), null);
  assert.strictEqual(triageText(undefined), null);
  assert.strictEqual(triageTexts([]), null);
});
