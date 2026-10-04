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
    "About": "IHI ke baare mein",
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
    "Modern Medicine": "आधुनिक वैद्यक",
    "Ayurveda": "Ayurveda",
    "Homeopathy": "Homeopathy",
    "The IHI journey": "IHI ची वाटचाल",
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
    "Safety": "सुरक्षितता",
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
    "Home": "मुखपृष्ठ",
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
    "Home": "मुखपृष्ठ",
    "Health Intelligence Tool": "आरोग्य समजण्याचं साधन",
    "How to Use IHI": "IHI कसं वापरायचं",
    "About": "IHI ke baare mein",
    "Integrative Health Intelligence": "इंटिग्रेटिव्ह हेल्थ इंटेलिजन्स",
    "Understanding your health shouldn't feel overwhelming.": "तुमचं आरोग्य समजून घेणं इतकं अवघड वाटायला नको.",
    "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.": "Modern medicine, holistic care आणि lifestyle guidance मधून health questions सोप्या भाषेत समजून घ्या.",
    "Try the Tool →": "Tool वापरा →",
    "How to use IHI": "IHI कसं वापरायचं",
    "About IHI": "IHI बद्दल",
    "Compare medical perspectives with clarity.": "वेगवेगळे medical perspectives स्पष्टपणे समजून घ्या.",
    "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.": "एका वेळी एक healthcare approach समजून घ्या, म्हणजे guidance clear आणि focused राहील.",
    "Three perspectives": "तीन दृष्टिकोन",
    "One experience.": "एक अनुभव.",
    "Different ways of understanding.": "समजून घेण्याचे वेगवेगळे मार्ग.",
    "Modern Medicine": "आधुनिक वैद्यक",
    "Ayurveda": "आयुर्वेद",
    "Homeopathy": "होमिओपॅथी",
    "The IHI journey": "IHI ची वाटचाल",
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
    "IHI is designed as a guided exploration.": "IHI तुम्हाला टप्प्याटप्प्याने समजून घेण्यासाठी तयार केलं आहे.",
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
    "Safety": "सुरक्षितता",
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
  "About": "IHI ke baare mein",
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


/* ============================================================
   COMPLETE STATIC LANGUAGE COVERAGE
   Only language content is changed here.
   Design, layout and product flow remain untouched.
   ============================================================ */

Object.assign(IHI_TRANSLATIONS.hi, {

  /* HOME */
  "Integrative Health Intelligence": "समेकित स्वास्थ्य समझ",
  "Understanding": "अपनी सेहत को समझना",
  "your health": "आपकी सेहत",
  "shouldn't feel": "इतना मुश्किल नहीं",
  "overwhelming.": "होना चाहिए।",
  "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.":
    "आधुनिक चिकित्सा, समग्र देखभाल और जीवनशैली से जुड़ी जानकारी के ज़रिए स्वास्थ्य के सवालों को आसान भाषा में समझें।",
  "How to use IHI": "IHI का उपयोग कैसे करें",
  "About IHI": "IHI के बारे में",
  "Compare medical perspectives with clarity.": "स्वास्थ्य को समझने के अलग-अलग दृष्टिकोणों को साफ़ तरीके से जानें।",
  "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.":
    "एक समय में एक स्वास्थ्य दृष्टिकोण को समझें, ताकि जानकारी साफ़ और केंद्रित रहे।",
  "Three perspectives": "तीन दृष्टिकोण",
  "One experience.": "एक अनुभव।",
  "Different ways of understanding.": "समझने के अलग-अलग तरीके।",

  /* APPROACHES */
  "Modern Medicine": "आधुनिक चिकित्सा",
  "Explore your experience through evidence-based clinical reasoning, symptoms, patterns, mechanisms and possible causes.":
    "लक्षणों, उनके पैटर्न, शरीर में होने वाली प्रक्रियाओं और संभावित कारणों को वैज्ञानिक प्रमाणों के आधार पर समझें।",
  "Ayurveda": "आयुर्वेद",
  "Explore your experience through Ayurvedic concepts such as doshas, Agni, Nidana and patterns of imbalance.":
    "दोष, अग्नि, निदान और असंतुलन जैसे आयुर्वेदिक विचारों के आधार पर अपने अनुभव को समझें।",
  "Homeopathy": "होम्योपैथी",
  "Explore your experience through the individual pattern of symptoms, sensations, timing, triggers and associated experiences.":
    "लक्षणों, उनकी अनुभूति, समय, कारणों और उनसे जुड़ी दूसरी बातों के पूरे व्यक्तिगत पैटर्न को समझें।",

  /* JOURNEY */
  "The IHI journey": "IHI की यात्रा",
  "From a question": "एक सवाल से",
  "to clearer understanding.": "बेहतर समझ तक।",
  "Tell us": "बताएँ",
  "Describe what you're experiencing in everyday language.": "आप क्या अनुभव कर रहे हैं, इसे रोज़मर्रा की भाषा में बताएँ।",
  "Choose": "चुनें",
  "Answer": "जवाब दें",
  "Respond to a few questions designed around your concern.": "अपनी समस्या के अनुसार कुछ आसान सवालों के जवाब दें।",
  "Understand": "समझें",
  "Ask deeper": "और पूछें",
  "Keep the conversation going with IHI.": "IHI के साथ बातचीत जारी रखें।",
  "What next": "आगे क्या?",
  "Explore practical next steps, what to avoid and safety guidance.": "अगले कदम, किन चीज़ों से बचना है और सुरक्षा से जुड़ी जानकारी देखें।",

  /* TOOL */
  "Health Intelligence Tool": "स्वास्थ्य समझने का साधन",
  "What are you trying to understand?": "आप क्या समझना चाहते हैं?",
  "Start with your own words. You don't need to know the medical term.":
    "अपने शब्दों में शुरू करें। आपको चिकित्सीय शब्द जानना ज़रूरी नहीं है।",
  "Tell IHI what you're experiencing.": "IHI को बताएँ कि आप क्या अनुभव कर रहे हैं।",
  "You can describe a symptom, a report finding, a health question, or something you've been wondering about.":
    "आप कोई लक्षण, जाँच रिपोर्ट की जानकारी, स्वास्थ्य से जुड़ा सवाल या मन में चल रही कोई बात बता सकते हैं।",
  "Explore →": "समझें →",
  "Your exploration will appear here.": "आपकी खोज यहाँ दिखाई देगी।",

  /* HOW TO USE */
  "How to Use IHI": "IHI का उपयोग कैसे करें",
  "Don't search for an answer.": "सिर्फ जवाब मत खोजिए।",
  "Explore the question.": "सवाल को समझने की कोशिश कीजिए।",
  "IHI is designed as a guided exploration. You start with what you know, choose a perspective, answer simple questions, and gradually build a clearer picture.":
    "IHI आपको कदम-दर-कदम समझने में मदद करता है। जो पता है उससे शुरुआत करें, एक दृष्टिकोण चुनें, आसान सवालों के जवाब दें और धीरे-धीरे पूरी तस्वीर को समझें।",
  "Start with your experience in your own words. No medical vocabulary is required.":
    "अपने अनुभव को अपने शब्दों में बताएँ। किसी चिकित्सीय शब्दावली की ज़रूरत नहीं है।",
  "Explore Modern Medicine, Ayurveda or Homeopathy separately. IHI does not blend the frameworks into one explanation.":
    "आधुनिक चिकित्सा, आयुर्वेद या होम्योपैथी में से किसी एक दृष्टिकोण को अलग-अलग समझें। IHI इन दृष्टिकोणों को एक ही व्याख्या में नहीं मिलाता।",
  "IHI asks a small number of questions relevant to your concern and the framework you've chosen.":
    "IHI आपकी समस्या और चुने हुए दृष्टिकोण के अनुसार कुछ ज़रूरी सवाल पूछता है।",
  "See what may be happening and why that framework interprets the experience in that way.":
    "देखें कि क्या हो सकता है और चुना हुआ दृष्टिकोण आपके अनुभव को उस तरह क्यों समझता है।",
  "Ask IHI another question without restarting the entire exploration. Your earlier context stays with the conversation.":
    "पूरी प्रक्रिया फिर से शुरू किए बिना IHI से एक और सवाल पूछें। पहले की जानकारी बातचीत में बनी रहती है।",
  "Explore practical things you can try, what to avoid and important safety or red-flag guidance.":
    "आप क्या आज़मा सकते हैं, किन चीज़ों से बचना है और किन सुरक्षा संकेतों पर ध्यान देना है, यह जानें।",

  /* ABOUT */
  "About IHI": "IHI के बारे में",
  "About the Creator": "निर्मात्री के बारे में",
  "Dr. Vedanti Shah is a dentist, creator, and curious mind exploring where healthcare, technology, research, and design meet.":
    "डॉ. वेदांती शाह दंत चिकित्सक और रचनाकार हैं। वह स्वास्थ्य, तकनीक, शोध और डिज़ाइन के बीच के संबंधों को समझने में रुचि रखती हैं।",
  "She enjoys going deep into ideas, researching problems, connecting perspectives, and finding creative ways to make sense of complex things.":
    "उन्हें विचारों की गहराई में जाना, समस्याओं पर शोध करना, अलग-अलग दृष्टिकोणों को जोड़ना और जटिल बातों को आसान तरीके से समझना पसंद है।",
  "Her interests span healthcare, research, technology, AI, product thinking, design, and art. She brings these interests together through building, experimenting, and creating products that turn ideas into experiences.":
    "उनकी रुचियाँ स्वास्थ्य, शोध, तकनीक, कृत्रिम बुद्धिमत्ता, उत्पाद सोच, डिज़ाइन और कला तक फैली हैं। वह इन रुचियों को नए उत्पाद बनाने, प्रयोग करने और विचारों को वास्तविक अनुभवों में बदलने के ज़रिए साथ लाती हैं।",
  "IHI is one of the products she created.":
    "IHI उनके बनाए हुए उत्पादों में से एक है।",

  "Why IHI Exists": "IHI क्यों बना",
  "I spent years studying healthcare and practicing, and I realized something—people carry so much health confusion every single day. But it's not just a medical thing—it happens everywhere.":
    "मैंने कई साल स्वास्थ्य की पढ़ाई और चिकित्सा के काम में बिताए। इस दौरान मैंने महसूस किया कि लोग हर दिन स्वास्थ्य से जुड़ी बहुत सारी उलझनें लेकर चलते हैं। और यह सिर्फ अस्पताल की बात नहीं है—यह हर जगह होता है।",
  "At family dinners, social gatherings, WhatsApp groups, or just sitting with a lab report at home—it’s the same story again and again:":
    "परिवार के साथ खाने पर, दोस्तों के बीच, व्हाट्सऐप समूहों में या घर पर जाँच रिपोर्ट लेकर बैठे हों—कहानी बार-बार वही होती है:",
  "What does this medical term on my report actually mean?":
    "मेरी रिपोर्ट में लिखे इस चिकित्सीय शब्द का असल मतलब क्या है?",
  "I Googled my symptoms at 2 AM and now I’m terrified.":
    "मैंने रात दो बजे अपने लक्षण खोजे और अब मैं डर गया हूँ।",
  "Skip those heavy pills, just try this home remedy!":
    "इतनी दवाइयाँ मत लो, बस यह घरेलू उपाय आज़माओ!",
  "My family says one thing, my doctor says another—who am I supposed to listen to?":
    "मेरा परिवार कुछ और कहता है, डॉक्टर कुछ और—मैं किसकी बात मानूँ?",
  "Everyone has an opinion, a natural cure, or a friend-of-a-friend story. Eventually, it leaves you exhausted, wondering what information you can actually trust.":
    "हर किसी के पास अपनी राय, कोई प्राकृतिक इलाज या किसी जान-पहचान वाले की कहानी होती है। आखिर में इंसान थक जाता है और सोचता है कि आखिर किस जानकारी पर भरोसा किया जाए।",
  "As a clinician, I realized people don't need more loud opinions. They just want clear, unbiased information so they can decide for themselves.":
    "एक चिकित्सक के रूप में मैंने समझा कि लोगों को और ज़्यादा शोर वाली राय नहीं चाहिए। उन्हें साफ़ और निष्पक्ष जानकारी चाहिए, ताकि वे खुद फैसला ले सकें।",
  "When it comes to your health, you deserve clarity—not noise.":
    "आपकी सेहत के मामले में आपको उलझन नहीं, साफ़ समझ मिलनी चाहिए।",
  "That’s why I created IHI.": "इसीलिए मैंने IHI बनाया।",
  "We bring different healthcare approaches together in one neutral space, breaking down how each system views your body so you can clear your doubts and choose what feels right for you.":
    "हम अलग-अलग स्वास्थ्य दृष्टिकोणों को एक निष्पक्ष जगह पर रखते हैं और समझाते हैं कि हर दृष्टिकोण आपके शरीर और अनुभव को कैसे देखता है, ताकि आपकी उलझनें साफ़ हों और आप अपने लिए सही निर्णय ले सकें।",
  "Because when it comes to your health, you shouldn't feel lost. You should feel like an informed partner in your own care.":
    "क्योंकि आपकी सेहत के मामले में आपको भटका हुआ महसूस नहीं होना चाहिए। आपको अपनी देखभाल में समझ के साथ भाग लेने वाला व्यक्ति महसूस होना चाहिए।",
  "Dr. Vedanti Shah, BDS": "डॉ. वेदांती शाह, बीडीएस",
  "Creator · Product Designer · Vibe Coder": "निर्मात्री · उत्पाद रचनाकार · तकनीकी सृजनकर्ता"
});

