# Claim-Link Audit

**Generated:** 2026-09-15

## Result

- Claims indexed: **6**
- Evaluation case IDs referenced: **9**
- Referenced case IDs found in fixture: **9/9**
- Referenced artifact paths found: **9/9**
- Missing fixture IDs: **0**
- Missing referenced paths: **0**

## Claim Coverage

| # | Claim | Evaluation evidence | Primary inspectable artifact | Artifact path check |
|---:|---|---|---|---|
| 1 | I designed for uncertainty rather than false certainty | G01; G05; G18; G20 | `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` | ✓ |
| 2 | I treated safety as an interruption, not a disclaimer | G08; G09 | `05_safety/safety_and_limitations.md` + evaluation fixture | ✓ |
| 3 | I treated multilingual meaning as a product requirement | G02 | `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` | ✓ |
| 4 | I avoided false equivalence between healthcare frameworks | G06; G28 | `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json` + `05_safety/safety_and_limitations.md` | ✓ |
| 5 | I built an inspectable evaluation mechanism | — | `04_evaluation/health_concern_engine_evaluation_harness_v0_1.py` | ✓ |
| 6 | I built a usable product artifact rather than only slides | — | `03_prototype/working_prototype/index.html` + `03_prototype/PROTOTYPE_INTERACTION_AUDIT.md` | ✓ |

## Interpretation

PASS means the portfolio claim can be traced to a concrete case ID and/or a concrete artifact path that exists in this package. This audit does **not** establish clinical validity, model accuracy, or safety performance.

## Reviewer Use

Start with `REVIEWER_QUICKSTART.md`, then use this audit to spot-check the claim → evidence chain.
