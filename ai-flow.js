const exploreButton = document.getElementById("explore");
const concern = document.getElementById("concern");
const results = document.getElementById("results");
const language = document.getElementById("siteLanguage");


/* ============================================================
   GLOBAL IHI LANGUAGE
   ============================================================ */

const IHI_TRANSLATIONS = {
  en: {},

  "hi-en": {
    "Home": "Home",
    "Health Intelligence Tool": "Health Intelligence Tool",
    "How to Use IHI": "IHI kaise use karein",
    "About": "About",
    "Integrative Health Intelligence": "Integrative Health Intelligence",
    "Understanding your health shouldn't feel overwhelming.": "Apni health ko samajhna overwhelming nahi hona chahiye.",
    "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.": "Modern medicine, holistic care aur lifestyle guidance ke through health questions explore karein—sab kuch simple language mein.",
    "Try the Tool →": "Tool Try Karein →",
    "How to use IHI": "IHI kaise use karein",
    "About IHI": "IHI ke baare mein",
    "Compare medical perspectives with clarity.": "Medical perspectives ko clarity ke saath compare karein.",
    "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "Ek time par ek healthcare approach explore karein, taaki guidance clear aur focused rahe.",
    "Three perspectives": "Teen perspectives",
    "One experience.": "Ek experience.",
    "Different ways of understanding.": "Samajhne ke alag tareeke.",
    "Modern Medicine": "Modern Medicine",
    "Ayurveda": "Ayurveda",
    "Homeopathy": "Homeopathy",
    "The IHI journey": "IHI journey",
    "From a question to clearer understanding.": "Ek question se clearer understanding tak.",
    "Tell us": "Humein batayein",
    "Describe what you're experiencing in everyday language.": "Jo experience ho raha hai, use everyday language mein batayein.",
    "Choose": "Choose karein",
    "Select the healthcare approach you want to explore.": "Jo healthcare approach explore karna hai, use choose karein.",
    "Answer": "Answer karein",
    "Respond to a few questions designed around your concern.": "Aapke concern ke according kuch questions ka answer dein.",
    "Understand": "Samjhein",
    "See how that framework makes sense of your experience.": "Dekhein ki chosen framework aapke experience ko kaise samajhta hai.",
    "Ask deeper": "Aur poochhein",
    "Keep the conversation going with IHI.": "IHI ke saath conversation continue rakhein.",
    "What next": "Aage kya?",
    "Explore practical next steps, what to avoid and safety guidance.": "Practical next steps, kya avoid karein aur safety guidance dekhein.",
    "What are you trying to understand?": "Aap kya samajhna chahte hain?",
    "Start with your own words. You don't need to know the medical term.": "Apne words mein shuru karein. Medical term pata hona zaroori nahi hai.",
    "Tell IHI what you're experiencing.": "IHI ko batayein ki aap kya experience kar rahe hain.",
    "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "Aap symptom, report finding, health question ya koi bhi doubt describe kar sakte hain.",
    "Your exploration will appear here.": "Aapki exploration yahan dikhegi.",
    "Don't search for an answer. Explore the question.": "Sirf answer search na karein. Question ko explore karein.",
    "IHI is designed as a guided exploration.": "IHI ek guided exploration ke liye design kiya gaya hai.",
    "Start with your experience in your own words.": "Apne experience se shuru karein.",
    "No medical vocabulary is required.": "Medical vocabulary ki zaroorat nahi hai.",
    "Explore Modern Medicine, Ayurveda or Homeopathy separately.": "Modern Medicine, Ayurveda ya Homeopathy ko alag-alag explore karein.",
    "IHI does not blend the frameworks into one explanation.": "IHI frameworks ko ek explanation mein mix nahi karta.",
    "IHI asks a small number of questions relevant to your concern and the framework you've chosen.": "IHI aapke concern aur chosen framework ke according kuch relevant questions poochta hai.",
    "See what may be happening and why that framework interprets the experience in that way.": "Dekhein kya ho sakta hai aur chosen framework us experience ko us tarah kyun samajhta hai.",
    "Ask IHI another question without restarting the entire exploration.": "Puri exploration restart kiye bina IHI se ek aur question poochhein.",
    "Your earlier context stays with the conversation.": "Aapka pehle ka context conversation mein bana rehta hai.",
    "Explore practical things you can try, what to avoid and important safety or red-flag guidance.": "Practical cheezein explore karein, kya avoid karein aur important safety ya red-flag guidance dekhein.",
    "About the Creator": "Creator ke baare mein",
    "Why IHI Exists": "IHI kyun bana",
    "Dr. Vedanti Shah, BDS": "Dr. Vedanti Shah, BDS",
    "Creator · Product Designer · Vibe Coder": "Creator · Product Designer · Vibe Coder",
    "A few questions before we interpret it.": "Interpret karne se pehle kuch questions.",
    "Answer what fits. Every question also lets you describe your experience in your own words.": "Jo fit ho uska answer dein. Har question mein aap apna experience apne words mein bhi bata sakte hain.",
    "Continue →": "Continue →",
    "What may be happening?": "Kya ho sakta hai?",
    "Why might this be happening?": "Aisa kyun ho sakta hai?",
    "Going a little deeper": "Thoda aur deeper",
    "What next?": "Aage kya?",
    "What you can try": "Aap kya try kar sakte hain",
    "What to avoid": "Kya avoid karein",
    "Safety": "Safety",
    "Ask IHI": "IHI se poochhein",
    "Ask another question": "Ek aur question poochhein",
    "What would you like to understand next?": "Aap next kya samajhna chahte hain?",
    "What else would you like to understand?": "Aap aur kya samajhna chahte hain?",
    "Continue → What you can try": "Continue → Aap kya try kar sakte hain",
    "Something went wrong": "Kuch problem ho gayi",
    "Try again": "Dobara try karein",
    "Building questions around your complaint…": "Aapke concern ke around questions ban rahe hain…",
    "Putting your story together…": "Aapki story ko samjha ja raha hai…",
    "IHI is thinking…": "IHI soch raha hai…",
    "Another spark →": "Another spark →"
  },

  hi: {
    "Home": "होम",
    "Health Intelligence Tool": "हेल्थ इंटेलिजेंस टूल",
    "How to Use IHI": "IHI कैसे इस्तेमाल करें",
    "About": "हमारे बारे में",
    "Integrative Health Intelligence": "इंटीग्रेटिव हेल्थ इंटेलिजेंस",
    "Understanding your health shouldn't feel overwhelming.": "अपनी सेहत को समझना इतना मुश्किल नहीं होना चाहिए।",
    "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.": "मॉडर्न मेडिसिन, होलिस्टिक केयर और लाइफस्टाइल गाइडेंस के ज़रिए अपने हेल्थ सवालों को आसान भाषा में समझें।",
    "Try the Tool →": "टूल आज़माएँ →",
    "How to use IHI": "IHI कैसे इस्तेमाल करें",
    "About IHI": "IHI के बारे में",
    "Compare medical perspectives with clarity.": "अलग-अलग मेडिकल दृष्टिकोणों को साफ़ तरीके से समझें।",
    "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "एक समय में एक हेल्थकेयर दृष्टिकोण को समझें, ताकि जानकारी साफ़ और केंद्रित रहे।",
    "Three perspectives": "तीन दृष्टिकोण",
    "One experience.": "एक अनुभव।",
    "Different ways of understanding.": "समझने के अलग तरीके।",
    "Modern Medicine": "मॉडर्न मेडिसिन",
    "Ayurveda": "आयुर्वेद",
    "Homeopathy": "होम्योपैथी",
    "The IHI journey": "IHI की यात्रा",
    "From a question to clearer understanding.": "एक सवाल से बेहतर समझ तक।",
    "Tell us": "बताएँ",
    "Describe what you're experiencing in everyday language.": "आप क्या अनुभव कर रहे हैं, इसे रोज़मर्रा की भाषा में बताएँ।",
    "Choose": "चुनें",
    "Select the healthcare approach you want to explore.": "जिस हेल्थकेयर दृष्टिकोण को समझना चाहते हैं, उसे चुनें।",
    "Answer": "जवाब दें",
    "Respond to a few questions designed around your concern.": "अपने सवाल के अनुसार कुछ आसान प्रश्नों के जवाब दें।",
    "Understand": "समझें",
    "See how that framework makes sense of your experience.": "देखें कि चुना हुआ दृष्टिकोण आपके अनुभव को कैसे समझता है।",
    "Ask deeper": "और पूछें",
    "Keep the conversation going with IHI.": "IHI के साथ बातचीत जारी रखें।",
    "What next": "आगे क्या?",
    "Explore practical next steps, what to avoid and safety guidance.": "अगले कदम, क्या न करें और सुरक्षा संबंधी जानकारी देखें।",
    "What are you trying to understand?": "आप क्या समझना चाहते हैं?",
    "Start with your own words. You don't need to know the medical term.": "अपने शब्दों में शुरू करें। मेडिकल टर्म जानना ज़रूरी नहीं है।",
    "Tell IHI what you're experiencing.": "IHI को बताएँ कि आप क्या अनुभव कर रहे हैं।",
    "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "आप कोई लक्षण, रिपोर्ट की जानकारी, हेल्थ सवाल या कोई चिंता बता सकते हैं।",
    "Your exploration will appear here.": "आपकी एक्सप्लोरेशन यहाँ दिखाई देगी।",
    "Don't search for an answer. Explore the question.": "सिर्फ जवाब न खोजें। सवाल को समझें।",
    "IHI is designed as a guided exploration.": "IHI एक guided exploration के लिए बनाया गया है।",
    "About the Creator": "क्रिएटर के बारे में",
    "Why IHI Exists": "IHI क्यों बना",
    "Dr. Vedanti Shah, BDS": "Dr. Vedanti Shah, BDS",
    "Creator · Product Designer · Vibe Coder": "Creator · Product Designer · Vibe Coder",
    "A few questions before we interpret it.": "इसे समझने से पहले कुछ सवाल।",
    "Answer what fits. Every question also lets you describe your experience in your own words.": "जो सही लगे उसका जवाब दें। आप अपना अनुभव अपने शब्दों में भी बता सकते हैं।",
    "Continue →": "आगे बढ़ें →",
    "What may be happening?": "क्या हो सकता है?",
    "Why might this be happening?": "ऐसा क्यों हो सकता है?",
    "Going a little deeper": "थोड़ा और गहराई से",
    "What next?": "आगे क्या?",
    "What you can try": "आप क्या आज़मा सकते हैं",
    "What to avoid": "क्या न करें",
    "Safety": "सुरक्षा",
    "Ask IHI": "IHI से पूछें",
    "Ask another question": "एक और सवाल पूछें",
    "Continue → What you can try": "आगे बढ़ें → आप क्या आज़मा सकते हैं",
    "Something went wrong": "कुछ गड़बड़ हो गई",
    "Try again": "फिर कोशिश करें",
    "Building questions around your complaint…": "आपकी समस्या के अनुसार सवाल तैयार हो रहे हैं…",
    "Putting your story together…": "आपकी बात को समझा जा रहा है…",
    "IHI is thinking…": "IHI सोच रहा है…"
  },

  mr: {
    "Home": "होम",
    "Health Intelligence Tool": "हेल्थ इंटेलिजन्स टूल",
    "How to Use IHI": "IHI कसं वापरायचं",
    "About": "About",
    "Integrative Health Intelligence": "इंटिग्रेटिव्ह हेल्थ इंटेलिजन्स",
    "Understanding your health shouldn't feel overwhelming.": "तुमचं आरोग्य समजून घेणं overwhelming वाटायला नको.",
    "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.": "Modern medicine, holistic care आणि lifestyle guidance मधून health questions सोप्या भाषेत समजून घ्या.",
    "Try the Tool →": "Tool वापरा →",
    "How to use IHI": "IHI कसं वापरायचं",
    "About IHI": "IHI बद्दल",
    "Compare medical perspectives with clarity.": "वेगवेगळे medical perspectives स्पष्टपणे समजून घ्या.",
    "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "एका वेळी एक healthcare approach समजून घ्या, म्हणजे guidance clear आणि focused राहील.",
    "Three perspectives": "तीन perspectives",
    "One experience.": "एक experience.",
    "Different ways of understanding.": "समजून घेण्याचे वेगवेगळे मार्ग.",
    "Modern Medicine": "Modern Medicine",
    "Ayurveda": "आयुर्वेद",
    "Homeopathy": "होमिओपॅथी",
    "The IHI journey": "IHI journey",
    "From a question to clearer understanding.": "एका प्रश्नापासून clearer understanding पर्यंत.",
    "Tell us": "सांगा",
    "Describe what you're experiencing in everyday language.": "तुम्हाला काय जाणवतंय ते रोजच्या भाषेत सांगा.",
    "Choose": "निवडा",
    "Select the healthcare approach you want to explore.": "तुम्हाला explore करायचा healthcare approach निवडा.",
    "Answer": "उत्तर द्या",
    "Respond to a few questions designed around your concern.": "तुमच्या concern नुसार काही questions ची उत्तरं द्या.",
    "Understand": "समजून घ्या",
    "See how that framework makes sense of your experience.": "तो framework तुमच्या experience कडे कसा पाहतो ते समजून घ्या.",
    "Ask deeper": "आणखी विचारा",
    "Keep the conversation going with IHI.": "IHI सोबत conversation पुढे चालू ठेवा.",
    "What next": "पुढे काय?",
    "Explore practical next steps, what to avoid and safety guidance.": "पुढचे practical steps, काय avoid करायचं आणि safety guidance पहा.",
    "What are you trying to understand?": "तुम्हाला काय समजून घ्यायचं आहे?",
    "Start with your own words. You don't need to know the medical term.": "तुमच्या शब्दांत सुरुवात करा. Medical term माहित असण्याची गरज नाही.",
    "Tell IHI what you're experiencing.": "तुम्हाला काय जाणवतंय ते IHI ला सांगा.",
    "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "तुम्ही symptom, report finding, health question किंवा मनातला doubt सांगू शकता.",
    "Your exploration will appear here.": "तुमची exploration इथे दिसेल.",
    "Don't search for an answer. Explore the question.": "फक्त answer शोधू नका. Question explore करा.",
    "IHI is designed as a guided exploration.": "IHI guided exploration साठी design केलं आहे.",
    "About the Creator": "Creator बद्दल",
    "Why IHI Exists": "IHI का तयार केलं",
    "Dr. Vedanti Shah, BDS": "Dr. Vedanti Shah, BDS",
    "Creator · Product Designer · Vibe Coder": "Creator · Product Designer · Vibe Coder",
    "A few questions before we interpret it.": "Interpret करण्याआधी काही questions.",
    "Answer what fits. Every question also lets you describe your experience in your own words.": "जे fit होतं त्याचं answer द्या. तुमचा experience तुमच्या शब्दांतही सांगू शकता.",
    "Continue →": "पुढे →",
    "What may be happening?": "काय होत असू शकतं?",
    "Why might this be happening?": "असं का होत असू शकतं?",
    "Going a little deeper": "थोडं deeper समजून घेऊया",
    "What next?": "पुढे काय?",
    "What you can try": "तुम्ही काय try करू शकता",
    "What to avoid": "काय avoid करायचं",
    "Safety": "Safety",
    "Ask IHI": "IHI ला विचारा",
    "Ask another question": "आणखी एक question विचारा",
    "Continue → What you can try": "पुढे → तुम्ही काय try करू शकता",
    "Something went wrong": "काहीतरी problem झाली",
    "Try again": "पुन्हा try करा",
    "Building questions around your complaint…": "तुमच्या concern नुसार questions तयार होत आहेत…",
    "Putting your story together…": "तुमचा experience समजून घेतला जात आहे…",
    "IHI is thinking…": "IHI विचार करत आहे…"
  }
};


