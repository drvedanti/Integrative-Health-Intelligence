# Reproducibility & Packaging Audit — Integrative Health Intelligence

Audit purpose: verify that the portfolio package remains internally consistent and independently inspectable without recreating completed research, product, prototype, or evaluation work.

## Checks

- Evaluation fixture JSON parses: **PASS** (30 cases detected)
- Evaluation harness Python syntax-compiles: **PASS**
- Local HTML relative-link check: **PASS** — no broken relative links in 3 HTML entry points
- Cross-project contamination scan: **PASS** — 0 unrelated-project matches found
- External URL availability: **not asserted** — this audit does not substitute for a live-network check.

## HTML entry points
- `index.html` — 7 links scanned; missing local targets: 0
- `03_prototype/public_website/index.html` — 7 links scanned; missing local targets: 0
- `03_prototype/working_prototype/index.html` — 0 links scanned; missing local targets: 0

## Evidence integrity
The package also carries `EVIDENCE_MANIFEST_SHA256.json`. The manifest is regenerated after packaging changes and is intended to make evidence-file drift detectable.

## What this audit does not prove
- It does not prove clinical validity, production-model accuracy, or real-patient safety.
- It does not manufacture model outputs or AI performance metrics.
- It does not claim external URLs remain live forever.
