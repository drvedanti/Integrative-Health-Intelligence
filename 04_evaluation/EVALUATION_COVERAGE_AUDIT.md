# Evaluation Coverage Audit — Integrative Health Intelligence

**Audit type:** deterministic fixture-coverage and schema-consistency audit  
**Date:** 2026-09-14  
**Scope:** `phase_g_evaluation_fixture_v0_6_FINAL_checked.json` only

## Result

**PASS — 30/30 cases are uniquely identified and structurally populated.**

This artifact audits the *test set*, not model/AI performance. No engine outputs are assumed or manufactured.

## Coverage snapshot

| Dimension | Result |
|---|---:|
| Cases | 30 |
| Unique case IDs | 30 |
| Duplicate IDs | 0 |
| Test areas | 30 unique areas |
| Safety classes | 22 green / 5 yellow / 3 red |
| English-only cases | 28 |
| Mixed Marathi/Hinglish | 1 |
| Marathi | 1 |
| Adversarial cases | 9 |
| Missing required case fields | 0 |

## Test-area coverage

The fixture deliberately uses one case per test area, covering:

- story extraction
- multilingual meaning preservation
- contributor mapping
- evidence tiering
- conflicting evidence
- framework comparison
- missing information
- safety interruption
- medication boundary
- causation restraint
- decision brief generation
- diagnosis requests
- emotional context
- mental-health safety
- provenance
- longitudinal pattern handling
- negation traps
- evidence insufficiency
- traditional-claim boundaries
- contradictory timelines
- adversarial multilingual ambiguity
- adversarial root-cause pressure
- adversarial medication conflict
- adversarial buried red flags
- adversarial traditional claims presented as fact
- adversarial doctor override
- adversarial correlation/causation pressure
- adversarial equal-plausibility pressure
- adversarial multiple-contributor pressure
- adversarial negation/timeline pressure

## Safety coverage

The fixture contains **3 red/emergency cases**, **5 yellow/urgent-review cases**, and **22 green/routine cases**. This matters because a safety-aware system should not be evaluated only on ordinary benign narratives.

The fixture explicitly requires escalation for buried acute red flags and forbids ordinary contributor exploration from displacing urgent routing. It also tests medication-switching boundaries and unsupported traditional-treatment claims.

## Structural consistency checks

The audit checks that every case has the fields required by the evaluation design:

`case_id`, `test_area`, `input_text`, `language`, `concern_context`, `expected_observations`, `expected_non_observations`, `acceptable_contributors`, `disallowed_conclusions`, `required_evidence_behavior`, `expected_evidence_tier`, `required_uncertainty`, `safety_class`, `expected_action`, `expected_decision_brief_elements`, `critical_failure_conditions`.

All 30 cases contain these fields.

## Version-label note

The filename contains `v0_6_FINAL_checked`, while the JSON's internal `version` field is `0.5`. This is retained as-is rather than silently changing a completed evaluation artifact. The mismatch is recorded here so a reviewer can see the exact artifact identity and avoid assuming the internal version is `0.6`.

## What this does NOT establish

- No model accuracy score
- No clinical validation
- No safety certification
- No claim that the system performs well on real patients
- No statistical generalization beyond this synthetic fixture

Those require actual engine outputs, blinded/independent review, and appropriate validation design.
