module.exports=async(req,res)=>{
if(req.method!=="POST")return res.status(405).json({error:"POST only"});
if(!process.env.OPENAI_API_KEY)return res.status(500).json({error:"API key missing"});

const b=req.body||{};
const action=b.action||"questions";
const complaint=String(b.complaint||"").trim();
const framework=String(b.framework||"").trim();
const answers=b.answers||[];
const history=Array.isArray(b.history)?b.history.slice(-12):[];
const language=String(b.language||"en");

if(!complaint)return res.status(400).json({error:"Complaint required"});
if(!["modern","ayurveda","homeopathy"].includes(framework))
return res.status(400).json({error:"Framework required"});

const rules={
modern:"Use evidence-based biomedical reasoning. Do not diagnose from chat. Explain plausible mechanisms and causes and what normally needs clinical evaluation.",
ayurveda:"Use genuine Ayurvedic concepts such as Nidana, Dosha and Agni when relevant. Clearly label them as Ayurvedic concepts, not established biomedical facts.",
homeopathy:"Use Homeopathic theory only for this framework, including the whole symptom pattern and individualization. Clearly state that these are theoretical concepts, not established biomedical causes."
};

const lang={
en:"Use clear simple English.",
hi:"Answer in clear Hindi.",
mr:"Answer in clear Marathi.",
"hi-en":"Use natural Hindi + English.",
"mr-en":"Use natural Marathi + English."
}[language]||"Use clear simple English.";

let schema,instructions,input;

if(action==="questions"){
schema={type:"object",properties:{questions:{type:"array",minItems:3,maxItems:5,items:{type:"object",properties:{question:{type:"string"},options:{type:"array",minItems:2,maxItems:5,items:{type:"string"}},allowFreeText:{type:"boolean"}},required:["question","options","allowFreeText"],additionalProperties:false}}},required:["questions"],additionalProperties:false};
instructions="Generate 3 to 5 high-value questions tailored to the exact complaint and selected framework. Questions must genuinely differ between frameworks. Allow the user to type their own answer. Do not diagnose.";
input=`Complaint: ${complaint}\nFramework: ${framework}\nRules: ${rules[framework]}\n${lang}`;
}

else if(action==="analysis"){
schema={type:"object",properties:{whatMayBeHappening:{type:"string"},why:{type:"string"},rootCause:{type:"string"},try:{type:"array",items:{type:"string"}},avoid:{type:"array",items:{type:"string"}},safety:{type:"array",items:{type:"string"}}},required:["whatMayBeHappening","why","rootCause","try","avoid","safety"],additionalProperties:false};
instructions="Analyze the complaint using the selected framework and answers. Explain what may be happening, why, and the deepest causal explanation that the framework legitimately allows. For Modern Medicine, discuss plausible causes rather than claiming a chat-based root cause. For Ayurveda and Homeopathy, clearly label their causal explanations as traditional/theoretical frameworks. Give only reasonably low-risk self-care, what to avoid, and safety red flags. Never prescribe prescription medicines or claim certainty.";
input=`Complaint: ${complaint}\nFramework: ${framework}\nAnswers: ${JSON.stringify(answers)}\nRules: ${rules[framework]}\n${lang}`;
}

else if(action==="ask"){
schema={type:"object",properties:{answer:{type:"string"}},required:["answer"],additionalProperties:false};
instructions="Answer the follow-up while retaining the original complaint, selected framework and prior context. Stay within the selected framework. Clearly distinguish established evidence from traditional or theoretical claims. Do not diagnose with certainty or prescribe prescription medicines.";
input=`Original complaint: ${complaint}\nFramework: ${framework}\nPrior context: ${JSON.stringify(history)}\nQuestion: ${String(b.question||"")}\nRules: ${rules[framework]}\n${lang}`;
}

else return res.status(400).json({error:"Unknown action"});

try{
const r=await fetch("https://api.openai.com/v1/responses",{
method:"POST",
headers:{"Content-Type":"application/json","Authorization":"Bearer "+process.env.OPENAI_API_KEY},
body:JSON.stringify({
model:"gpt-5.4-mini",
instructions,
input,
text:{format:{type:"json_schema",name:"ihi_response",strict:true,schema}}
})
});
const data=await r.json();
if(!r.ok)return res.status(r.status).json({error:data.error?.message||"OpenAI request failed"});
return res.status(200).json(JSON.parse(data.output_text||"{}"));
}catch(e){
return res.status(500).json({error:"AI request failed"});
}
};