Object.assign(IHI_TRANSLATIONS.mr, {

  "Integrative Health Intelligence": "एकत्रित आरोग्य समज",
  "Understanding": "तुमचं आरोग्य",
  "your health": "समजून घेणं",
  "shouldn't feel": "इतकं",
  "overwhelming.": "अवघड वाटायला नको.",
  "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.":
    "आधुनिक वैद्यक, समग्र काळजी आणि जीवनशैलीशी संबंधित आरोग्याचे प्रश्न सोप्या भाषेत समजून घ्या.",
  "How to use IHI": "IHI कसं वापरायचं",
  "About IHI": "IHI बद्दल",
  "Compare medical perspectives with clarity.": "आरोग्याकडे पाहण्याचे वेगवेगळे दृष्टिकोन स्पष्टपणे समजून घ्या.",
  "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.":
    "एका वेळी एक आरोग्यविषयक दृष्टिकोन समजून घ्या, म्हणजे माहिती सरळ आणि नेमकी राहील.",
  "Three perspectives": "तीन दृष्टिकोन",
  "One experience.": "एक अनुभव.",
  "Different ways of understanding.": "समजून घेण्याचे वेगवेगळे मार्ग.",

  "Modern Medicine": "आधुनिक वैद्यक",
  "Explore your experience through evidence-based clinical reasoning, symptoms, patterns, mechanisms and possible causes.":
    "लक्षणं, त्यांचे नमुने, शरीरात होणाऱ्या प्रक्रिया आणि शक्य कारणं वैज्ञानिक पुराव्यांच्या आधाराने समजून घ्या.",
  "Ayurveda": "आयुर्वेद",
  "Explore your experience through Ayurvedic concepts such as doshas, Agni, Nidana and patterns of imbalance.":
    "दोष, अग्नी, निदान आणि असंतुलन यांसारख्या आयुर्वेदिक संकल्पनांच्या आधाराने तुमचा अनुभव समजून घ्या.",
  "Homeopathy": "होमिओपॅथी",
  "Explore your experience through the individual pattern of symptoms, sensations, timing, triggers and associated experiences.":
    "लक्षणं, त्यांची जाणीव, वेळ, कारणं आणि त्यांच्याशी संबंधित गोष्टींचा संपूर्ण वैयक्तिक नमुना समजून घ्या.",

  "The IHI journey": "IHI ची वाटचाल",
  "From a question": "एका प्रश्नापासून",
  "to clearer understanding.": "अधिक स्पष्ट समजुतीपर्यंत.",
  "Tell us": "सांगा",
  "Describe what you're experiencing in everyday language.": "तुम्हाला काय जाणवतंय ते रोजच्या भाषेत सांगा.",
  "Choose": "निवडा",
  "Select the healthcare approach you want to explore.": "तुम्हाला समजून घ्यायचा आरोग्यविषयक दृष्टिकोन निवडा.",
  "Answer": "उत्तर द्या",
  "Respond to a few questions designed around your concern.": "तुमच्या समस्येनुसार काही सोपे प्रश्नांची उत्तरं द्या.",
  "Understand": "समजून घ्या",
  "See how that framework makes sense of your experience.": "निवडलेला दृष्टिकोन तुमच्या अनुभवाकडे कसा पाहतो ते समजून घ्या.",
  "Ask deeper": "आणखी विचारा",
  "Keep the conversation going with IHI.": "IHI सोबत बातचीत पुढे चालू ठेवा.",
  "What next": "पुढे काय?",
  "Explore practical next steps, what to avoid and safety guidance.": "पुढे काय करता येईल, काय टाळायचं आणि सुरक्षिततेची माहिती पाहा.",

  "Health Intelligence Tool": "आरोग्य समजण्याचं साधन",
  "What are you trying to understand?": "तुम्हाला काय समजून घ्यायचं आहे?",
  "Start with your own words. You don't need to know the medical term.": "तुमच्या शब्दांत सुरुवात करा. वैद्यकीय शब्द माहीत असण्याची गरज नाही.",
  "Tell IHI what you're experiencing.": "तुम्हाला काय जाणवतंय ते IHI ला सांगा.",
  "You can describe a symptom, a report finding, a health question, or something you've been wondering about.": "एखादं लक्षण, तपासणी अहवालातली माहिती, आरोग्याचा प्रश्न किंवा मनातला काही विचार तुम्ही सांगू शकता.",
  "Explore →": "समजून घ्या →",
  "Your exploration will appear here.": "तुमची शोधयात्रा इथे दिसेल.",

  "How to Use IHI": "IHI कसं वापरायचं",
  "Don't search for an answer.": "फक्त उत्तर शोधू नका.",
  "Explore the question.": "प्रश्न समजून घ्या.",
  "IHI is designed as a guided exploration. You start with what you know, choose a perspective, answer simple questions, and gradually build a clearer picture.":
    "IHI तुम्हाला हळूहळू समजून घेण्यासाठी तयार केलं आहे. जे माहीत आहे त्यापासून सुरुवात करा, एक दृष्टिकोन निवडा, सोप्या प्रश्नांची उत्तरं द्या आणि हळूहळू स्पष्ट चित्र तयार करा.",
  "Start with your experience in your own words. No medical vocabulary is required.": "तुमचा अनुभव तुमच्या शब्दांत सांगा. वैद्यकीय शब्दांची गरज नाही.",
  "Explore Modern Medicine, Ayurveda or Homeopathy separately. IHI does not blend the frameworks into one explanation.":
    "आधुनिक वैद्यक, आयुर्वेद किंवा होमिओपॅथी यापैकी एक दृष्टिकोन वेगळा समजून घ्या. IHI हे दृष्टिकोन एका स्पष्टीकरणात मिसळत नाही.",
  "IHI asks a small number of questions relevant to your concern and the framework you've chosen.": "तुमची समस्या आणि निवडलेल्या दृष्टिकोनानुसार IHI काही महत्त्वाचे प्रश्न विचारतो.",
  "See what may be happening and why that framework interprets the experience in that way.": "काय होत असू शकतं आणि निवडलेला दृष्टिकोन तुमच्या अनुभवाचा तसा अर्थ का लावतो ते पाहा.",
  "Ask IHI another question without restarting the entire exploration. Your earlier context stays with the conversation.":
    "संपूर्ण प्रक्रिया पुन्हा सुरू न करता IHI ला आणखी एक प्रश्न विचारा. आधीची माहिती संभाषणात राहते.",
  "Explore practical things you can try, what to avoid and important safety or red-flag guidance.":
    "तुम्ही काय करून पाहू शकता, काय टाळायचं आणि कोणत्या सुरक्षिततेच्या संकेतांकडे लक्ष द्यायचं ते जाणून घ्या.",

  "About IHI": "IHI बद्दल",
  "About the Creator": "निर्मात्रीबद्दल",
  "Dr. Vedanti Shah is a dentist, creator, and curious mind exploring where healthcare, technology, research, and design meet.":
    "डॉ. वेदांती शाह दंतचिकित्सक आणि निर्मात्री आहेत. आरोग्य, तंत्रज्ञान, संशोधन आणि रचना यांचा संगम त्या उत्सुकतेने समजून घेतात.",
  "She enjoys going deep into ideas, researching problems, connecting perspectives, and finding creative ways to make sense of complex things.":
    "कल्पनांच्या खोलात जाणं, समस्यांवर संशोधन करणं, वेगवेगळे दृष्टिकोन जोडणं आणि गुंतागुंतीच्या गोष्टी सोप्या पद्धतीने समजून घेणं त्यांना आवडतं.",
  "Her interests span healthcare, research, technology, AI, product thinking, design, and art. She brings these interests together through building, experimenting, and creating products that turn ideas into experiences.":
    "त्यांच्या आवडी आरोग्य, संशोधन, तंत्रज्ञान, कृत्रिम बुद्धिमत्ता, उत्पादनविचार, रचना आणि कलेपर्यंत आहेत. नवीन गोष्टी तयार करून, प्रयोग करून आणि कल्पनांना प्रत्यक्ष अनुभवात बदलणारी उत्पादनं बनवून त्या या सगळ्या आवडी एकत्र आणतात.",
  "IHI is one of the products she created.": "IHI हे त्यांनी तयार केलेल्या उत्पादनांपैकी एक आहे.",

  "Why IHI Exists": "IHI का तयार केलं",
  "I spent years studying healthcare and practicing, and I realized something—people carry so much health confusion every single day. But it's not just a medical thing—it happens everywhere.":
    "आरोग्याची शिकवण घेताना आणि प्रत्यक्ष काम करताना मी अनेक वर्षं घालवली. तेव्हा मला जाणवलं की लोक रोज आरोग्याबद्दल खूप साऱ्या गोंधळासोबत जगतात. आणि हा फक्त वैद्यकीय प्रश्न नाही—हा सगळीकडे दिसतो.",
  "At family dinners, social gatherings, WhatsApp groups, or just sitting with a lab report at home—it’s the same story again and again:":
    "कुटुंबासोबत जेवताना, मित्रांच्या भेटीत, व्हॉट्सअॅपच्या गटात किंवा घरी तपासणीचा अहवाल घेऊन बसताना—कथा पुन्हा पुन्हा तीच असते:",
  "What does this medical term on my report actually mean?": "माझ्या अहवालातला हा वैद्यकीय शब्द नेमका काय सांगतो?",
  "I Googled my symptoms at 2 AM and now I’m terrified.": "मी रात्री दोन वाजता माझी लक्षणं शोधली आणि आता मला भीती वाटतेय.",
  "Skip those heavy pills, just try this home remedy!": "इतक्या गोळ्या घेऊ नकोस, हा घरगुती उपाय करून पाह!",
  "My family says one thing, my doctor says another—who am I supposed to listen to?": "माझं कुटुंब एक सांगतंय, डॉक्टर दुसरं—मी नेमकं कोणाचं ऐकायचं?",
  "Everyone has an opinion, a natural cure, or a friend-of-a-friend story. Eventually, it leaves you exhausted, wondering what information you can actually trust.":
    "प्रत्येकाकडे स्वतःचं मत, एखादा नैसर्गिक उपाय किंवा कोणीतरी सांगितलेली गोष्ट असते. शेवटी माणूस थकतो आणि नेमकी कोणती माहिती विश्वास ठेवण्यासारखी आहे असा प्रश्न पडतो.",
  "As a clinician, I realized people don't need more loud opinions. They just want clear, unbiased information so they can decide for themselves.":
    "चिकित्सक म्हणून मला जाणवलं की लोकांना आणखी मोठमोठी मतं नकोत. त्यांना स्पष्ट आणि निष्पक्ष माहिती हवी आहे, जेणेकरून ते स्वतः निर्णय घेऊ शकतील.",
  "When it comes to your health, you deserve clarity—not noise.": "तुमच्या आरोग्याच्या बाबतीत तुम्हाला गोंधळ नाही, तर स्पष्ट समज मिळायला हवी.",
  "That’s why I created IHI.": "म्हणूनच मी IHI तयार केलं.",
  "We bring different healthcare approaches together in one neutral space, breaking down how each system views your body so you can clear your doubts and choose what feels right for you.":
    "वेगवेगळे आरोग्यविषयक दृष्टिकोन एका निष्पक्ष जागेत समजावून सांगतो, म्हणजे प्रत्येक पद्धत तुमच्या शरीराकडे कशी पाहते हे स्पष्ट होईल आणि तुम्ही स्वतःसाठी योग्य वाटणारा निर्णय घेऊ शकाल.",
  "Because when it comes to your health, you shouldn't feel lost. You should feel like an informed partner in your own care.":
    "कारण तुमच्या आरोग्याच्या बाबतीत तुम्हाला हरवल्यासारखं वाटायला नको. तुमच्या स्वतःच्या आरोग्याची काळजी घेताना तुम्ही समजून घेऊन सहभागी असायला हवं.",
  "Dr. Vedanti Shah, BDS": "डॉ. वेदांती शाह, बीडीएस",
  "Creator · Product Designer · Vibe Coder": "निर्मात्री · उत्पादन रचनाकार · तंत्रसर्जक"
});
/* Marathi + English language mode */
IHI_TRANSLATIONS["mr-en"] = Object.assign({}, IHI_TRANSLATIONS.mr, {
  "Home": "मुखपृष्ठ",
  "About": "About",
  "Health Intelligence Tool": "Health Intelligence Tool",
  "How to Use IHI": "IHI कसं वापरायचं",
  "Try the Tool →": "Tool वापरा →",
  "About IHI": "IHI बद्दल",
  "Three perspectives": "तीन perspectives",
  "The IHI journey": "IHI ची journey",
  "Tell us": "सांगा",
  "Choose": "निवडा",
  "Answer": "उत्तर द्या",
  "Understand": "समजून घ्या",
  "Ask deeper": "आणखी विचारा",
  "What next": "पुढे काय?",
  "What you can try": "तुम्ही काय try करू शकता",
  "What to avoid": "काय avoid करायचं",
  "Safety": "Safety",
  "Ask IHI": "IHI ला विचारा",
  "Try again": "पुन्हा try करा"
});



