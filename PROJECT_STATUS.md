# Project status

**What IHI is:** a prototype that explains a health concern through Allopathy (modern medicine), Ayurveda or Homeopathy, one at a time, in five language modes. See [README.md](README.md).

## Built and working

- Full flow: describe concern, choose approach, answer questions, understanding, follow-ups, practical steps and safety.
- Languages: English, Hindi, Marathi, Hinglish, Minglish (interface and AI replies).
- Voice input with clear messages for blocked microphone, silence, offline and unsupported browsers.
- Safety router for crisis and emergency phrases, a scope guard for non-health requests, and a footer disclaimer.
- API protections: input limits, same-site check, rate limits, timeouts, reply validation, retry on provider rate limits, and a translated "busy" message.
- Pages: Home, Health Intelligence Tool, How to Use IHI, About (Why IHI Exists, About the Creator with contact details).
- Automated tests for the safety matcher, the API and the translation tables.

## Before wider release

- [ ] Clinician review of the red-flag list and emergency and crisis wording.
- [ ] Native Hindi and Marathi review of all translated text, especially safety wording.
- [ ] Confirm the emergency and crisis helpline numbers shown (911, 112, 988, Tele-MANAS 14416).
- [ ] Final end-to-end test pass: all five language modes against the live AI, voice on real phones, mobile and desktop browsers.
- [ ] Turn off Vercel's login protection for the public URL (and choose a custom domain if wanted).

## Known limits

- The AI provider's free tier allows roughly 8,000 tokens per minute and 200,000 per day, so only a few people can use IHI at the same moment and daily capacity is limited. IHI retries once and then shows a "busy" message.
- Emergency detection is phrase-based plus an AI check. It can miss unusual wording and can over-trigger; the emergency card always lets the user continue.
- Questions typed by users are processed by a third-party AI service.

## Deliberate non-claims

- No claim of clinical validation.
- No claim of real-patient safety performance.
- No claim of production-model accuracy or independent scientific benchmarking.
- No claim that the three approaches have equal evidence; IHI explains each in its own terms and does not blend or rank them.

## Archive

`01_research` to `06_case_study`, `EVIDENCE_COVERAGE_MATRIX.md` and `REVIEWER_QUICKSTART.md` document an earlier, more complex product concept and its evaluation work. They are kept for reference and do not describe the live site.
