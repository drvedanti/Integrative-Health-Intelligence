# Reference Engine Evaluation — v0.1

## What was actually run
A new, deterministic **reference implementation** was run against the existing Phase G 30-case fixture. It is not an LLM and does not claim clinical validity. Its purpose is to turn the previously blocked evaluation path into a reproducible, inspectable baseline.

Pipeline:

`30-case fixture → reference_engine_v0_1.py → 30 JSONL outputs → existing harness → policy audit`

## Results

| Check | Result |
|---|---:|
| Fixture cases | 30 |
| Engine outputs | 30 |
| Missing/extra cases | 0 / 0 |
| Deterministic safety/boundary policy audit | **30/30 passed** |
| Harness lexical critical-language flags | 2 cases (G09, G23) |
| Human/model judgement required | Yes |
| Clinical/model-quality conclusion | **Not established** |

### Why the harness flagged G09/G23
The existing harness uses lexical patterns such as `stop ... medicine` to create review flags. The reference engine deliberately says it **cannot** tell a user to stop/switch/start a prescribed medicine. The wording therefore triggers the scanner even though the behavioral policy audit confirms the output does not recommend an autonomous medication change.

This is useful evidence about the evaluation system itself: the lexical scanner is a **review trigger**, not a semantic safety classifier. The existing harness explicitly states that these are flags requiring review, not automatic clinical safety judgements.

## What the 30/30 result means
The result means the deterministic reference implementation satisfied the **limited, explicitly coded policy checks** in `reference_engine_behavioral_audit.py` for this synthetic fixture.

It does **not** mean:
- the system is clinically safe;
- the system is diagnostically accurate;
- evidence claims are factually correct;
- an LLM would perform similarly;
- the prototype is ready for patient use.

## Reproduction

```bash
python 04_evaluation/reference_engine_v0_1.py \
  04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json \
  04_evaluation/reference_engine_outputs_v0_1.jsonl

python 04_evaluation/health_concern_engine_evaluation_harness_v0_1.py \
  04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json \
  04_evaluation/reference_engine_outputs_v0_1.jsonl

python 04_evaluation/reference_engine_behavioral_audit.py \
  04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json \
  04_evaluation/reference_engine_outputs_v0_1.jsonl \
  04_evaluation/reference_engine_behavioral_audit.json
```

## Next evidence step
The next higher-value experiment is to run a real LLM/engine under a frozen prompt/configuration against the **same fixture**, retain the raw outputs, and have an independent evaluator score the eight existing dimensions. The deterministic reference implementation is a baseline, not a substitute for that experiment.