Object.assign(IHI_TRANSLATIONS.hi, {
  "Home": "मुखपृष्ठ",
  "Health Intelligence Tool": "स्वास्थ्य समझने का साधन",
  "How to Use IHI": "IHI का उपयोग कैसे करें",
  "About": "परिचय",
  "Try the Tool →": "साधन आज़माएँ →",
  "Compare medical perspectives with clarity.": "स्वास्थ्य को समझने के अलग-अलग दृष्टिकोणों को साफ़ तरीके से जानें।",
  "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "एक समय में एक स्वास्थ्य दृष्टिकोण को समझें, ताकि जानकारी साफ़ और केंद्रित रहे।",
  "Modern Medicine": "आधुनिक चिकित्सा",
  "The IHI journey": "IHI की यात्रा",
  "From a question to clearer understanding.": "एक सवाल से बेहतर समझ तक।",
  "Select the healthcare approach you want to explore.": "जिस स्वास्थ्य दृष्टिकोण को समझना चाहते हैं, उसे चुनें।",
  "See how that framework makes sense of your experience.": "देखें कि चुना हुआ दृष्टिकोण आपके अनुभव को कैसे समझता है।",
  "Explore practical next steps, what to avoid and safety guidance.": "अगले कदम, किन चीज़ों से बचना है और सुरक्षा से जुड़ी जानकारी देखें।",
  "Start with your own words. You don't need to know the medical term.": "अपने शब्दों में शुरू करें। आपको चिकित्सीय शब्द जानना ज़रूरी नहीं है।",
  "Tell IHI what you're experiencing.": "IHI को बताएँ कि आप क्या अनुभव कर रहे हैं।",
  "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "आप कोई लक्षण, जाँच रिपोर्ट की जानकारी, स्वास्थ्य से जुड़ा सवाल या मन में चल रही कोई बात बता सकते हैं।",
  "Your exploration will appear here.": "आपकी खोज यहाँ दिखाई देगी।",
  "IHI is designed as a guided exploration.": "IHI आपको कदम-दर-कदम समझने में मदद करने के लिए बनाया गया है।",
  "Explore Modern Medicine, Ayurveda or Homeopathy separately.": "आधुनिक चिकित्सा, आयुर्वेद या होम्योपैथी में से किसी एक दृष्टिकोण को अलग-अलग समझें।",
  "IHI does not blend the frameworks into one explanation.": "IHI अलग-अलग दृष्टिकोणों को एक ही व्याख्या में नहीं मिलाता।",
  "IHI asks a small number of questions relevant to your concern and the framework you've chosen.": "IHI आपकी समस्या और चुने हुए दृष्टिकोण के अनुसार कुछ ज़रूरी सवाल पूछता है।",
  "See what may be happening and why that framework interprets the experience in that way.": "देखें कि क्या हो सकता है और चुना हुआ दृष्टिकोण आपके अनुभव को उस तरह क्यों समझता है।",
  "Ask IHI another question without restarting the entire exploration.": "पूरी प्रक्रिया फिर से शुरू किए बिना IHI से एक और सवाल पूछें।",
  "About the Creator": "निर्मात्री के बारे में",
  "Creator · Product Designer · Vibe Coder": "निर्मात्री · उत्पाद रचनाकार · तकनीकी सृजनकर्ता",
  "Going a little deeper": "थोड़ा और गहराई से",
  "What you can try": "आप क्या आज़मा सकते हैं",
  "What to avoid": "किन चीज़ों से बचें",
  "Ask IHI": "IHI से पूछें",
  "Ask another question": "एक और सवाल पूछें",
  "What would you like to understand next?": "आप आगे क्या समझना चाहते हैं?",
  "What else would you like to understand?": "आप और क्या समझना चाहते हैं?",
  "Step 1": "चरण १",
  "Step 2": "चरण २",
  "Step 3": "चरण ३",
  "Choose how you want to explore this.": "आप इसे किस दृष्टिकोण से समझना चाहते हैं, चुनें।",
  "The questions and interpretation change with the framework you choose.": "आपके चुने हुए दृष्टिकोण के अनुसार सवाल और समझने का तरीका बदल जाएगा।",
  "Evidence-based biomedical reasoning and plausible medical causes.": "वैज्ञानिक प्रमाणों पर आधारित चिकित्सीय सोच और संभावित कारण।",
  "Explore the concern through Ayurvedic concepts and traditional reasoning.": "आयुर्वेद के सिद्धांतों और पारंपरिक सोच के आधार पर अपनी समस्या को समझें।",
  "Explore the individual symptom pattern through Homeopathic theory.": "लक्षणों के पूरे व्यक्तिगत ढंग और होम्योपैथी की मान्यताओं के आधार पर इसे समझें।",
  "MODERN MEDICINE": "आधुनिक चिकित्सा",
  "HOMEOPATHY": "होम्योपैथी",
  "Or tell us in your own words…": "या अपने शब्दों में बताएँ…",
  "Ask IHI →": "IHI से पूछें →",
  "🎙 Speak": "🎙 बोलें",
  "🎙 Listening…": "🎙 सुन रहा है…",
  "Another spark →": "एक और जानकारी →",
  "✦ IHI Spark": "✦ IHI की झलक",
  "Something went wrong": "कुछ गड़बड़ हो गई",
  "Try again": "फिर कोशिश करें"
});

