# Integrative Health Intelligence (IHI)

IHI helps people understand a health concern through three different schools of medicine — **Allopathy (modern medicine), Ayurveda and Homeopathy** — one at a time, in plain language. It is an educational tool, not a medical service.

> People don't need more loud opinions. They need clear, unbiased information so they can decide for themselves. — Dr. Vedanti Shah, creator of IHI

## How it works

1. **Tell** — describe what you are experiencing, by typing or speaking.
2. **Choose** — pick one approach: Modern Medicine, Ayurveda or Homeopathy. IHI never blends them into one answer or ranks one above another.
3. **Answer** — a few AI-generated questions tailored to your concern and the chosen approach.
4. **Understand** — what may be happening, why, and a deeper explanation, in that approach's own terms.
5. **Ask deeper** — follow-up questions that keep the earlier context.
6. **What next** — practical things to try, what to avoid, and safety guidance.

Everything is available in **English, Hindi, Marathi, Hinglish (Hindi + English) and Minglish (Marathi + English)**, including voice input where the browser supports it.

## Safety design

- **Safety router** (`lib/safety.js`): crisis and emergency phrases in all five language modes are caught before any AI answer. Self-harm shows support lines and stops. Possible emergencies show an emergency card (911 US, 112 India, local services) with an option to continue.
- **Scope guard:** requests that are not about understanding a health concern are declined.
- **Not medical advice:** a footer on every page, and the emergency and crisis cards, say so. Users are asked not to enter personal identifiers.
- **API hardening** (`api/ihi.js`): input limits, same-site requests only, per-visitor rate limit, upstream timeout, reply validation, and a retry when the AI provider is rate limited.

The red-flag list and emergency wording are prototype-grade and need clinician review before wider use.

## Tech

| Piece | What |
|---|---|
| Site | Static `index.html` and `ai-flow.js` (no build step); translations live in `ai-flow.js` |
| API | `api/ihi.js`, a Vercel serverless function calling Groq (`openai/gpt-oss-120b`) |
| Safety | `lib/safety.js`, deterministic and covered by tests |
| Hosting | Vercel, deployed from `main`; branches get preview deployments |
| Tests | Node's built-in test runner in `tests/` |

## Run and test

```bash
node --test "tests/*.test.js"        # unit tests (no network, no API key)
```

To run the site with the API locally, use the Vercel CLI (`vercel dev`) with an environment variable named `ihi` holding a Groq API key. On Vercel, set `ihi` for Production and Preview.

## Deploy

Push a branch to open a preview deployment, review it, then merge the pull request into `main` to update production. Keep `ihi` set in Vercel's environment variables. A Vercel Firewall rate-limit rule on `/api/ihi` (30 requests per 20 minutes per IP) is recommended in addition to the limit in code.

## Repository layout

| Path | Contents |
|---|---|
| `index.html`, `ai-flow.js`, `images/`, `favicon.svg` | The site |
| `api/`, `lib/`, `vercel.json` | Server code and function settings |
| `tests/` | Safety, API and translation tests |
| `01_research` … `06_case_study`, root evaluation documents | **Earlier design exploration** (see below) |

## Earlier design exploration

Before the current one-approach-at-a-time product, an earlier and more complex concept was researched and prototyped: a Contributor Map, Evidence Lens, Safety Router, framework comparison and Decision Brief, with a 30-case evaluation suite and LLM evaluation runs. It was set aside as too complex for the first release. The folders `01_research` to `06_case_study`, `EVIDENCE_COVERAGE_MATRIX.md` and `REVIEWER_QUICKSTART.md` document that work and are kept as an archive. They describe that earlier concept, not the live site.

## Status and limits

See [PROJECT_STATUS.md](PROJECT_STATUS.md). In short: this is a prototype for education, with no claim of clinical validation. The AI provider's free tier limits how many people can use it at the same time.