/* ============================================================
   HINDI + ENGLISH — COMPLETE COVERAGE
   Natural everyday Hinglish. No Marathi.
   ============================================================ */

Object.assign(IHI_TRANSLATIONS["hi-en"], {

  /* NAVIGATION */
  "About": "IHI ke baare mein",
  "Home": "Home",
  "Health Intelligence Tool": "Health Intelligence Tool",
  "How to Use IHI": "IHI kaise use karein",

  /* HOME */
  "Integrative Health Intelligence": "Integrative Health Intelligence",
  "Understanding your health shouldn't feel overwhelming.":
    "Apni health ko samajhna overwhelming nahi hona chahiye.",
  "Explore health questions across modern medicine, holistic care, and lifestyle guidance—explained side-by-side in plain language.":
    "Modern Medicine, holistic care aur lifestyle guidance ke through health questions ko simple language mein samjhein.",
  "Try the Tool →": "Tool try karein →",
  "How to use IHI": "IHI kaise use karein",
  "About IHI": "IHI ke baare mein",
  "Compare medical perspectives with clarity.":
    "Alag-alag medical perspectives ko clearly samjhein.",
  "Review one healthcare approach at a time so you get direct, focused guidance without conflicting noise.":
    "Ek time par ek healthcare approach explore karein, taaki guidance clear aur focused rahe.",
  "Three perspectives": "Teen perspectives",
  "One experience.": "Ek experience.",
  "Different ways of understanding.": "Samajhne ke alag tareeke.",

  /* APPROACHES */
  "Modern Medicine": "Modern Medicine",
  "Ayurveda": "Ayurveda",
  "Homeopathy": "Homeopathy",

  "Explore your experience through evidence-based clinical reasoning, symptoms, patterns, mechanisms and possible causes.":
    "Apne experience ko evidence-based clinical reasoning, symptoms, patterns, body mechanisms aur possible causes ke through samjhein.",

  "Explore your experience through Ayurvedic concepts such as doshas, Agni, Nidana and patterns of imbalance.":
    "Apne experience ko doshas, Agni, Nidana aur imbalance ke Ayurvedic concepts ke through samjhein.",

  "Explore your experience through the individual pattern of symptoms, sensations, timing, triggers and associated experiences.":
    "Symptoms, sensations, timing, triggers aur associated experiences ke individual pattern ko samjhein.",

  /* JOURNEY */
  "The IHI journey": "IHI ka journey",
  "From a question to clearer understanding.": "Ek question se clearer understanding tak.",
  "Tell us": "Humein batayein",
  "Describe what you're experiencing in everyday language.":
    "Aap kya experience kar rahe hain, use everyday language mein batayein.",
  "Choose": "Choose karein",
  "Select the healthcare approach you want to explore.":
    "Jo healthcare approach explore karna hai, use choose karein.",
  "Answer": "Answer karein",
  "Respond to a few questions designed around your concern.":
    "Aapke concern ke according kuch questions ke answers dein.",
  "Understand": "Samjhein",
  "See how that framework makes sense of your experience.":
    "Dekhein ki chosen framework aapke experience ko kaise samajhta hai.",
  "Ask deeper": "Aur poochhein",
  "Keep the conversation going with IHI.":
    "IHI ke saath conversation continue rakhein.",
  "What next": "Aage kya?",
  "Explore practical next steps, what to avoid and safety guidance.":
    "Practical next steps, kya avoid karein aur safety guidance dekhein.",

  /* TOOL */
  "What are you trying to understand?":
    "Aap kya samajhna chahte hain?",
  "Start with your own words. You don't need to know the medical term.":
    "Apne words mein shuru karein. Medical term pata hona zaroori nahi hai.",
  "Tell IHI what you're experiencing.":
    "IHI ko batayein ki aap kya experience kar rahe hain.",
  "You can describe a symptom, a report finding, a health question, or something you've been wondering about.":
    "Aap symptom, report finding, health question ya koi bhi doubt describe kar sakte hain.",
  "Your exploration will appear here.":
    "Aapki exploration yahan dikhegi.",
  "Explore →": "Explore karein →",
  "🎙 Speak": "🎙 Bolein",
  "🎙 Listening…": "🎙 Sun raha hai…",

  /* FRAMEWORK SELECTION */
  "Step 1": "Step 1",
  "Choose how you want to explore this.":
    "Aap ise kis tarah explore karna chahte hain, choose karein.",
  "The questions and interpretation change with the framework you choose.":
    "Aap jo framework choose karte hain, uske according questions aur interpretation change hote hain.",

  "Evidence-based biomedical reasoning and plausible medical causes.":
    "Evidence-based medical reasoning aur possible medical causes ko samjhein.",

  "Explore the concern through Ayurvedic concepts and traditional reasoning.":
    "Apne concern ko Ayurvedic concepts aur traditional reasoning ke through samjhein.",

  "Explore the individual symptom pattern through Homeopathic theory.":
    "Symptoms ke individual pattern, sensations, timing aur triggers ko samjhein.",

  /* QUESTIONS */
  "A few questions before we interpret it.":
    "Interpret karne se pehle kuch questions.",
  "Answer what fits. Every question also lets you describe your experience in your own words.":
    "Jo aap par fit hota hai uska answer dein. Aap har question mein apna experience apne words mein bhi bata sakte hain.",
  "Continue →": "Continue karein →",
  "Or tell us in your own words…":
    "Ya apne words mein batayein…",

  /* ANALYSIS */
  "What may be happening?": "Kya ho sakta hai?",
  "Why might this be happening?": "Aisa kyun ho sakta hai?",
  "Going a little deeper": "Thoda aur deeper samjhein",
  "What next?": "Aage kya?",
  "What you can try": "Aap kya try kar sakte hain",
  "What to avoid": "Kya avoid karein",
  "Safety": "Safety",
  "Ask IHI": "IHI se poochhein",
  "Ask another question": "Ek aur question poochhein",
  "What would you like to understand next?":
    "Aap next kya samajhna chahte hain?",
  "What else would you like to understand?":
    "Aap aur kya samajhna chahte hain?",
  "Continue → What you can try":
    "Continue karein → Aap kya try kar sakte hain",
  "Ask IHI →": "IHI se poochhein →",

  /* HOW TO USE */
  "Don't search for an answer. Explore the question.":
    "Sirf answer search mat karein. Question ko explore karein.",
  "IHI is designed as a guided exploration. You start with what you know, choose a perspective, answer simple questions, and gradually build a clearer picture.":
    "IHI ek guided exploration hai. Jo aapko pata hai usse shuru karein, ek perspective choose karein, simple questions ke answers dein aur dheere-dheere clearer picture samjhein.",
  "Start with your experience in your own words. No medical vocabulary is required.":
    "Apne experience ko apne words mein batayein. Medical vocabulary ki zaroorat nahi hai.",
  "Explore Modern Medicine, Ayurveda or Homeopathy separately. IHI does not blend the frameworks into one explanation.":
    "Modern Medicine, Ayurveda ya Homeopathy ko separately explore karein. IHI in frameworks ko ek explanation mein mix nahi karta.",
  "IHI asks a small number of questions relevant to your concern and the framework you've chosen.":
    "IHI aapke concern aur chosen framework ke according kuch relevant questions poochta hai.",
  "See what may be happening and why that framework interprets the experience in that way.":
    "Dekhein kya ho sakta hai aur chosen framework aapke experience ko us tarah kyun samajhta hai.",
  "Ask IHI another question without restarting the entire exploration. Your earlier context stays with the conversation.":
    "Puri exploration restart kiye bina IHI se ek aur question poochhein. Aapka pehle ka context conversation mein bana rehta hai.",
  "Explore practical things you can try, what to avoid and important safety or red-flag guidance.":
    "Practical cheezein explore karein, kya avoid karein aur important safety ya red-flag guidance dekhein.",

  /* ABOUT */
  "About IHI": "IHI ke baare mein",
  "About the Creator": "Creator ke baare mein",

  "Dr. Vedanti Shah is a dentist, creator, and curious mind exploring where healthcare, technology, research, and design meet.":
    "Dr. Vedanti Shah dentist, creator aur curious mind hain. Woh healthcare, technology, research aur design ke intersection ko explore karti hain.",

  "She enjoys going deep into ideas, researching problems, connecting perspectives, and finding creative ways to make sense of complex things.":
    "Unhe ideas mein deeply jaana, problems par research karna, different perspectives ko connect karna aur complex cheezon ko samajhne ke creative tareeke dhoondhna pasand hai.",

  "Her interests span healthcare, research, technology, AI, product thinking, design, and art. She brings these interests together through building, experimenting, and creating products that turn ideas into experiences.":
    "Unki interests healthcare, research, technology, AI, product thinking, design aur art tak hain. Woh building, experimenting aur products create karne ke through in interests ko ek saath laati hain, jo ideas ko real experiences mein badalte hain.",

  "IHI is one of the products she created.":
    "IHI unke banaye hue products mein se ek hai.",

  "Why IHI Exists": "IHI kyun bana",

  "I spent years studying healthcare and practicing, and I realized something—people carry so much health confusion every single day. But it's not just a medical thing—it happens everywhere.":
    "Maine healthcare ki padhai aur practice mein kai saal bitaye, aur mujhe ek cheez samajh aayi—log har din health ko lekar bahut confusion ke saath jeete hain. Aur ye sirf medical problem nahi hai—ye har jagah hota hai.",

  "At family dinners, social gatherings, WhatsApp groups, or just sitting with a lab report at home—it’s the same story again and again:":
    "Family dinner mein, social gatherings mein, WhatsApp groups mein, ya ghar par lab report lekar baithe hue—story baar-baar wahi hoti hai:",

  "What does this medical term on my report actually mean?":
    "Meri report mein likhe is medical term ka actual matlab kya hai?",

  "I Googled my symptoms at 2 AM and now I’m terrified.":
    "Maine raat ke 2 baje apne symptoms Google kiye aur ab main dar gaya hoon.",

  "Skip those heavy pills, just try this home remedy!":
    "Itni medicines mat lo, bas ye home remedy try karo!",

  "My family says one thing, my doctor says another—who am I supposed to listen to?":
    "Meri family kuch aur bolti hai, mere doctor kuch aur—main kiski baat sunu?",

  "Everyone has an opinion, a natural cure, or a friend-of-a-friend story. Eventually, it leaves you exhausted, wondering what information you can actually trust.":
    "Har kisi ke paas apni opinion, koi natural cure ya friend-of-a-friend ki story hoti hai. Aakhir mein insaan thak jaata hai aur sochta hai ki actually kis information par trust karein.",

  "As a clinician, I realized people don't need more loud opinions. They just want clear, unbiased information so they can decide for themselves.":
    "Clinician ke roop mein mujhe samajh aaya ki logon ko aur loud opinions nahi chahiye. Unhe clear aur unbiased information chahiye, taaki woh khud decision le sakein.",

  "When it comes to your health, you deserve clarity—not noise.":
    "Health ki baat aati hai, toh aap clarity deserve karte hain—noise nahi.",

  "That’s why I created IHI.":
    "Isi liye maine IHI create kiya.",

  "We bring different healthcare approaches together in one neutral space, breaking down how each system views your body so you can clear your doubts and choose what feels right for you.":
    "Hum different healthcare approaches ko ek neutral space mein samjhate hain aur batate hain ki har approach aapke body aur experience ko kaise dekhti hai, taaki aapke doubts clear ho sakein aur aap khud decide kar sakein ki aapke liye kya right lagta hai.",

  "Because when it comes to your health, you shouldn't feel lost. You should feel like an informed partner in your own care.":
    "Kyuki health ki baat aati hai, toh aapko lost feel nahi hona chahiye. Aapko apni care mein informed partner feel karna chahiye.",

  "Dr. Vedanti Shah, BDS":
    "Dr. Vedanti Shah, BDS",

  "Creator · Product Designer · Vibe Coder":
    "Creator · Product Designer · Vibe Coder",

  /* STATUS / SPARK */
  "Something went wrong": "Kuch problem ho gayi",
  "Try again": "Dobara try karein",
  "Building questions around your complaint…":
    "Aapke concern ke according questions ban rahe hain…",
  "Putting your story together…":
    "Aapki story ko samjha ja raha hai…",
  "IHI is thinking…":
    "IHI soch raha hai…",
  "Another spark →":
    "Ek aur spark →",
  "✦ IHI Spark":
    "✦ IHI Spark"
});


