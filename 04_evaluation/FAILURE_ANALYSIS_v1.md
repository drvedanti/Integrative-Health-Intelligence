# Failure Analysis v1 — LLM v2 retrieval/provenance run

Date: 26 September 2026
Scope: 30-case frozen fixture; LLM v2 retrieval/provenance run

## Decision
Reject the previous failure-analysis framing that treated the existing WHO framework source pack as sufficiently current for all evidence-required cases. The source pack has been refreshed with WHO publications from 16–17 September 2026.

The core failure is not simply "missing citations." It is a **claim-to-source mismatch problem**.

## Representative weaknesses

| Case | Observed issue | Why it matters | Product change | Retest condition |
|---|---|---|---|---|
| G03 | Uses a WHO strategy source to support general evidence discipline while discussing frequent analgesic use. | The source does not substantiate the medication-related health claim. | Require claim-specific retrieval for medication/exposure claims; block framework-source substitution. | Output either cites a claim-specific source or explicitly withholds the claim. |
| G04 | Correctly refuses to invent a claim/source because the exposure and outcome are unspecified. | Good boundary behavior, but demonstrates that retrieval cannot be triggered without claim specificity. | Add a missing-claim-fields gate before retrieval. | System requests/identifies the missing exposure and outcome before making a substantive claim. |
| G05 | Gives a generic explanation of why sources can disagree, but no source pair is available. | Useful reasoning, but it does not answer a real evidence-conflict question. | Add source-pair comparison mode: population, intervention/exposure, outcome, design, effect, certainty. | When two sources are supplied, output a structured comparison with no arbitrary winner. |
| G15 | Explains provenance structure but does not expose a concrete claim-source pair because the fixture contains no underlying claim. | Provenance UX cannot be demonstrated by a generic promise. | Add a synthetic but fully traceable claim fixture for provenance UI testing. | Exact claim → source → tier → limitation chain is rendered. |
| G19/G25/G28 | Uses current WHO framework sources appropriately for the evidence boundary, but they cannot answer intervention-specific efficacy questions. | Prevents false equivalence but leaves the substantive efficacy question unresolved. | Route intervention-specific questions to claim-specific clinical retrieval; retain WHO sources only as boundary/context. | Specific intervention claim is answered only when appropriate clinical evidence is retrieved; otherwise evidence insufficiency is explicit. |

## Corrected research interpretation

The latest WHO research-priority agenda (16 September 2026) says TCIM research is underfunded relative to use and that evidence needs are not consistently aligned with policy, safety, service delivery and financing needs. WHO's 17 September 2026 update further identifies research priorities including NCDs and responsible AI governance. These sources strengthen the case for an evidence/provenance product layer; they do **not** establish efficacy for particular interventions.

## Product requirements derived from failure analysis

1. **Claim specificity gate** — identify the exact claim before retrieval.
2. **Source-to-claim entailment gate** — reject sources that only support general policy/evidence framing.
3. **Evidence-tier derivation** — infer tier from source type and methodological context, not from model wording alone.
4. **Provenance chain** — expose claim → source → population/context → limitation.
5. **Evidence insufficiency state** — explicitly say when no appropriate source is available.
6. **Conflict comparison mode** — compare sources on design/population/outcome rather than selecting a preferred answer.
7. **Current-source refresh policy** — re-check high-level framework sources when the product is evaluated, rather than treating a year-old source pack as current by default.

## What is NOT claimed

This analysis does not establish clinical safety, diagnostic accuracy, treatment efficacy, or superiority of v2 over v1. It identifies engineering/product failure modes and converts them into testable requirements.
