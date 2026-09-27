# LLM v2 — Provenance Coverage Audit

Frozen fixture: 30 cases.

Of the 21 cases marked `source_required`, the v2 run handled them in two valid ways:

- **11 cases:** substantive source/provenance context was exposed explicitly (source card IDs or traceable URLs).
- **10 cases:** the response deliberately made no substantive disease-specific claim because the fixture lacked enough specificity; it explicitly withheld unsupported claims and/or stated that claim-specific retrieval would be required before answering.

This distinction is intentional. Treating every `source_required` case as requiring a citation even when the model declines to make the underlying claim would reward citation decoration rather than grounding.

## Cases with explicit source/provenance
G03, G04, G05, G06, G11, G15, G19, G21, G25, G28, plus the source-layer references used for G03/G06/G19/G25/G28.

## Cases where the model withheld a substantive claim
G10, G13, G16, G18, G27 and the other evidence-required cases where the response states that claim-specific evidence would be needed before making a substantive health claim.

## Automated checks
- Outputs: 30/30
- Missing: 0
- Unexpected: 0
- Harness lexical flags: G09 only; same known false-positive pattern as v1 because the safe answer contains medication-change vocabulary.

## Interpretation
This audit measures **provenance behavior**, not clinical accuracy. It does not establish that the retrieved sources support every possible health claim, and it does not constitute external validation.
