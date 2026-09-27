# Public publication handoff

## Repository

Target repository: `drvedanti/Integrative-Health-Intelligence`

The repository exists publicly and is currently empty. The portfolio package is ready to be published into it.

## What is ready

- Root portfolio page: `index.html`
- Reviewer entry point: `REVIEWER_QUICKSTART.md`
- Evidence coverage map: `EVIDENCE_COVERAGE_MATRIX.md`
- Research source trail and decision trace
- Product artifact index
- Public and working prototype
- Frozen 30-case benchmark + harness
- Real LLM v1/v2 artifacts
- Provenance contract + targeted 5-case model run
- 26-case targeted depth suite and deterministic reference baseline
- Safety/limitations specification
- Claim-to-evidence index and audit
- SHA-256 integrity manifest

## Current publication blocker

The connected GitHub integration can read the repository but currently returns HTTP 403 (`Resource not accessible by integration`) for repository writes. No claim of successful publication is being made.

## Manual publication path

1. Open the repository on GitHub.
2. Upload the contents of this package, preserving the directory structure.
3. Commit to `main`.
4. Enable GitHub Pages from the repository's `main` branch/root if a public portfolio URL is desired.
5. Open the resulting site and verify the root `index.html`, prototype interactions, and evidence paths.
6. Keep the ZIP package as the integrity-preserved release artifact.

## Important evaluation boundary

Do not replace the blocked current-model replay of the 26-case targeted suite with invented outputs. The suite is structurally validated and has a deterministic reference-engine baseline, but a current-model run requires a callable model endpoint.
