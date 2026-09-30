module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  if (!process.env.ihi) {
    return res.status(500).json({ error: "Groq API key missing" });
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
      `Use genuine Ayurvedic reasoning, not biomedical terminology with Ayurvedic labels added.

Core concepts to use when relevant:
- Dosha: Vata, Pitta and Kapha are Ayurvedic patterns used to describe different symptom and body-function patterns.
- Vata: when relevant, explain it through observable experiences such as variable symptoms, gas, bloating, constipation, cramping, dryness or symptoms associated with irregular routines. Do not describe it only as "movement" or "irregularity".
- Pitta: when relevant, explain it through observable experiences such as burning, feeling unusually hot, acidity, loose stools, strong hunger or red/inflamed skin. Do not describe it only as "heat".
- Kapha: when relevant, explain it through observable experiences such as heaviness, sluggish digestion, sleepiness, congestion, increased mucus or oily skin. Do not describe it only as "heaviness".
- Agni: explain this as the Ayurvedic idea of how well the body processes food and supports digestion. Use the user's appetite, digestion, bowel pattern and response to meals as observable context.
- Nidana: explain this as the Ayurvedic framework's possible causes or triggers behind the complaint, such as irregular meals, stress, sleep disruption, diet or other relevant factors.
- Ama: explain this as an Ayurvedic concept of incompletely processed material associated, in that framework, with impaired digestion. Do not call Ama biomedical toxins or present it as established biomedical fact.

Do not ask users to identify their own Dosha unless the concept has first been explained in concrete everyday language. Prefer questions about observable symptoms, habits, timing, triggers and patterns, then interpret those answers.

A person may show a mixed or combined pattern, such as Vata-Pitta or Pitta-Kapha. Do not force a single Dosha when the answers suggest a combination. If a combined pattern is relevant, explain which observable answers led to that interpretation.

Only introduce Agni, Ama or Nidana when the user's complaint and answers provide a reasonable basis for discussing them. Do not force every Ayurvedic concept into every answer.

All Ayurvedic explanations are traditional-framework interpretations, not established biomedical diagnoses or causes.`,

    homeopathy:
      "Use Homeopathic theory only for this framework, including the whole symptom pattern and individualization. Clearly state that these are theoretical concepts, not established biomedical causes."
  };

  const lang = {
    en: "Write ONLY in simple, natural English. No Hindi or Marathi.",
    hi: "Write ONLY in easy everyday Hindi in Devanagari. Avoid formal or Sanskrit-heavy Hindi. Explain difficult terms immediately in simple Hindi.",
    mr: "Write ONLY in easy everyday Marathi in Devanagari. Avoid formal or bookish Marathi. Explain difficult terms immediately in simple Marathi.",
    "hi-en": "Write natural conversational Hinglish: easy Hindi sentence structure with simple familiar English words mixed naturally. Do NOT translate Hindi into English. Do NOT create separate Hindi and English sections.",
    "mr-en": "Write natural conversational Minglish: easy Marathi sentence structure with simple familiar English words mixed naturally. Do NOT translate Marathi into English. Do NOT create separate Marathi and English sections."
  }[language] || "Write ONLY in simple, natural English.";

  const languageGuard =
    "LANGUAGE IS A HARD REQUIREMENT. Every user-facing field must follow the selected language exactly. Never silently switch to English.";

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
Questions must collect information that is actually useful for reasoning within that framework.

For Ayurveda specifically:
- Do not use a fixed questionnaire.
- Make the questions relevant to the exact complaint.
- Ask about observable symptoms, timing, digestion, appetite, bowel pattern, triggers, sleep, stress, food patterns or other factors only when relevant.
- Do not ask "Which Dosha do you think you have?" as a default question.
- Do not assume the user knows Ayurvedic terminology.
- If an Ayurvedic term is necessary in a question, explain it immediately in plain everyday language.
- Questions should gather enough information to consider Vata, Pitta, Kapha or a combination without making the user diagnose themselves.

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
  "headline": "short human-friendly takeaway",
  "whatMayBeHappening": "2 to 4 short sentences",
  "why": ["2 to 4 concise points"],
  "deeperExplanation": ["1 to 3 concise points"],
  "try": ["2 to 5 concise points"],
  "avoid": ["2 to 5 concise points"],
  "safety": ["1 to 4 concise points"]
}

Analyze the complaint using the selected framework and the user's answers.

For Modern Medicine:
Discuss plausible causes and mechanisms. Do not claim a chat-based diagnosis or confirmed root cause.

For Ayurveda:
- Interpret the user's answers using genuine Ayurvedic reasoning.
- Explain the relevant Dosha pattern in terms of the user's actual symptoms.
- If the pattern appears mixed, explicitly explain the combination rather than forcing one Dosha.
- When relevant, explain Agni, Nidana and Ama in plain language and connect each concept to the user's answers.
- Do not present Ayurvedic concepts as established biomedical mechanisms.
- Do not use unexplained Sanskrit terminology.
- Do not invent an Ayurvedic concept merely to make the answer sound authentic.

For Homeopathy:
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
  "answer": {
    "headline": "short human-friendly takeaway",
    "whatItAdds": "what the user's new question adds or changes",
    "whatItMeans": "simple explanation of what this may mean in the context of their original complaint",
    "why": ["2 to 4 short reasons connected to the user's actual information"],
    "deeperExplanation": ["1 to 3 short points explaining the deeper mechanism or framework interpretation"],
    "whatYouCanTry": ["2 to 5 practical, low-risk actions when appropriate"],
    "whatToWatch": ["1 to 4 important safety or follow-up points"]
  }
}

Write for a normal person, not a clinician or textbook reader.

Style:
- Use short sentences.
- Use everyday language.
- Explain technical terms immediately in plain language.
- Tell a clear mini-story: what changed → what it may mean → why → what to do next.
- Do not dump framework terminology.
- Do not use markdown symbols such as **, ## or bullet characters inside the strings.
- Each array item must be a separate, concise point.
- Keep the answer useful and interesting, not generic.
- Connect explanations to the user's actual complaint and previous answers.
- If a framework concept is relevant, explain it through the user's symptoms rather than giving a dictionary definition.

For Ayurveda specifically:
- Explain Vata, Pitta or Kapha through the user's actual symptoms and patterns.
- If a mixed pattern such as Vata-Pitta is relevant, say so and explain what in the user's answers points toward each part.
- Explain Agni as the Ayurvedic idea of how digestion is functioning, using the user's appetite, digestion and bowel pattern.
- Explain Nidana as an Ayurvedic idea of possible contributing causes or triggers.
- Explain Ama only when there is a reasonable Ayurvedic basis for discussing it, and never call it biomedical toxins.
- Do not force all concepts into the answer.
- Clearly distinguish Ayurvedic interpretation from established biomedical fact.

For Modern Medicine:
- Explain plausible biomedical mechanisms without claiming a diagnosis.
- If uncertainty remains, say what information or clinical evaluation would normally help.

For Homeopathy:
- Explain the interpretation as Homeopathic theory, not established biomedical causation.
- Focus on the person's overall symptom pattern and individual characteristics.

Do not diagnose with certainty.
Do not prescribe prescription medicines.
Include appropriate safety guidance.
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
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.ihi
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.3,
          response_format: {
            type: "json_object"
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Groq request failed"
      });
    }

    const text =
      data?.choices?.[0]?.message?.content || "{}";

    return res.status(200).json(JSON.parse(text));

  } catch (e) {
    return res.status(500).json({
      error: "Groq AI request failed"
    });
  }
};