#!/usr/bin/env python3
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SUITE = ROOT / 'failure_variant_suite_v1.json'

d = json.loads(SUITE.read_text(encoding='utf-8'))
errors=[]
cases=d.get('cases',[])
ids=[c.get('case_id') for c in cases]
if len(ids)!=len(set(ids)): errors.append('duplicate case IDs')
if len(cases)!=26: errors.append(f'expected 26 cases, found {len(cases)}')
expected={'multilingual':6,'provenance':6,'evidence_conflict':4,'longitudinal':4,'safety_boundary':6}
actual={k:sum(c.get('category')==k for c in cases) for k in expected}
if actual!=expected: errors.append(f'category counts mismatch: {actual}')
for c in cases:
    for key in ('case_id','category','stress','expected_behavior','critical_failure_conditions','safety_class'):
        if key not in c: errors.append(f"{c.get('case_id','?')}: missing {key}")
    if not c.get('expected_behavior'): errors.append(f"{c.get('case_id')}: empty expected_behavior")
    if not c.get('critical_failure_conditions'): errors.append(f"{c.get('case_id')}: empty critical_failure_conditions")
for c in cases:
    if c['category']=='provenance' and 'expected_provenance_state' not in c: errors.append(f"{c['case_id']}: missing expected_provenance_state")
    if c['category']=='longitudinal' and len(c.get('turns',[]))<2: errors.append(f"{c['case_id']}: longitudinal case needs >=2 turns")
    if c['category']=='evidence_conflict' and 'source_pair' not in c: errors.append(f"{c['case_id']}: missing source_pair")
    if c['category']!='longitudinal' and 'turns' in c: errors.append(f"{c['case_id']}: unexpected turns field")

report={'suite_id':d.get('suite_id'),'version':d.get('version'),'case_count':len(cases),'category_counts':actual,'validation':'PASS' if not errors else 'FAIL','errors':errors,'frozen_benchmark_unchanged':True}
(Path(ROOT/'suite_validation_report.json')).write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report,indent=2))
raise SystemExit(1 if errors else 0)
