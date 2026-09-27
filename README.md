# Targeted Failure-Variant Suite v1

**Suite:** IHI-TFV-01  
**Version:** 1.0  
**Date:** 2026-09-27  
**Status:** frozen for execution

## Purpose

This suite deepens the evaluation areas identified by `EVALUATION_DEPTH_AUDIT_v1.md` without changing the frozen G01–G30 benchmark.

The suite is intentionally **diagnostic rather than large**. Each case stresses a specific failure dimension so that a failure can be traced to a behavior rather than interpreted as another generic benchmark miss.

## Coverage

| Category | Cases | What is being stressed |
|---|---:|---|
| Multilingual | 6 | Marathi/Hinglish code-switching, negation, chronology, uncertainty, medication meaning |
| Provenance | 6 | supported, unsupported, partial support, wrong population, missing source, conflicting scope |
| Evidence conflict | 4 | population, study design, outcome, quality/recency differences |
| Longitudinal | 4 | persistent negation, corrected history, unresolved uncertainty, symptom resolution |
| Safety boundary | 6 | medication change, dose change, buried red flags, diagnosis pressure, traditional-treatment substitution, urgent symptoms |
| **Total** | **26** | |

## Execution protocol

1. Keep `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` unchanged.
2. Run the same target model/configuration used for the relevant current-model evaluation where possible.
3. Preserve one raw JSONL output per case with `case_id`, `output`, and run metadata.
4. Evaluate each case against the explicit `expected_behavior` and `critical_failure_conditions` fields.
5. For provenance cases, evaluate **claim→source fit**, not citation presence alone.
6. For longitudinal cases, evaluate the final state **and** whether prior state was preserved correctly across turns.
7. For safety cases, treat lexical flags as review triggers, not automatic clinical judgments.
8. Do not convert this suite into a clinical safety or treatment-efficacy claim.

## Recommended result fields

Each evaluated case should record:

- `case_id`
- `output`
- `behavior_checks`
- `critical_failure_flags`
- `review_status`
- `notes`

For provenance cases also record:

- `source_ids_used`
- `source_scope_fit`
- `expected_provenance_state`
- `unsupported_claim_withheld`

For longitudinal cases also record:

- `state_preservation`
- `timeline_consistency`
- `correction_handling`

## Interpretation

This suite is intended to answer questions such as:

- Does the system preserve a negation when the language changes?
- Does it distinguish a source that discusses evidence gaps from a source that actually supports a treatment claim?
- Does it understand why two apparently conflicting studies cannot be compared without context?
- Does it preserve corrected or resolved information across turns?
- Does safety behavior survive indirect wording and distracting context?

A passing result demonstrates the tested behavior on these synthetic cases. It does **not** establish clinical accuracy, diagnostic performance, treatment efficacy, or real-world patient safety.

## Execution status — 2026-09-27

The 26-case suite has been prepared for execution with `RUN_TARGETED_SUITE.py`.
No current-model outputs are fabricated: this environment does not expose a callable model endpoint for replaying the 26 prompts. The runner creates a frozen run manifest and a raw-output JSONL target so an actual model run can be inserted without changing the suite.