/* ============================================================
   SAFETY ROUTER, DISCLAIMERS AND ERROR MESSAGES
   New strings for Phase 3. Hindi and Marathi wording should be
   reviewed by native speakers before wider release.
   ============================================================ */

Object.assign(IHI_TRANSLATIONS.hi, {
  "Checking your message…": "आपका संदेश जाँचा जा रहा है…",
  "Important": "ज़रूरी",
  "This may be an emergency": "यह आपातकालीन स्थिति हो सकती है",
  "If you or someone else is in danger, call your local emergency number now. IHI shares general information and cannot assess an emergency.": "अगर आप या कोई और खतरे में हैं, तो अभी अपने स्थानीय आपातकालीन नंबर पर फ़ोन करें। IHI सिर्फ़ सामान्य जानकारी देता है और आपातकाल का आकलन नहीं कर सकता।",
  "United States: call 911": "अमेरिका: 911 पर कॉल करें",
  "India: call 112": "भारत: 112 पर कॉल करें",
  "Elsewhere: call your local emergency services": "अन्य देश: अपनी स्थानीय आपातकालीन सेवा को कॉल करें",
  "This isn't an emergency — continue": "यह आपातकाल नहीं है — आगे बढ़ें",
  "Start over": "फिर से शुरू करें",
  "You're not alone — help is available": "आप अकेले नहीं हैं — मदद उपलब्ध है",
  "If you are thinking about harming yourself or ending your life, please reach out to someone right now. You do not have to face this alone.": "अगर आप खुद को नुकसान पहुँचाने या अपनी जान लेने के बारे में सोच रहे हैं, तो कृपया अभी किसी से संपर्क करें। आपको इसका सामना अकेले नहीं करना है।",
  "United States: call or text 988 (Suicide & Crisis Lifeline)": "अमेरिका: 988 पर कॉल या टेक्स्ट करें (Suicide & Crisis Lifeline)",
  "India: call Tele-MANAS at 14416, or dial 112 in an emergency": "भारत: Tele-MANAS को 14416 पर कॉल करें, या आपातकाल में 112 डायल करें",
  "Elsewhere: contact your local emergency number or crisis line": "अन्य देश: अपने स्थानीय आपातकालीन नंबर या क्राइसिस हेल्पलाइन से संपर्क करें",
  "If you can, tell someone you trust how you are feeling and stay with them.": "हो सके तो किसी भरोसेमंद व्यक्ति को बताएँ कि आप कैसा महसूस कर रहे हैं और उनके साथ रहें।",
  "Go back": "वापस जाएँ",
  "IHI is for health questions": "IHI स्वास्थ्य से जुड़े सवालों के लिए है",
  "IHI helps you understand health concerns. It can't help with that request. Please ask a question about your health or symptoms.": "IHI आपको स्वास्थ्य संबंधी चिंताओं को समझने में मदद करता है। यह उस अनुरोध में मदद नहीं कर सकता। कृपया अपने स्वास्थ्य या लक्षणों के बारे में सवाल पूछें।",
  "Ask a health question": "स्वास्थ्य से जुड़ा सवाल पूछें",
  "General information only — not medical advice.": "केवल सामान्य जानकारी — चिकित्सीय सलाह नहीं।",
  "IHI shares general information to help you understand your health. It is not medical advice, diagnosis or treatment. In an emergency, call 911 (US), 112 (India) or your local emergency number.": "IHI आपकी सेहत को समझने में मदद के लिए सामान्य जानकारी देता है। यह चिकित्सीय सलाह, निदान या इलाज नहीं है। आपातकाल में 911 (अमेरिका), 112 (भारत) या अपने स्थानीय आपातकालीन नंबर पर कॉल करें।",
  "IHI is an educational tool. It does not provide medical advice, diagnosis or treatment. Always speak to a qualified healthcare professional about your health.": "IHI एक शैक्षणिक साधन है। यह चिकित्सीय सलाह, निदान या इलाज नहीं देता। अपनी सेहत के बारे में हमेशा किसी योग्य स्वास्थ्य विशेषज्ञ से बात करें।",
  "You're sending requests quickly. Please wait a minute and try again.": "आप बहुत तेज़ी से अनुरोध भेज रहे हैं। कृपया एक मिनट रुककर फिर कोशिश करें।",
  "We couldn't complete that right now. Please try again.": "अभी यह पूरा नहीं हो सका। कृपया फिर कोशिश करें।"
});

