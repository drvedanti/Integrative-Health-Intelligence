# Provenance Contract v1

## Purpose
Turn the failure-analysis requirement into an inspectable test: a source is not considered valid merely because it is authoritative or recent; it must have the scope needed for the claim.

## What changed
The previous retrieval layer established a current framework-source pack. This layer adds a machine-readable contract separating:
- claims that the framework pack can support;
- claims for which the framework pack is explicitly insufficient;
- cases that therefore require claim-specific clinical evidence.

## Current-source basis
The source cards were refreshed on 26 September 2026 using WHO publications dated 16–17 September 2026. WHO's new agenda explicitly frames evidence gaps, safety, policy/health-system needs and responsible AI governance. It does not establish efficacy for individual interventions.

## Contract behavior
1. Identify the claim class before retrieval.
2. Check whether the retrieved source has matching scope.
3. Reject framework-source substitution for treatment-specific efficacy claims.
4. Route unsupported claims to claim-specific retrieval or evidence-insufficiency output.
5. Preserve the source URL, publication date, scope and limitation for reviewer inspection.

## Result
The deterministic contract harness verifies source-card completeness and expected support/insufficiency relationships for 5 synthetic provenance cases. It does **not** perform semantic entailment and does **not** establish clinical accuracy or safety.

## Next evaluation gate
The next model run should use these contract cases as a targeted provenance suite. Each model answer should be judged for exact claim-source fit, not citation presence alone.
