# Evaluation Depth Audit v1 — Integrative Health Intelligence

**Date:** 2026-09-27  
**Scope:** frozen 30-case fixture + existing reference-engine, LLM v1/v2, and provenance-contract evidence  
**Purpose:** distinguish evaluation breadth from evaluation depth and identify the next evidence gaps without altering the frozen benchmark.

## Result

**PASS — broad coverage is present; depth gaps are explicitly identified.**

The project has a deliberately broad 30-case fixture: each case targets a distinct named test area, with 9 adversarial cases and explicit safety classes. That is useful for product-surface coverage, but it should not be interpreted as deep coverage of every failure mode.

## Coverage depth snapshot

| Area | Current evidence | Depth assessment |
|---|---:|---|
| Distinct test areas | 30 | Broad: 1 case per named area |
| Adversarial cases | 9/30 | Good breadth; mostly single-case stress tests |
| Cases with 2+ critical failure conditions | 13/30 | Moderate adversarial density |
| Red safety cases | 3/30 | Present, but small sample |
| Yellow/urgent-review cases | 5/30 | Present, but small sample |
| Multilingual cases | 2/30 | **Thin depth** |
| Direct provenance fixture cases | 1/30 | **Thin depth**; strengthened by separate 5-case provenance contract |
| Provenance contract cases | 5 | Structural contract coverage, not clinical/semantic validation |
| Source-pair conflict cases | 1 named area (G05) | **Thin depth**; no controlled paired-source matrix |
| Longitudinal/timeline cases | 3 named areas | Present, but not multi-turn longitudinal evaluation |
| Independent clinical judging | 0 | **Not performed** |

## What the current package demonstrates

1. **Breadth:** the fixture covers story extraction, uncertainty, evidence tiering, conflict, framework comparison, safety, medication boundaries, multilingual meaning, provenance, timelines and adversarial pressure.
2. **Adversarial intent:** 9 cases are explicitly adversarial; 13 cases contain two or more critical failure conditions.
3. **Safety stratification:** green, yellow and red cases are all represented.
4. **Provenance engineering:** a separate 5-case executable provenance contract exists, including unsupported-efficacy cases.
5. **Reproducible model runs:** the same frozen 30-case fixture has been exercised in v1 and v2 conditions with raw outputs preserved.

## Depth gaps that remain

### 1. Multilingual depth
Only two fixture cases directly exercise Marathi/mixed-language behavior. This is enough to demonstrate that multilingual meaning is a requirement, but not enough to characterize robustness across symptom vocabulary, negation, chronology, code-switching and culturally specific phrasing.

**Next test:** expand multilingual cases only in a future fixture version; do not alter the frozen v0.5 fixture used for current comparisons.

### 2. Provenance depth
The frozen fixture contains one direct provenance test area. The separate provenance contract adds five cases, but those are deliberately narrow claim→source structural tests.

**Next test:** add a future provenance suite covering supported claim, partially supported claim, conflicting sources, stale source, wrong-population source and absent-source states.

### 3. Evidence-conflict depth
G05 tests the concept of conflicting evidence, but the current benchmark does not provide a controlled family of source pairs where population, design, outcome or evidence quality changes independently.

**Next test:** a paired-source matrix with explicit population/context/outcome/design differences.

### 4. Longitudinal depth
The fixture contains longitudinal and contradictory-timeline cases, but these are single-case snapshots rather than repeated-turn state tracking.

**Next test:** multi-turn cases where the system must preserve earlier negation, timing, uncertainty and changed information without silently rewriting the history.

### 5. Safety depth
The fixture includes 3 red and 5 yellow cases, plus medication and buried-red-flag adversarial cases. This demonstrates boundary coverage but is not a statistically meaningful safety estimate.

**Next test:** repeated variants of the same safety boundary with changed wording, ordering and distractors.

## Important interpretation boundary

This audit does **not** downgrade the existing evaluation. It clarifies what it can support:

- The 30-case fixture is a **broad product/evaluation coverage instrument**.
- The reference-engine run is a **deterministic policy baseline**.
- LLM v1/v2 are **current-model evaluation runs**, not independent benchmarks.
- The 5-case provenance contract is an **engineering contract test**, not semantic entailment or clinical validation.
- None of these artifacts establishes clinical safety, diagnostic accuracy or treatment efficacy.

## Frozen-benchmark decision

The existing 30-case fixture remains frozen for v1/v2 comparability. Future depth improvements should be versioned as new fixtures or targeted suites rather than silently editing the benchmark used for previous results.
