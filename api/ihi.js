module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Gemini API key missing" });
  }

  const b = req.body || {};
  const action = b.action || "questions";
  const complaint = String(b.complaint || "").trim();
  const framework = String(b.framework || "").trim();
  const answers = b.answers || [];
  const history = Array.isArray(b.history) ? b.history.slice(-12) : [];
  const language = String(b.language || "en");

  if (!complaint) {
    return res.status(400).json({ error: "Complaint required" });
  }

  if (!["modern", "ayurveda", "homeopathy"].includes(framework)) {
    return res.status(400).json({ error: "Framework required" });
  }

  const rules = {
    modern:
      "Use evidence-based biomedical reasoning. Do not diagnose from chat. Explain plausible mechanisms and causes and what normally needs clinical evaluation.",

    ayurveda:
      "Use genuine Ayurvedic concepts such as Nidana, Dosha and Agni when relevant. Clearly label them as Ayurvedic concepts, not established biomedical facts.",

    homeopathy:
      "Use Homeopathic theory only for this framework, including the whole symptom pattern and individualization. Clearly state that these are theoretical concepts, not established biomedical causes."
  };

  const lang = {
    en: "Use clear simple English.",
    hi: "Answer in clear Hindi.",
    mr: "Answer in clear Marathi.",
    "hi-en": "Use natural Hindi + English.",
    "mr-en": "Use natural Marathi + English."
  }[language] || "Use clear simple English.";

  let prompt = "";
  let schema = "";

  if (action === "questions") {
    schema = `
Return ONLY valid JSON:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string"],
      "allowFreeText": true
    }
  ]
}

Generate 3 to 5 high-value questions tailored to the exact complaint and selected framework.
Questions must genuinely differ between frameworks.
Allow the user to type their own answer.
Do not diagnose.
`;

    prompt = `
${schema}

Complaint: ${complaint}
Framework: ${framework}

Framework rules:
${rules[framework]}

Language:
${lang}
`;
  }

  else if (action === "analysis") {
    schema = `
Return ONLY valid JSON:
{
  "whatMayBeHappening": "string",
  "why": "string",
  "rootCause": "string",
  "try": ["string"],
  "avoid": ["string"],
  "safety": ["string"]
}

Analyze the complaint using the selected framework and the user's answers.

For Modern Medicine:
Discuss plausible causes and mechanisms. Do not claim a chat-based diagnosis or confirmed root cause.

For Ayurveda and Homeopathy:
Clearly label causal explanations as traditional or theoretical frameworks rather than established biomedical facts.

Give only reasonably low-risk self-care.
Do not prescribe prescription medicines.
Include appropriate safety/red-flag guidance.
`;

    prompt = `
${schema}

Original complaint:
${complaint}

Selected framework:
${framework}

User answers:
${JSON.stringify(answers)}

Framework rules:
${rules[framework]}

Language:
${lang}
`;
  }

  else if (action === "ask") {
    schema = `
Return ONLY valid JSON:
{
  "answer": "string"
}

Answer the user's follow-up while retaining the entire context of the original complaint, selected framework, previous answers, previous analysis, and previous questions.

IMPORTANT:
The user's new question is NEW EVIDENCE about the same situation.

Do not simply answer the literal question and stop.
Re-examine the whole context and use the new information to go one level deeper.

Explain:
1. What the new information changes or adds.
2. What may be happening now.
3. Why it may be happening within the selected framework.
4. What deeper explanation can reasonably be considered.
5. What the person can practically do next, when appropriate.

If the available information is insufficient, say what additional information would actually matter.

Do not restart the journey.
Do not diagnose with certainty.
Do not prescribe prescription medicines.
`;

    prompt = `
${schema}

Original complaint:
${complaint}

Selected framework:
${framework}

Previous context:
${JSON.stringify(history)}

New user question:
${String(b.question || "")}

Framework rules:
${rules[framework]}

Language:
${lang}
`;
  }

  else {
    return res.status(400).json({ error: "Unknown action" });
  }

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            responseMimeType: "application/json"
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini request failed"
      });
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    return res.status(200).json(JSON.parse(text));

  } catch (e) {
    return res.status(500).json({
      error: "Gemini AI request failed"
    });
  }
};