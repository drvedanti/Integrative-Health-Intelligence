# Research Source Link Audit

**Audit date:** 14 September 2026

This audit checks that the five public research sources named in `source_register.md` resolve to authoritative publisher pages and records one migration issue found during review.

| ID | Publisher | Status | Verification | Note |
|---|---|---|---|---|
| R01 | The Lancet Diabetes & Endocrinology / DOI | PASS | DOI resolves to ICMR-INDIAB-17 article | Primary study; cross-sectional, so causal claims are not inferred. |
| R02 | WHO India | PASS | WHO India diabetes page is live | Current page states the cited India diabetes/pre-diabetes estimates. |
| R03 | WHO Data | UPDATED | Legacy GHO India page is deprecated; current country page is `https://data.who.int/countries/356` | The portfolio source register was updated to the current WHO Data endpoint. |
| R04 | WHO Global Traditional Medicine Centre | PASS | WHO global strategies page is live | Supports evidence-based, culturally respectful TCIM framing. |
| R05 | WHO Global Traditional Medicine Centre / publication | PASS | Direct 2025–2034 strategy publication page is live | Formal publication page with ISBN and publication metadata. |

## What changed

The original R03 URL was not treated as a silent failure. WHO's legacy country page explicitly says it is deprecated and directs users to the new WHO Data portal. The source register now points directly to the current India country page instead.

## Evidence discipline

A live source URL only establishes that the source is inspectable. It does not turn population statistics into individual clinical claims, and it does not validate the prototype clinically.