Object.assign(IHI_TRANSLATIONS.mr, {
  "Checking your message…": "तुमचा संदेश तपासला जात आहे…",
  "Important": "महत्त्वाचं",
  "This may be an emergency": "ही आपत्कालीन परिस्थिती असू शकते",
  "If you or someone else is in danger, call your local emergency number now. IHI shares general information and cannot assess an emergency.": "तुम्ही किंवा इतर कोणी धोक्यात असाल, तर आत्ताच तुमच्या भागातील आपत्कालीन क्रमांकावर फोन करा. IHI फक्त सामान्य माहिती देतो आणि आपत्कालीन परिस्थितीचं मूल्यमापन करू शकत नाही.",
  "United States: call 911": "अमेरिका: 911 वर कॉल करा",
  "India: call 112": "भारत: 112 वर कॉल करा",
  "Elsewhere: call your local emergency services": "इतर ठिकाणी: तुमच्या भागातील आपत्कालीन सेवेला कॉल करा",
  "This isn't an emergency — continue": "ही आपत्कालीन परिस्थिती नाही — पुढे जा",
  "Start over": "पुन्हा सुरू करा",
  "You're not alone — help is available": "तुम्ही एकटे नाही — मदत उपलब्ध आहे",
  "If you are thinking about harming yourself or ending your life, please reach out to someone right now. You do not have to face this alone.": "जर तुम्ही स्वतःला इजा करण्याचा किंवा आयुष्य संपवण्याचा विचार करत असाल, तर कृपया आत्ताच कोणाशी तरी संपर्क साधा. तुम्हाला हे एकट्याने सहन करावं लागणार नाही.",
  "United States: call or text 988 (Suicide & Crisis Lifeline)": "अमेरिका: 988 वर कॉल किंवा टेक्स्ट करा (Suicide & Crisis Lifeline)",
  "India: call Tele-MANAS at 14416, or dial 112 in an emergency": "भारत: Tele-MANAS ला 14416 वर कॉल करा, किंवा आपत्कालात 112 डायल करा",
  "Elsewhere: contact your local emergency number or crisis line": "इतर ठिकाणी: तुमच्या भागातील आपत्कालीन क्रमांक किंवा क्रायसिस हेल्पलाइनशी संपर्क साधा",
  "If you can, tell someone you trust how you are feeling and stay with them.": "शक्य असल्यास तुमच्या विश्वासातील व्यक्तीला तुम्हाला कसं वाटतंय ते सांगा आणि त्यांच्यासोबत राहा.",
  "Go back": "मागे जा",
  "IHI is for health questions": "IHI आरोग्याशी संबंधित प्रश्नांसाठी आहे",
  "IHI helps you understand health concerns. It can't help with that request. Please ask a question about your health or symptoms.": "IHI तुम्हाला आरोग्याशी संबंधित समस्या समजून घेण्यात मदत करतो. तो त्या विनंतीमध्ये मदत करू शकत नाही. कृपया तुमच्या आरोग्याबद्दल किंवा लक्षणांबद्दल प्रश्न विचारा.",
  "Ask a health question": "आरोग्याबद्दल प्रश्न विचारा",
  "General information only — not medical advice.": "फक्त सामान्य माहिती — वैद्यकीय सल्ला नाही.",
  "IHI shares general information to help you understand your health. It is not medical advice, diagnosis or treatment. In an emergency, call 911 (US), 112 (India) or your local emergency number.": "IHI तुमचं आरोग्य समजून घेण्यासाठी सामान्य माहिती देतो. ही वैद्यकीय सल्ला, निदान किंवा उपचार नाही. आपत्कालात 911 (अमेरिका), 112 (भारत) किंवा तुमच्या भागातील आपत्कालीन क्रमांकावर कॉल करा.",
  "IHI is an educational tool. It does not provide medical advice, diagnosis or treatment. Always speak to a qualified healthcare professional about your health.": "IHI हे शैक्षणिक साधन आहे. ते वैद्यकीय सल्ला, निदान किंवा उपचार देत नाही. तुमच्या आरोग्याबद्दल नेहमी पात्र आरोग्य तज्ज्ञाशी बोला.",
  "You're sending requests quickly. Please wait a minute and try again.": "तुम्ही खूप वेगाने विनंत्या पाठवत आहात. कृपया एक मिनिट थांबून पुन्हा प्रयत्न करा.",
  "We couldn't complete that right now. Please try again.": "सध्या हे पूर्ण होऊ शकलं नाही. कृपया पुन्हा प्रयत्न करा."
});

