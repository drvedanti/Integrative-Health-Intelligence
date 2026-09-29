module.exports=async(req,res)=>{
if(req.method!=="POST")return res.status(405).json({error:"POST only"});
if(!process.env.OPENAI_API_KEY)return res.status(500).json({error:"API key missing"});
const complaint=req.body?.complaint;
if(!complaint)return res.status(400).json({error:"Complaint required"});
const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+process.env.OPENAI_API_KEY},body:JSON.stringify({model:"gpt-5.4-mini",input:"The user says: "+complaint+". Give one short helpful response."})});
const data=await r.json();
return res.status(200).json({answer:data.output_text||"No answer."});
};
