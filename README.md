# Integrative Health Intelligence

**An evidence-transparent Health Reasoning layer for recurring and confusing health concerns.**

> I designed and prototyped a health-reasoning experience that helps people reconcile conflicting explanations without turning uncertainty into diagnosis.

## Why this project

People can find an enormous amount of health information, but the hard part is often reasoning through it: structuring a messy story, separating observations from interpretations, judging evidence quality, comparing different frameworks, noticing missing information, and deciding what to discuss with a clinician.

The product thesis was simple:

**Make confusing health information easier to reason about—without pretending to replace the clinician.**

## What I built

**Talk → Structure → Explore → Evidence → Compare → Check uncertainty → Safety → Decide → Follow up**

Key product patterns:

- **Contributor Map** — possible contributors, not diagnoses or “root causes”.
- **Evidence Lens** — provenance and evidence tiering made visible.
- **Framework Comparison** — modern medicine and traditional frameworks kept distinct; no false equivalence.
- **Missing Information** — surfaces what could materially change the reasoning.
- **Safety Router** — urgent signals interrupt exploration rather than appearing as an afterthought.
- **Decision Brief** — converts exploration into practical questions for a clinician.

## Evidence that this is more than a concept

This repository/package contains inspectable artifacts across the full product chain:

| Claim | Inspectable proof |
|---|---|
| The problem was researched | `01_research/research_evidence_trail.md` + `01_research/source_register.md` |
| Product decisions were reasoned | `02_product/product_artifacts_index.md` + `01_research/decision_trace.md` |
| The product was prototyped | `03_prototype/public_website/index.html` |
| AI behavior was specified | `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` + `04_evaluation/EVALUATION_COVERAGE_AUDIT.md` |
| Evaluation was made reproducible | `04_evaluation/health_concern_engine_evaluation_harness_v0_1.py` + `04_evaluation/REPRODUCIBILITY_AUDIT.md` |
| A real LLM run was executed | `04_evaluation/llm_run_v1/` + `04_evaluation/LLM_EVALUATION_REPORT_v1.md` |
| Safety boundaries were designed | `05_safety/safety_and_limitations.md` |
| Claims map to evidence | `06_case_study/claim_to_evidence_index.md` |
| The story is recruiter-readable | `06_case_study/recruiter_case_study.md` |

## Evaluation approach

The evaluation fixture contains **30 synthetic gold cases** spanning ordinary, ambiguous, multilingual, safety-critical, and adversarial situations. The lightweight harness checks coverage and selected critical-language patterns across eight evaluation dimensions.

The fixture and harness are **not clinical validation**. The v1 LLM run provides a real model-output artifact, but its scoring is provisional because the same model family generated and judged the outputs. Independent review and a second model/retrieval-backed run are still needed before making stronger performance claims.

## Portfolio case study

Open `06_case_study/recruiter_case_study.md` for the concise case-study narrative, or open the self-contained prototype in `03_prototype/public_website/index.html`.

## Scope & safety

This is a **portfolio/product prototype, not a clinical tool or medical advice**. It is intentionally designed around uncertainty, evidence provenance, conservative language, and escalation of safety-critical situations.

### Latest evaluation evidence

The project now contains two conditions on the same frozen 30-case fixture: v1 model-only outputs and v2 retrieval/provenance-assisted outputs. The v2 run is preserved with raw outputs, harness results, provenance coverage audit, and an explicit comparison.

## Latest evidence refresh — 26 Sep 2026
The retrieval/provenance layer was refreshed after review of current WHO publications from 16–17 Sep 2026. See `04_evaluation/RETRIEVAL_LAYER_v2.md` and `04_evaluation/FAILURE_ANALYSIS_v1.md`. The refresh changes the evidence-policy source set; it does not constitute clinical validation.

## Latest evidence-layer implementation — 26 Sep 2026
The current retrieval layer now includes a deterministic provenance contract under `04_evaluation/provenance_contract_v1/`. It tests whether the refreshed WHO framework sources are actually sufficient for each claim class. The contract has 5 synthetic cases and currently passes 5/5 structural checks. Specific intervention-efficacy claims are explicitly marked as unsupported by the framework pack and routed to claim-specific clinical retrieval. This is not clinical validation or semantic entailment.

### Prototype evidence
The prototype now exposes a real provenance contract case directly in the Evidence Lens and working product flow: PC04 → R01 → insufficient source fit → withhold efficacy claim → claim-specific clinical retrieval. The root portfolio page, public website, and working prototype all use the same contract-backed example. The associated five-case targeted model evaluation reports 5/5 passed; this is not clinical validation or an independent benchmark.

### Evaluation depth
The evaluation package distinguishes breadth from depth. The frozen 30-case fixture remains unchanged for comparability. `04_evaluation/EVALUATION_DEPTH_AUDIT_v1.md` documents current coverage density and the next test gaps: multilingual depth, provenance-state depth, controlled evidence-conflict pairs, multi-turn longitudinal behavior, and repeated safety variants. These are future test-suite requirements, not claims of missing current functionality.

## Targeted failure-variant evaluation

The package includes a separate 26-case targeted depth suite at `04_evaluation/targeted_failure_variants_v1/`. It supplements rather than edits the frozen G01–G30 benchmark and focuses on multilingual meaning, provenance fit, evidence conflicts, longitudinal state preservation, and safety-boundary variants. The suite is frozen for execution; its raw model outputs and case-level review results should be preserved separately from the benchmark comparison.


### Targeted failure variant execution
The 26-case targeted suite can be run independently of the frozen G01–G30 benchmark. `EVALUATE_TARGETED_SUITE.py` checks output coverage and generates a case-level review worksheet. It does not turn lexical pattern matches into clinical safety judgments.


## Targeted reference-baseline depth

The 26-case targeted failure suite was executed against the deterministic reference engine. Coverage was 26/26. The run is preserved under `04_evaluation/targeted_failure_variants_v1/execution_v1/`. The reference engine produced a generic fallback for most targeted variants, exposing a concrete limitation of the deterministic oracle. This is an engineering coverage finding, not a clinical accuracy or safety score.

## Current evidence gate

The 26-case targeted suite is structurally validated and has a deterministic reference-engine baseline. A current-model replay is blocked by the absence of a callable model endpoint; no outputs are fabricated to close that gap.

The evidence package is ready for public publication. The target repository is `drvedanti/Integrative-Health-Intelligence`; see `PUBLICATION_HANDOFF.md` for the exact publication path and current connector limitation.
