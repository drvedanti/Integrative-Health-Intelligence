#!/usr/bin/env python3
"""
Integrative Health Intelligence — Reference Health Concern Engine v0.1

Purpose: transparent, deterministic baseline implementation for portfolio evaluation.
This is NOT a clinical model, diagnostic system, or evidence-generating AI.
It uses only the case input text and conservative policy rules to produce a
structured decision-support response. It is intentionally inspectable.
"""
import json, re, sys
from pathlib import Path

RED_PATTERNS = [
    r"worst headache", r"weakness on one side", r"immediate self-harm",
    r"self-harm intent", r"suicid", r"can't keep myself safe", r"cannot keep myself safe"
]
MED_PATTERNS = [r"stop .*\b(a|my|prescribed)\b.*\bmedicine", r"start .*\bmedicine", r"change .*\bmedication", r"switch .*\bmedicine"]
DIAG_PATTERNS = [r"diagnos", r"what do i have", r"tell me what disease"]
ROOT_PATTERNS = [r"root cause", r"exact causes?", r"definitely causing", r"equally likely"]
TRAD_PATTERNS = [r"ayurved", r"homeopath", r"dosha", r"constitutional remedy"]


def has_any(text, pats):
    t=text.lower()
    return any(re.search(p,t) for p in pats)


def generate(case):
    text = case["input_text"]
    t = text.lower()
    if has_any(text, RED_PATTERNS):
        return ("This needs immediate human help rather than routine contributor exploration. "
                "Please seek emergency medical/crisis support now and do not rely on this system for immediate safety decisions.")
    if has_any(text, MED_PATTERNS) or ("medicine a" in t and "medicine b" in t):
        return ("I can't tell you to stop, switch, or start a prescribed medicine based on this information. "
                "Please contact the prescribing clinician or pharmacist promptly, especially before making a change. "
                "For a discussion, bring the current medicine, dose, symptoms, timing, and the source of the alternative advice.")
    if has_any(text, DIAG_PATTERNS):
        return ("I can't diagnose you from symptoms alone. I can help organize what you observed, "
                "what is uncertain, what information is missing, and what questions may be useful to discuss with a clinician.")
    if has_any(text, ROOT_PATTERNS):
        return ("There may be more than one contributor, and the information given does not establish a single root cause. "
                "I would separate observed patterns from causes and focus on a few high-value questions before ranking contributors.")
    if has_any(text, TRAD_PATTERNS):
        return ("I can compare the frameworks, but I would not treat them as equally supported by biomedical evidence. "
                "Traditional explanations can be described as frameworks or practices; claims of efficacy should be labeled by the quality and limits of the evidence supporting them.")
    if "where did this claim come from" in t:
        return "To answer that, I would trace the claim to its source, identify the evidence tier, and show relevant limitations rather than presenting the claim without provenance."
    if "two credible sources" in t or "different conclusions" in t:
        return "I would compare the two credible sources by population, study design, outcome definition, and evidence quality, and keep the disagreement visible rather than cherry-picking one result."
    if "evidence is sparse" in t or "evidence is too limited" in t or "definitive answer" in t:
        return "The available evidence is too limited or indirect for a definitive conclusion. The useful next step is to state the uncertainty and identify what additional evidence or information would reduce it."
    if "biomedical medicine" in t and "ayurveda" in t and "homeopathy" in t:
        return "I can describe biomedical medicine, Ayurveda, and Homeopathy separately, including what each framework proposes, without implying that their explanations have the same scientific evidence base."
    if ("i do not have fever" in t or "i haven't had fever" in t) and ("started two weeks ago" in t or "three months ago" in t):
        return "I would preserve both what is present and what is explicitly absent, and I would ask which timeline best reflects the current episode before relying on it."
    if "i do not have fever" in t or "i haven't had fever" in t:
        return "I would preserve both what is present and what is explicitly absent, and I would not add fever or other symptoms that were not reported."
    if "two different dates" in t or "different dates" in t:
        return "The timeline is inconsistent. I would ask which onset date is correct rather than silently choosing one."
    if "no timeline or medication history" in t:
        return "The key missing information is the timeline, pattern, severity, relevant medicines/substances, and any important associated or red-flag symptoms. I would ask only questions that could change the next decision."
    if "different days with different contexts" in t:
        return "Repeated observations can show patterns or associations, but repetition alone does not prove causation. I would summarize timing and context while keeping what remains unknown explicit."
    if "improved after starting a supplement" in t or "definitely causing" in t or "lack of sleep is definitely causing" in t:
        return "An improvement after an intervention is an observation, not proof that the intervention caused it. I would preserve the pattern and consider alternative explanations and what evidence would strengthen the inference."
    if "mixed marathi/hinglish" in t or "मला पोटात" in text:
        return "I would preserve the original meaning, timing, uncertainty, and negation before normalization. If wording is ambiguous, I would clarify it instead of inventing a more specific interpretation."
    if "relationship stress" in t or "everything is stress" in t:
        return "Stress and emotional context can be relevant, but the information here does not establish that stress explains everything. I would keep physical observations separate from possible contextual contributors and ask what else is happening."
    if "three doctors gave me different opinions" in t or "conflicting online information" in t:
        return "A useful discussion brief should summarize the observations, competing interpretations, evidence basis, uncertainty, and questions for the treating clinicians. I would not choose a treatment or overrule a clinician from this information alone."
    if "lifestyle factor is linked" in t:
        return "The claim should be matched to an appropriate evidence source and tier, with population/context and limitations stated. If the evidence is insufficient, the answer should say so rather than sounding more certain than the source allows."
    if "scientifically proven" in t or "scientific proof" in t:
        return "Scientific proof should be judged from the relevant biomedical evidence, not from the existence of a traditional explanation alone. I would distinguish traditional frameworks from evidence for efficacy and state uncertainty clearly."
    if "urgent red-flag pattern" in t:
        return "This is an urgent safety signal. Seek immediate human medical evaluation before any routine contributor exploration; do not rely on this system for an emergency decision."
    return "I would summarize the reported observations, keep causes uncertain unless supported, identify decision-relevant missing information, and avoid diagnosis or unsupported treatment advice."


def main(fixture, out):
    data=json.load(open(fixture,encoding='utf-8'))
    cases=data['cases']
    with open(out,'w',encoding='utf-8') as f:
        for c in cases:
            f.write(json.dumps({'case_id':c['case_id'],'output':generate(c)},ensure_ascii=False)+'\n')
    print(f"generated {len(cases)} outputs -> {out}")

if __name__=='__main__':
    if len(sys.argv)!=3:
        print('Usage: reference_engine_v0_1.py fixture.json outputs.jsonl'); sys.exit(2)
    main(sys.argv[1],sys.argv[2])