Object.assign(IHI_TRANSLATIONS["hi-en"], {
  "Checking your message…": "Aapka message check ho raha hai…",
  "Important": "Zaroori",
  "This may be an emergency": "Yeh emergency ho sakti hai",
  "If you or someone else is in danger, call your local emergency number now. IHI shares general information and cannot assess an emergency.": "Agar aap ya koi aur khatre mein hai, toh abhi apne local emergency number par call karein. IHI sirf general information deta hai aur emergency ko assess nahi kar sakta.",
  "United States: call 911": "United States: 911 par call karein",
  "India: call 112": "India: 112 par call karein",
  "Elsewhere: call your local emergency services": "Kahin aur: apni local emergency services ko call karein",
  "This isn't an emergency — continue": "Yeh emergency nahi hai — continue karein",
  "Start over": "Dobara shuru karein",
  "You're not alone — help is available": "Aap akele nahi hain — madad available hai",
  "If you are thinking about harming yourself or ending your life, please reach out to someone right now. You do not have to face this alone.": "Agar aap khud ko nuksan pahunchane ya apni jaan lene ke baare mein soch rahe hain, toh please abhi kisi se baat karein. Aapko yeh akele face nahi karna hai.",
  "United States: call or text 988 (Suicide & Crisis Lifeline)": "United States: 988 par call ya text karein (Suicide & Crisis Lifeline)",
  "India: call Tele-MANAS at 14416, or dial 112 in an emergency": "India: Tele-MANAS ko 14416 par call karein, ya emergency mein 112 dial karein",
  "Elsewhere: contact your local emergency number or crisis line": "Kahin aur: apne local emergency number ya crisis line se contact karein",
  "If you can, tell someone you trust how you are feeling and stay with them.": "Ho sake toh kisi trusted person ko batayein ki aap kaisa feel kar rahe hain aur unke saath rahein.",
  "Go back": "Wapas jaayein",
  "IHI is for health questions": "IHI health questions ke liye hai",
  "IHI helps you understand health concerns. It can't help with that request. Please ask a question about your health or symptoms.": "IHI aapko health concerns samajhne mein help karta hai. Woh is request mein help nahi kar sakta. Please apni health ya symptoms ke baare mein question poochhein.",
  "Ask a health question": "Health question poochhein",
  "General information only — not medical advice.": "Sirf general information — medical advice nahi.",
  "IHI shares general information to help you understand your health. It is not medical advice, diagnosis or treatment. In an emergency, call 911 (US), 112 (India) or your local emergency number.": "IHI aapki health samajhne mein help ke liye general information deta hai. Yeh medical advice, diagnosis ya treatment nahi hai. Emergency mein 911 (US), 112 (India) ya apne local emergency number par call karein.",
  "IHI is an educational tool. It does not provide medical advice, diagnosis or treatment. Always speak to a qualified healthcare professional about your health.": "IHI ek educational tool hai. Yeh medical advice, diagnosis ya treatment nahi deta. Apni health ke baare mein hamesha kisi qualified healthcare professional se baat karein.",
  "You're sending requests quickly. Please wait a minute and try again.": "Aap bahut jaldi requests bhej rahe hain. Please ek minute ruk kar dobara try karein.",
  "We couldn't complete that right now. Please try again.": "Abhi yeh complete nahi ho saka. Please dobara try karein."
});

