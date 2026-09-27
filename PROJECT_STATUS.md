# Project status

**Evidence package:** ready for public publication

**Public GitHub repository:** exists, currently empty; automated write is blocked by connector HTTP 403.

## Completed evidence layers
- Research/evidence trail packaged and source-linked
- Research → product decision trace packaged
- Product artifacts indexed
- Public interactive prototype packaged
- Working prototype packaged and statically/interaction audited
- Frozen 30-case evaluation fixture packaged
- Lightweight evaluation harness packaged and smoke-tested
- Real GPT-5.6 Luna v1 30-case run preserved
- Retrieval/provenance-assisted v2 condition preserved
- Provenance contract + targeted 5-case current-model run preserved
- Separate 26-case targeted depth suite structurally validated
- Deterministic reference-engine depth baseline executed and scored
- Safety/limitations specification packaged
- Claim → evidence index and automated claim-link audit packaged
- SHA-256 integrity manifest and reproducibility audit packaged

## Deliberate non-claims
- No claim of clinical validation
- No claim of real-patient safety performance
- No claim of production-model accuracy
- No claim of independent scientific benchmarking
- No claim that traditional frameworks are biomedical equivalents

## Latest evaluation state

The frozen 30-case LLM run received 30/30 outputs. Its provisional same-model-family judge report averaged 4.04/5 overall; grounding/evidence-tier behavior was the main weakness. A retrieval/provenance-assisted second condition and a 5-case targeted provenance run were subsequently added.

The 26-case targeted depth suite is frozen and structurally validated across multilingual, provenance, evidence-conflict, longitudinal, and safety-boundary variants. The deterministic reference engine was executed against all 26 and exposed a concrete limitation: it falls back to generic behavior on most targeted variants. The resulting 1 PASS / 1 PARTIAL / 24 FAIL rubric baseline is explicitly an engineering/reference-oracle finding, not live-model or clinical performance.

A current-model replay of the 26-case targeted suite is **blocked by the absence of a callable model endpoint**. No outputs are fabricated to close that gap.

## Publication gate

The remaining operational step is to publish the existing package to `drvedanti/Integrative-Health-Intelligence` and enable a public GitHub Pages surface. See `PUBLICATION_HANDOFF.md`.
