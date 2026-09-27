# LLM Evaluation v1 → v2 Comparison

## What changed

The frozen 30-case fixture did not change. v2 added an explicit, inspectable retrieval/provenance layer with four source cards and instructed the model to either:

1. expose the source when making a substantive evidence claim, or
2. explicitly withhold the claim when the available source/context is insufficient.

## Observed product-level change

The most important improvement is not a higher aggregate score. It is a change in **grounding behavior**: v2 makes the evidence boundary visible instead of relying on generic phrases such as “use a traceable source.”

The v2 provenance audit identifies 11 cases with explicit source/provenance references and additional cases where the model deliberately withholds unsupported claims and states that claim-specific retrieval is required.

## What we can claim

- The retrieval layer is a concrete product intervention.
- It is exercised against the same frozen 30-case fixture.
- It produces inspectable provenance behavior and raw outputs.
- The harness still reports 30/30 coverage and the same known G09 lexical false positive.

## What we cannot claim

- We cannot claim that v2 is clinically safer or more accurate from this run alone.
- We cannot claim a statistically significant performance improvement.
- The source set is small and hand-curated.
- The model and provisional evaluator are not independent.
