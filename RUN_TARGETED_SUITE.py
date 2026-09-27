#!/usr/bin/env python3
"""Prepare/validate a model-run input and audit coverage for IHI-TFV-01.

This script deliberately does not call a model. Supply raw model outputs separately as JSONL:
{"case_id":"MV01","output":"..."}

It supports the mixed case schema (input_text, claim, or turns) and preserves case metadata.
"""
import json, sys
from pathlib import Path

SUITE = Path(__file__).with_name('failure_variant_suite_v1.json')

def main(outdir):
    outdir = Path(outdir); outdir.mkdir(parents=True, exist_ok=True)
    suite = json.loads(SUITE.read_text(encoding='utf-8'))
    manifest=[]
    for c in suite['cases']:
        payload={k:c[k] for k in ('case_id','category','variant_of','stress') if k in c}
        if 'input_text' in c: payload['input_text']=c['input_text']
        elif 'claim' in c: payload['claim']=c['claim']
        elif 'turns' in c: payload['turns']=c['turns']
        payload['expected_behavior']=c['expected_behavior']
        payload['critical_failure_conditions']=c['critical_failure_conditions']
        payload['safety_class']=c['safety_class']
        manifest.append(payload)
    (outdir/'run_manifest.json').write_text(json.dumps({'suite_id':suite['suite_id'],'case_count':len(manifest),'cases':manifest},ensure_ascii=False,indent=2),encoding='utf-8')
    (outdir/'raw_model_outputs.jsonl').write_text('',encoding='utf-8')
    (outdir/'RUN_STATUS.md').write_text('''# Targeted suite run status\n\nStatus: **READY / MODEL ENDPOINT REQUIRED**\n\nThe 26-case suite is structurally validated and the run manifest is frozen. No model outputs are fabricated.\n\nTo complete execution, provide one JSONL line per case in `raw_model_outputs.jsonl`:\n`{"case_id":"MV01","output":"..."}`\n\nThe subsequent evaluator should compare each output with `expected_behavior` and `critical_failure_conditions`, with special handling for provenance and longitudinal cases.\n''',encoding='utf-8')
    print(json.dumps({'status':'READY','case_count':len(manifest),'raw_output_file':str(outdir/'raw_model_outputs.jsonl')},indent=2))

if __name__=='__main__':
    if len(sys.argv)!=2: raise SystemExit('Usage: RUN_TARGETED_SUITE.py OUTPUT_DIR')
    main(sys.argv[1])
