# Integrative Health Intelligence — Decision Trace

This file connects research/problem observations to product choices so a reviewer can inspect the reasoning chain rather than only the final UI.

| Decision | Problem/evidence signal | Product choice | Verification artifact |
|---|---|---|---|
| D01 — Frame as health reasoning, not diagnosis | Users face high-volume health information, recurring concerns and conflicting explanations; population sources show substantial chronic/NCD burden. | Position the product as a sense-making/reasoning layer. | `source_register.md`, `06_case_study/recruiter_case_study.md` |
| D02 — Structure the story before interpreting it | Free-form narratives can contain timing, negation, exposures, medications and context that are easy to lose during normalization. | Health Story + story correction/preservation. | `02_product/product_artifacts_index.md`, evaluation cases G01/G02 |
| D03 — Map contributors, not root causes | Population association and temporal co-occurrence do not establish individual causation. | Contributor Map uses cautious hypotheses tied to observations. | Evaluation fixture G03/G29; claim-to-evidence index |
| D04 — Make evidence provenance visible | Health claims vary in source quality, context and certainty. | Evidence Lens with source, tier and limitations. | Evaluation fixture G04/G05; harness dimensions |
| D05 — Separate frameworks without false equivalence | Traditional medicine is a distinct evidence/policy domain; WHO strategy emphasizes evidence, safety and appropriate integration. | Framework Comparison labels biomedical vs traditional perspectives and evidence basis. | Evaluation fixture G06/G25/G28; safety specification |
| D06 — Safety interrupts exploration | A reasoning product must not bury emergency patterns under speculative contributor exploration. | Safety Router takes priority over ordinary exploration. | Evaluation fixture G08/G09; harness critical-language scan |
| D07 — End with a decision brief | Understanding information is not the same as knowing what to discuss next. | Decision Brief converts uncertainty into clinician questions/actions. | Product artifact index; evaluation fixture decision-brief fields |

## Decision discipline

- If evidence is absent, label the gap rather than inventing a source.
- If a relationship is only plausible, label it as a hypothesis/contributor rather than a fact.
- If safety is potentially urgent, route before deeper exploration.
- If frameworks differ in evidence basis, compare them without forcing equal probabilities.
- If the product has not been clinically validated, say so explicitly.
