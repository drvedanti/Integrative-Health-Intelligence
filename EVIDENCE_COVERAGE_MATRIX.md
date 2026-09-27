# Evidence Coverage Matrix

| Evidence layer | Concrete artifact | Verification | What it proves | What it does NOT prove |
|---|---|---|---|---|
| Research source trail | `01_research/source_register.md` + `SOURCE_LINK_AUDIT.md` | Source/link audit | Research inputs are inspectable | Every synthesis claim is scientifically correct |
| Research → product decisions | `01_research/decision_trace.md` | Decision-to-artifact mapping | Product choices have explicit reasoning | Causal impact |
| Product specification | `02_product/product_artifacts_index.md` | Artifact inventory | Intended product surfaces are inspectable | Adoption/usability |
| Working prototype | `03_prototype/working_prototype/index.html` | Static + interaction audits | Prototype behavior is locally inspectable | Clinical correctness/usability |
| Public prototype | `03_prototype/public_website/index.html` + root `index.html` | Static inspection | Recruiter can inspect the designed journey | Production deployment |
| Frozen evaluation | `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` | Coverage/schema audit | Test expectations and safety boundaries are explicit | Model performance |
| 30-case LLM run | `04_evaluation/llm_run_v1/` | 30/30 harness coverage + provisional judge | Real model outputs and a reproducible same-family evaluation artifact exist | Independent benchmark/clinical validity |
| Retrieval/provenance condition | `04_evaluation/llm_run_v2/` | 30/30 harness coverage + provenance audit | A concrete evidence-layer iteration was exercised | Controlled RAG efficacy |
| Provenance contract | `04_evaluation/provenance_contract_v1/` | 5/5 targeted contract run | Claim→source-fit behavior is explicitly tested | Semantic/clinical validity |
| Targeted depth suite | `04_evaluation/targeted_failure_variants_v1/` | 26/26 structural validation; deterministic baseline | Depth requirements are executable and reference limitations are measurable | Current-model depth performance until replayed |
| Safety/limitations | `05_safety/safety_and_limitations.md` | Cross-linked to fixture | Safety boundaries are explicit | Prospective safety performance |
| Claim → evidence | `06_case_study/claim_to_evidence_index.md` + audit | 9/9 referenced case IDs and paths | Claims have inspectable anchors | Truth beyond cited evidence |
| Package integrity | `EVIDENCE_MANIFEST_SHA256.json` + `REPRODUCIBILITY_AUDIT.md` | Hash/structural checks | Release bundle is internally consistent | External publication |

## Current gate

**Evidence package:** ready for public publication.

**Independent clinical/model validation:** not claimed.

**Next evidence jump:** a callable current-model replay of the 26-case targeted suite. This is currently blocked; no synthetic outputs are substituted.

**Operational next step:** publish this existing package to `drvedanti/Integrative-Health-Intelligence` and enable GitHub Pages. See `PUBLICATION_HANDOFF.md`.
