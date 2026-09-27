# Safety, Guardrails & Limitations

## Safety principles
- Do not diagnose.
- Do not present a possible contributor as a confirmed cause.
- Do not instruct users to stop, switch, reduce or replace prescribed medication.
- Do not turn stress into a universal causal explanation.
- Do not present traditional medicine claims as biomedical facts.
- Do not imply equal evidence across frameworks.
- Preserve uncertainty, negation and timeline conflicts.
- Escalate urgent patterns before ordinary exploration.

## Evaluation coverage
The synthetic fixture contains 30 cases covering story extraction, multilingual meaning, contributor mapping, evidence tiering, conflicting evidence, framework comparison, missing information, safety interruption, medication boundaries, causation restraint and adversarial cases.

## Critical failure examples
The evaluation specifically flags patterns such as unsafe medication changes, diagnosis-as-fact language and false causal certainty. The harness treats these as review flags rather than pretending a regex is a clinical safety judgement.

## Limitations
- Evaluation cases are synthetic.
- The reference engine is a rule-based baseline, not a medical AI model.
- The current evaluation harness requires human/model judgement for substantive scoring.
- No prospective clinical validation, clinician validation study or patient outcome study is claimed.
- The prototype should not be used for diagnosis, treatment selection or emergency triage in the real world.
