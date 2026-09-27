# Integrative Health Intelligence
## An evidence-transparent health reasoning layer for recurring and confusing health concerns

### The problem
Health information is abundant, but reasoning across it is messy. A person with a recurring concern can encounter multiple explanations, conflicting sources and advice from different healthcare frameworks. A conventional symptom checker can narrow possibilities, but it does not necessarily make the evidence, uncertainty or disagreement understandable.

### The product thesis
I designed a health-reasoning layer that helps a person understand **what may matter, what the evidence actually supports, what remains uncertain, and what to discuss next with a clinician** — without pretending to replace the clinician.

### What I built
A complete prototype journey: user story → structured health story → contributor map → evidence lens → missing information → safety routing → framework comparison → decision brief → follow-up.

### What makes the product different
**Not diagnosis. Not “find the root cause.” Not another chatbot.**
The product makes its reasoning inspectable: observations are separated from inference; contributors are tied to user-provided observations; evidence is labeled; uncertainty is visible; traditional frameworks are separated from biomedical evidence; and safety can interrupt exploration.

### How I tested the reasoning design
I created a 30-case synthetic evaluation fixture and a lightweight Python harness. The fixture includes normal, ambiguous, multilingual, safety-critical and adversarial cases. The harness checks coverage and flags critical language patterns while leaving substantive judgement to a human/LLM evaluation layer.

### What the evaluation proves — and does not prove
It proves that an explicit evaluation framework exists and that the product's intended failure modes are testable. It does **not** prove clinical accuracy or safety in real patients. That distinction is intentional.

### Portfolio evidence
- Research evidence trail
- Product artifact index
- Working prototype
- Public interactive website
- 30-case evaluation fixture
- CSV evaluation dataset
- Python evaluation harness
- Final fixture QA report
- Safety/limitations specification
- Claim → Evidence → Artifact index

### My role
Product discovery, healthcare problem framing, competitive/whitespace analysis, product specification, safety/AI behavior design, evaluation design, prototype direction and evidence packaging.

### The strongest takeaway
The interesting product question was not “Can AI answer a health question?” It was: **Can AI help people reason about health information without turning uncertainty into false certainty?**

## Evaluation evolution — what the first run changed

The first 30-case LLM run exposed a specific weakness: safety and boundary behavior were stronger than grounding/evidence-tier behavior. I therefore treated retrieval/provenance as the next product intervention rather than adding more UI.

The second condition keeps the same frozen 30-case fixture and adds an inspectable retrieval layer containing source cards, source URLs, and explicit rules for withholding unsupported claims. Raw v2 outputs and the harness result are preserved under `04_evaluation/llm_run_v2/`.

This is intentionally presented as an engineering iteration, not as clinical validation or a statistically controlled RAG experiment.
