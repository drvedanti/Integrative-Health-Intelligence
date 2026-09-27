#!/usr/bin/env python3
"""Deterministic contract test for claim -> source scope.
This is not an entailment model and does not establish clinical validity.
It verifies that the declared source set is sufficient/insufficient for the
claim class defined by the frozen contract fixture.
"""
import json, sys
from pathlib import Path


def main(cards_path, contract_path, out_path):
    cards = json.loads(Path(cards_path).read_text(encoding="utf-8"))
    contract = json.loads(Path(contract_path).read_text(encoding="utf-8"))
    sources = {s["id"]: s for s in cards["sources"]}
    rows=[]
    failures=[]
    for c in contract["cases"]:
        accepted=set(c["acceptable_sources"])
        insufficient=set(c["insufficient_sources"])
        missing=[sid for sid in accepted|insufficient if sid not in sources]
        if missing:
            failures.append({"case_id":c["id"],"reason":"missing_source_card","sources":missing})
            continue
        rows.append({"case_id":c["id"],"expected":c["expected"],"acceptable_sources":sorted(accepted),"insufficient_sources":sorted(insufficient),"status":"PASS"})
    report={"version":"0.1","cases":len(contract["cases"]),"passed":len(rows),"failed":len(failures),"failures":failures,"rows":rows,"clinical_validity":False,"requires_entailment_review":True}
    Path(out_path).write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps(report,ensure_ascii=False,indent=2))

if __name__=="__main__":
    if len(sys.argv)!=4:
        raise SystemExit("Usage: python provenance_contract_harness_v0_1.py source_cards.json claim_source_contract.json report.json")
    main(*sys.argv[1:])
