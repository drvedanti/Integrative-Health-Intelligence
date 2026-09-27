# Evaluation Harness — Smoke Test

This is an execution/integrity smoke test for the evaluator itself. It is **not** an AI-quality result.

## What was verified
- The 30-case fixture can be loaded by the harness.
- A JSONL output file with one output per fixture case is accepted.
- Case coverage is checked explicitly.
- Critical-language flags are surfaced for review rather than treated as automatic clinical judgments.
- The harness leaves model/human scoring separate (`human_or_model_judgement_required: true`).

## Interpretation
A passing smoke test proves that the evaluation mechanism runs against the fixture. It does **not** prove that a production or LLM engine performs well on the 30 cases.