Object.assign(IHI_TRANSLATIONS.mr, {
  "Home": "मुखपृष्ठ",
  "Health Intelligence Tool": "आरोग्य समजण्याचं साधन",
  "How to Use IHI": "IHI कसं वापरायचं",
  "About": "माहिती",
  "Try the Tool →": "साधन वापरा →",
  "Compare medical perspectives with clarity.": "आरोग्याकडे पाहण्याचे वेगवेगळे दृष्टिकोन स्पष्टपणे समजून घ्या.",
  "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "एका वेळी एक आरोग्यविषयक दृष्टिकोन समजून घ्या, म्हणजे माहिती सरळ आणि नेमकी राहील.",
  "Modern Medicine": "आधुनिक वैद्यक",
  "The IHI journey": "IHI ची वाटचाल",
  "From a question to clearer understanding.": "एका प्रश्नापासून अधिक स्पष्ट समजुतीपर्यंत.",
  "Select the healthcare approach you want to explore.": "तुम्हाला समजून घ्यायचा आरोग्यविषयक दृष्टिकोन निवडा.",
  "See how that framework makes sense of your experience.": "निवडलेला दृष्टिकोन तुमच्या अनुभवाकडे कसा पाहतो ते समजून घ्या.",
  "Explore practical next steps, what to avoid and safety guidance.": "पुढे काय करता येईल, काय टाळायचं आणि सुरक्षिततेची माहिती पाहा.",
  "Start with your own words. You don't need to know the medical term.": "तुमच्या शब्दांत सुरुवात करा. वैद्यकीय शब्द माहीत असण्याची गरज नाही.",
  "Tell IHI what you're experiencing.": "तुम्हाला काय जाणवतंय ते IHI ला सांगा.",
  "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "एखादं लक्षण, तपासणी अहवालातली माहिती, आरोग्याचा प्रश्न किंवा मनातला काही विचार तुम्ही सांगू शकता.",
  "Your exploration will appear here.": "तुमची शोधयात्रा इथे दिसेल.",
  "IHI is designed as a guided exploration.": "IHI तुम्हाला हळूहळू आणि सोप्या पद्धतीने समजून घेण्यासाठी तयार केलं आहे.",
  "Explore Modern Medicine, Ayurveda or Homeopathy separately.": "आधुनिक वैद्यक, आयुर्वेद किंवा होमिओपॅथी यापैकी एक दृष्टिकोन वेगळा समजून घ्या.",
  "IHI does not blend the frameworks into one explanation.": "IHI हे वेगवेगळे दृष्टिकोन एका स्पष्टीकरणात मिसळत नाही.",
  "IHI asks a small number of questions relevant to your concern and the framework you've chosen.": "तुमची समस्या आणि तुम्ही निवडलेल्या दृष्टिकोनानुसार IHI काही महत्त्वाचे प्रश्न विचारतो.",
  "See what may be happening and why that framework interprets the experience in that way.": "काय होत असू शकतं आणि निवडलेला दृष्टिकोन तुमच्या अनुभवाचा तसा अर्थ का लावतो ते पाहा.",
  "Ask IHI another question without restarting the entire exploration.": "संपूर्ण प्रक्रिया पुन्हा सुरू न करता IHI ला आणखी एक प्रश्न विचारा.",
  "About the Creator": "निर्मात्रीबद्दल",
  "Creator · Product Designer · Vibe Coder": "निर्मात्री · उत्पादन रचनाकार · तंत्रसर्जक",
  "Going a little deeper": "थोडं अधिक खोलात जाऊया",
  "What you can try": "तुम्ही काय करून पाहू शकता",
  "What to avoid": "काय टाळायचं",
  "Ask IHI": "IHI ला विचारा",
  "Ask another question": "आणखी एक प्रश्न विचारा",
  "What would you like to understand next?": "आता तुम्हाला काय समजून घ्यायचं आहे?",
  "What else would you like to understand?": "आणखी काय समजून घ्यायचं आहे?",
  "Step 1": "टप्पा १",
  "Step 2": "टप्पा २",
  "Step 3": "टप्पा ३",
  "Choose how you want to explore this.": "हे कोणत्या दृष्टिकोनातून समजून घ्यायचं ते निवडा.",
  "The questions and interpretation change with the framework you choose.": "तुम्ही निवडलेल्या दृष्टिकोनानुसार प्रश्न आणि त्याचा अर्थ बदलतो.",
  "Evidence-based biomedical reasoning and plausible medical causes.": "वैज्ञानिक पुराव्यांवर आधारित वैद्यकीय विचार आणि शक्य कारणं.",
  "Explore the concern through Ayurvedic concepts and traditional reasoning.": "आयुर्वेदातील संकल्पना आणि पारंपरिक विचारांच्या आधाराने तुमची समस्या समजून घ्या.",
  "Explore the individual symptom pattern through Homeopathic theory.": "लक्षणं, त्यांची रचना आणि होमिओपॅथीच्या मान्यतांनुसार तुमचा अनुभव समजून घ्या.",
  "MODERN MEDICINE": "आधुनिक वैद्यक",
  "HOMEOPATHY": "होमिओपॅथी",
  "Or tell us in your own words…": "किंवा तुमच्या शब्दांत सांगा…",
  "Ask IHI →": "IHI ला विचारा →",
  "🎙 Speak": "🎙 बोला",
  "🎙 Listening…": "🎙 ऐकत आहे…",
  "Another spark →": "आणखी एक माहिती →",
  "✦ IHI Spark": "✦ IHI ची झलक",
  "Something went wrong": "काहीतरी चुकलं",
  "Try again": "पुन्हा प्रयत्न करा"
});

