# Targeted Failure Variant — Reference Baseline Depth Report v1

The deterministic reference engine produced outputs for all **26/26** targeted variants.

## Result

- Generic fallback outputs: **24/26**
- Explicitly targeted/non-generic outputs: **2/26**
- Coverage: **26/26**

## Generic-fallback cases

MV01, MV02, MV03, MV04, MV05, MV06, PV01, PV02, PV03, PV04, PV05, PV06, EC01, EC02, EC03, EC04, LG02, LG03, LG04, SB01, SB02, SB03, SB04, SB06

## Category summary

- **multilingual:** 0/6 non-generic; 6/6 generic fallback
- **provenance:** 0/6 non-generic; 6/6 generic fallback
- **evidence_conflict:** 0/4 non-generic; 4/4 generic fallback
- **longitudinal:** 1/4 non-generic; 3/4 generic fallback
- **safety_boundary:** 1/6 non-generic; 5/6 generic fallback

## Interpretation

This is an engineering baseline-depth result, not a clinical safety or accuracy score. A generic fallback means the deterministic engine did not implement a case-specific behavior for that targeted stressor. The targeted suite therefore exposes concrete areas where a richer reference implementation would be needed before using it as a stronger oracle.