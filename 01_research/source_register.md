# Integrative Health Intelligence — Research Source Register

**Purpose:** make the research layer independently inspectable by recording the primary/public sources that materially informed the product framing and evidence-handling rules.

**Research checkpoint:** 14 September 2026

## Source register

| ID | Source | What it established for this project | Product implication |
|---|---|---|---|
| R01 | ICMR-INDIAB-17, *The Lancet Diabetes & Endocrinology* (2023) | National cross-sectional evidence on metabolic NCD burden across 113,043 participants in 31 states/UTs; diabetes 11.4%, prediabetes 15.3%, hypertension 35.5%, generalised obesity 28.6%, abdominal obesity 39.5%, dyslipidaemia 81.2%. | Supports the broader context that recurring/chronic health concerns are common and heterogeneous; does **not** justify disease diagnosis or causal inference from a user's story. |
| R02 | WHO India — Diabetes | WHO estimates ~77M adults with type 2 diabetes and ~25M with prediabetes in India, with >50% unaware of their status. | Reinforces the need for understandable health information and clinician-oriented next steps; does not justify individualized risk prediction in the prototype. |
| R03 | WHO — India country health data / NCD profile | WHO reports NCDs accounted for 49.1% of deaths in India in 2021. | Supports the importance of chronic/NCD-related health reasoning at population level; does not imply that a user's symptom is an NCD. |
| R04 | WHO Global Traditional Medicine Strategy 2025–2034 | WHO's strategy explicitly emphasizes strengthening evidence, safety/regulation, and appropriate integration of traditional, complementary and integrative medicine. | Supports separating traditional-framework perspectives from biomedical evidence rather than presenting them as equivalent evidence or established causation. |
| R05 | WHO Global Traditional Medicine Centre / strategy materials | The 2025–2034 strategy was formally adopted in 2025 and is framed around safe, effective, evidence-informed and appropriately integrated TCIM. | Supports the product's evidence-labeling and safety boundary around Ayurveda/Homeopathy/other traditional frameworks. |

## Source links

- R01 — https://doi.org/10.1016/S2213-8587(23)00119-5
- R02 — https://www.who.int/india/health-topics/diabetes
- R03 — https://data.who.int/countries/356
  - Note: the legacy WHO GHO country URL is now marked deprecated and redirects reviewers toward the new WHO Data country portal.
- R04 — https://www.who.int/teams/integrated-health-services/traditional-complementary-and-integrative-medicine/global-strategies
- R05 — https://www.who.int/teams/who-global-traditional-medicine-centre/traditional-medicine-strategy-2025-2034

## Interpretation rules

1. These sources establish **population-level context and evidence-policy context**, not individual diagnoses.
2. Prevalence is not causation and population estimates are not personal risk estimates.
3. Traditional-framework inclusion is a comparison/meaning-preservation requirement, not an endorsement of equal biomedical evidence.
4. Product outputs must distinguish user observations, hypotheses/contributors, sourced claims, uncertainty, and safety actions.
5. The research layer is deliberately separated from the evaluation fixture: the fixture tests whether the product behaves according to these evidence and safety principles; it does not prove the underlying clinical claims.

## What this register does not claim

This is not a systematic review, clinical guideline, or clinical validation study. It is a traceability layer for the portfolio's product reasoning.