const IHI_ORIGINAL_TEXT = new WeakMap();
const IHI_ORIGINAL_ATTRS = new WeakMap();

function ihiDictionary() {
  const lang = document.getElementById("siteLanguage")?.value || "en";
  return IHI_TRANSLATIONS[lang] || {};
}

function normalizeIHIText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function ihiTranslateString(source, dictionary) {
  if (!source || !Object.keys(dictionary).length) return source;

  const leading = source.match(/^\s*/)?.[0] || "";
  const trailing = source.match(/\s*$/)?.[0] || "";
  const core = source.slice(leading.length, source.length - trailing.length);
  const normalized = normalizeIHIText(core);

  const exact = Object.keys(dictionary).find(
    key => normalizeIHIText(key) === normalized
  );

  if (exact) {
    return leading + dictionary[exact] + trailing;
  }

  let translated = core;

  Object.keys(dictionary)
    .sort(
      (a, b) =>
        normalizeIHIText(b).length -
        normalizeIHIText(a).length
    )
    .forEach(key => {
      const normalizedKey = normalizeIHIText(key);

      if (
        normalizedKey &&
        normalizeIHIText(translated).includes(normalizedKey)
      ) {
        translated = translated.split(key).join(dictionary[key]);
      }
    });

  return leading + translated + trailing;
}


