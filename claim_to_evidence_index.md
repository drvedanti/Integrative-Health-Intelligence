# Claim → Evidence → Artifact Index

### 1. I designed for uncertainty rather than false certainty
**Evidence:** G01, G05, G18, G20 and adversarial cases in the evaluation fixture.
**Artifact:** `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json`

### 2. I treated safety as an interruption, not a disclaimer
**Evidence:** G08 requires escalation before routine exploration; G09 establishes a medication-change boundary.
**Artifact:** evaluation fixture + harness.

### 3. I treated multilingual meaning as a product requirement
**Evidence:** G02 explicitly tests mixed Marathi/Hinglish meaning preservation, timing and negation.
**Artifact:** evaluation fixture.

### 4. I avoided false equivalence between healthcare frameworks
**Evidence:** G06 and G28 require explicit evidence-basis separation and prohibit invented equal probabilities.
**Artifact:** evaluation fixture.

### 5. I built an inspectable evaluation mechanism
**Evidence:** the harness accepts a fixture plus case-level outputs, checks missing/extra cases, scans critical language and explicitly leaves clinical judgement to a human/model judging layer.
**Artifact:** `04_evaluation/health_concern_engine_evaluation_harness_v0_1.py`

### 6. I built a usable product artifact rather than only slides
**Evidence:** the working prototype and public website are included in `03_prototype/`.
**Artifact:** prototype HTML/README and packaged website.
### 7. I made evidence provenance inspectable at the claim level
**Evidence:** PC04 is an adversarial provenance case: the WHO 2026 TCIM agenda is explicitly insufficient to establish efficacy for a particular herbal product. The model targeted run passed 5/5 provenance cases, including withholding PC04/PC02-style unsupported efficacy claims.
**Artifact:** `04_evaluation/provenance_contract_v1/claim_source_contract.json` + `04_evaluation/provenance_contract_v1/source_cards.json` + `04_evaluation/provenance_contract_v1/llm_targeted_run_v1/targeted_provenance_result.json` + prototype provenance card in `index.html`, `03_prototype/public_website/index.html`, and `03_prototype/working_prototype/index.html`.

