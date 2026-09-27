# LLM Evaluation v2 — Retrieval/Provenance Condition

## Purpose

This is the second condition of the same frozen 30-case evaluation fixture. The intervention is a small explicit retrieval/provenance layer containing inspectable source cards. The fixture itself is unchanged.

## Condition

**v1:** model response without an explicit project retrieval layer.

**v2:** model response generated with the retrieval cards in `RETRIEVAL_LAYER_v1.md` available for evidence-required cases.

## Expected product hypothesis

If grounding is a weakness, explicit source cards should improve traceability and evidence-basis labeling without materially weakening safety or uncertainty calibration.

## Scope limitation

This is not a controlled benchmark of retrieval-augmented generation. The source set is small and hand-curated, the same model family generated the outputs, and no independent clinical evaluator scored the results. The comparison is therefore portfolio evidence of an engineering/product iteration, not a scientific efficacy claim.