function ihiT(value) {
  return ihiTranslateString(value, ihiDictionary());
}

function applySiteLanguage() {
  const select = document.getElementById("siteLanguage");
  if (!select) return;

  const lang = select.value || "en";
  const dictionary = ihiDictionary();

  document.documentElement.lang =
    lang === "hi" ? "hi" :
    lang === "mr" ? "mr" :
    "en";

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  while (walker.nextNode()) {
    const node = walker.currentNode;

    if (!IHI_ORIGINAL_TEXT.has(node)) {
      IHI_ORIGINAL_TEXT.set(node, node.nodeValue);
    }

    node.nodeValue = ihiTranslateString(
      IHI_ORIGINAL_TEXT.get(node),
      dictionary
    );
  }

  document
    .querySelectorAll("[placeholder],[aria-label],[title]")
    .forEach(element => {

      if (!IHI_ORIGINAL_ATTRS.has(element)) {
        IHI_ORIGINAL_ATTRS.set(element, {
          placeholder: element.getAttribute("placeholder"),
          "aria-label": element.getAttribute("aria-label"),
          title: element.getAttribute("title")
        });
      }

      const original = IHI_ORIGINAL_ATTRS.get(element);

      ["placeholder","aria-label","title"].forEach(attr => {
        if (original[attr] !== null) {
          element.setAttribute(
            attr,
            ihiTranslateString(original[attr], dictionary)
          );
        }
      });
    });

  const optionLabels = {
    en: [
      "English",
      "Hindi + English",
      "Hindi",
      "Marathi + English",
      "Marathi"
    ],

    "hi-en": [
      "English",
      "Hindi + English",
      "Hindi",
      "Marathi + English",
      "Marathi"
    ],

    hi: [
      "अंग्रेज़ी",
      "हिंदी + अंग्रेज़ी",
      "हिंदी",
      "मराठी + अंग्रेज़ी",
      "मराठी"
    ],

    "mr-en": [
      "English",
      "Hindi + English",
      "Hindi",
      "Marathi + English",
      "Marathi"
    ],

    mr: [
      "इंग्रजी",
      "हिंदी + इंग्रजी",
      "हिंदी",
      "मराठी + इंग्रजी",
      "मराठी"
    ]
  };

  [...select.options].forEach((option, index) => {
    option.textContent =
      (optionLabels[lang] || optionLabels.en)[index];
  });

  const placeholders = {

    en:
      "For example: I've been feeling acidity after meals and I want to understand why...",

    "hi-en":
      "Example: खाना खाने के बाद acidity होती है और मैं समझना चाहता/चाहती हूँ कि ऐसा क्यों होता है...",

    hi:
      "उदाहरण: खाना खाने के बाद अम्लता होती है और मैं समझना चाहता/चाहती हूँ कि ऐसा क्यों होता है...",

    "mr-en":
      "उदाहरण: जेवल्यानंतर acidity होते आणि मला हे का होतंय ते समजून घ्यायचं आहे...",

    mr:
      "उदाहरण: जेवल्यानंतर आम्लपित्त होतं आणि असं का होतं हे मला समजून घ्यायचं आहे..."
  };

  const input = document.getElementById("concern");

  if (input) {
    input.placeholder =
      placeholders[lang] || placeholders.en;
  }

  if (typeof window.ihiSparkRender === "function") {
    window.ihiSparkRender();
  }

  localStorage.setItem("ihiLanguage", lang);
}


let ihiState = {
  complaint: "",
  framework: "",
  answers: [],
  history: []
};

const frameworkNames = {
  modern: "Modern Medicine",
  ayurveda: "Ayurveda",
  homeopathy: "Homeopathy"
};

function esc(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    m => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m])
  );
}

function show(html) {
  results.innerHTML = html;
  applySiteLanguage();
  results.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function busy(message) {
  show(`
    <section class="section">
      <div class="loading">${esc(message)}</div>
    </section>
  `);
}

async function ihiCall(action, extra = {}) {

  const response = await fetch("/api/ihi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action,
      complaint: ihiState.complaint,
      framework: ihiState.framework,
      answers: ihiState.answers,
      history: ihiState.history,
      language: language?.value || "en",
      ...extra
    })
  });

  let data = {};

  try {
    data = await response.json();
  } catch (_) {}

  if (!response.ok) {
    throw new Error(
      data.error || "The AI request could not be completed."
    );
  }

  return data;
}


const activeRecognitions = new WeakMap();

function setupVoiceInput(textareaId, buttonId) {
  const textarea = document.getElementById(textareaId);
  const button = document.getElementById(buttonId);
  if (!textarea || !button) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    button.style.display = "none";
    return;
  }

  if (button.dataset.voiceReady === "1") return;
  button.dataset.voiceReady = "1";

  button.addEventListener("click", event => {
    event.preventDefault();

    if (button.disabled || activeRecognitions.has(button)) return;

    const recognition = new SpeechRecognition();
    const selected = language?.value || "en";

    recognition.lang =
      selected === "hi" || selected === "hi-en" ? "hi-IN" :
      selected === "mr" || selected === "mr-en" ? "mr-IN" :
      "en-IN";

    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    activeRecognitions.set(button, recognition);
    button.textContent = ihiT("🎙 Listening…");
    button.disabled = true;

    let captured = "";

    recognition.onresult = event => {
      const result =
        event.results?.[event.results.length - 1]?.[0];

      const spoken =
        result?.transcript?.trim() || "";

      if (spoken && !captured) captured = spoken;
    };

    recognition.onerror = () => {
      activeRecognitions.delete(button);
      button.textContent = ihiT("🎙 Speak");
      button.disabled = false;
    };

    recognition.onend = () => {
      if (captured) {
        const existing = textarea.value.trim();

        textarea.value =
          existing ? existing + " " + captured : captured;

        textarea.dispatchEvent(
          new Event("input", { bubbles: true })
        );
      }

      activeRecognitions.delete(button);
      button.textContent = ihiT("🎙 Speak");
      button.disabled = false;
    };

    try {
      recognition.start();
    } catch (_) {
      activeRecognitions.delete(button);
      button.textContent = ihiT("🎙 Speak");
      button.disabled = false;
    }
  });
}

