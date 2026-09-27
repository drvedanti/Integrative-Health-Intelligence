# Targeted suite run status

Status: **READY / MODEL ENDPOINT REQUIRED**

The 26-case suite is structurally validated and the run manifest is frozen. No model outputs are fabricated.

To complete execution, provide one JSONL line per case in `raw_model_outputs.jsonl`:
`{"case_id":"MV01","output":"..."}`

The subsequent evaluator should compare each output with `expected_behavior` and `critical_failure_conditions`, with special handling for provenance and longitudinal cases.
