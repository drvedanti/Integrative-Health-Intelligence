# Targeted Failure-Variant Execution Status v1

## Result

**Suite validation: PASS. Execution harness: READY. Current-model replay: BLOCKED by unavailable callable model endpoint.**

The 26-case IHI-TFV-01 suite remains frozen. The original G01–G30 benchmark remains unchanged.

### Verified
- 26 targeted cases
- 6 multilingual
- 6 provenance
- 4 evidence-conflict
- 4 longitudinal
- 6 safety-boundary
- frozen benchmark SHA-256 unchanged: `047f679b163383b0d66ac7d8668d8634b55632d5a0400c5294ceb8da1c57bd4c`
- execution manifest generated
- raw output JSONL target generated

### Important boundary
This status is not a model-performance result. No output has been invented or substituted with deterministic reference-engine output. A real model run must populate `raw_model_outputs.jsonl` before behavioral scoring can be reported.


## v24.1 — evaluator readiness

Added `targeted_failure_variants_v1/EVALUATE_TARGETED_SUITE.py`, which checks output coverage, flags potentially critical language for review, and generates a case-level reviewer worksheet. Lexical flags are explicitly non-judgmental; they cannot be interpreted as clinical safety failures without review.