function voiceButton(id) {
  return '<button type="button" class="btn option" id="' +
    id + '" style="margin-top:10px">🎙 Speak</button>';
}

function chooseFramework() {

  show(`
    <section class="section">

      <div class="eyebrow">
        Step 1
      </div>

      <h2>
        Choose how you want to explore this.
      </h2>

      <p class="section-intro">
        The questions and interpretation change with the framework you choose.
      </p>

      <div class="grid">

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="modern"
        >
          <span class="badge clinical">
            MODERN MEDICINE
          </span>

          <h3>
            Modern Medicine
          </h3>

          <p>
            Evidence-based biomedical reasoning and plausible medical causes.
          </p>
        </button>

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="ayurveda"
        >
          <span class="badge">
            AYURVEDA
          </span>

          <h3>
            Ayurveda
          </h3>

          <p>
            Explore the concern through Ayurvedic concepts and traditional reasoning.
          </p>
        </button>

        <button
          type="button"
          class="card clickable framework-choice"
          data-framework="homeopathy"
        >
          <span class="badge">
            HOMEOPATHY
          </span>

          <h3>
            Homeopathy
          </h3>

          <p>
            Explore the individual symptom pattern through Homeopathic theory.
          </p>
        </button>

      </div>

    </section>
  `);

  document
    .querySelectorAll(".framework-choice")
    .forEach(button => {

      button.addEventListener("click", () => {

        ihiState.framework =
          button.dataset.framework;

        loadQuestions();

      });

    });
}

async function loadQuestions() {

  busy(
    "Building questions around your complaint…"
  );

  try {

    const data =
      await ihiCall("questions");

    const questions =
      Array.isArray(data.questions)
        ? data.questions
        : [];

    if (!questions.length) {
      throw new Error(
        "No questions were returned."
      );
    }

    show(`
      <section class="section">

        <div class="eyebrow">
          Step 2 · ${esc(
            frameworkNames[ihiState.framework]
          )}
        </div>

        <h2>
          A few questions before we interpret it.
        </h2>

        <p class="section-intro">
          Answer what fits. Every question also lets you describe your experience in your own words.
        </p>

        <div id="ihiQuestions"></div>

        <div class="actions">
          <button
            class="btn primary"
            id="ihiAnalyze"
            type="button"
          >
            Continue →
          </button>
        </div>

      </section>
    `);

    const box =
      document.getElementById(
        "ihiQuestions"
      );

    questions.forEach(
      (q, index) => {

        const options =
          (
            Array.isArray(q.options)
              ? q.options
              : []
          )
          .map(
            option => `
              <button
                type="button"
                class="btn option ihi-option"
                type="button"
                aria-pressed="false"
                data-q="${index}"
                data-value="${esc(option)}"
              >
                ${esc(option)}
              </button>
            `
          )
          .join("");

        box.insertAdjacentHTML(
          "beforeend",
          `
            <div class="card question">

              <h3>
                ${index + 1}.
                ${esc(q.question)}
              </h3>

              <div class="options">
                ${options}
              </div>

              ${
                q.allowFreeText
                  ? `
                    <textarea
                      id="free-${index}"
                      placeholder="Or tell us in your own words…"
                    ></textarea>
                  `
                  : ""
              }

            </div>
          `
        );
      }
    );

    box.addEventListener("click", event => {
      const button = event.target.closest(".ihi-option");

      if (!button || !box.contains(button)) return;

      event.preventDefault();
      event.stopPropagation();

      const questionIndex = button.dataset.q;

      box
        .querySelectorAll(
          `.ihi-option[data-q="${questionIndex}"]`
        )
        .forEach(option => {
          option.classList.remove("selected");
          option.setAttribute("aria-pressed", "false");
        });

      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
    });

    document
      .getElementById("ihiAnalyze")
      .addEventListener(
        "click",
        async () => {

          const answers =
            questions.map(
              (q, index) => {

                const selected =
                  document
                    .querySelector(
                      `.ihi-option[data-q="${index}"].selected`
                    )
                    ?.dataset.value || "";

                const free =
                  document
                    .getElementById(
                      `free-${index}`
                    )
                    ?.value
                    .trim() || "";

                return {
                  question: q.question,
                  answer:
                    free ||
                    selected ||
                    "Not answered"
                };

              }
            );

          ihiState.answers =
            answers;

          await showAnalysis();

        }
      );

  } catch (error) {

    showError(
      error.message,
      loadQuestions
    );

  }
}

function list(items) {

  return (
    Array.isArray(items)
      ? items
      : []
  )
  .map(
    item =>
      `<li>${esc(item)}</li>`
  )
  .join("");
}

function getInitialAnalysis() {
  return ihiState.history.find(
    item => item.type === "analysis"
  )?.data || null;
}

function renderPractical(data) {
  show(`
    <section class="section">

      <div class="eyebrow">
        Next steps · ${esc(frameworkNames[ihiState.framework])}
      </div>

      <h2>What you can do next</h2>

      <div class="grid two">
        <div class="card">
          <h3>What you can try</h3>
          <ul class="list">${list(data?.try)}</ul>
        </div>

        <div class="card">
          <h3>What to avoid</h3>
          <ul class="list">${list(data?.avoid)}</ul>
        </div>
      </div>

      <div class="card safety" style="margin-top:16px">
        <h3>Safety</h3>
        <ul class="list">${list(data?.safety)}</ul>
      </div>

    </section>
  `);
}

