/* =====================================================================
  SamasyaSetu — all logic runs locally in the browser. No servers.
  ===================================================================== */

/* ---------- 1. i18n dictionary (EN / MR / HI) ---------- */
const I18N = {
en:{
 "nav.bridge":"The Bridge","nav.roles":"Who carries it","nav.report":"Report","nav.registry":"Registry","nav.partner":"Partner","nav.cta":"Report a problem",
 "hero.h1a":"Every problem reported here","hero.h1b":"has somewhere to go.",
 "hero.sub":"SamasyaSetu connects citizens who face real problems with universities, students and industries who can solve them — from first report to measurable social impact.",
 "hero.cta1":"Report a problem","hero.cta2":"Walk the bridge",
 "stat.s1":"Problems reported","stat.s2":"Partner institutions","stat.s3":"Prototypes & pilots","stat.s4":"Citizens impacted",
 "bridge.kicker":"The journey","bridge.title":"One bridge, ten stages, zero dead ends.",
 "bridge.hint":"Click any stage on the bridge to see what happens there.","bridge.actors":"Who's involved",
 "t1":"Report","d1":"A citizen reports a problem with photos, voice or location — in their own language.","a1":"Citizens · Local bodies",
 "t2":"AI Analysis","d2":"The system classifies the problem, scores its urgency and filters out duplicates.","a2":"AI engine",
 "t3":"University Match","d3":"Colleges and universities are ranked by departments, expertise and available facilities.","a3":"Platform · Registry",
 "t4":"Team Formation","d4":"Faculty guide the work while an interdisciplinary student team studies the problem on the ground.","a4":"Faculty · Students",
 "t5":"Industry Collaboration","d5":"Industries and startups add mentorship, funding and technical depth to the project.","a5":"Industry · Startups",
 "t6":"Prototype","d6":"The team builds a working prototype or pilot tuned to ground realities.","a6":"Student team",
 "t7":"Testing","d7":"The solution is tested on-site with real users, then iterated until it holds.","a7":"Team · Community",
 "t8":"Implementation","d8":"Local bodies and industry partners deploy the solution at scale.","a8":"Government · Industry",
 "t9":"Citizen Verification","d9":"The citizens who reported it verify — is the problem actually solved?","a9":"Citizens",
 "t10":"Social Impact","d10":"The whole journey is recorded as measurable, publicly visible social impact.","a10":"All of us",
 "roles.kicker":"Who carries it","roles.title":"Three groups, one load, shared.",
 "roles.r1t":"Citizens & local bodies","roles.r1d":"Spot problems, report them in their own language with photos, voice and location — then verify when it's actually fixed.","roles.r1v":"Report · Verify · Benefit",
 "roles.r2t":"Universities, faculty & students","roles.r2d":"Adopt matched problems as live projects. Study on the ground, build prototypes, publish what works.","roles.r2v":"Study · Build · Publish",
 "roles.r3t":"Industries & startups","roles.r3d":"Mentor teams, fund builds, open testing grounds and help ship solutions into real wards and villages.","roles.r3v":"Fund · Mentor · Deploy",
 "form.kicker":"Report a problem","form.title":"From your street to a student's desk.",
 "form.sub":"Describe it once. The AI sorts the category, scores the urgency, checks for duplicates and lines up the institutions best placed to take it on.",
 "f.name":"Your name (optional)","f.contact":"Phone or email (optional)","f.place":"Location","f.placePh":"Town / village / landmark",
 "f.loc":"Use my location","f.cat":"Category","f.auto":"Auto-detect (AI)","f.desc":"Describe the problem",
 "f.descPh":"What is happening, since when, who is affected…","f.photo":"Add a photo","f.voice":"Speak instead","f.voiceStop":"Stop listening",
 "f.submit":"Send it across the bridge","f.note":"No sign-up needed. Every report is public, tracked and answered.",
 "an.title":"Live analysis","an.waiting":"Start writing — the analysis reads along and updates in real time.",
 "an.cat":"Likely category","an.conf":"confidence","an.prio":"Urgency","an.kw":"Signals found","an.kwNone":"— none yet",
 "an.dup":"Duplicate check","an.dupNone":"No similar open reports.","an.dupFound":"Similar to","an.sim":"match",
 "an.inst":"Best-placed institutions","an.why":"Strength in","an.pending":"No signals yet.",
 "p.critical":"Critical","p.high":"High","p.medium":"Medium","p.normal":"Normal",
 "ok.title":"It's across.","ok.body":"Report #{id} is on the bridge — Stage 1 of 10. The top-matching institutions above have been notified.",
 "ok.view":"See it in the registry","ok.another":"Report another",
 "err.short":"Tell us a bit more — at least 20 characters.","err.voice":"Voice input isn't available in this browser.",
 "err.geo":"Couldn't get your location — please type it instead.","err.geoU":"Location is unavailable on this connection.",
 "reg.kicker":"The registry","reg.title":"Every report, out in the open.","reg.search":"Search problems, places…","reg.all":"All",
 "reg.none":"No reports match.","reg.count":"{n} report(s) shown · newest first",
 "m.filed":"Filed","m.place":"Location","m.lang":"Language","m.prio":"Urgency","m.inst":"Institution on it","m.none":"Not yet matched",
 "m.journey":"The journey","m.advance":"Advance stage (demo)","m.done":"This report has crossed the whole bridge.",
 "m.verif":"Citizen verification","m.verifB":"The person who reported it confirmed the problem is resolved.","m.impact":"Impact","m.close":"Close",
 "p.kicker":"Partnerships","p.title":"Carry the bridge with us.",
 "p.uniT":"Universities & colleges","p.uniD":"Adopt problems matched to your departments and expertise. Guide student teams. Publish outcomes your city can use.",
 "p.indT":"Industries & startups","p.indD":"Fund builds, mentor teams, open your testing grounds — and reach markets that genuinely need what you make.",
 "p.govt":"<b>Government & local bodies</b> can route verified civic problems and adopt ready solutions — write to setu@samasyasetu.in",
 "p.org":"Institution or company","p.email":"Official email","p.join":"Join as a partner",
 "p.okName":"Add your organisation's name.","p.okMail":"That email doesn't look right.","p.ok":"Welcome aboard — our partnerships team will reach out.",
 "footer.nav":"Explore","footer.contact":"Write to us",
 "footer.note":"A concept platform. All AI analysis runs locally in your browser — nothing leaves this page.",
 "footer.rights":"© 2025 SamasyaSetu · Built for Bharat's problem-solvers",
 "t.sub":"Report #{id} is on the bridge.","t.adv":"Moved to: {stage}","t.imp":"Social impact recorded — bridge complete.",
 "t.dup":"Possible duplicate — check the analysis panel.","langName":"English"
},
mr:{
 "nav.bridge":"सेतू","nav.roles":"कोण वाहून नेते","nav.report":"तक्रार","nav.registry":"नोंदवणी","nav.partner":"भागीदारी","nav.cta":"समस्या नोंदवा",
 "hero.h1a":"इथे नोंदवलेल्या प्रत्येक समस्येला","hero.h1b":"पुढे जाण्याचा मार्ग आहे.",
 "hero.sub":"समस्यासेतु प्रत्यक्ष समस्यांचा सामना करणाऱ्या नागरिकांना आणि त्या सोडवू शकणाऱ्या विद्यापीठे, विद्यार्थी व उद्योगांना जोडतो — पहिल्या तक्रारीपासून ते मोजता येणाऱ्या सामाजिक बदलापर्यंत.",
 "hero.cta1":"समस्या नोंदवा","hero.cta2":"सेतू पाहा",
 "stat.s1":"नोंदवलेल्या समस्या","stat.s2":"सहभागी संस्था","stat.s3":"बनवलेली प्रारूपे","stat.s4":"लाभार्थी नागरिक",
 "bridge.kicker":"प्रवास","bridge.title":"एक सेतू, दहा टप्पे, एकही गतिरोध नाही.",
 "bridge.hint":"सेतूवरील कोणताही टप्पा क्लिक करा आणि तिथे काय घडते ते पहा.","bridge.actors":"कोण सहभागी",
 "t1":"तक्रार नोंद","d1":"नागरिक स्वतःच्या भाषेत फोटो, आवाज किंवा स्थानासह समस्या नोंदवतात.","a1":"नागरिक · स्थानिक संस्था",
 "t2":"AI विश्लेषण","d2":"प्रणाली समस्येचे वर्गीकरण करते, तातडी ठरवते आणि सारख्या तक्रारी गाळते.","a2":"AI इंजिन",
 "t3":"विद्यापीठ निवड","d3":"विभाग, तज्ज्ञता आणि सुविधांनुसार महाविद्यालयांची योग्य निवड केली जाते.","a3":"प्रणाली · नोंदणी",
 "t4":"संघ निर्मिती","d4":"प्राध्यापकांच्या मार्गदर्शनाखाली विद्यार्थ्यांचा संघ बनतो व जागेचा स्थलनिरीक्षण अभ्यास करतो.","a4":"प्राध्यापक · विद्यार्थी",
 "t5":"उद्योग सहभाग","d5":"उद्योग व स्टार्टअप्स मार्गदर्शन, निधी आणि तांत्रिक बळ देतात.","a5":"उद्योग · स्टार्टअप्स",
 "t6":"प्रारूप तयारी","d6":"संघ जमिनीवरील वास्तवाला धरून चालणारे प्रारूप बनवतो.","a6":"विद्यार्थी संघ",
 "t7":"चाचणी","d7":"प्रारूप प्रत्यक्ष वापरकर्त्यांसोबत जागेवर चाचले जाते व सुधारले जाते.","a7":"संघ · समुदाय",
 "t8":"अंमलबजावणी","d8":"स्थानिक संस्था व उद्योग उपाय मोठ्या प्रमाणावर उभा करतात.","a8":"शासन · उद्योग",
 "t9":"नागरिक पडताळणी","d9":"तक्रार देणारा नागरिकच ठरवतो — समस्या खरोखर सुटली का?","a9":"नागरिक",
 "t10":"सामाजिक परिणाम","d10":"संपूर्ण प्रवास मोजता येणाऱ्या, सर्वसमोर असलेल्या सामाजिक बदलात नोंदवला जातो.","a10":"आपण सर्वजण",
 "roles.kicker":"कोण वाहून नेते","roles.title":"तीन गट, एकच वजन, भागभागी विभागलेले.",
 "roles.r1t":"नागरिक व स्थानिक संस्था","roles.r1d":"समस्या ओळखतात, स्वतःच्या भाषेत फोटो, आवाज आणि स्थानासह नोंदवतात — आणि खरोखर दुरुस्त झाल्यावर पडताळतात.","roles.r1v":"नोंद · पडताळणी · लाभ",
 "roles.r2t":"विद्यापीठे, प्राध्यापक व विद्यार्थी","roles.r2d":"जुळलेल्या समस्या थेट प्रकल्प म्हणून स्वीकारतात. जागेवर अभ्यास करतात, प्रारूप बनवतात, जे चालते ते प्रकाशित करतात.","roles.r2v":"अभ्यास · निर्मिती · प्रकाशन",
 "roles.r3t":"उद्योग व स्टार्टअप्स","roles.r3d":"संघांना मार्गदर्शन, निधी, चाचणीची मैदाने देतात आणि उपाय खऱ्या वस्त्यांपर्यंत पोहोचवतात.","roles.r3v":"निधी · मार्गदर्शन · वितरण",
 "form.kicker":"समस्या नोंदवा","form.title":"तुमच्या रस्त्यावरून विद्यार्थ्याच्या टेबलपर्यंत.",
 "form.sub":"एकदा लिहून द्या. AI श्रेणी लावतो, तातडी ठरवतो, सारख्या तक्रारी तपासतो आणि सर्वात योग्य संस्था समोर ठेवतो.",
 "f.name":"तुमचे नाव (ऐच्छिक)","f.contact":"फोन किंवा ईमेल (ऐच्छिक)","f.place":"स्थान","f.placePh":"गाव / शहर / ओळखीचे ठिकाण",
 "f.loc":"माझे स्थान वापरा","f.cat":"श्रेणी","f.auto":"स्वयं-ओळख (AI)","f.desc":"समस्येचे वर्णन करा",
 "f.descPh":"काय घडत आहे, कधीपासून, कोणाला त्रास…","f.photo":"फोटो जोडा","f.voice":"बोलून सांगा","f.voiceStop":"ऐकणे थांबवा",
 "f.submit":"सेतूवर पाठवा","f.note":"नोंदणीची गरज नाही. प्रत्येक तक्रार सार्वजनिक आहे, मागोवा घेतला जातो आणि उत्तर मिळते.",
 "an.title":"थेट विश्लेषण","an.waiting":"लिहायला सुरुवात करा — विश्लेषण तुमच्यासोबत वाचत राहते आणि तत्काळ बदलते.",
 "an.cat":"संभाव्य श्रेणी","an.conf":"खात्री","an.prio":"तातडी","an.kw":"सापडलेले मुद्दे","an.kwNone":"— अजून काही नाही",
 "an.dup":"सारख्या तक्रारी तपासणी","an.dupNone":"समान खुल्या तक्रारी नाहीत.","an.dupFound":"याशी साम्य","an.sim":"जुळणी",
 "an.inst":"सर्वात योग्य संस्था","an.why":"बलस्थाने","an.pending":"अजून काही नाही.",
 "p.critical":"अतितातडीचे","p.high":"जास्त","p.medium":"मध्यम","p.normal":"सामान्य",
 "ok.title":"सेतू पार झाला.","ok.body":"तक्रार #{id} सेतूवर आहे — १० पैकी टप्पा १. वरील अग्रेस्त संस्थांना कळवले आहे.",
 "ok.view":"नोंदवणीत पहा","ok.another":"अजून नोंदवा",
 "err.short":"अजून थोडे सांगा — किमान २० अक्षरे.","err.voice":"या ब्राउझरमध्ये आवाजाची सुविधा उपलब्ध नाही.",
 "err.geo":"स्थान मिळाले नाही — कृपया लिहून द्या.","err.geoU":"या जोडणीवर स्थान उपलब्ध नाही.",
 "reg.kicker":"नोंदवणी","reg.title":"प्रत्येक तक्रार, सर्वांसाठी उघडी.","reg.search":"समस्या, ठिकाणे शोधा…","reg.all":"सर्व",
 "reg.none":"कोणती तक्रार जुळत नाही.","reg.count":"{n} तक्रारी दाखवल्या · नवीनतम आधी",
 "m.filed":"नोंद","m.place":"स्थान","m.lang":"भाषा","m.prio":"तातडी","m.inst":"जबाबदार संस्था","m.none":"अजून जुळली नाही",
 "m.journey":"प्रवास","m.advance":"टप्पा पुढे (डेमो)","m.done":"ही तक्रार संपूर्ण सेतू पार झाली आहे.",
 "m.verif":"नागरिक पडताळणी","m.verifB":"तक्रार देणाऱ्याने खात्री दिली की समस्या सुटली आहे.","m.impact":"परिणाम","m.close":"बंद करा",
 "p.kicker":"भागीदारी","p.title":"सेतू आपल्यासोबत वाहून नेऊ.",
 "p.uniT":"विद्यापीठे व महाविद्यालये","p.uniD":"तुमच्या विभागांना व तज्ज्ञतेला जुळणाऱ्या समस्या स्वीकारा. विद्यार्थी संघांना मार्गदर्शन करा. शहराला उपयोगी निकाल प्रकाशित करा.",
 "p.indT":"उद्योग व स्टार्टअप्स","p.indD":"निधी द्या, संघांना घडवा, चाचणीसाठी आपली मैदाने उघडा — आणि खरोखर गरज असलेल्या बाजारांपर्यंत पोहोचा.",
 "p.govt":"<b>शासकीय विभाग व स्थानिक संस्था</b> पडताळलेल्या नागरी समस्या पाठवू शकतात व तयार उपाय स्वीकारू शकतात — setu@samasyasetu.in येथे लिहा.",
 "p.org":"संस्था किंवा कंपनी","p.email":"अधिकृत ईमेल","p.join":"भागीदार म्हणून सामील व्हा",
 "p.okName":"संस्थेचे नाव टाका.","p.okMail":"हा ईमेल बरोबर नाही.","p.ok":"स्वागत आहे — आमची भागीदारी टीम संपर्क करेल.",
 "footer.nav":"पाहा","footer.contact":"लिहा",
 "footer.note":"हा एक संकल्पना-मंच आहे. सर्व AI विश्लेषण तुमच्या ब्राउझरमध्येच चालते — काहीही बाहेर जात नाही.",
 "footer.rights":"© २०२५ समस्यासेतु · भारताच्या समस्या-सोडवणाऱ्यांसाठी",
 "t.sub":"तक्रार #{id} सेतूवर आली आहे.","t.adv":"पुढे सरले: {stage}","t.imp":"सामाजिक परिणाम नोंदवला — सेतू पूर्ण.",
 "t.dup":"सारखी तक्रार दिसते — विश्लेषण पॅनेल पहा.","langName":"मराठी"
},
hi:{
 "nav.bridge":"सेतु","nav.roles":"कौन ढोता है","nav.report":"शिकायत","nav.registry":"रजिस्टर","nav.partner":"भागीदारी","nav.cta":"समस्या दर्ज करें",
 "hero.h1a":"यहाँ दर्ज हर समस्या का","hero.h1b":"एक रास्ता है.",
 "hero.sub":"समस्यासेतु उन नागरिकों को जोड़ता है जो असली समस्याओं से जूझते हैं, उन विश्वविद्यालयों, छात्रों और उद्योगों से जो उन्हें हल कर सकते हैं — पहली शिकायत से नापे जा सकने वाले सामाजिक बदलाव तक.",
 "hero.cta1":"समस्या दर्ज करें","hero.cta2":"सेतु देखें",
 "stat.s1":"दर्ज समस्याएँ","stat.s2":"साझेदार संस्थान","stat.s3":"बने प्रोटोटाइप","stat.s4":"लाभान्वित नागरिक",
 "bridge.kicker":"सफ़र","bridge.title":"एक सेतु, दस चरण, एक भी अटकाव नहीं.",
 "bridge.hint":"सेतु पर किसी भी चरण पर क्लिक करें और देखें वहाँ क्या होता है.","bridge.actors":"शामिल कौन",
 "t1":"शिकायत दर्ज","d1":"नागरिक अपनी भाषा में फोटो, आवाज़ या लोकेशन के साथ समस्या दर्ज करते हैं.","a1":"नागरिक · स्थानीय निकाय",
 "t2":"AI विश्लेषण","d2":"सिस्टम समस्या का वर्गीकरण करता है, तात्कालिकता तय करता है और एक जैसी शिकायतें छानता है.","a2":"AI इंजन",
 "t3":"विश्वविद्यालय चयन","d3":"विभाग, विशेषज्ञता और सुविधाओं के आधार पर सही कॉलेज चुने जाते हैं.","a3":"सिस्टम · रजिस्टर",
 "t4":"टीम निर्माण","d4":"प्रोफ़ेसरों के मार्गदर्शन में छात्रों की टीम बनती है और मैदानी अध्ययन करती है.","a4":"प्रोफ़ेसर · छात्र",
 "t5":"उद्योग सहभाग","d5":"उद्योग और स्टार्टअप मार्गदर्शन, फंडिंग और तकनीकी मदद देते हैं.","a5":"उद्योग · स्टार्टअप",
 "t6":"प्रोटोटाइप","d6":"टीम ज़मीनी हकीकत के हिसाब से चलने वाला प्रोटोटाइप बनाती है.","a6":"छात्र टीम",
 "t7":"परीक्षण","d7":"प्रोटोटाइप असली उपयोगकर्ताओं के साथ मैदान में परखा और सुधारा जाता है.","a7":"टीम · समुदाय",
 "t8":"क्रियान्वयन","d8":"स्थानीय निकाय और उद्योग समाधान को बड़े पैमाने पर उतारते हैं.","a8":"सरकार · उद्योग",
 "t9":"नागरिक सत्यापन","d9":"शिकायत करने वाला नागरिक ही तय करता है — समस्या सच में हल हुई या नहीं?","a9":"नागरिक",
 "t10":"सामाजिक प्रभाव","d10":"पूरा सफ़र नापे जा सकने वाले, सबके सामने वाले सामाजिक बदलाव के रूप में दर्ज होता है.","a10":"हम सब",
 "roles.kicker":"कौन ढोता है","roles.title":"तीन समूह, एक बोझ, बाँटा हुआ.",
 "roles.r1t":"नागरिक और स्थानीय निकाय","roles.r1d":"समस्याएँ पहचानते हैं, अपनी भाषा में फोटो, आवाज़ और लोकेशन के साथ दर्ज करते हैं — और ठीक होने पर खुद जाकर सत्यापित करते हैं.","roles.r1v":"दर्ज · सत्यापित · लाभ",
 "roles.r2t":"विश्वविद्यालय, प्रोफ़ेसर और छात्र","roles.r2d":"जुड़ी हुई समस्याओं को सीधे प्रोजेक्ट मानते हैं। मैदान में अध्ययन करते हैं, प्रोटोटाइप बनाते हैं, जो चला वह प्रकाशित करते हैं.","roles.r2v":"अध्ययन · निर्माण · प्रकाशन",
 "roles.r3t":"उद्योग और स्टार्टअप","roles.r3d":"टीमों को मार्गदर्शन, फंडिंग और परीक्षण के मैदान देते हैं, और समाधान को असली बस्तियों तक पहुँचाते हैं.","roles.r3v":"फंड · मार्गदर्शन · तैनाती",
 "form.kicker":"समस्या दर्ज करें","form.title":"आपकी गली से छात्र की मेज़ तक.",
 "form.sub":"एक बार लिखिए। AI श्रेणी तय करता है, तात्कालिकता आँकता है, मिलती-जुलती शिकायतें जाँचता है और सबसे सही संस्थान सामने रखता है.",
 "f.name":"आपका नाम (वैकल्पिक)","f.contact":"फ़ोन या ईमेल (वैकल्पिक)","f.place":"स्थान","f.placePh":"गाँव / शहर / पहचान की जगह",
 "f.loc":"मेरी लोकेशन लें","f.cat":"श्रेणी","f.auto":"स्वतः पहचान (AI)","f.desc":"समस्या का वर्णन करें",
 "f.descPh":"क्या हो रहा है, कब से, किसे दिक्कत है…","f.photo":"फोटो जोड़ें","f.voice":"बोलकर बताएँ","f.voiceStop":"सुनना रोकें",
 "f.submit":"सेतु पार कराइए","f.note":"कोई साइन-अप नहीं। हर शिकायत सार्वजनिक है, उस पर नज़र रखी जाती है और जवाब मिलता है.",
 "an.title":"लाइव विश्लेषण","an.waiting":"लिखना शुरू करें — विश्लेषण आपके साथ-साथ पढ़ता और बदलता रहता है.",
 "an.cat":"संभावित श्रेणी","an.conf":"विश्वास","an.prio":"तात्कालिकता","an.kw":"मिले संकेत","an.kwNone":"— अभी कोई नहीं",
 "an.dup":"मिलती शिकायतें","an.dupNone":"ऐसी कोई खुली शिकायत नहीं.","an.dupFound":"से समानता","an.sim":"मेल",
 "an.inst":"सबसे उपयुक्त संस्थान","an.why":"मज़बूती","an.pending":"अभी कोई नहीं.",
 "p.critical":"अति-तात्काल","p.high":"अधिक","p.medium":"मध्यम","p.normal":"सामान्य",
 "ok.title":"सेतु पार हुआ.","ok.body":"शिकायत #{id} सेतु पर है — 10 में से चरण 1. ऊपर के अग्रणी संस्थानों को खबर दे दी गई है.",
 "ok.view":"रजिस्टर में देखें","ok.another":"और दर्ज करें",
 "err.short":"थोड़ा और बताइए — कम से कम 20 अक्षर.","err.voice":"इस ब्राउज़र में आवाज़ सुविधा उपलब्ध नहीं.",
 "err.geo":"लोकेशन नहीं मिली — कृपया लिखकर दें.","err.geoU":"इस कनेक्शन पर लोकेशन उपलब्ध नहीं.",
 "reg.kicker":"रजिस्टर","reg.title":"हर शिकायत, सबके लिए खुली.","reg.search":"समस्याएँ, जगहें खोजें…","reg.all":"सभी",
 "reg.none":"कोई शिकायत मेल नहीं खाती.","reg.count":"{n} शिकायतें दिखाई गईं · नई पहले",
 "m.filed":"दर्ज","m.place":"स्थान","m.lang":"भाषा","m.prio":"तात्कालिकता","m.inst":"ज़िम्मेदार संस्थान","m.none":"अभी तय नहीं",
 "m.journey":"सफ़र","m.advance":"चरण आगे (डेमो)","m.done":"यह शिकायत पूरा सेतु पार कर चुकी है.",
 "m.verif":"नागरिक सत्यापन","m.verifB":"शिकायत करने वाले ने पुष्टि की कि समस्या हल हो गई है.","m.impact":"प्रभाव","m.close":"बंद करा",
 "p.kicker":"भागीदारी","p.title":"हमारे साथ सेतु ढोइए.",
 "p.uniT":"विश्वविद्यालय और कॉलेज","p.uniD":"अपने विभागों और विशेषज्ञता से जुड़ी समस्याएँ चुनें। छात्र टीमों का मार्गदर्शन करें। शहर के काम आने वाले नतीजे प्रकाशित करें.",
 "p.indT":"उद्योग और स्टार्टअप","p.indD":"फंडिंग दें, टीमों को घड़ें, अपने परीक्षण के मैदान खोलें — और उन बाज़ारों तक पहुँचें जहाँ आपका काम सच में चाहिए.",
 "p.govt":"<b>सरकारी विभाग और स्थानीय निकाय</b> सत्यापित नागरिक समस्याएँ भेज सकते हैं और तैयार समाधान अपना सकते हैं — setu@samasyasetu.in पर लिखें.",
 "p.org":"संस्थान या कंपनी","p.email":"आधिकारिक ईमेल","p.join":"भागीदार बनें",
 "p.okName":"संस्था का नाम लिखें.","p.okMail":"यह ईमेल सही नहीं लग रहा.","p.ok":"स्वागत है — हमारी टीम संपर्क करेगी.",
 "footer.nav":"देखें","footer.contact":"लिखें",
 "footer.note":"एक कॉन्सेप्ट प्लेटफ़ॉर्म। सारा AI विश्लेषण आपके ब्राउज़र में ही चलता है — कुछ भी बाहर नहीं जाता.",
 "footer.rights":"© २०२५ समस्यासेतु · भारत के समस्या-हल करने वालों के लिए",
 "t.sub":"शिकायत #{id} सेतु पर आ गई.","t.adv":"आगे बढ़ा: {stage}","t.imp":"सामाजिक प्रभाव दर्ज — सेतु पूर्ण.",
 "t.dup":"मिलती शिकायत दिखती है — विश्लेषण पैनल देखें.","langName":"हिंदी"
}};

