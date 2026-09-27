# Reviewer Quickstart

This package is designed to be inspectable without trusting the case-study narrative alone.

## 10-minute verification path

1. **Start with the case study**
   - `06_case_study/recruiter_case_study.md`
   - Understand the problem, thesis, scope and what was actually built.

2. **Trace the problem into evidence**
   - `01_research/source_register.md`
   - `01_research/research_evidence_trail.md`
   - `01_research/decision_trace.md`
   - Follow source → finding → product decision rather than treating research claims as decoration.

3. **Inspect the product artifact map**
   - `02_product/product_artifacts_index.md`
   - Confirm which product behaviors are represented by which artifacts.

4. **Run/open the prototype**
   - `03_prototype/public_website/index.html`
   - This is the self-contained recruiter-facing interactive prototype.

5. **Inspect AI behavior before believing any AI claim**
   - `04_evaluation/phase_g_evaluation_fixture_v0_6_FINAL_checked.json`
   - It defines expected observations, non-observations, uncertainty, safety classes and critical failures.

6. **Inspect the evaluator**
   - `04_evaluation/health_concern_engine_evaluation_harness_v0_1.py`
   - The harness does not invent model outputs; it checks supplied outputs and flags patterns for review.

7. **Check reproducibility**
   - `04_evaluation/HARNESS_SMOKE_TEST.md`
   - `04_evaluation/REPRODUCIBILITY_AUDIT.md`
   - These document fixture/harness execution and packaging QA separately from clinical validation.

8. **Inspect safety boundaries**
   - `05_safety/safety_and_limitations.md`
   - Pay particular attention to diagnosis boundaries, medication changes, emergency escalation, traditional-framework labeling and uncertainty.

9. **Trace individual claims**
   - `06_case_study/claim_to_evidence_index.md`
   - Use this to jump from portfolio claim → concrete proof artifact.

10. **Verify package integrity**
   - `EVIDENCE_MANIFEST_SHA256.json`
   - Hashes cover the evidence files so a reviewer can detect accidental modification.

## What this package does NOT prove

- Clinical effectiveness
- Production-model accuracy
- Real-patient safety performance
- Regulatory readiness
- That traditional frameworks are equivalent to biomedical evidence

Those are deliberately left as future validation/governance work rather than implied by a portfolio prototype.