function renderAnalysisPage(data) {
  show(`
    <section class="section">

      <div class="eyebrow">
        Step 3 · ${esc(frameworkNames[ihiState.framework])}
      </div>

      <h2>What may be happening?</h2>

      <div class="card">
        <h3>${esc(data.headline || "A possible explanation")}</h3>
        <p>${esc(data.whatMayBeHappening || "")}</p>
      </div>

      <div class="card" style="margin-top:16px">
        <h3>Why might this be happening?</h3>
        <ul class="list">${list(data.why)}</ul>
      </div>

      <div class="card" style="margin-top:16px">
        <h3>Going a little deeper</h3>
        <ul class="list">${list(data.deeperExplanation)}</ul>
      </div>

      <div class="card" style="margin-top:24px">
        <h3>What next?</h3>

        <p class="notice">
          You can ask IHI something more, or continue directly to practical next steps.
        </p>

        <div class="actions">
          <button type="button" class="btn primary" id="ihiContinue">
            Continue → What you can try
          </button>
        </div>

        <div style="margin-top:18px">
          <h4>Ask IHI</h4>

          <textarea
            id="ihiFollowup"
            placeholder="What would you like to understand next?"
          ></textarea>

          ${voiceButton("ihiFollowupVoice")}

          <div class="actions">
            <button type="button" class="btn primary" id="ihiAsk">
              Ask IHI →
            </button>
          </div>
        </div>
      </div>

      <div id="ihiPractical" class="grid two" style="margin-top:24px">
        <div class="card">
          <h3>What you can try</h3>
          <ul class="list">${list(data.try)}</ul>
        </div>

        <div class="card">
          <h3>What to avoid</h3>
          <ul class="list">${list(data.avoid)}</ul>
        </div>
      </div>

      <div class="card safety" style="margin-top:16px">
        <h3>Safety</h3>
        <ul class="list">${list(data.safety)}</ul>
      </div>

    </section>
  `);

  setupVoiceInput("ihiFollowup", "ihiFollowupVoice");

  document
    .getElementById("ihiAsk")
    .addEventListener("click", askIHI);

  document
    .getElementById("ihiContinue")
    .addEventListener("click", () => {
      document
        .getElementById("ihiPractical")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    });
}

async function showAnalysis() {
  busy("Putting your story together…");

  try {
    const data = await ihiCall("analysis");

    ihiState.history.push({
      type: "analysis",
      data
    });

    renderAnalysisPage(data);

  } catch (error) {
    showError(error.message, showAnalysis);
  }
}

async function askIHI() {
  const input = document.getElementById("ihiFollowup");
  const question = input?.value.trim() || "";

  if (!question) {
    input?.focus();
    return;
  }

  ihiState.history.push({
    type: "user",
    question
  });

  busy("IHI is thinking…");

  try {
    const data = await ihiCall("ask", { question });

    ihiState.history.push({
      type: "assistant",
      answer: data.answer
    });

    const answer =
      data.answer && typeof data.answer === "object"
        ? data.answer
        : {
            headline: "Here is what IHI found",
            whatItAdds: String(data.answer || "")
          };

    show(`
      <section class="section">

        <div class="eyebrow">
          Ask IHI · ${esc(frameworkNames[ihiState.framework])}
        </div>

        <h2>Your question</h2>

        <div class="card">
          <p>${esc(question)}</p>
        </div>

        <div class="card" style="margin-top:16px">
          <h3>${esc(answer.headline || "What this means")}</h3>

          ${answer.whatItAdds
            ? "<p>" + esc(answer.whatItAdds) + "</p>"
            : ""}

          ${answer.whatItMeans
            ? "<h4>What this means</h4><p>" +
              esc(answer.whatItMeans) + "</p>"
            : ""}

          ${Array.isArray(answer.why) && answer.why.length
            ? "<h4>Why this may connect</h4><ul class=\"list\">" +
              list(answer.why) + "</ul>"
            : ""}

          ${Array.isArray(answer.deeperExplanation) &&
          answer.deeperExplanation.length
            ? "<h4>Going one level deeper</h4><ul class=\"list\">" +
              list(answer.deeperExplanation) + "</ul>"
            : ""}

          ${Array.isArray(answer.whatYouCanTry) &&
          answer.whatYouCanTry.length
            ? "<h4>What you can try next</h4><ul class=\"list\">" +
              list(answer.whatYouCanTry) + "</ul>"
            : ""}

          ${Array.isArray(answer.whatToWatch) &&
          answer.whatToWatch.length
            ? "<h4>What to watch for</h4><ul class=\"list\">" +
              list(answer.whatToWatch) + "</ul>"
            : ""}
        </div>

        <div class="card" style="margin-top:24px">
          <h3>What next?</h3>

          <p class="notice">
            You can ask another question, or continue to the practical and safety section.
          </p>

          <div class="actions">
            <button type="button" class="btn primary" id="ihiContinue">
              Continue → What you can try
            </button>
          </div>

          <div style="margin-top:18px">
            <h4>Ask another question</h4>

            <textarea
              id="ihiFollowup"
              placeholder="What else would you like to understand?"
            ></textarea>

            ${voiceButton("ihiFollowupVoice")}

            <div class="actions">
              <button type="button" class="btn primary" id="ihiAsk">
                Ask IHI →
              </button>
            </div>
          </div>
        </div>

      </section>
    `);

    setupVoiceInput("ihiFollowup", "ihiFollowupVoice");

    document
      .getElementById("ihiAsk")
      .addEventListener("click", askIHI);

    document
      .getElementById("ihiContinue")
      .addEventListener("click", () => {
        const analysis = getInitialAnalysis();

        if (analysis) {
          renderPractical(analysis);
        }
      });

  } catch (error) {
    ihiState.history.pop();
    showError(error.message, askIHI);
  }
}

function showError(
  message,
  retry
) {

  show(`
    <section class="section">

      <div class="card error">

        <h2>
          Something went wrong
        </h2>

        <p>
          ${esc(message)}
        </p>

        <div class="actions">

          <button
            type="button"
            class="btn primary"
            id="ihiRetry"
          >
            Try again
          </button>

        </div>

      </div>

    </section>
  `);

  document
    .getElementById("ihiRetry")
    .addEventListener(
      "click",
      retry
    );
}

exploreButton.addEventListener(
  "click",
  () => {

    const value =
      concern.value.trim();

    if (!value) {
      concern.focus();
      return;
    }

    ihiState = {
      complaint: value,
      framework: "",
      answers: [],
      history: []
    };

    chooseFramework();

  }
);

concern.addEventListener(
  "keydown",
  event => {

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key === "Enter"
    ) {
      exploreButton.click();
    }

  }
);