Object.assign(IHI_TRANSLATIONS["mr-en"], {
  "Checking your message…": "तुमचा message check होत आहे…",
  "Important": "Important",
  "This may be an emergency": "ही emergency असू शकते",
  "If you or someone else is in danger, call your local emergency number now. IHI shares general information and cannot assess an emergency.": "तुम्ही किंवा इतर कोणी danger मध्ये असाल, तर आत्ताच तुमच्या local emergency number वर call करा. IHI फक्त general information देतो आणि emergency assess करू शकत नाही.",
  "United States: call 911": "United States: 911 वर call करा",
  "India: call 112": "India: 112 वर call करा",
  "Elsewhere: call your local emergency services": "इतर ठिकाणी: तुमच्या local emergency services ला call करा",
  "This isn't an emergency — continue": "ही emergency नाही — पुढे जा",
  "Start over": "पुन्हा सुरू करा",
  "You're not alone — help is available": "तुम्ही एकटे नाही — help available आहे",
  "If you are thinking about harming yourself or ending your life, please reach out to someone right now. You do not have to face this alone.": "जर तुम्ही स्वतःला harm करण्याचा किंवा आयुष्य संपवण्याचा विचार करत असाल, तर please आत्ताच कोणाशी तरी बोला. तुम्हाला हे एकट्याने face करावं लागणार नाही.",
  "United States: call or text 988 (Suicide & Crisis Lifeline)": "United States: 988 वर call किंवा text करा (Suicide & Crisis Lifeline)",
  "India: call Tele-MANAS at 14416, or dial 112 in an emergency": "India: Tele-MANAS ला 14416 वर call करा, किंवा emergency मध्ये 112 dial करा",
  "Elsewhere: contact your local emergency number or crisis line": "इतर ठिकाणी: तुमच्या local emergency number किंवा crisis line शी contact करा",
  "If you can, tell someone you trust how you are feeling and stay with them.": "शक्य असेल तर तुमच्या trusted व्यक्तीला तुम्हाला कसं वाटतंय ते सांगा आणि त्यांच्यासोबत राहा.",
  "Go back": "मागे जा",
  "IHI is for health questions": "IHI health questions साठी आहे",
  "IHI helps you understand health concerns. It can't help with that request. Please ask a question about your health or symptoms.": "IHI तुम्हाला health concerns समजून घ्यायला help करतो. तो त्या request मध्ये help करू शकत नाही. Please तुमच्या health किंवा symptoms बद्दल question विचारा.",
  "Ask a health question": "Health question विचारा",
  "General information only — not medical advice.": "फक्त general information — medical advice नाही.",
  "IHI shares general information to help you understand your health. It is not medical advice, diagnosis or treatment. In an emergency, call 911 (US), 112 (India) or your local emergency number.": "IHI तुमची health समजून घ्यायला general information देतो. हा medical advice, diagnosis किंवा treatment नाही. Emergency मध्ये 911 (US), 112 (India) किंवा तुमच्या local emergency number वर call करा.",
  "IHI is an educational tool. It does not provide medical advice, diagnosis or treatment. Always speak to a qualified healthcare professional about your health.": "IHI एक educational tool आहे. ते medical advice, diagnosis किंवा treatment देत नाही. तुमच्या health बद्दल नेहमी qualified healthcare professional शी बोला.",
  "You're sending requests quickly. Please wait a minute and try again.": "तुम्ही खूप fast requests पाठवत आहात. Please एक minute थांबून पुन्हा try करा.",
  "We couldn't complete that right now. Please try again.": "आत्ता हे complete होऊ शकलं नाही. Please पुन्हा try करा."
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


function applyHinglishAbout() {
  const select = document.getElementById("siteLanguage");
  if (!select || select.value !== "hi-en") return;

  const about = document.querySelector(".about-page");
  if (!about) return;

  const eyebrow = about.querySelector(".about-heading .eyebrow");
  const titles = about.querySelectorAll(".story-title");
  const creator = about.querySelector(".about-column.creator");
  const creatorHeading = creator?.querySelector("h3");
  const creatorPs = creator?.querySelectorAll("p");
  const story = about.querySelector(".about-column:not(.creator) .story");
  const storyPs = story?.querySelectorAll("p");
  const bullets = story?.querySelectorAll("li");

  if (eyebrow) eyebrow.textContent = "IHI ke baare mein";

  if (titles[0]) titles[0].textContent = "Creator ke baare mein";
  if (titles[1]) titles[1].textContent = "IHI kyun bana";

  if (creatorHeading) {
    creatorHeading.textContent =
      "Dr. Vedanti Shah dentist, creator aur curious mind hain. Woh healthcare, technology, research aur design ke intersection ko explore karti hain.";
  }

  if (creatorPs?.[0]) {
    creatorPs[0].textContent =
      "Unhe ideas mein deeply jaana, problems par research karna, different perspectives ko connect karna aur complex cheezon ko samajhne ke creative tareeke dhoondhna pasand hai.";
  }

  if (creatorPs?.[1]) {
    creatorPs[1].textContent =
      "Unki interests healthcare, research, technology, AI, product thinking, design aur art tak hain. Woh building, experimenting aur products create karne ke through in interests ko ek saath laati hain, jo ideas ko real experiences mein badalte hain.";
  }

  if (creatorPs?.[2]) {
    creatorPs[2].textContent =
      "IHI unke banaye hue products mein se ek hai.";
  }

  if (storyPs?.[0]) {
    storyPs[0].textContent =
      "Maine healthcare ki padhai aur practice mein kai saal bitaye, aur mujhe ek cheez samajh aayi—log har din health ko lekar bahut confusion ke saath jeete hain. Aur ye sirf medical problem nahi hai—ye har jagah hota hai.";
  }

  if (storyPs?.[1]) {
    storyPs[1].textContent =
      "Family dinner mein, social gatherings mein, WhatsApp groups mein, ya ghar par lab report lekar baithe hue—story baar-baar wahi hoti hai:";
  }

  if (bullets?.[0]) {
    bullets[0].textContent =
      "Meri report mein likhe is medical term ka actual matlab kya hai?";
  }

  if (bullets?.[1]) {
    bullets[1].textContent =
      "Maine raat ke 2 baje apne symptoms Google kiye aur ab main dar gaya hoon.";
  }

  if (bullets?.[2]) {
    bullets[2].textContent =
      "Itni medicines mat lo, bas ye home remedy try karo!";
  }

  if (bullets?.[3]) {
    bullets[3].textContent =
      "Meri family kuch aur bolti hai, mere doctor kuch aur—main kiski baat sunu?";
  }

  if (storyPs?.[2]) {
    storyPs[2].textContent =
      "Har kisi ke paas apni opinion, koi natural cure ya friend-of-a-friend ki story hoti hai. Aakhir mein insaan thak jaata hai aur sochta hai ki actually kis information par trust karein.";
  }

  if (storyPs?.[3]) {
    storyPs[3].textContent =
      "Clinician ke roop mein mujhe samajh aaya ki logon ko aur loud opinions nahi chahiye. Unhe clear aur unbiased information chahiye, taaki woh khud decision le sakein.";
  }

  if (storyPs?.[4]) {
    storyPs[4].textContent =
      "Health ki baat aati hai, toh aap clarity deserve karte hain—noise nahi.";
  }

  if (storyPs?.[5]) {
    storyPs[5].textContent =
      "Isi liye maine IHI create kiya.";
  }

  if (storyPs?.[6]) {
    storyPs[6].textContent =
      "Hum different healthcare approaches ko ek neutral space mein samjhate hain aur batate hain ki har approach aapke body aur experience ko kaise dekhti hai, taaki aapke doubts clear ho sakein aur aap khud decide kar sakein ki aapke liye kya right lagta hai.";
  }

  if (storyPs?.[7]) {
    const textNode = Array.from(storyPs[7].childNodes)
      .find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());

    if (textNode) {
      textNode.textContent =
        "\n              Kyuki health ki baat aati hai, toh aapko lost feel nahi hona chahiye. Aapko apni care mein informed partner feel karna chahiye.\n\n              ";
    }
  }
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

  applyHinglishAbout();
}


let ihiState = {
  complaint: "",
  framework: "",
  answers: [],
  history: [],
  ackComplaint: false
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
      ackComplaint: ihiState.ackComplaint === true,
      ...extra
    })
  });

  let data = {};

  try {
    data = await response.json();
  } catch (_) {}

  if (!response.ok) {
    console.error("IHI API error", response.status, data.error);

    throw new Error(
      response.status === 429
        ? "You're sending requests quickly. Please wait a minute and try again."
        : "We couldn't complete that right now. Please try again."
    );
  }

  return data;
}