let LANG = 'en';
const t = k => (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || k;
const localeOf = () => LANG==='mr' ? 'mr-IN' : LANG==='hi' ? 'hi-IN' : 'en-IN';

/* ---------- 2. Knowledge base for the local "AI" ---------- */
const CATS = [
 {k:'water', kws:['water','pipeline','leak','leakage','borewell','tank','drought','drinking','river','well','पाणी','विहीर','नळ','तुटवड','पाईप','गळती','जलशुद्धीकरण','पानी','नल','रिसाव','कुआँ','पेयजल'], sev:.72},
 {k:'agri',  kws:['farm','crop','farmer','soil','irrigation','harvest','fertilizer','cattle','grape','शेती','पीक','शेतकरी','जमीन','सिंचन','खत','भाजी','मवाशी','द्राक्षे','फसल','किसान','खेत','सिंचाई','फसलों'], sev:.6},
 {k:'health', kws:['hospital','medicine','doctor','clinic','disease','ambulance','patient','health','आरोग्य','दवाखाना','औषध','डॉक्टर','आजार','रुग्ण','प्राथमिक','स्वास्थ्य','दवा','अस्पताल','बीमारी','एम्बुलेंस'], sev:.85},
 {k:'sani',  kws:['toilet','garbage','waste','sewage','drain','cleanliness','smell','स्वच्छता','कचरा','गटार','शौचालय','सांडपाणी','दुर्गंधी','कूड़ा','गंदगी','नाला','सफाई','गंदगी'], sev:.78},
 {k:'edu',  kws:['school','student','teacher','classroom','library','children','learning','शाळा','शिक्षण','विद्यार्थी','शिक्षक','पुस्तके','मुले','वर्ग','विद्यालय','शिक्षा','अध्यापक','स्कूल','बच्चों'], sev:.45},
 {k:'env',  kws:['tree','pollution','air','forest','plastic','climate','cutting','पर्यावरण','झाडे','प्रदूषण','वायू','जंगल','प्लास्टिक','तोडणी','पेड़','प्रदूषण','हवा','जंगल'], sev:.55},
 {k:'acc',  kws:['disabled','wheelchair','ramp','blind','elderly','deaf','access','दिव्यांग','रॅम्प','अपंग','वृद्ध','अंधा','प्रवेश','दिव्यांग','व्हीलचेअर','बुज़ुर्ग','दृष्टिबाधित'], sev:.7},
 {k:'rural', kws:['village','road','transport','bus','electricity','gram panchayat','गाव','ग्रामीण','ग्रामपंचायत','रस्ता','वीज','वाहतूक','पाणपट्टी','गांव','ग्रामीण','सड़क','बिजली','परिवहन'], sev:.5},
 {k:'urban', kws:['traffic','city','building','footpath','parking','streetlight','signal','वाहतूक','शहर','इमारत','फुटपाथ','पार्किंग','पथदिवे','ट्राफिक','फुटपाथ','पार्किंग','स्ट्रीट','बत्ती'], sev:.55}
];
const URGENT = ['urgent','immediately','danger','accident','emergency','spreading','collapse','child','दिवस','तातडीचे','लगेच','धोका','अपघात','आपत्कालीन','तुरंत','पसरत','खतरनाक','खतरा','दुर्घटना','तत्काल','फैल'];
const STOP = new Set('the a an is are in and to of for on with at from this that it its has have been since days day who what when not no but we our their there here का के की है हैं में से पर और यह वह ही को ने भी तो लिए चे आणि मध्ये ला का हा ही ते त्या या आहे झाले कधीपासून'.split(' '));

const DEPTS = {civil:'Civil Engineering',env:'Environmental Engg',mech:'Mechanical',cs:'Computer Science',etc:'Electronics / IoT',agri:'Agriculture',med:'Medicine & Public Health',social:'Social Sciences',chem:'Chemical Tech',edu:'Education'};
const CAT_DEPTS = {
 water:{civil:3,env:3,chem:2,cs:1}, agri:{agri:3,mech:2,civil:2,cs:1},
 health:{med:3,social:2,etc:2,cs:2}, sani:{env:3,civil:2,chem:2,social:1},
 edu:{social:3,cs:3,edu:2,etc:1}, env:{env:3,chem:2,agri:1,civil:1},
 acc:{mech:2,cs:2,etc:2,social:2,med:1}, rural:{civil:2,social:2,etc:2,agri:1,mech:1},
 urban:{civil:3,cs:2,mech:1,etc:1}
};
const INSTITUTIONS = [
 {name:'COEP Technological University',city:'Pune',depts:{civil:3,env:2,mech:2,cs:2,etc:2},tags:['water supply','pipeline','sensors','iot','structures','traffic','monitoring']},
 {name:'VJTI Mumbai',city:'Mumbai',depts:{civil:3,cs:3,mech:2,etc:1},tags:['urban transport','traffic','ai','bridges','footpath','signal']},
 {name:'ICT Mumbai',city:'Mumbai',depts:{chem:3,env:3},tags:['water treatment','waste','biodegradable','recycling','filters','sewage']},
 {name:'IIT Bombay',city:'Powai, Mumbai',depts:{cs:3,mech:3,etc:3,civil:2,env:2},tags:['ai','drones','energy','water','assistive','robotics','incubation','iot']},
 {name:'Walchand College of Engineering',city:'Sangli',depts:{civil:3,env:2,cs:1,mech:1},tags:['rural water','village roads','sanitation','low cost','scheme']},
 {name:'MPKV Rahuri',city:'Ahmednagar',depts:{agri:3,mech:1,civil:1},tags:['dryland farming','irrigation','soil','drip','crop disease','seeds','grape']},
 {name:'Government Medical College',city:'Nagpur',depts:{med:3,social:1},tags:['community health','diagnostics','telemedicine','vaccination','patient']},
 {name:'TISS Mumbai',city:'Mumbai',depts:{social:3,edu:2},tags:['community engagement','education','accessibility','policy','schools','ramp']},
 {name:'Govt. College of Engineering',city:'Karad',depts:{civil:2,env:2,mech:1,cs:1},tags:['rural roads','water scheme','waste water','drain','pipeline']}
];

/* ---------- 3. Seed problems (the live registry) ---------- */
const PROBLEMS = [
 {id:1284,cat:'water',lang:'en',title:'Repeated water pipeline leakage — large water wastage',desc:'A damaged or aging water pipeline is leaking repeatedly in a residential area. Thousands of litres of water are being wasted, and nearby roads are becoming wet and damaged. A reliable system is needed to detect pipeline leakage early and alert the responsible authority.',place:'Karad, Satara',daysAgo:34,score:74,stage:9,inst:'COEP Technological University, Pune',impact:'Heavy water loss'},
 {id:1283,cat:'water',lang:'mr',title:'Garbage bins overflowing in residential area',desc:'Garbage bins in a residential area are overflowing because collection is not happening on time. Waste is spreading onto the roads, creating bad smells and increasing health risks for nearby residents. A smart monitoring system is needed to notify authorities when bins are full..',place:'Pathardi, Ahmednagar',daysAgo:21,score:78,stage:5,inst:'Walchand College of Engineering, Sangli'},
 {id:1282,cat:'agri',lang:'en',title:'Heavy traffic congestion near college during peak hours',desc:'Severe traffic congestion occurs near a college during morning and evening peak hours. Students, pedestrians and vehicles face delays, while improper traffic management increases the risk of accidents. A technology-based traffic monitoring and prediction solution is require.',place:'Dindori, Nashik',daysAgo:18,score:82,stage:6,inst:'MPKV Rahuri'},
 {id:1281,cat:'acc',lang:'en',title:'Streetlights remain ON during daytime — unnecessary energy wastage',desc:'Several streetlights in a public area remain switched ON during daylight hours. This results in unnecessary electricity consumption and increased operating costs. A smart control system is needed to automatically monitor and control streetlights.',place:'Ichalkaranji, Kolhapur',daysAgo:27,score:77,stage:8,inst:'TISS Mumbai'},
 {id:1280,cat:'sani',lang:'en',title:'Farmers unable to monitor soil conditions accurately',desc:'Farmers are finding it difficult to know the moisture, temperature and other important conditions of their soil. This can lead to over-irrigation or under-irrigation and reduced crop productivity. A low-cost IoT-based soil monitoring system could provide real-time information.',place:'Panchavati, Nashik',daysAgo:10,score:58,stage:4,inst:'ICT Mumbai'},
 {id:1279,cat:'edu',lang:'en',title:'No immediate emergency alert system in isolated public areas',desc:'People in isolated public areas may face emergencies but have no quick way to alert nearby people or authorities. Delayed communication can increase the risk to their safety. A hardware and software-based SOS system is needed to send emergency alerts quickly.',place:'Baramati, Pune',daysAgo:14,score:71,stage:7,inst:'VJTI Mumbai'},
 {id:1278,cat:'urban',lang:'en',title:'Citizens face difficulty reporting local problems',desc:'Citizens often find it difficult to report local problems such as damaged roads, water leakage, garbage or faulty public infrastructure. Typing a detailed complaint may also be difficult for some users. A simple multilingual voice- and mobile-based reporting system can make problem reporting easier.',place:'Solapur',daysAgo:6,score:61,stage:2,inst:null},
 {id:1277,cat:'water',lang:'en',title:'School rooftop rainwater harvesting restored — 30,000 L now stored',desc:'The school rainwater harvesting system was broken for years. A student team rebuilt the filters and storage; the school no longer buys water in summer.',place:'Wai, Satara',daysAgo:120,score:44,stage:10,inst:'COEP Technological University, Pune',impact:'460 students now drink harvested rainwater — 30,000 L stored per year'}
];
let NEXT_ID = 1285;

/* ---------- 4. Small utilities ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const refreshIcons = () => window.lucide && lucide.createIcons();
const esc = value => String(value ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pad2 = n => String(n).padStart(2, '0');

function tokenize(s){
 return (s.toLowerCase().match(/[\p{L}\p{M}\p{N}]+/gu) || []).filter(w => w.length > 1 && !STOP.has(w));
}
function toast(msg, icon='check-circle-2'){
 const el = document.createElement('div');
 el.className = 'toast';
 el.innerHTML = `<i data-lucide="${icon}"></i><span>${msg}</span>`;
 $('#toasts').appendChild(el); refreshIcons();
 setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, 3800);
}
function fmtDate(daysAgo){
 return new Date(Date.now() - daysAgo*864e5).toLocaleDateString(localeOf(), {day:'numeric', month:'short', year:'numeric'});
}
function prioClass(s){ return s>=85 ? 'c-crit' : s>=70 ? 'c-high' : s>=50 ? 'c-med' : 'c-norm'; }
function prioLabel(s){ return s>=85 ? t('p.critical') : s>=70 ? t('p.high') : s>=50 ? t('p.medium') : t('p.normal'); }

/* ---------- 5. The local "AI" ---------- */
function classify(text){
 const low = ' ' + text.toLowerCase() + ' ';
 const scores = CATS.map(c => {
  let sc = 0; const hits = [];
  c.kws.forEach(k => { if (low.includes(k.toLowerCase())) { sc += k.length >= 5 ? 2 : 1; hits.push(k); } });
  return {k:c.k, sc, hits, sev:c.sev};
 }).sort((a,b) => b.sc - a.sc);
 const total = scores.reduce((a,s) => a + s.sc, 0) || 1;
 const top = scores[0];
 return { top: top.sc ? top : null, scores, conf: top.sc ? Math.min(96, Math.round(42 + (top.sc/total)*95)) : 0 };
}
function urgency(text, catKey, hasPhoto, hasGeo, len){
 const low = text.toLowerCase();
 let s = 32 + Math.min(2, URGENT.filter(u => low.includes(u)).length) * 16;
 s += (CATS.find(c => c.k === catKey)?.sev || .5) * 20;
 if (hasPhoto) s += 8;
 if (hasGeo)  s += 7;
 s += Math.min(12, len / 45);
 return Math.max(5, Math.min(100, Math.round(s)));
}
function findDup(text, catKey, excludeId){
 const A = new Set(tokenize(text)); let best = null;
 PROBLEMS.forEach(p => {
  if (p.id === excludeId) return;
  const B = new Set(tokenize(p.title + ' ' + p.desc));
  let inter = 0; A.forEach(w => { if (B.has(w)) inter++; });
  const uni = new Set([...A, ...B]).size || 1;
  let j = inter / uni; if (p.cat === catKey) j = Math.min(1, j * 1.35);
  if (!best || j > best.j) best = {p, j};
 });
 return best && best.j >= .30 ? best : null;
}
function matchInstitutions(catKey, tokens){
 const weights = CAT_DEPTS[catKey] || {};
 const scored = INSTITUTIONS.map(ins => {
  let dept = 0; const matched = [];
  for (const k in weights) if (ins.depts[k]) { dept += ins.depts[k] * weights[k]; matched.push([k, ins.depts[k]*weights[k]]); }
  let tagScore = 0; const tagHits = [];
  const tl = ins.tags.join(' | ').toLowerCase();
  tokens.forEach(w => { if (w.length > 3 && tl.includes(w)) { tagScore += 8; tagHits.push(w); } });
  ins.tags.forEach(tag => {
   if (tag.length > 4 && tokens.some(w => tag.includes(w)) && !tagHits.includes(tag)) { tagScore += 5; tagHits.push(tag); }
  });
  return {ins, dept, tagHits, raw: dept*10 + tagScore};
 }).sort((a,b) => b.raw - a.raw);
 const max = scored[0]?.raw || 1;
 return scored.slice(0,3).map(s => ({
  ...s,
  pct: Math.max(38, Math.min(97, Math.round(s.raw / max * 94))),
  topDepts: s.dept ? Object.keys(weights).filter(k => s.ins.depts[k]).slice(0,2).map(k => DEPTS[k]).join(' · ') : ''
 }));
}

/* ---------- 6. i18n application ---------- */
function applyLang(lang){
 LANG = lang;
 document.documentElement.lang = lang;
 $$('.lang-btn').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
 $$('[data-i18n]').forEach(el => el.innerHTML = t(el.dataset.i18n));
 $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
 renderBridgeLabels(); renderStagePanel(); renderChips(); renderRegistry(); runAnalysis(true);
 if (openId) fillModal(PROBLEMS.find(p => p.id === openId));
 refreshIcons();
}
 $$('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ---------- 7. The bridge visualization ---------- */
const STAGE_ICONS = ['users','cpu','graduation-cap','users-round','factory','wrench','flask-conical','landmark','badge-check','trending-up'];
const deck = $('#deckPath'), arch = $('#archPath');
let stageIdx = 0, pulseRAF = null;

function buildBridge(){
 // suspenders between deck and lower arch (both are symmetric quadratics → x(t) matches)
 let lines = '';
 for (let i = 1; i < 28; i++){
  const tt = i / 28, t2 = .04 + tt * .92;
  const a = deck.getPointAtLength(t2 * deck.getTotalLength());
  const b = arch.getPointAtLength(t2 * arch.getTotalLength());
  lines += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"/>`;
 }
 $('#suspenders').innerHTML = lines;
 // nodes
 const g = $('#nodes'); let html = '';
 for (let i = 0; i < 10; i++){
  const p = deck.getPointAtLength((i/9) * deck.getTotalLength());
  html += `<g class="b-node" data-i="${i}">
   <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="8" fill="var(--dark)" stroke="var(--cream)" stroke-width="1.6"/>
   <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" fill="var(--cream)"/></g>`;
 }
 g.innerHTML = html;
 // HTML labels (stay readable at every screen size)
 const box = $('#bLabels'); box.innerHTML = '';
 for (let i = 0; i < 10; i++){
  const p = deck.getPointAtLength((i/9) * deck.getTotalLength());
  const b = document.createElement('button');
  b.className = 'b-lbl' + (i % 2 ? ' below' : '');
  b.style.left = (p.x / 1200 * 100) + '%';
  b.style.top = (p.y / 340 * 100) + '%';
  b.dataset.i = i;
  b.addEventListener('click', () => setStage(i));
  box.appendChild(b);
 }
 renderBridgeLabels();
}
function renderBridgeLabels(){
 $$('#bLabels .b-lbl').forEach(b => {
  const i = +b.dataset.i;
  b.innerHTML = `<span class="lbl-n">${pad2(i+1)}</span><span class="lbl-n2">${t('t'+(i+1))}</span>`;
  b.classList.toggle('on', i === stageIdx);
 });
 $$('#nodes .b-node').forEach((n, i) => {
  const [ring, dot] = n.children;
  ring.setAttribute('stroke', i === stageIdx ? 'var(--acc)' : 'var(--cream)');
  ring.setAttribute('fill',  i === stageIdx ? 'var(--acc)' : 'var(--dark)');
  dot.setAttribute('fill', i === stageIdx ? 'var(--cream)' : 'var(--cream)');
 });
}
function renderStagePanel(){
 $('#spNum').textContent = pad2(stageIdx + 1);
 $('#spName').textContent = t('t' + (stageIdx + 1));
 $('#spDesc').textContent = t('d' + (stageIdx + 1));
 $('#spActors').textContent = t('a' + (stageIdx + 1));
}
function setStage(i){
 stageIdx = Math.max(0, Math.min(9, i));
 renderBridgeLabels(); renderStagePanel();
}
 $('#spPrev').addEventListener('click', () => setStage(stageIdx - 1));
 $('#spNext').addEventListener('click', () => setStage(stageIdx + 1));

/* travelling pulse — a problem crossing the bridge */
function runPulse(){
 if (pulseRAF || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
 if (!deck?.getTotalLength) return;
 const dot = $('#pulse'), L = deck.getTotalLength(), D = 3600, t0 = performance.now();
 dot.setAttribute('opacity', '1');
 (function step(now){
  const raw = Math.min(1, (now - t0) / D);
  const e = raw < .5 ? 2*raw*raw : 1 - Math.pow(-2*raw + 2, 2) / 2;  // easeInOutQuad
  const p = deck.getPointAtLength(e * L);
  dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);
  const passed = Math.floor(e * 9.999);
  $$('#nodes .b-node').forEach((n, i) => {
   const ring = n.children[0];
   ring.setAttribute('stroke', (i <= passed || i === stageIdx) ? (i === stageIdx ? 'var(--acc)' : '#E8987A') : 'var(--cream)');
   ring.setAttribute('fill', i === stageIdx ? 'var(--acc)' : (i <= passed && i !== stageIdx ? '#3a342b' : 'var(--dark)'));
  });
  if (raw < 1) pulseRAF = requestAnimationFrame(step);
  else { pulseRAF = null; dot.setAttribute('opacity', '0'); renderBridgeLabels(); }
 })(t0);
}
setInterval(() => { if (!document.hidden && !pulseRAF) runPulse(); }, 9000);

/* ---------- 8. Report form + live analysis ---------- */
const form = $('#reportForm'), fDesc = $('#fDesc'), fPlace = $('#fPlace'), fCat = $('#fCat');
const FSTATE = {photo:null, coords:null, photoUrl:null};
let lastAnalysis = null, lastDup = null;

function runAnalysis(silent){
 const text = fDesc.value.trim();
 const panel = $('#anPanel');
 $('#anWait').style.display = text.length < 3 ? 'flex' : 'none';
 panel.classList.toggle('idle', text.length < 3);
 if (text.length < 3){
  $('#anCat').textContent = '—'; $('#anConf').textContent = '0'; $('#anConfBar').style.width = '0%';
  $('#anConfBar').parentElement.setAttribute('aria-valuenow', '0');
  $('#anScore').textContent = '—'; $('#anPrioWord').textContent = '—';
  $('#needle').style.transform = 'rotate(-90deg)';
  $('#anKw').innerHTML = `<span>${t('an.kwNone')}</span>`;
  $('#anDup').className = 'an-dup okay';
  $('#anDup').innerHTML = `<i data-lucide="shield-check"></i><span>${t('an.dupNone')}</span>`;
  $('#anInst').innerHTML = `<div class="an-dup"><span>${t('an.pending')}</span></div>`;
  lastAnalysis = null; lastDup = null; refreshIcons(); return;
 }
 const cls = classify(text);
 const catKey = fCat.value || (cls.top ? cls.top.k : 'urban');
 const tokens = tokenize(text).slice(0, 40);
 const score = urgency(text, catKey, !!FSTATE.photo, !!FSTATE.coords, text.length);
 const dup  = findDup(text, catKey, null);
 const insts = matchInstitutions(catKey, tokens);
 lastAnalysis = {cls, catKey, tokens, score, insts}; lastDup = dup;

 // category + confidence
 $('#anCat').textContent = t('cat.' + catKey);
 $('#anConf').textContent = cls.top ? cls.conf : 35;
 const confidence = cls.top ? cls.conf : 35;
 $('#anConfBar').style.width = confidence + '%';
 $('#anConfBar').parentElement.setAttribute('aria-valuenow', String(confidence));
 // priority gauge
 $('#anScore').textContent = score;
 $('#anPrioWord').textContent = prioLabel(score);
 $('#needle').style.transform = `rotate(${-90 + score * 1.8}deg)`;
 // keyword chips
 const kws = [...new Set(cls.scores[0]?.hits || []), ...(cls.scores[1]?.hits || []).slice(0,2)].slice(0, 7);
 $('#anKw').innerHTML = kws.length
  ? kws.map(k => `<span>${esc(k)}</span>`).join('')
  : `<span>${t('an.kwNone')}</span>`;
 // duplicate
 if (dup){
  $('#anDup').className = 'an-dup warn';
  $('#anDup').innerHTML = `<i data-lucide="alert-triangle"></i><span>${t('an.dupFound')} #${dup.p.id} · <b>${Math.round(dup.j*100)}%</b> ${t('an.sim')} — “${esc(dup.p.title.slice(0,52))}…” <button type="button" data-open="${dup.p.id}"></button></span>`;
 } else {
  $('#anDup').className = 'an-dup okay';
  $('#anDup').innerHTML = `<i data-lucide="shield-check"></i><span>${t('an.dupNone')}</span>`;
 }
 // institutions
 $('#anInst').innerHTML = insts.map((s, i) => `
  <div class="inst-row">
   <span class="rk">${pad2(i+1)}</span>
   <div><b>${esc(s.ins.name)}</b><span class="ct">${esc(s.ins.city)}${s.topDepts ? ' · ' + esc(s.topDepts) : ''}</span>
    ${s.tagHits.length ? `<span class="rs">${t('an.why')}: ${s.tagHits.slice(0,3).map(esc).join(', ')}</span>` : ''}</div>
   <span class="pc">${s.pct}%</span>
  </div>`).join('');
 refreshIcons();
}
let anTimer;
fDesc.addEventListener('input', () => { clearTimeout(anTimer); anTimer = setTimeout(runAnalysis, 220); });
fCat.addEventListener('change', runAnalysis);
document.addEventListener('click', e => {
 const b = e.target.closest('[data-open]');
 if (b) openProblem(+b.dataset.open);
});

/* voice input (Web Speech API) */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recog = null, listening = false;
 $('#voiceBtn').addEventListener('click', () => {
 if (!SR){ toast(t('err.voice'), 'mic-off'); return; }
 if (listening){ recog && recog.stop(); return; }
 recog = new SR();
 recog.lang = LANG === 'mr' ? 'mr-IN' : LANG === 'hi' ? 'hi-IN' : 'en-IN';
 recog.interimResults = false; recog.continuous = true;
 recog.onresult = e => {
  let chunk = '';
  for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) chunk += e.results[i][0].transcript;
  fDesc.value = (fDesc.value + ' ' + chunk).trim();
  runAnalysis();
 };
 recog.onerror = () => { listening = false; $('#voiceBtn').classList.remove('listening'); $('#voiceBtn span').textContent = t('f.voice'); toast(t('err.voice'), 'mic-off'); };
 recog.onend = () => { listening = false; $('#voiceBtn').classList.remove('listening'); $('#voiceBtn span').textContent = t('f.voice'); };
 try {
  recog.start(); listening = true;
  $('#voiceBtn').classList.add('listening'); $('#voiceBtn span').textContent = t('f.voiceStop');
 } catch(_) { toast(t('err.voice'), 'mic-off'); }
});

/* photo input */
 $('#photoBtn').addEventListener('click', () => $('#photoInput').click());
 $('#photoInput').addEventListener('change', e => {
 const f = e.target.files[0]; if (!f) return;
 FSTATE.photo = f;
 const row = $('#photoRow'); row.hidden = false;
 if (FSTATE.photoUrl) URL.revokeObjectURL(FSTATE.photoUrl);
 const url = URL.createObjectURL(f);
 FSTATE.photoUrl = url;
 row.innerHTML = `<img src="${url}" alt="attachment"><span>${esc(f.name)}</span><button type="button" id="rmPhoto" aria-label="remove"><i data-lucide="x"></i></button>`;
 refreshIcons();
 $('#rmPhoto').onclick = () => { FSTATE.photo = null; if (FSTATE.photoUrl) { URL.revokeObjectURL(FSTATE.photoUrl); FSTATE.photoUrl = null; } row.hidden = true; $('#photoInput').value = ''; runAnalysis(); };
 runAnalysis();
});

/* geolocation */
 $('#geoBtn').addEventListener('click', () => {
 if (!navigator.geolocation){ $('#geoNote').textContent = t('err.geoU'); return; }
 navigator.geolocation.getCurrentPosition(pos => {
  FSTATE.coords = pos.coords;
  const c = `${pos.coords.latitude.toFixed(3)}°, ${pos.coords.longitude.toFixed(3)}°`;
  fPlace.value = fPlace.value ? fPlace.value + ' — ' + c : c;
  $('#geoNote').textContent = ' GPS ' + c;
  runAnalysis();
 }, () => { $('#geoNote').textContent = t('err.geo'); });
});

/* submit */
form.addEventListener('submit', e => {
 e.preventDefault();
 const text = fDesc.value.trim();
 if (text.length < 20){ $('#formErr').textContent = t('err.short'); return; }
 $('#formErr').textContent = '';
 const a = lastAnalysis || {catKey:'urban', score:50, insts:[]};
 const title = text.split(/[.!?\n।]/)[0].slice(0, 90) || text.slice(0, 90);
 const p = {
  id: NEXT_ID++, cat: a.catKey, lang: LANG, title, desc: text,
  place: fPlace.value.trim() || '—', daysAgo: 0, score: a.score, stage: 1,
  inst: a.insts[0] ? a.insts[0].ins.name : null, name: $('#fName').value.trim(), contact: $('#fContact').value.trim()
 };
 PROBLEMS.unshift(p);
 renderRegistry();
 $('#reportGrid').hidden = true;
 const ok = $('#okBlock'); ok.hidden = false;
 $('#okBody').textContent = t('ok.body').replace('{id}', p.id);
 ok.scrollIntoView({behavior:'smooth', block:'center'});
 toast(t('t.sub').replace('{id}', p.id), 'send');
 if (lastDup && lastDup.j >= .4) setTimeout(() => toast(t('t.dup'), 'alert-triangle'), 900);
 runPulse(); setStage(0);
 $('#okView').onclick = () => { location.hash = '#registry'; setTimeout(() => openProblem(p.id), 400); };
});
 $('#okAnother').addEventListener('click', () => {
 form.reset(); FSTATE.photo = null; FSTATE.coords = null; if (FSTATE.photoUrl) { URL.revokeObjectURL(FSTATE.photoUrl); FSTATE.photoUrl = null; }
 $('#photoRow').hidden = true; $('#geoNote').textContent = '';
 $('#okBlock').hidden = true; $('#reportGrid').hidden = false;
 runAnalysis();
});

/* ---------- 9. Registry ---------- */
let filterCat = 'all', searchQ = '';
function renderChips(){
 const cats = ['all','water','agri','health','sani','edu','env','acc','rural','urban'];
 $('#chips').innerHTML = cats.map(c =>
  `<button class="chip ${filterCat===c?'on':''}" data-c="${c}">${c==='all' ? t('reg.all') : t('cat.'+c)}</button>`).join('');
}
 $('#chips').addEventListener('click', e => {
 const b = e.target.closest('.chip'); if (!b) return;
 filterCat = b.dataset.c; renderChips(); renderRegistry();
});
 $('#regSearch').addEventListener('input', e => { searchQ = e.target.value.toLowerCase().trim(); renderRegistry(); });

function renderRegistry(){
 const list = PROBLEMS.filter(p =>
  (filterCat === 'all' || p.cat === filterCat) &&
  (!searchQ || (p.title + ' ' + p.desc + ' ' + p.place).toLowerCase().includes(searchQ)));
 $('#regList').innerHTML = list.length ? list.map(p => `
  <article class="reg-row" data-id="${p.id}" tabindex="0" role="button">
   <span class="r-id">#${p.id}</span>
   <span class="stamp">${t('cat.'+p.cat)}</span>
   <div class="r-main">
    <h4>${esc(p.title)}</h4>
    <p class="r-meta">
     <span>${esc(p.place)}</span><span>·</span><span>${fmtDate(p.daysAgo)}</span>
     <span class="prio-dot ${prioClass(p.score)}"><i></i>${prioLabel(p.score)}</span>
    </p>
   </div>
   <div class="r-side">
    <div class="r-ticks">${Array.from({length:10}, (_,i) => `<i class="${i < p.stage ? 'on':''}"></i>`).join('')}</div>
    <small>${p.stage}/10</small>
   </div>
   <span class="r-chev"><i data-lucide="chevron-right"></i></span>
  </article>`).join('')
  : `<div class="reg-empty">${t('reg.none')}</div>`;
 $('#regCount').textContent = t('reg.count').replace('{n}', list.length);
 refreshIcons();
}
 $('#regList').addEventListener('click', e => {
 const row = e.target.closest('.reg-row'); if (row) openProblem(+row.dataset.id);
});
 $('#regList').addEventListener('keydown', e => {
 if (e.key === 'Enter'){ const row = e.target.closest('.reg-row'); if (row) openProblem(+row.dataset.id); }
});

/* ---------- 10. Problem modal + journey ---------- */
let openId = null;
function openProblem(id){
 openId = id; fillModal(PROBLEMS.find(p => p.id === id));
 $('#overlay').classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeModal(){ openId = null; $('#overlay').classList.remove('open'); document.body.style.overflow = ''; }
 $('#mClose').addEventListener('click', closeModal);
 $('#overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function fillModal(p){
 if (!p) return;
 $('#mLeft').innerHTML = `
  <div class="m-cat"><span class="stamp">${t('cat.'+p.cat)}</span></div>
  <h3 class="m-title">${esc(p.title)}</h3>
  <p class="m-desc">${esc(p.desc)}</p>
  <div class="m-meta">
   <div><span>${t('m.filed')}</span><b>${fmtDate(p.daysAgo)}</b></div>
   <div><span>${t('m.place')}</span><b>${esc(p.place)}</b></div>
   <div><span>${t('m.lang')}</span><b>${I18N[p.lang]?.langName || 'English'}</b></div>
   <div><span>${t('m.prio')}</span><b class="prio-dot ${prioClass(p.score)}"><i></i>${prioLabel(p.score)} · ${p.score}</b></div>
   <div><span>${t('m.inst')}</span><b>${p.inst ? esc(p.inst) : t('m.none')}</b></div>
   ${p.impact && p.stage >= 10 ? `<div><span>${t('m.impact')}</span><b class="impact-value">${esc(p.impact)}</b></div>` : ''}
  </div>
  <div class="m-actions">
   ${p.stage < 10 ? `<button class="btn" id="advBtn" type="button"><span>${t('m.advance')}</span><i data-lucide="fast-forward"></i></button>` : `<span class="hint done-hint">${t('m.done')}</span>`}
  </div>`;
 $('#mRight').innerHTML = `
  <div class="m-journey">${t('m.journey')} — ${p.stage}/10</div>
  <div id="jList">${Array.from({length:10}, (_,i) => {
   const st = i+1, state = st < p.stage ? 'done' : st === p.stage ? 'cur' : '';
   let extra = '';
   if (st === 9 && p.stage >= 9) extra = `<div class="jx">${t('m.verif')}: ${t('m.verifB')}</div>`;
   else if (st === 10 && p.stage >= 10) extra = `<div class="jx">${esc(p.impact || '')}</div>`;
   return `<div class="j-item ${state}"><span class="j-dot"></span><div><span class="jn">${pad2(st)} — ${t('t'+st)}</span>${extra}</div></div>`;
  }).join('')}</div>`;
 refreshIcons();
 const adv = $('#advBtn');
 if (adv) adv.addEventListener('click', () => {
  p.stage++;
  if (p.stage === 10 && !p.impact) p.impact = 'Impact recorded by local body & verifying citizens';
  fillModal(p); renderRegistry();
  if (p.stage === 10) toast(t('t.imp'), 'trending-up');
  else toast(t('t.adv').replace('{stage}', t('t'+p.stage)), 'arrow-right');
 });
}

/* ---------- 11. Partner forms ---------- */
 $$('.p-form').forEach(f => f.addEventListener('submit', e => {
 e.preventDefault();
 const name = f.querySelector('.pf-name'), mail = f.querySelector('.pf-mail'), err = f.querySelector('.f-err');
 if (!name.value.trim()){ err.textContent = t('p.okName'); return; }
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())){ err.textContent = t('p.okMail'); return; }
 err.textContent = '';
 f.innerHTML = `<p class="partner-success">${t('p.ok')}</p>`;
 toast(t('p.ok'), 'handshake');
}));

/* ---------- 12. Counters + reveal on scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
 if (!en.isIntersecting) return;
 en.target.classList.add('in');
 if (en.target.dataset.count){
  const el = en.target, target = +el.dataset.count, t0 = performance.now();
  (function tick(now){
   const p = Math.min(1, (now - t0) / 1500), e = 1 - Math.pow(1 - p, 3);
   el.textContent = Math.round(target * e).toLocaleString('en-IN');
   if (p < 1) requestAnimationFrame(tick);
  })(t0);
 }
 io.unobserve(en.target);
}), {threshold:.2});
 $$('.reveal, [data-count]').forEach(el => io.observe(el));

/* ---------- 13. Mobile nav ---------- */
 $('#burger').addEventListener('click', () => {
  const open = $('#mnav').classList.toggle('open');
  $('#burger').setAttribute('aria-expanded', String(open));
});
 $$('#mnav a').forEach(a => a.addEventListener('click', () => {
  $('#mnav').classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
}));

/* ---------- boot ---------- */
applyLang('en');
buildBridge();
setStage(0);
setTimeout(runPulse, 1200);
refreshIcons();