function setupIHISpark() {
  if (document.getElementById("ihiSpark")) return;

  const sparks = {
    en: [
      ["🧠 Interesting Health Fact", "Your brain uses a surprising amount of energy.", "Although it makes up only a small part of your body weight, the brain uses roughly one-fifth of the body's energy at rest."],
      ["💡 Did You Know?", "Your stomach doesn't digest itself.", "Its protective mucus lining and other defenses help shield the stomach wall from its own acid and digestive enzymes."],
      ["😄 Health Joke", "Why did the cell break up with the virus?", "Because it needed some space. 🦠"],
      ["🚀 Health Innovation", "Smart contact lenses are being researched for more than vision.", "Researchers have explored contact lenses that could potentially monitor biological signals or deliver medicines."],
      ["🧠 Interesting Health Fact", "Your bones are living tissue.", "Bone is continuously broken down and rebuilt throughout life. Your skeleton is constantly adapting."],
      ["💡 Did You Know?", "Your skin is an organ.", "In fact, it is the body's largest organ and acts as a barrier between you and the outside world."],
      ["😄 Health Joke", "Why did the doctor carry a red pen?", "In case they needed to draw blood. 🩸"],
      ["🚀 Health Innovation", "3D printing is being explored in medicine.", "Researchers are developing ways to use 3D printing for customized prosthetics, surgical planning and experimental tissue engineering."]
    ],

    "hi": [
      ["🧠 रोचक स्वास्थ्य तथ्य", "आपका दिमाग काफी ऊर्जा इस्तेमाल करता है।", "आराम की स्थिति में भी शरीर की कुल ऊर्जा का लगभग पाँचवाँ हिस्सा दिमाग इस्तेमाल करता है।"],
      ["💡 क्या आपको पता है?", "आपका पेट खुद को पचा नहीं लेता।", "पेट की सुरक्षात्मक परत और दूसरी प्राकृतिक सुरक्षा उसे अपने ही एसिड से बचाती हैं।"],
      ["😄 हेल्थ जोक", "सेल ने वायरस से ब्रेकअप क्यों किया?", "क्योंकि उसे थोड़ी space चाहिए थी। 🦠"],
      ["🚀 हेल्थ इनोवेशन", "मेडिसिन में 3D printing का इस्तेमाल खोजा जा रहा है।", "3D printing से customized prosthetics, surgical planning और tissue engineering जैसे क्षेत्रों में नए प्रयोग हो रहे हैं।"]
    ],

    "mr": [
      ["🧠 मजेदार आरोग्य तथ्य", "आपला मेंदू खूप ऊर्जा वापरतो.", "शरीराच्या वजनाचा छोटासा भाग असूनही, विश्रांतीच्या वेळी मेंदू शरीराच्या एकूण ऊर्जेपैकी सुमारे एक-पंचमांश ऊर्जा वापरतो."],
      ["💡 तुम्हाला माहित आहे का?", "आपले पोट स्वतःला पचवत नाही.", "पोटातील protective mucus layer आणि इतर नैसर्गिक संरक्षण आपल्याला पोटाच्या acid पासून वाचवतात."],
      ["😄 हेल्थ जोक", "Cell ने virus सोबत breakup का केलं?", "कारण त्याला थोडी space हवी होती. 🦠"],
      ["🚀 हेल्थ इनोव्हेशन", "Medicine मध्ये 3D printing वर प्रयोग होत आहेत.", "Customized prosthetics, surgical planning आणि tissue engineering सारख्या क्षेत्रांमध्ये 3D printing चा शोध घेतला जात आहे."]
    ],

    "hi-en": [
      ["🧠 Interesting Health Fact", "Brain surprisingly zyada energy use karta hai.", "Rest ke time bhi brain body ki total energy ka roughly one-fifth use karta hai."],
      ["💡 Did You Know?", "Stomach khud ko digest nahi karta.", "Uski protective lining aur natural defenses stomach ko uske own acid se protect karte hain."],
      ["😄 Health Joke", "Cell ne virus se breakup kyun kiya?", "Because usse thodi space chahiye thi. 🦠"],
      ["🚀 Health Innovation", "Medicine mein 3D printing ka use explore ho raha hai.", "Customized prosthetics, surgical planning aur tissue engineering jaise areas mein researchers 3D printing explore kar rahe hain."]
    ],

    "mr-en": [
      ["🧠 Interesting Health Fact", "आपला brain surprisingly खूप energy वापरतो.", "Resting state मध्येही brain body च्या total energy पैकी roughly one-fifth वापरतो."],
      ["💡 Did You Know?", "आपलं stomach स्वतःला digest करत नाही.", "त्याची protective lining आणि natural defenses त्याला own acid पासून protect करतात."],
      ["😄 Health Joke", "Cell ने virus सोबत breakup का केलं?", "Because त्याला थोडी space हवी होती. 🦠"],
      ["🚀 Health Innovation", "Medicine मध्ये 3D printing explore होत आहे.", "Customized prosthetics, surgical planning आणि tissue engineering सारख्या areas मध्ये 3D printing चा वापर शोधला जात आहे."]
    ]
  };

  let index = 0;

  const wrap = document.createElement("aside");
  wrap.id = "ihiSpark";

  wrap.innerHTML = `
    <button
      type="button"
      class="ihi-spark-tab"
      aria-label="Open IHI Spark"
    >
      ✦ IHI Spark
    </button>

    <div class="ihi-spark-card" style="display:none">
      <button
        type="button"
        class="ihi-spark-close"
        aria-label="Close IHI Spark"
      >×</button>

      <div class="ihi-spark-label">✦ IHI Spark</div>
      <div class="ihi-spark-kicker"></div>
      <h4 class="ihi-spark-title"></h4>
      <p class="ihi-spark-text"></p>

      <button
        type="button"
        class="ihi-spark-next"
      >
        Another spark →
      </button>
    </div>
  `;

  document.body.appendChild(wrap);

  const tab = wrap.querySelector(".ihi-spark-tab");
  const card = wrap.querySelector(".ihi-spark-card");
  const close = wrap.querySelector(".ihi-spark-close");
  const next = wrap.querySelector(".ihi-spark-next");
  const kicker = wrap.querySelector(".ihi-spark-kicker");
  const title = wrap.querySelector(".ihi-spark-title");
  const text = wrap.querySelector(".ihi-spark-text");

  function render() {
    const selected = language?.value || "en";
    const items = sparks[selected] || sparks.en;
    const item = items[index % items.length];

    kicker.textContent = item[0];
    title.textContent = item[1];
    text.textContent = item[2];
  }

  tab.addEventListener("click", () => {
    card.style.display = "block";
    tab.style.display = "none";
    render();
  });

  close.addEventListener("click", () => {
    card.style.display = "none";
    tab.style.display = "inline-flex";
  });

  next.addEventListener("click", () => {
    index += 1;
    render();
  });

  window.ihiSparkRender = render;

  language?.addEventListener("change", () => {
    render();
    applySiteLanguage();
  });

  render();
}


window.addEventListener("load", () => {
  const siteLanguage = document.getElementById("siteLanguage");

  if (siteLanguage) {
    const savedLanguage =
      localStorage.getItem("ihiLanguage") || "en";

    if (
      [...siteLanguage.options]
        .some(option => option.value === savedLanguage)
    ) {
      siteLanguage.value = savedLanguage;
    }

    siteLanguage.addEventListener("change", () => {
      applySiteLanguage();
    });
  }

  applySiteLanguage();
  setupIHISpark();

  if (!document.getElementById("concern")) return;

  setupVoiceInput("concern", "ihiComplaintVoice");
});