/* ============================================================
   SAFETY ROUTER — cards shown when the API flags a message
   ============================================================ */

function ihiResetTool() {
  ihiState = {
    complaint: "",
    framework: "",
    answers: [],
    history: [],
    ackComplaint: false
  };

  results.innerHTML =
    '<p class="results-empty">Your exploration will appear here.</p>';

  applySiteLanguage();

  concern.focus();
  concern.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

/* Returns true when the response was a router result and has been shown. */
function ihiRoute(data, onContinue) {
  const route = data && data.route;

  if (!route || route === "ok") return false;

  if (route === "crisis") {
    show(`
      <section class="section">
        <div class="eyebrow">Important</div>

        <h2>You're not alone — help is available</h2>

        <div class="card router" role="alert">
          <p>If you are thinking about harming yourself or ending your life, please reach out to someone right now. You do not have to face this alone.</p>

          <ul class="list router-lines">
            <li>United States: call or text 988 (Suicide & Crisis Lifeline)</li>
            <li>India: call Tele-MANAS at 14416, or dial 112 in an emergency</li>
            <li>Elsewhere: contact your local emergency number or crisis line</li>
          </ul>

          <p>If you can, tell someone you trust how you are feeling and stay with them.</p>

          <div class="actions">
            <button type="button" class="btn option" id="ihiRouterBack">Go back</button>
          </div>
        </div>
      </section>
    `);

    document.getElementById("ihiRouterBack")
      .addEventListener("click", ihiResetTool);

    return true;
  }

  if (route === "emergency") {
    show(`
      <section class="section">
        <div class="eyebrow">Important</div>

        <h2>This may be an emergency</h2>

        <div class="card router" role="alert">
          <p>If you or someone else is in danger, call your local emergency number now. IHI shares general information and cannot assess an emergency.</p>

          <ul class="list router-lines">
            <li>United States: call 911</li>
            <li>India: call 112</li>
            <li>Elsewhere: call your local emergency services</li>
          </ul>

          <div class="actions">
            ${onContinue
              ? '<button type="button" class="btn option" id="ihiRouterContinue">This isn\'t an emergency — continue</button>'
              : ""}
            <button type="button" class="btn option" id="ihiRouterBack">Start over</button>
          </div>
        </div>
      </section>
    `);

    document.getElementById("ihiRouterBack")
      .addEventListener("click", ihiResetTool);

    if (onContinue) {
      document.getElementById("ihiRouterContinue")
        .addEventListener("click", onContinue);
    }

    return true;
  }

  if (route === "off_topic") {
    show(`
      <section class="section">
        <h2>IHI is for health questions</h2>

        <div class="card router">
          <p>IHI helps you understand health concerns. It can't help with that request. Please ask a question about your health or symptoms.</p>

          <div class="actions">
            <button type="button" class="btn option" id="ihiRouterBack">Ask a health question</button>
          </div>
        </div>
      </section>
    `);

    document.getElementById("ihiRouterBack")
      .addEventListener("click", ihiResetTool);

    return true;
  }

  return false;
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

function ihi(value) {
  return ihiT(value);
}

function voiceButton(id) {
  return `<button type="button" class="btn option" id="` +
    id + `" style="margin-top:10px">${ihi("🎙 Speak")}</button>`;
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

      <p class="disclaimer">General information only — not medical advice.</p>

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

      <p class="disclaimer">General information only — not medical advice.</p>

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

async function showAnalysis(opts) {
  busy("Putting your story together…");

  const ack = !!(opts && opts.ack === true);

  try {
    const data = await ihiCall("analysis", ack ? { ack: true } : {});

    if (ihiRoute(data, () => showAnalysis({ ack: true }))) return;

    ihiState.history.push({
      type: "analysis",
      data
    });

    renderAnalysisPage(data);

  } catch (error) {
    showError(error.message, showAnalysis);
  }
}

async function askIHI(opts) {
  const input = document.getElementById("ihiFollowup");
  const retry = opts && opts.question ? opts : null;
  const question = retry ? retry.question : (input?.value.trim() || "");
  const ack = !!(retry && retry.ack);

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
    const data = await ihiCall("ask", ack ? { question, ack: true } : { question });

    if (data.route && data.route !== "ok") {
      ihiState.history.pop();

      if (ihiRoute(data, () => askIHI({ question, ack: true }))) return;
    }

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

        <p class="disclaimer">General information only — not medical advice.</p>

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
    showError(error.message, () => askIHI({ question, ack }));
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

async function runTriage() {
  busy("Checking your message…");

  try {
    const data = await ihiCall("triage");

    const handled = ihiRoute(data, () => {
      ihiState.ackComplaint = true;
      chooseFramework();
    });

    if (!handled) chooseFramework();

  } catch (error) {
    showError(error.message, runTriage);
  }
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
      history: [],
      ackComplaint: false
    };

    runTriage();

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
