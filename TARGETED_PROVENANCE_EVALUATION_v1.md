# Targeted Provenance Evaluation v1

## Result
**5/5 targeted provenance cases passed** the provenance contract checks.

Three supported claims cited sources whose declared scope matches the claim. Two adversarial treatment-efficacy cases explicitly withheld the unsupported claim and routed it to claim-specific clinical evidence.

## Limitation
This is a targeted current-model run using the same model family as the earlier LLM evaluations. The verdict is rule-based over generated answers; it is not an independent semantic evaluator, clinical validation, or controlled RAG experiment.

## QA note
The first script pass exposed a wording-sensitive evaluator bug (`does not establish` vs `do not establish`). The evaluator was corrected before the result was finalized. This is retained as a reproducibility lesson: provenance evaluation itself needs robust semantic/rule design rather than brittle string matching.

## Next implementation gate
Enforce the provenance contract at response-generation time, then rerun the five cases through the product flow.
