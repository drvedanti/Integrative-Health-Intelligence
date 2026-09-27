# Prototype Provenance UI Audit v2

## Purpose
Verify that the claim→source→limitation contract is represented consistently across the portfolio page, public website, and working prototype, and that the visible example maps to a real provenance contract case.

## End-to-end checks
- Root portfolio page exposes contract case **PC04**: PASS
- Public website exposes contract case **PC04**: PASS
- Working prototype exposes contract case **PC04**: PASS
- Visible claim matches the PC04 contract claim: PASS
- Visible source maps to source card **R01**: PASS
- Unsupported efficacy behavior matches PC04 expected state (`unsupported_by_framework_pack`): PASS
- Targeted model evaluation result exists and reports **5/5 passed**: PASS
- Claim→evidence index points to the contract, source cards, targeted result, and all three prototype surfaces: PASS
- Boundary language distinguishes engineering/model testing from clinical validation: PASS

## Evidence chain
`PC04 → R01 → insufficient source fit → withhold efficacy claim → claim-specific clinical retrieval`

The five-case targeted model run is a current-model, rule-based evaluation. It is not an independent benchmark, semantic entailment proof, clinical validation, or regulatory assessment.

## Boundary
This audit establishes internal artifact consistency and prototype representation only. It does not establish usability, clinical safety, medical accuracy, semantic entailment, or regulatory compliance.
