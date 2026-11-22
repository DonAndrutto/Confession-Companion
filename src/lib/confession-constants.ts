
import type { Downfall, BodhisattvaTextItem, Translatable, Language, TextKey, TextSize, TextContent, UltimateConfessionRawItem } from './types';

export const UI_STRINGS: { [key: string]: Translatable & {[key: string]: any} } = {
  vajrayanaMainTitle: { 
    pl: "Główne Upadki Pojazdu Wadżry", 
    en: "The Root Downfalls of the Vajra Vehicle", 
    ti: "རྡོ་རྗེ་ཐེག་པ་རྩ་བའི་ལྟུང་བ།" 
  },
  vajrayanaAuthor: { 
    pl: "Aśwaghosza", 
    en: "Aśvaghoṣa", 
    ti: "སློབ་དཔོན་རྟ་དབྱངས།" 
  },
  bodhisattvaMainTitle: { 
    pl: 'Spowiedź Upadków Bodhisattwy', 
    en: 'The Bodhisattva’s Confession of Downfalls', 
    ti: 'བྱང་སེམས་ལྟུང་བཤགས།'
  },
  bodhisattvaAuthor: {
    pl: 'z Słów Buddy', 
    en: 'from the Words of the Buddha', 
    ti: 'སངས་རྒྱས་ཀྱི་བཀའ་ལས།'
  },
  ultimateConfessionMainTitle: { 
    pl: "Ostateczna Spowiedź niewyrażalnego znaczenia. “Jesie Kuciok”", 
    en: "The Ultimate Inexpressible Confession. “Jesie Kuciok”", 
    ti: "ཡེ་ཤེས་སྐུ་མཆོག" 
  },
  controlsLabelText: { pl: "Tekst:", en: "Text:", ti: "གཞུང་།" },
  controlsLabelLanguage: { pl: "Język:", en: "Language:", ti: "སྐད་ཡིག" },
  controlsLabelSize: { pl: "Rozmiar Tekstu", en: "Text Size", ti: "ཡིག་གཟུགས་ཆེ་ཆུང་།" },
  controlsButtonVajrayana: { pl: "Upadki Wadżrajany", en: "Vajrayana Downfalls", ti: "རྩ་ལྟུང་།" },
  controlsButtonVajrayanaShort: { pl: "Wadżrajana", en: "Vajrayana", ti: "རྩ་ལྟུང་།" },
  controlsButtonBodhisattva: { pl: "Spowiedź Bodhisattwy", en: "Bodhisattva Confession", ti: "བྱང་ལྟུང་།" },
  controlsButtonBodhisattvaShort: { pl: "Bodhisattwa", en: "Bodhisattva", ti: "བྱང་ལྟུང་།" },
  controlsButtonUltimateConfession: { pl: "Spowiedź Ostateczna", en: "Ultimate Confession", ti: "བརྗོད་མེད་བཤགས།" },
  controlsButtonUltimateConfessionShort: { pl: "Ostateczna", en: "Ultimate", ti: "བརྗོད་མེད།" },
  languageTooltipPL: { pl: "Polski", en: "Polish", ti: "པོ་ལནྜ་སྐད།" },
  languageTooltipEN: { pl: "Angielski", en: "English", ti: "དབྱིན་ཇིའི་སྐད།" },
  languageTooltipTI: { pl: "Tybetański", en: "Tibetan", ti: "བོད་སྐད།" },
  decreaseTextSizePrompt: { pl: "Zmniejsz rozmiar tekstu", en: "Decrease text size", ti: "ཡིག་གཟུགས་ཆུང་དུ་གཏོང་།" },
  increaseTextSizePrompt: { pl: "Zwiększ rozmiar tekstu", en: "Increase text size", ti: "ཡིག་གཟུགས་ཆེ་རུ་གཏོང་།" },
  appName: { pl: "Towarzysz Wyznania", en: "Confession Companion", ti: "བཤགས་པའི་གྲོགས་པོ།" },
  footerText: { pl: "Niech wszystkie istoty odniosą pożytek.", en: "May all beings benefit.", ti: "སེམས་ཅན་ཐམས་ཅད་ལ་ཕན་ཐོགས་པར་གྱུར་ཅིག།"},
  decreaseAutoscrollSpeedPrompt: {pl: "Zmniejsz prędkość autoprzewijania", en: "Decrease autoscroll speed", ti: "རང་འགུལ་སྐུལ་འཁོར་མགྱོགས་ཚད་གཅོག"},
  increaseAutoscrollSpeedPrompt: {pl: "Zwiększ prędkość autoprzewijania", en: "Increase autoscroll speed", ti: "རང་འགུལ་སྐུལ་འཁོར་མགྱོགས་ཚད་སྤོར།"},
  startAutoscrollPrompt: {pl: "Rozpocznij autoprzewijanie", en: "Start autoscroll", ti: "རང་འགུལ་སྐུལ་འཁོར་འགོ་རྩོམ"},
  pauseAutoscrollPrompt: {pl: "Wstrzymaj autoprzewijanie", en: "Pause autoscroll", ti: "རང་འགུལ་སྐུལ་འཁོར་མཚམས་འཇོག"},
  donateButtonLabel: { pl: "Wesprzyj", en: "Donate", ti: "ཞལ་འདེབས།" },
  toggleTranslationPrompt: { pl: "Przełącz tłumaczenie", en: "Toggle translation", ti: "ལོ་ཙཱ་བརྗེ་སྒྱུར།" },
};

export const VAJRAYANA_PREAMBLE: {
  title: Translatable;
  indianTitle: {text: Translatable, phonetic_pl?: string, phonetic_en?: string, tibetan: string};
  tibetanTitle: {text: Translatable, phonetic_pl?: string, phonetic_en?: string, tibetan: string};
  homage: { tibetan: string; phonetic_pl: string; phonetic_en?: string; translation: Translatable };
  introduction: { tibetan: string; phonetic_pl: string; phonetic_en?: string; translation: Translatable };
} = {
  title: UI_STRINGS.vajrayanaMainTitle,
  indianTitle: { 
    text: { pl: "w języku indii: wadżrajanamulapatti", en: "in the language of india: vajrayānamūlāpatti", ti: "རྒྱ་གར་སྐད་དུ། བཛྲ་ཡཱ་ན་མཱུ་ལ་པཏྟི།" },
    tibetan: "རྒྱ་གར་སྐད་དུ། བཛྲ་ཡཱ་ན་མཱུ་ལ་པཏྟི།",
    phonetic_pl: "bhadzra ja na mu la patti",
    phonetic_en: "gya gar ke du badzra ya na mu la patti" 
  },
  tibetanTitle: { 
    text: { pl: "w języku tybetu: rdo rje theg pa rtsa ba'i ltung ba", en: "in the language of tibet: rdo rje theg pa rtsa ba'i ltung ba", ti: "བོད་སྐད་དུ། རྡོ་རྗེ་ཐེག་པ་རྩ་བའི་ལྟུང་བ།" },
    tibetan: "བོད་སྐད་དུ། རྡོ་རྗེ་ཐེག་པ་རྩ་བའི་ལྟུང་བ།",
    phonetic_pl: "dordże thekpa całej tungła",
    phonetic_en: "bö ke du dorje tekpa tsawe tungwa" 
  },
  homage: {
    tibetan: "འཕགས་པ་འཇམ་དཔལ་གཞོན་ནུར་གྱུར་པ་ལ་ཕྱག་འཚལ་ལོ། །",
    phonetic_pl: "phakpa dźampal siunnur gjurpa la ćhak tshal lo",
    phonetic_en: "pakpa jampal shyönnur gyurpa la chak tsal lo", 
    translation: { pl: "Pokłon szlachetnemu i młodzieńczemu Mańdziuśriemu!", en: "Homage to the noble and youthful Mañjuśrī!" }
  },
  introduction: {
    tibetan: "ཀུན་ནས་དྭང་བས་བླ་མ་ཡི། །\nཞབས་ཀྱི་པདྨར་རབ་བཏུད་དེ། །\nརྩ་བའི་ལྟུང་བ་བཅུ་བཞི་ནི། །\nརྒྱུད་ལས་གསུངས་པ་བཤད་པར་བྱ། །",
    phonetic_pl: "kun ne dang łej lama ji\nziab kji pemo rab ty de\ntsałej tungła ciu źi ni\ngjy le sung pa sie par dzia",
    phonetic_en: "kün ne dangwe lama yi\nshyab kyi peme rab tü de\ntsawe tungwa chu shyi ni\ngyü le sungpa shepar ja",
    translation: {
      pl: "Z doskonałą inspiracją, kłaniam się\nU lotosowych stóp guru.\nTutaj wyłożę czternaście głównych upadków,\nTak jak są one nauczane w tantrach.",
      en: "With perfect inspiration, I bow down\nAt the lotus-feet of the guru.\nHere I shall set out the fourteen root downfalls\nAs they are taught in the tantras."
    }
  }
};

export const VAJRAYANA_DOWNFALL_DATA: Downfall[] = [
    { id: 1, tibetan: "གང་ཕྱིར་རྡོ་རྗེ་འཛིན་པ་ཡིས། །\nདངོས་གྲུབ་སློབ་དཔོན་རྗེས་འབྲང་གསུངས། །\nདེ་བས་དེ་ལ་བརྙས་པ་ནི། །\nརྩ་བའི་ལྟུང་བ་དང་པོར་བཤད། །", phonetic_pl: "gang ćhir dordże dzinpa ji\nngödrup lobpön dże drang sung\ndełe de la niepa ni\ncałej tungła dangpor śie", phonetic_en: "gang chir dorje dzinpa yi\nngödrub lobpön jedrang sung\ndebe de la nyepa ni\ntsawe tungwa dangpor she", translation: {pl: "Wadżradhara powiedział, że Siddhi pochodzą z podążania za nauczycielem, więc gardzenie nim jest wyjaśnione jako pierwszy główny upadek.", en:"The Vajradhara said that accomplishments come from following the teacher, so to disparage him or her is explained as the first root downfall."}, confession: {tibetan: "དང་པོ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "dangpo phokpa thöllo śiak", phonetic_en: "dangpo pokpa töllo shak", translation: {pl: "Wszystkie takie złamania pierwszego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the first kind, I openly admit and confess!"}}},
    { id: 2, tibetan: "བདེ་གཤེགས་བཀའ་ལས་འདས་པ་ནི། །\nལྟུང་བ་གཉིས་པ་ཡིན་པར་བཤད། །", phonetic_pl: "deśiek ka le depa ni\ntungła njipa jinpar śie", phonetic_en: "deshek ka le depa ni\ntungwa nyipa yinpar she", translation: {pl: "Wykroczenia co do słów Sugatów jest nauczana jako drugi upadek.", en:"To transgress the words of the sugatas is taught to be the second downfall."}, confession: {tibetan: "གཉིས་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "njipa phokpa thöllo śiak", phonetic_en: "nyipa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania drugiego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the second kind, I openly admit and confess!"}}},
    { id: 3, tibetan: "རྡོ་རྗེའི་སྤུན་ལ་ཁྲོས་ནས་ནི། །\nཉེས་པར་བརྗོད་པ་གསུམ་པ་ཡིན། །", phonetic_pl: "dordżej pün la czhö ne ni\nniepar dźöpa sumpa jin", phonetic_en: "dorje pün la trö ne ni\nnyepar jöpa sumpa yin", translation: {pl: "Z gniewu, mówienie źle o swoim braciach i siostrach wadżry jest trzecim.", en:"Out of anger, to speak ill of one's vajra siblings is the third."}, confession: {tibetan: "གསུམ་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "sumpa phokpa thöllo śiak", phonetic_en: "sumpa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania trzeciego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the third kind, I openly admit and confess!"}}},
    { id: 4, tibetan: "སེམས་ཅན་རྣམས་ལ་བྱམས་པ་སྤངས། །\nབཞི་པ་ཡིན་པར་རྒྱལ་བས་གསུངས། །", phonetic_pl: "semcien nam la dziampa pang\nźipa jinpar gialłe sung", phonetic_en: "semchen nam la jampa pang\nshyipa yinpar gyalwe sung", translation: {pl: "Porzucenie miłości do istot jest czwartym, mawiają zwycięzcy.", en:"To abandon love for sentient beings is the fourth, the victorious ones say."}, confession: {tibetan: "བཞི་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "źipa phokpa thöllo śiak", phonetic_en: "shyipa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania czwartego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the fourth kind, I openly admit and confess!"}}},
    { id: 5, tibetan: "ཆོས་ཀྱི་རྩ་བ་བྱང་ཆུབ་སེམས། །\nདེ་སྤོང་བ་ནི་ལྔ་པ་ཡིན། །", phonetic_pl: "ćhö kji tsała dziang ćhub sem\nde pongła ni ngapa jin", phonetic_en: "chö kyi tsa wa jang chub sem\nde pongwa ni ngapa yin", translation: {pl: "Korzeniem Dharmy jest bodhiczitta — porzucenie której jest piątym.", en:"The root of Dharma is bodhicitta — to abandon which is the fifth."}, confession: {tibetan: "ལྔ་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ngapa phokpa thöllo śiak", phonetic_en: "ngapa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania piątego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the fifth kind, I openly admit and confess!"}}},
    { id: 6, tibetan: "རང་ངམ་གཞན་གྱི་གྲུབ་པའི་མཐའ། །\nཆོས་ལ་སྨོད་པ་དྲུག་པ་ཡིན། །", phonetic_pl: "rang ngam źien kji drubpej tha\nćhö la möpa drukpa jin", phonetic_en: "rang ngam shyen gyi drubpe ta\nchö la möpa drukpa yin", translation: {pl: "Pogardzanie filozofii Buddyjskich (szkół) lub cudzych tradycji jest szóstym.", en:"To disparage the tenets of one's own or others' traditions is the sixth."}, confession: {tibetan: "དྲུག་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "drukpa phokpa thöllo śiak", phonetic_en: "drukpa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania szóstego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the sixth kind, I openly admit and confess!"}}},
    { id: 7, tibetan: "ཡོངས་སུ་མ་སྨིན་སེམས་ཅན་ལ། །\nགསང་བ་སྒྲོགས་པ་བདུན་པ་ཡིན། །", phonetic_pl: "jongsu ma min semcien la\nsangła dźokpa dünpa jin", phonetic_en: "yongsu mamin semchen la\nsangwa drokpa dünpa yin", translation: {pl: "Wyjawianie tajemnic istotom, które nie są w pełni dojrzałe, jest siódmym.", en:"To disclose secrets to beings who are not fully matured is the seventh."}, confession: {tibetan: "བདུན་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "dünpa phokpa thöllo śiak", phonetic_en: "dünpa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania siódmego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the seventh kind, I openly admit and confess!"}}},
    { id: 8, tibetan: "ཕུང་པོ་སངས་རྒྱས་ལྔའི་བདག་ཉིད། །\nདེ་ལ་སྨོད་པ་བརྒྱད་པ་ཡིན། །", phonetic_pl: "phungpo sangie ngej dagnji\nde la möpa giepa jin", phonetic_en: "pungpo sangye nge daknyi\nde la möpa gyepa yin", translation: {pl: "Nadużywanie własnych złożeń (Skandh), które z natury są pięcioma buddami, jest ósmym.", en:"To abuse the psycho-physical aggregates, which are by nature the five buddhas, is the eighth."}, confession: {tibetan: "བརྒྱད་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "giepa phokpa thöllo śiak", phonetic_en: "gyepa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania ósmego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the eighth kind, I openly admit and confess!"}}},
    { id: 9, tibetan: "རང་བཞིན་དག་པའི་ཆོས་རྣམས་ལ། །\nསོམ་ཉི་ཟ་བ་དགུ་པ་ཡིན། །", phonetic_pl: "rangźin dagpej ćhö nam la\nsomnji zała gupa jin", phonetic_en: "rangshyin dakpe chö nam la\nsomnyi zawa gupa yin", translation: {pl: "Wątpienie w naturalną czystość wszystkich zjawisk jest dziewiątym.", en:"To have doubts about the natural purity of all phenomena is the ninth."}, confession: {tibetan: "དགུ་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "gupa phokpa thöllo śiak", phonetic_en: "gupa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania dziewiątego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the ninth kind, I openly admit and confess!"}}},
    { id: 10, tibetan: "གདུག་ལ་རྟག་ཏུ་བྱམས་ལྡན་པ། །\nབྱེད་པ་དེ་ནི་བཅུ་པར་འདོད། །", phonetic_pl: "duk la taktu dziam denpa\ndziepa de ni ćiu par dö", phonetic_en: "duk la taktu jamden pa\njepa de ni chupar dö", translation: {pl: "Okazywanie jedynie dobroci niegodziwcom jest uważane za dziesiąte.", en:"To show only affection to the wicked is said to be the tenth."}, confession: {tibetan: "བཅུ་པ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ćiu pa phokpa thöllo śiak", phonetic_en: "chupa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania dziesiątego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the tenth kind, I openly admit and confess!"}}},
    { id: 11, tibetan: "མིང་སོགས་བྲལ་བའི་ཆོས་རྣམས་ལ། །\nདེར་རྟོག་པ་ནི་བཅུ་གཅིག་པ། །", phonetic_pl: "ming sok drel łej ćhö nam la\nder tokpa ni ćiu ćigpa", phonetic_en: "ming sok dralwe chö nam la\nder tokpa ni chuchikpa", translation: {pl: "Konceptualizowanie zjawisk, które są nienazywalne i tak dalej, jest jedenastym.", en:"To conceptualize phenomena, which are unnameable and so on, is the eleventh."}, confession: {tibetan: "བཅུ་གཅིག་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ćiu ćik phokpa thöllo śiak", phonetic_en: "chuchik pokpa töllo shak", translation: {pl: "Wszystkie takie złamania jedenastego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the eleventh kind, I openly admit and confess!"}}},
    { id: 12, tibetan: "སེམས་ཅན་དད་དང་ལྡན་པ་ལ། །\nསེམས་སུན་འབྱིན་པ་བཅུ་གཉིས་པ། །", phonetic_pl: "semcien de dang denpa la\nsem sün dzinpa ćiu njipa", phonetic_en: "semchen de dang denpa la\nsem sünjinpa chunyipa", translation: {pl: "Rozczarowywanie tych, którzy mają wiarę, jest dwunastym.", en:"To cause those beings who have faith to grow disillusioned is the twelfth."}, confession: {tibetan: "བཅུ་གཉིས་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ćiu nji phokpa thöllo śiak", phonetic_en: "chunyipa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania dwunastego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the twelfth kind, I openly admit and confess!"}}},
    { id: 13, tibetan: "དམ་ཚིག་རྫས་ནི་ཇི་བཞིན་ཉིད། །\nམི་བསྟེན་པ་དེ་བཅུ་གསུམ་པ། །", phonetic_pl: "dam tshik dze ni dźi źin nji\nmi tenpa de ćiu sumpa", phonetic_en: "damtsik dze ni jishyin nyi\nmitenpa de chusumpa", translation: {pl: "Nie stosowanie substancji samaja tak jak powinno się, jest trzynastym.", en:"Not to rely upon the samaya substances as one should is the thirteenth."}, confession: {tibetan: "བཅུ་གསུམ་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ćiu sum phokpa thöllo śiak", phonetic_en: "chusumpa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania trzynastego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the thirteenth kind, I openly admit and confess!"}}},
    { id: 14, tibetan: "ཤེས་རབ་རང་བཞིན་བུད་མེད་ལ། །\nསྨོད་པར་བྱེད་པ་བཅུ་བཞི་པ། །", phonetic_pl: "śierab rangźin büme la\nmöpar dziepa ćiu źipa", phonetic_en: "sherab rangshyin büme la\nmöpar jepa chushyipa", translation: {pl: "Gardzenie kobietami, których naturą jest Pradżnia, jest czternastym.", en:"To disparage women, who are by nature wisdom, is the fourteenth."}, confession: {tibetan: "བཅུ་བཞི་ཕོག་པ་མཐོལ་ལོ་བཤགས། །", phonetic_pl: "ćiu źi phokpa thöllo śiak", phonetic_en: "chushyipa pokpa töllo shak", translation: {pl: "Wszystkie takie złamania czternastego rodzaju, otwarcie przyznaję i wyznaję!", en:"All such breaches, of the fourteenth kind, I openly admit and confess!"}}}
];

export const VAJRAYANA_CONCLUSION: {
  text: { tibetan: string; phonetic_pl: string; phonetic_en?: string; translation: Translatable };
  colophon: { tibetan: string; phonetic_pl: string; phonetic_en?: string; translation: Translatable };
} = {
  text: {
    tibetan: "སྔགས་པས་འདི་དག་སྤངས་ནས་ནི། །\nདངོས་གྲུབ་ངེས་པར་ཐོབ་པར་འགྱུར། །\nགཞན་དུ་དམ་ཚིག་ལས་ཉམས་ན། །\nཉམས་པ་བདུད་ཀྱིས་གཟུང་བར་འགྱུར། །\nདེ་ནས་སྡུག་བསྔལ་མྱོང་འགྱུར་ཞིང༌། །\nཐུར་དུ་བལྟས་ཏེ་དམྱལ་བར་འགྲོ། །\nདེ་བས་ང་རྒྱལ་བཅོམ་ནས་ནི། །\nབདག་ཉིད་མ་འཁྲུལ་ཤེས་པར་བྱ། །\nམཉམ་པར་བཞག་པས་བླ་མ་ལ། །\nཅི་འབྱོར་པ་ཡིས་མཆོད་བྱས་ནས། །\nགསུམ་ལ་སྐྱབས་འགྲོ་ནས་བརྩམས་ཏེ། །\nབྱང་ཆུབ་སེམས་སོགས་སྡོམ་པ་ནི། །\nགལ་ཏེ་བདག་ལ་ཕན་འདོད་ན། །\nསྔགས་པས་འབད་དེ་གཟུང་བར་བྱ། །",
    phonetic_pl: "ngakpe didak pang ne ni | ngydrup ngepar thopar gjur |\nsien du dam tshik le niam na | niampa dy kji zungłar gjur |\nde ne dukngal njong gjur sing | thur du te te nialłar dro |\ndełe nga gial bciom ne ni | daknji ma cchyl siepar dzia |\nniampar siakpe lama la | czi dziorpa ji ciy dzie ne |\nsum la kjab dro ne cam te | czangcziup sem sok dompa ni |\ngalte dak la phen dy na | ngakpe be de zungłar dzia |",
    phonetic_en: "ngakpe didak pang ne ni | ngödrub ngepar tobpar gyur |\nshen du damtsik le nyam na | nyampa dü kyi zungwar gyur |\nde ne dukngal nyong gyur shying | tur du te te nyalwar dro |\ndebe ngagyal chom ne ni | daknyi matrül shepar ja |\nnyampar shyagpe lama la | chi jorpa yi chö je ne |\nsum la kyab dro ne tsam te | jangchub sem sok dompa ni |\ngalte dak la pen dö na | ngakpe be de zungwar ja |", 
    translation: {
      pl: "Praktykujący mantrę, który unika tych wszystkich [upadków], z pewnością osiągnie urzeczywistnienie.\nW przeciwnym razie, jeśli zawiedziesz w utrzymaniu zobowiązań, zostaniesz schwytany przez demona upadku,\nI w ten sposób doświadczysz cierpienia. Upadając, zstąpisz do piekieł.\nDlatego poskrom dumę i poznaj siebie jako w nieomylny sposób.\nZ czymkolwiek możesz sobie pozwolić, składaj ofiary guru w jego obecności.\nZacznij od przyjęcia schronienia w Trzech [Klejnotach], i jako praktykujący mantrę,\nJeśli chcesz przynieść pożytek sobie, podejmij wysiłek i podtrzymuj śluby bodhisattwy i resztę.",
      en: "The mantra practitioner who avoids all these [downfalls] will certainly attain accomplishment.\nOtherwise, should you fail to keep your commitments you will be caught by the demon of downfall,\nAnd will thus experience suffering. Brought down, you will descend to the hells.\nSubjugate pride, therefore, and know yourself to be unconfused.\nWith whatever you can afford, make offerings to the guru in the Sage's presence.\nBegin by taking refuge in the Three [Jewels], and, as a mantra practitioner,\nShould you wish to benefit yourself, apply effort and uphold the bodhisattva vows and the rest."
    }
  },
  colophon: {
    tibetan: "རྡོ་རྗེ་ཐེག་པའི་རྩ་བའི་ལྟུང་བ་སློབ་དཔོན་ཆེན་པོ་རྟ་དབྱངས་ཀྱིས་མཛད་པ་རྫོགས་སོ།། །།",
    phonetic_pl: "dordże thekpe całej tungła loppyn czienpo tajang kji dze pa dzokso",
    phonetic_en: "dorje tekpe tsawe tungwa lobpön chenpo tayang kyi dze pa dzok so",
    translation: {
      pl: "Tutaj kończy się tekst Głównych Upadków Pojazdu Wadżry, napisany przez wielkiego aczarję Aśwaghoszę.",
      en: "This concludes The Root Downfalls of the Vajra Vehicle composed by the great ācārya Aśvaghoṣa."
    }
  }
};

export const BODHISATTVA_TEXT_DATA: BodhisattvaTextItem[] = [
    {
      type: 'image',
      imageUrl: "https://cdn.shopify.com/s/files/1/0442/7218/9604/files/35_Buddha_20x30_LKG_19823..jpg?v=1647945258",
      altText: {
        en: "Image of 35 Buddhas of Confession",
        pl: "Obraz 35 Buddów Spowiedzi",
        ti: "བཤགས་བསྟོད་སངས་རྒྱས་སོ་ལྔའི་སྐུ་བརྙན།"
      },
      dataAiHint: "buddha painting"
    },
    { type: 'title', content: { pl: 'Spowiedź Upadków Bodhisattwy', en: 'The Bodhisattva’s Confession of Downfalls', ti: 'བྱང་སེམས་ལྟུང་བཤགས།' }},
    { type: 'prose-item', center: true, tibetan: "སེམས་ཅན་ཐམས་ཅད་རྟག་པར་བླ་མ་ལ་སྐྱབས་སུ་མཆིའོ། །", phonetic_pl: "semcien thamcie takpar lama la kjab su ćhi o", phonetic_en: "semchen tamché takpar lama la kyab su chi o", translation: { pl: "Wszystkie czujące istoty zawsze przyjmują schronienie w Guru;", en: "All sentient beings always take refuge in the Guru;" }},
    { type: 'prose-item', center: true, tibetan: "སངས་རྒྱས་ལ་སྐྱབས་སུ་མཆིའོ། །", phonetic_pl: "sangjie la kjab su ćhi o", phonetic_en: "sangye la kyab su chi o", translation: { pl: "Przyjmują schronienie w Buddzie;", en: "Take refuge in the Buddha;" }},
    { type: 'prose-item', center: true, tibetan: "ཆོས་ལ་སྐྱབས་སུ་མཆིའོ། །", phonetic_pl: "ćhö la kjab su ćhi o", phonetic_en: "chö la kyab su chi o", translation: { pl: "Przyjmują schronienie w Dharmie; i", en: "Take refuge in the Dharma; and" }},
    { type: 'prose-item', center: true, tibetan: "དགེ་འདུན་ལ་སྐྱབས་སུ་མཆིའོ། །", phonetic_pl: "gendün la kjab su ćhi o", phonetic_en: "gendün la kyab su chi o", translation: { pl: "Przyjmują schronienie w Sandze.", en: "Take refuge in the Saṅgha." }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "བཅོམ་ལྡན་འདས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "ciomdende deźin siekpa draćiompa jangdakpar dzokpe sangjie śakja thubpa la ćhakcal lo", phonetic_en: "chomdendé dezhin shekpa drachompa yangdakpar dzokpé sangye shakya tubpa la chaktsal lo", sanskrit: "Śākyamuni", translation: { pl: "Hołd błogosławionemu, tathagacie, arhatowi, całkowitemu i doskonałemu Buddzie, Śakjamuniemu!", en: "Homage to the blessed one, the tathāgata, the arhat, the complete and perfect Buddha, Śākyamuni!"}},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རྡོ་རྗེའི་སྙིང་པོ་རབ་ཏུ་འཇོམས་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "dordźe njingpo rabtu dźompa la ćhakcal lo", phonetic_en: "dorjé nyingpo rabtu jompa la chaktsal lo", sanskrit: "Vajrapramardī", translation: { pl: "Hołd Wadżra Zdobywcy;", en: "Homage to Vajra Conqueror;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རིན་ཆེན་འོད་འཕྲོ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "rinćhen öthro la ćhakcal lo", phonetic_en: "rinchen ötro la chaktsal lo", sanskrit: "Ratnārciṣ", translation: { pl: "Hołd Płonącemu Klejnotowi;", en: "Homage to Blazing Jewel;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཀླུ་དབང་གི་རྒྱལ་པོ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "lułang gi gialpo la ćhakcal lo", phonetic_en: "luwang gi gyalpo la chaktsal lo", sanskrit: "Nāgeśvararāja", translation: { pl: "Hołd Suwerennemu Królowi Nagów;", en: "Homage to Sovereign King of Nāgas;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དཔའ་བོའི་སྡེ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "pałö de la ćhakcal lo", phonetic_en: "pawö dé la chaktsal lo", sanskrit: "Vīrasena", translation: { pl: "Hołd Przywódcy Bohaterów;", en: "Homage to Leader of Heroes;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དཔལ་དགྱེས་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "palgie la ćhakcal lo", phonetic_en: "palgyé la chaktsal lo", sanskrit: "Vīranandī", translation: { pl: "Hołd Chwalebnej Radości;", en: "Homage to Glorious Joy;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རིན་ཆེན་མེ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "rinćhen me la ćhakcal lo", phonetic_en: "rinchen mé la chaktsal lo", sanskrit: "Ratnāgni", translation: { pl: "Hołd Płonącemu Klejnotowi;", en: "Homage to Flaming Jewel;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རིན་ཆེན་ཟླ་འོད་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "rinćhen da ö la ćhakcal lo", phonetic_en: "rinchen da ö la chaktsal lo", sanskrit: "Ratnacandraprabha", translation: { pl: "Hołd Wyśmienitemu Światłu Księżyca;", en: "Homage to Exquisite Moonlight;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "མཐོང་བ་དོན་ཡོད་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "thongła dönyö la ćhakcal lo", phonetic_en: "tongwa dönyö la chaktsal lo", sanskrit: "Amoghadarśī", translation: { pl: "Hołd Znaczącemu do Spojrzenia;", en: "Homage to Meaningful To Behold;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རིན་ཆེན་ཟླ་བ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "rinćhen dała la ćhakcal lo", phonetic_en: "rinchen dawa la chaktsal lo", sanskrit: "Ratnacandra", translation: { pl: "Hołd Klejnotowemu Księżycowi;", en: "Homage to Jewel Moon;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དྲི་མ་མེད་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "drima mepa la ćhakcal lo", phonetic_en: "drima mepa la chaktsal lo", sanskrit: "Vimala", translation: { pl: "Hołd Nieskalanej Chwale;", en: "Homage to Stainless Glory;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དཔལ་བྱིན་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "paldzin la ćhakcal lo", phonetic_en: "paljin la chaktsal lo", sanskrit: "Śūradatta", translation: { pl: "Hołd Chwalebnemu Dobroczyńcy;", en: "Homage to Glorious Benefactor;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཚངས་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "changpa la ćhakcal lo", phonetic_en: "tsangpa la chaktsal lo", sanskrit: "Brahma", translation: { pl: "Hołd Brahmanie;", en: "Homage to Brahmaṇa;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཚངས་པས་བྱིན་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "changpe dzin la ćhakcal lo", phonetic_en: "tsangpé jin la chaktsal lo", sanskrit: "Brahmadatta", translation: { pl: "Hołd Darowi Brahmy;", en: "Homage to Gift of Brahmā;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཆུ་ལྷ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "ćhulha la ćhakcal lo", phonetic_en: "chulha la chaktsal lo", sanskrit: "Varuṇa", translation: { pl: "Hołd Bóstwu Wody;", en: "Homage to Water Deity;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཆུ་ལྷའི་ལྷ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "ćhulhe lha la ćhakcal lo", phonetic_en: "chulhé lha la chaktsal lo", sanskrit: "Varuṇadeva", translation: { pl: "Hołd Bogu Bóstw Wody;", en: "Homage to God of the Water Deities;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དཔལ་བཟང་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "palzang la ćhakcal lo", phonetic_en: "palzang la chaktsal lo", sanskrit: "Bhadraśrī", translation: { pl: "Hołd Chwalebnej Dobroci;", en: "Homage to Glorious Goodness;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཙནྡན་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "canden pal la ćhakcal lo", phonetic_en: "tsenden pal la chaktsal lo", sanskrit: "Candanaśrī", translation: { pl: "Hołd Chwalebnemu Sandałowcowi;", en: "Homage to Glorious Sandalwood;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "གཟི་བརྗིད་མཐའ་ཡས་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "zidzi thaje la ćhakcal lo", phonetic_en: "ziji tayé la chaktsal lo", sanskrit: "Anantaujas", translation: { pl: "Hołd Nieskończonemu Majestatowi;", en: "Homage to Infinite Majesty;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "འོད་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "öpal la ćhakcal lo", phonetic_en: "öpal la chaktsal lo", sanskrit: "Prabhāsaśrī", translation: { pl: "Hołd Chwalebnej Wspaniałości;", en: "Homage to Glorious Splendour;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "མྱ་ངན་མེད་པའི་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "njangen mepe pal la ćhakcal lo", phonetic_en: "nyangen mepé pal la chaktsal lo", sanskrit: "Aśokaśrī", translation: { pl: "Hołd Chwale Bez Smutku;", en: "Homage to Glory Without Sorrow;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "སྲེད་མེད་ཀྱི་བུ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "seme kji bu la ćhakcal lo", phonetic_en: "semé kyi bu la chaktsal lo", sanskrit: "Nārāyaṇa", translation: { pl: "Hołd Synowi Bez Pragnienia;", en: "Homage to Son Without Craving;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "མེ་ཏོག་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "metok pal la ćhakcal lo", phonetic_en: "metok pal la chaktsal lo", sanskrit: "Kusumaśrī", translation: { pl: "Hołd Chwalebnym Kwiatom;", en: "Homage to Glorious Flowers;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དེ་བཞིན་གཤེགས་པ་ཚངས་པའི་འོད་ཟེར་རྣམ་པར་རོལ་པ་མངོན་པར་མཁྱེན་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "deźin siekpa changpe özer nampar rolpa ngönpar khjenpa la ćhakcal lo", phonetic_en: "dezhin shekpa tsangpé özer nampar rolpa ngönpar khyenpa la chaktsal lo", sanskrit: "Brahmajñānābhijñāvikrīḍitābhijña", translation: { pl: "Hołd tathagacie, Wspaniałości Brahmy, Prawdziwej Wiedzy;", en: "Homage to the tathāgata, Splendour of Brahmā, True Knowing;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དེ་བཞིན་གཤེགས་པ་པདྨའི་འོད་ཟེར་རྣམ་པར་རོལ་པ་མངོན་པར་མཁྱེན་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "deźin siekpa peme özer nampar rolpa ngönpar khjenpa la ćhakcal lo", phonetic_en: "dezhin shekpa pemé özer nampar rolpa ngönpar khyenpa la chaktsal lo", sanskrit: "Padmajñānābhijñāvikrīḍitābhijña", translation: { pl: "Hołd tathagacie, Wspaniałemu Lotosowi, Prawdziwej Wiedzy;", en: "Homage to the tathāgata, Splendorous Lotus, True Knowing;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ནོར་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "norpal la ćhakcal lo", phonetic_en: "norpal la chaktsal lo", sanskrit: "Dhanaśrī", translation: { pl: "Hołd Chwalebnemu Bogactwu;", en: "Homage to Glorious Wealth;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དྲན་པའི་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "drenpe pal la ćhakcal lo", phonetic_en: "drenpé pal la chaktsal lo", sanskrit: "Smṛtiśrī", translation: { pl: "Hołd Chwalebnej Uważności;", en: "Homage to Glorious Mindfulness;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "མཚན་དཔལ་ཤིན་ཏུ་ཡོངས་བསྒྲགས་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "chenpal śintu jongdrak la ćhakcal lo", phonetic_en: "tsenpal shintu yongdrak la chaktsal lo", sanskrit: "Suparikīrtitanāmagheyaśrī", translation: { pl: "Hołd Sławnej Chwale;", en: "Homage to Renowned Glory;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དབང་པོའི་ཏོག་གི་རྒྱལ་མཚན་གྱི་རྒྱལ་པོ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "łangpö tok gi gialchen gi gialpo la ćhakcal lo", phonetic_en: "wangpö tok gi gyaltsen gyi gyalpo la chaktsal lo", sanskrit: "Indraketudhvajarāja", translation: { pl: "Hołd Zwycięstwu nad Sztandarem Króla Indry;", en: "Homage to Victory over King Indra’s Banner;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཤིན་ཏུ་རྣམ་པར་གནོན་པའི་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "śintu nampar nönpe pal la ćhakcal lo", phonetic_en: "shintu nampar nönpé pal la chaktsal lo", sanskrit: "Suvikrāntaśrī", translation: { pl: "Hołd Chwalebnemu Bohaterowi;", en: "Homage to Glorious Hero;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "གཡུལ་ལས་ཤིན་ཏུ་རྣམ་པར་རྒྱལ་བ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "jul le śintu nampar gialła la ćhakcal lo", phonetic_en: "yul lé shintu nampar gyalwa la chaktsal lo", sanskrit: "Yuddhajaya", translation: { pl: "Hołd Doskonałemu Zwycięzcy w Bitwie;", en: "Homage to Perfect Victor in Battle;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རྣམ་པར་གནོན་པས་གཤེགས་པའི་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "nampar nönpe siekpe pal la ćhakcal lo", phonetic_en: "nampar nönpé shekpé pal la chaktsal lo", sanskrit: "Vikrāntagāmī", translation: { pl: "Hołd Transcendentnemu Zwycięstwu;", en: "Homage to Transcendent Victory;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "ཀུན་ནས་སྣང་བ་བཀོད་པའི་དཔལ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "künne nangła köpe pal la ćhakcal lo", phonetic_en: "künné nangwa köpé pal la chaktsal lo", sanskrit: "Samantāvabhāsavyūhaśrī", translation: { pl: "Hołd Chwalebnemu, który Ukazuje się Wszystkim;", en: "Homage to Glorious One Appearing to All;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "རིན་ཆེན་པདྨས་རྣམ་པར་གནོན་པ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "rinćhen peme nampar nönpa la ćhakcal lo", phonetic_en: "rinchen pemé nampar nönpa la chaktsal lo", sanskrit: "Ratnapadmavikramī", translation: { pl: "Hołd Odważnemu Klejnotowi Lotosu;", en: "Homage to Courageous Lotus Jewel;" }},
    { type: 'prose-item', isBuddhaName: true, center: true, tibetan: "དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་རིན་པོ་ཆེ་དང་པདྨའི་གདན་ལ་རབ་ཏུ་བཞུགས་པ་རི་དབང་གི་རྒྱལ་པོ་ལ་ཕྱག་འཚལ་ལོ། །", phonetic_pl: "deźin siekpa draćiompa jangdakpar dzokpe sangjie rinpoćhe dang peme den la rabtu źukpa riłang gi gialpo la ćhakcal lo", phonetic_en: "dezhin shekpa drachompa yangdakpar dzokpé sangye rinpoche dang pemé den la rabtu zhukpa riwang gi gyalpo la chaktsal lo", sanskrit: "Ratnapadmasupratiṣṭhitaśailendrarāja", translation: { pl: "Hołd tathagacie, arhatowi, całkowitemu i doskonałemu buddzie, Klejnotowi Lotosu Niezłomnemu jak Król Gór.", en: "Homage to the tathāgata, the arhat, the complete and perfect buddha, Lotus Jewel Steadfast like the King of Mountains."}},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "དེ་དག་ལ་སོགས་པ་ཕྱོགས་བཅུའི་འཇིག་རྟེན་གྱི་ཁམས་ཐམས་ཅད་ན་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་བཅོམ་ལྡན་འདས་གང་ཇི་སྙེད་ཅིག་བཞུགས་ཏེ་འཚོ་ཞིང་གཞེས་པའི་སངས་རྒྱས་བཅོམ་ལྡན་འདས་དེ་དག་ཐམས་ཅད་བདག་ལ་དགོངས་སུ་གསོལ།", phonetic_pl: "dedak lasokpa ciok ciu dźikten gi kham thamcie na deźin siekpa draćiompa jangdakpar dzokpe sangjie ciomdende gang dzinie ćik źuk te co źing źepe sangjie ciomdende dedak thamcie dak la gong su sol", phonetic_en: "dedak lasokpa chok chü jikten gyi kham tamché na dezhin shekpa drachompa yangdakpar dzokpé sangye chomdendé gang jinyé chik zhuk té tso zhing zhepé sangye chomdendé dedak tamché dak la gong su sol", translation: { pl: "Obyście wy, i wszyscy inni błogosławieni, tathagatowie, arhatowie, całkowici i doskonali buddowie, którzy żyją i przebywają we wszystkich systemach światów we wszystkich kierunkach – wszyscy wy, błogosławieni buddowie – proszę, zwróćcie na mnie uwagę!", en: "May you, and however many other blessed ones, tathāgatas, arhats, complete and perfect buddhas there are living and dwelling in all the world systems in all directions—all you blessed buddhas—please pay attention to me!"}},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་སྐྱེ་བ་འདི་དང༌། སྐྱེ་བ་ཐོག་མ་དང་མཐའ་མ་མ་མཆིས་པ་ནས། འཁོར་བ་ན་འཁོར་བའི་སྐྱེ་གནས་ཐམས་ཅད་དུ་སྡིག་པའི་ལས་བགྱིས་པ་དང༌། བགྱིད་དུ་སྩལ་བ་དང༌། བགྱིས་པ་ལ་རྗེས་སུ་ཡི་རང་བའམ།", phonetic_pl: "dak gi kjeła di dang kjeła thokma dang thama maćhipa ne khorła na khorłe kjenie thamcie du dikpe le gipa dang gi du calła dang gipa la dzesu jirangła am", phonetic_en: "dak gi kyewa di dang kyewa tokma dang tama machipa né khorwa na khorwé kyené tamché du dikpé lé gyipa dang gyi du tsalwa dang gyipa la jesu yirangwa am", translation: { pl: "W tym życiu i we wszystkich moich innych życiach, krążąc od jednej formy istnienia w sansarze do następnej przez bezpoczątkowy czas – jakiekolwiek zło mogłem popełnić, spowodować, by inni je popełnili, lub radować się nim;", en: "In this life and all my other lives circling from one form of saṃsāric existence to the next throughout beginningless time—whatever wrongs I may have done, or caused other to do, or have rejoiced in;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "མཆོད་རྟེན་གྱི་དཀོར་རམ། དགེ་འདུན་གྱི་དཀོར་རམ། ཕྱོགས་བཅུའི་དགེ་འདུན་གྱི་དཀོར་ཕྲོགས་པ་དང༌། འཕྲོག་ཏུ་སྩལ་བ་དང༌། འཕྲོག་པ་ལ་རྗེས་སུ་ཡི་རང་བའམ།", phonetic_pl: "ćiörten gi kor ram gendün gi kor ram ciok ciu gendün gi kor throkpa dang throk tu calła dang throkpa la dzesu jirangła am", phonetic_en: "chörten gyi kor ram gendün gyi kor ram chok chü gendün gyi kor trokpa dang trok tu tsalwa dang trokpa la jesu yirangwa am", translation: { pl: "Jakiekolwiek mienie stup, mienie Sanghi lub mienie sangh przebywających we wszystkich kierunkach mogłem przywłaszczyć, spowodować, by inni je przywłaszczyli, lub radować się z jego przywłaszczenia;", en: "Whatever possessions of stūpas, possessions of the Saṅgha, or possessions of saṅghas dwelling in all directions, I may have appropriated, caused others to appropriate, or rejoiced in the appropriation of;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "མཚམས་མ་མཆིས་པ་ལྔའི་ལས་བགྱིས་པ་དང༌། བགྱིད་དུ་སྩལ་བ་དང༌། བགྱིས་པ་ལ་རྗེས་སུ་ཡི་རང་བའམ།", phonetic_pl: "cham maćhipa nge le gipa dang gi du calła dang gipa la dzesu jirangła am", phonetic_en: "tsam machipa ngé lé gyipa dang gyi du tsalwa dang gyipa la jesu yirangwa am", translation: { pl: "Którekolwiek z pięciu działań o natychmiastowej zapłacie mogłem popełnić, spowodować, by inni je popełnili, lub radować się nimi;", en: "Whichever of the five actions of immediate retribution I may have committed, caused others to commit, or rejoiced in;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "མི་དགེ་བ་བཅུའི་ལས་ཀྱི་ལམ་ཡང་དག་པར་བླངས་པ་ལ་ཞུགས་པ་དང༌། འཇུག་ཏུ་སྩལ་བ་དང༌། ཞུགས་པ་ལ་རྗེས་སུ་ཡི་རང་བའམ།", phonetic_pl: "migieła ciu le kji lam jangdakpar langpa la źukpa dang dźuk tu calła dang źukpa la dzesu jirangła am", phonetic_en: "migewa chü lé kyi lam yangdakpar langpa la zhukpa dang juk tu tsalwa dang zhukpa la jesu yirangwa am", translation: { pl: "Na którąkolwiek ścieżkę dziesięciu niecnotliwych działań mogłem wkroczyć lub obecnie na niej przebywać, nakłaniać innych do wejścia na nią, lub radować się z niej;", en: "Whichever path of the ten unwholesome actions I may have embarked upon or am currently residing on, incited others to enter, or rejoiced in;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "ལས་ཀྱི་སྒྲིབ་པ་གང་གིས་བསྒྲིབས་ནས་བདག་སེམས་ཅན་དམྱལ་བར་མཆི་བའམ། དུད་འགྲོའི་སྐྱེ་གནས་སུ་མཆི་བའམ། ཡི་དྭགས་ཀྱི་ཡུལ་དུ་མཆི་བའམ། ཡུལ་མཐའ་འཁོབ་ཏུ་སྐྱེ་བའམ། ཀླ་ཀློར་སྐྱེ་བའམ། ལྷ་ཚེ་རིང་པོ་རྣམས་སུ་སྐྱེ་བའམ། དབང་པོ་མ་ཚང་བར་འགྱུར་བའམ། ལྟ་བ་ལོག་པར་འཛིན་པར་འགྱུར་བའམ། སངས་རྒྱས་འབྱུང་བ་ལ་མཉེས་པར་མི་བགྱིད་པར་འགྱུར་བའི་ལས་ཀྱི་སྒྲིབ་པ་གང་ལགས་པ་དེ་དག་ཐམས་ཅད་སངས་རྒྱས་བཅོམ་ལྡན་འདས་ཡེ་ཤེས་སུ་གྱུར་པ།", phonetic_pl: "le kji dribpa gang gi drib ne dak semcien nialłar chiła am düdrö kjenie su chiła am jidak kji jul du chiła am jul thakhob tu kjeła am lalor kjeła am lha cheringpo nam su kjeła am łangpo machangłar giurła am tała lokpar dzinpar giurła am sangjie dziungła la niepar mi gipar giurłe le kji dribpa gang lakpa dedak thamcie sangjie ciomdende jesie su giurpa", phonetic_en: "lé kyi dribpa gang gi drib né dak semchen nyalwar chiwa am düdrö kyené su chiwa am yidak kyi yul du chiwa am yul takhob tu kyewa am lalor kyewa am lha tseringpo nam su kyewa am wangpo matsangwar gyurwa am tawa lokpar dzinpar gyurwa am sangye jungwa la nyepar mi gyipar gyurwé lé kyi dribpa gang lakpa dedak tamché sangye chomdendé yeshe su gyurpa", translation: { pl: "Jakiekolwiek karmiczne zasłony mogłem rozwinąć, które prowadziłyby do piekieł, królestwa zwierząt, krainy pretów, narodzin w odległych rejonach, wśród barbarzyńców, wśród długowiecznych bogów, które prowadziłyby do niekompletnych zdolności zmysłowych, utrzymywania błędnych poglądów, lub do nieradowania się z pojawienia się Buddy –", en: "Whatever karmic veils I may have developed that would lead to the hells, or to the animal realm, or to the land of the pretas, or to birth in border regions, or amongst barbarians, or amongst the long-lived gods, or that would lead to incomplete sense faculties, or holding wrong views, or to not rejoicing at the advent of a Buddha—" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "སྤྱན་དུ་གྱུར་པ། དཔང་དུ་གྱུར་པ། ཚད་མར་གྱུར་པ། མཁྱེན་པས་གཟིགས་པ། དེ་དག་གི་སྤྱན་སྔར་མཐོལ་ལོ་འཆགས་སོ། །མི་འཆབ་བོ། །མི་སྦེད་དོ། །སླན་ཆད་ཀྱང་གཅོད་ཅིང་སྡོམ་པ་བགྱིད་ལགས་སོ། །", phonetic_pl: "cien du giurpa pang du giurpa chemar giurpa khjenpe zikpa dedak gi cien ngar thol lo ćhak so mi ćhabło mi be do lencie kjang ciöćing dompa gi lak so", phonetic_en: "chen du gyurpa pang du gyurpa tsemar gyurpa khyenpé zikpa dedak gi chen ngar tol lo chak so mi chabwo mi bé do lenché kyang chö ching dompa gyi lak so", translation: { pl: "Wszystko to wyznaję w obecności błogosławionych buddów, którzy są świadomi, którzy obserwują, którzy są świadkami, którzy są autorytetami, którzy wiedzą i widzą. Przyznaję się do nich i nie ukrywam ich, i ślubuję powstrzymać się od nich odtąd!", en: "All of these I confess in the presence of the blessed buddhas, who are aware, who observe, who are witnesses, who are authorities, who know and see. I admit them and do not conceal them, and I make a vow to refrain from them henceforth!" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "སངས་རྒྱས་བཅོམ་ལྡན་འདས་དེ་དག་ཐམས་ཅད་བདག་ལ་དགོངས་སུ་གསོལ།", phonetic_pl: "sangjie ciomdende dedak thamcie dak la gong su sol", phonetic_en: "sangye chomdendé dedak tamché dak la gong su sol", translation: { pl: "Wszyscy wy, błogosławieni buddowie, proszę, zwróćcie na mnie uwagę!", en: "All you blessed buddhas, please pay attention to me!" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་སྐྱེ་བ་འདི་དང་སྐྱེ་བ་ཐོག་མ་དང་མཐའ་མ་མཆིས་པ་ནས། འཁོར་བ་ན་འཁོར་བའི་སྐྱེ་གནས་གཞན་དག་ཏུ་སྦྱིན་པ་ཐ་ན་དུད་འགྲོའི་སྐྱེ་གནས་སུ་སྐྱེས་པ་ལ་ཟས་ཁམ་གཅིག་ཙམ་བསྩལ་བའི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དང༌།", phonetic_pl: "dak gi kjeła di dang kjeła thokma dang thama ćhipa ne khorła na khorłe kjenie źiendak tu dzinpa thana düdrö kjenie su kjepa la ze kham ćik cam calłe giełe cał gang lakpa dang", phonetic_en: "dak gi kyewa di dang kyewa tokma dang tama chipa né khorwa na khorwé kyené zhendak tu jinpa tana düdrö kyené su kyepa la zé kham chik tsam tsalwé gewé tsawa gang lakpa dang", translation: { pl: "W ciągu tego życia i wszystkich innych żyć w sansarze bez początku i końca – jakakolwiek cnota może płynąć z dawania darów innym, nawet tak małych jak kęs jedzenia istocie narodzonej jako zwierzę;", en: "Over the course of this life and all other lives in saṃsāra without beginning or end—whatever wholesomeness there may be from having given gifts to others, even as little as a mouthful of food to a being born as an animal;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་ཚུལ་ཁྲིམས་བསྲུངས་པའི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དང༌།", phonetic_pl: "dak gi chulthrim sungpe giełe cał gang lakpa dang", phonetic_en: "dak gi tsultrim sungpé gewé tsawa gang lakpa dang", translation: { pl: "Jakakolwiek cnota może płynąć z zachowania dyscypliny;", en: "Whatever wholesomeness there may be in having preserved discipline;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་ཚངས་པར་སྤྱོད་པ་ལ་གནས་པའི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དང༌།", phonetic_pl: "dak gi changpar ciöpa la nepe giełe cał gang lakpa dang", phonetic_en: "dak gi tsangpar chöpa la nepé gewé tsawa gang lakpa dang", translation: { pl: "Jakakolwiek cnota może płynąć z utrzymania czystego postępowania;", en: "Whatever wholesomeness there may be in having maintained chaste behavior;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་སེམས་ཅན་ཡོངས་སུ་སྨིན་པར་བགྱིས་པའི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དང༌།", phonetic_pl: "dak gi semcien jongsu minpar gipe giełe cał gang lakpa dang", phonetic_en: "dak gi semchen yongsu minpar gyipé gewé tsawa gang lakpa dang", translation: { pl: "Jakakolwiek cnota może płynąć z doprowadzania czujących istot do dojrzałości;", en: "Whatever wholesomeness there may be in having caused sentient beings to mature;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་བྱང་ཆུབ་མཆོག་ཏུ་སེམས་བསྐྱེད་པའི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དང༌།", phonetic_pl: "dak gi dziangćiub ciok tu semkjepe giełe cał gang lakpa dang", phonetic_en: "dak gi changchub chok tu semkyepé gewé tsawa gang lakpa dang", translation: { pl: "Jakakolwiek cnota może płynąć z wzbudzenia umysłu nastawionego na najwyższe przebudzenie;", en: "Whatever wholesomeness there may be in having roused a mind set on supreme awakening;" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་བླ་ན་མེད་པ་ཡེ་ཤེས་ཀྱི་དགེ་བའི་རྩ་བ་གང་ལགས་པ་དེ་དག་ཐམས་ཅད་གཅིག་ཏུ་བསྡུས་ཤིང་བཟླུམས་ཏེ།", phonetic_pl: "dak gi lanamepa jesie kji giełe cał gang lakpa dedak thamcie ćik tu dü śing dum te", phonetic_en: "dak gi lanamepa yeshe kyi gewé tsawa gang lakpa dedak tamché chik tu dü shing dum té", translation: { pl: "Jakakolwiek cnota może płynąć z niezrównanej mądrości –", en: "Whatever wholesomeness there may be in unsurpassable wisdom—" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བསྡོམས་ནས་བླ་ན་མ་མཆིས་པ་དང༌། གོང་ན་མ་མཆིས་པ་དང༌། གོང་མའི་གོང་མ་། བླ་མའི་བླ་མར་ཡོངས་སུ་སྔོ་བས།བླ་ན་མེད་པ་ཡང་དག་པར་རྫོགས་པའི་བྱང་ཆུབ་ཏུ་ཡོངས་སུ་བསྔོ་བར་བགྱིའོ། །", phonetic_pl: "dom ne lana maćhipa dang gong nama ćhipa dang gongme gongma lame lamar jongsu ngłe lanamepa jangdakpar dzokpe dziangćiub tu jongsu ngołar gi o", phonetic_en: "dom né lana machipa dang gong nama chipa dang gongmé gongma lamé lamar yongsu ngowé lanamepa yangdakpar dzokpé changchub tu yongsu ngowar gyi o", translation: { pl: "Łącząc, zbierając i gromadząc to wszystko razem, dedykuję to niezrównanemu, niedoścignionemu, najwznioślejszemu, najdoskonalszemu; dedykuję to niezrównanemu, całkowitemu i doskonałemu przebudzeniu.", en: "Combining, gathering, and collecting all of this together, I dedicate it to the unexcelled, unsurpassed, most exalted, the most excellent; I dedicate it to unsurpassable, complete and perfect awakening." }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "ཇི་ལྟར་འདས་པའི་སངས་རྒྱས་བཅོམ་ལྡན་འདས་རྣམས་ཀྱིས་ཡོངས་སུ་བསྔོས་པ་དང་། ཇི་ལྟར་མ་བྱོན་པའི་སངས་རྒྱས་བཅོམ་ལྡན་འདས་རྣམས་ཀྱིས་ཡོངས་སུ་བསྔོ་བར་འགྱུར་བ་དང༌། ཇི་ལྟར་ད་ལྟར་བཞུག་པའི་སངས་རྒྱས་བཅོམ་ལྡན་འདས་རྣམས་ཀྱིས་ཡོངས་སུ་སྔོ་བར་མཛད་པ་དེ་བཞིན་དུ་བདག་གིས་ཀྱང་ཡོངས་སུ་བསྔོ་བར་བགྱིའོ། །", phonetic_pl: "dzitar depe sangjie ciomdende nam kji jongsu ngöpa dang dzitar madziönpe sangjie ciomdende nam kji jongsu ngołar giurła dang dzitar dantar źukpe sangjie ciomdende nam kji jongsu ngołar dze pa deźindu dak gi kjang jongsu ngołar gi o", phonetic_en: "jitar depé sangye chomdendé nam kyi yongsu ngöpa dang jitar majönpé sangye chomdendé nam kyi yongsu ngowar gyurwa dang jitar dantar zhukpé sangye chomdendé nam kyi yongsu ngowar dzepa dezhindu dak gi kyang yongsu ngowar gyi o", translation: { pl: "Tak jak dedykowali przeszli błogosławieni buddowie, i tak jak przyszli buddowie, błogosławieni, będą dedykować, i tak jak buddowie, błogosławieni teraźniejszości we wszystkich kierunkach, dedykują teraz, ja również w pełni dedykuję w ten sam sposób.", en: "Just as past blessed buddhas have dedicated, and just as future buddhas, blessed ones, will dedicate, and just as the buddhas, blessed ones of the present in all directions, are dedicating now, I also fully dedicate in the very same way." }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "སྡིག་པ་ཐམས་ཅད་ནི་སོ་སོར་བཤགས་སོ། །", phonetic_pl: "dikpa thamcie ni sosor śak so", phonetic_en: "dikpa tamché ni sosor shak so", translation: { pl: "Wyznaję każde przewinienie.", en: "I confess each and every misdeed." }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བསོད་ནམས་ཐམས་ཅད་ལ་ནི་རྗེས་སུ་ཡི་རང་ངོ༌། །", phonetic_pl: "sönam thamcie la ni dzesu ji rang ngo", phonetic_en: "sönam tamché la ni jesu yi rang ngo", translation: { pl: "Raduję się wszelką dobrocią.", en: "I rejoice in all goodness." }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "སངས་རྒྱས་ཐམས་ཅད་ལ་ནི་བསྐུལ་ཞིང་གསོལ་བ་འདེབས་སོ། །", phonetic_pl: "sangjie thamcie la ni kul źing solła deb so", phonetic_en: "sangye tamché la ni kul zhing solwa deb so", translation: { pl: "Proszę i modlę się do wszystkich buddów, aby nauczali i pozostali w sansarze.", en: "I request and pray to all the buddhas to teach and remain in saṃsāra." }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "བདག་གིས་བླ་ན་མེད་པ་ཡེ་ཤེས་ཀྱི་མཆོག་དམ་པ་ཐོབ་པར་གྱུར་ཅིག །", phonetic_pl: "dak gi lanamepa jesie kji ćhok dampa thobpar giur ćik", phonetic_en: "dak gi lanamepa yeshe kyi chok dampa tobpar gyur chik", translation: { pl: "Obym osiągnął wzniosłą, najwyższą, niezrównaną mądrość!", en: "May I attain sublime, supreme, unsurpassed wisdom!" }},
    { type: 'prose-item', isBuddhaName: false, center: false, tibetan: "མི་མཆོག་རྒྱལ་བ་གང་དག་ད་ལྟར་བཞུགས་པ་དང༌། །\nགང་དག་འདས་པ་དག་དང་དེ་བཞིན་གང་མ་བྱོན། །\nཡོན་ཏན་བསྔགས་པ་མཐའ་ཡས་རྒྱ་མཚོ་འདྲ་ཀུན་ལ། །\nཐལ་མོ་སྦྱར་བར་བགྱིས་ཏེ་སྐྱབས་སུ་ཉེ་བར་མཆིའོ། །", phonetic_pl: "mićhok gialła gangdak dantar źukpa dang\ngangdak depa dak dang deźin gang madziön\njonten ngakpa thaje giamcho dra kün la\nthalmo dziarłar gite kjab su niełar ćhi o", phonetic_en: "michok gyalwa gangdak dantar zhukpa dang\ngangdak depa dak dang dezhin gang majön\nyönten ngakpa tayé gyatso dra kün la\ntalmo jarwar gyi té kyab su nyewar chi o", translation: { pl: "Najwyżsi spośród ludzi, Zwycięzcy teraz obecni,\nCi z przeszłości i ci, którzy jeszcze nadejdą,\nWasze chwalebne cechy są bezgraniczne jak ocean –\nZe złożonymi dłońmi, przyjmuję w was schronienie!", en: "Supreme among humans, Victors now present,\nThose of the past, and those yet to come,\nYour praiseworthy qualities are boundless like the ocean—\nWith folded palms, I take refuge in you!" }},
    { type: 'footer', content: { pl: "Tu kończy się sutra Mahajany zatytułowana „Szlachetne Trzy Stosy”.", en: "This completes the Mahāyāna sūtra entitled “The Noble Three Heaps.”", ti: "འཕགས་པ་ཕུང་པོ་གསུམ་པ་ཞེས་བྱ་བ་ཐེག་པ་ཆེན་པོའི་མདོ་རྫོགས་སོ།། །།" } },
    { type: 'footer', content: { en: "Samye Translations (trans. Stefan Mang, Peter Woods), 2020."} } 
];

const ULTIMATE_CONFESSION_RAW_DATA: UltimateConfessionRawItem[] = [
    {
        type: 'title',
        pl_title: 'Ostateczna Spowiedź niewyrażalnego znaczenia. “Jesie Kuciok”',
        pl_title_alt: 'Niewyrażalna Spowiedź Ostatecznego Znaczenia.',
        en_title: 'The Ultimate Inexpressible Confession. “Jesie Kuciok” From the Immaculate Confession Tantra',
        ti_title: 'ཡེ་ཤེས་སྐུ་མཆོག',
    },
    {
        type: 'line',
        ti: 'ཨོཾ། ཡེ་ཤེས་སྐུ་མཆོག་རང་བཞིན་དཀྱིལ་འཁོར་ནི། །',
        pl_phonetic: 'om, jesie ku ćhok rang źin kjil khor ni',
        pl_translation: 'om, w mandali gnozy wzniosłej kaji',
        pl_translation_alt: 'Om, naturalna mandala kaji pierwotnego poznania,',
        en_phonetic: 'om, yeshe ku chok rangshyin kyilkhor ni',
        en_translation: 'om. the natural maṇḍala of the supreme wisdom kāya',
    },
    {
        type: 'line',
        ti: 'ཟླ་རྒྱས་བཞིན་དུ་སྤྲོས་པ་མི་མངའ་ཡང༌། །',
        pl_phonetic: 'da gje źindu czöpa mi nga jang',
        pl_translation: 'wzrasta jak księżyc niezmącony',
        pl_translation_alt: 'jak księżyc, nie posiada złożoności,',
        en_phonetic: 'da gye shyindu tröpa mi nga yang',
        en_translation: 'has no elaborate complexity, just like the full moon,',
    },
    {
        type: 'line',
        ti: 'ཐུགས་རྗེའི་ཉི་གསལ་འོད་བཞིན་སྙོམས་མཛད་པ། །',
        pl_phonetic: 'thugdziej nji sel ö źin niom dze pa',
        pl_translation: 'słońce łaski równomiernie lśni',
        pl_translation_alt: 'Jej współczująca gotowość do reakcji dociera wszędzie po równo niczym jasne słoneczne światło,',
        en_phonetic: 'tukjé nyi sal ö shyin nyom dzepa',
        en_translation: 'yet its compassion radiates as evenly as sunlight.',
    },
    {
        type: 'line',
        ti: 'འདིར་གཤེགས་བདག་ལ་དགོངས་ཤིང་བཞུགས་སུ་གསོལ། །',
        pl_phonetic: 'dir shek dak la gong śing źuk su söl',
        pl_translation: 'zstąp i zasiądź mając na mnie wzgląd!',
        pl_translation_alt: 'Przybądźcie tutaj i miejcie mnie w swojej pieczy!',
        en_phonetic: 'dir shek dak la gong shing shyuk su sol',
        en_translation: 'approach now, i pray: consider me, and remain!',
    },
    {
        type: 'line',
        ti: 'བརྗོད་མེད་ཤེས་རབ་མི་གཡོ་ཆོས་ཀྱི་སྐུ། །',
        pl_phonetic: 'dźö me sherab mijo ćhö kji ku',
        pl_translation: 'pradżnia bez słów, bezruch kaji dharm',
        pl_translation_alt: 'Niewyrażalnej pradżni, która jest nieporuszoną Dharmakāją;',
        en_phonetic: 'jöme sherab miyo chö kyi ku',
        en_translation: 'inexpressible wisdom, which is the immovable dharmakāya;',
    },
    {
        type: 'line',
        ti: 'བདེ་ཆེན་ལོངས་སྤྱོད་རྫོགས་སྐུ་རིགས་ལྔའི་གཙོ། །',
        pl_phonetic: 'de ćhen long ćhö dzok ku rig ngej tso',
        pl_translation: 'błoga kaja - to pięć buddhów par',
        pl_translation_alt: 'Władcom pięciu rodzin, Sambhogakāji wielkiej rozkoszy;',
        en_phonetic: 'dechen longchö dzok ku rik ngé tso',
        en_translation: 'lords of the five families, the sambhogakāya of great bliss;',
    },
    {
        type: 'line',
        ti: 'ཐུགས་རྗེ་ཐབས་མཁས་རྒྱ་ཆེར་རོལ་པའི་ལྷ། །',
        pl_phonetic: 'tuk dzie tab khe gja ćher rol pej lha',
        pl_translation: 'wielka gra współczucia metod bóstw',
        pl_translation_alt: 'Bóstwom, które okazują ogromne współczucie i umiejętne środki;',
        en_phonetic: 'tukjé tabkhé gyacher rolpé lha',
        en_translation: 'and deities who display vast compassion and skilful means,',
    },
    {
        type: 'line',
        ti: 'ཞི་ཁྲོ་སྤྲུལ་པའི་སྐུ་ལ་ཕྱག་འཚལ་ལོ། །',
        pl_phonetic: 'źhi czo czul pej ku la ćhak tsal lo',
        pl_translation: 'emanacjom szitro składam hołd',
        pl_translation_alt: 'Nirmanakaji: łagodnym i gniewnym: oddaję wam hołd!',
        en_phonetic: 'zhitro trulpé ku la chaktsal lo',
        en_translation: 'nirmāṇakāya, peaceful and wrathful: to you i pay homage!',
    },
    {
        type: 'line',
        ti: 'དངོས་སུ་འབྱོར་དང་ཡིད་ཀྱིས་རྣམ་སྤྲུལ་པའི། །',
        pl_phonetic: 'ngö su dzior dang ji kji nam czul pej',
        pl_translation: 'faktycznych i wyobrażonych',
        pl_translation_alt: 'Dary rzeczywiste i te stworzone w wyobraźni,',
        en_phonetic: 'ngö su jor dang yi kyi nam trulpé',
        en_translation: 'actual offerings and those created in the imagination,',
    },
    {
        type: 'line',
        ti: 'ཀུན་ཏུ་བཟང་པོ་བླ་མེད་མཆོད་སྤྲིན་གྱིས། །',
        pl_phonetic: 'kuntu zangpo lame chö czin gji',
        pl_translation: 'wszechdobrego świetnych ofiar kłąb',
        pl_translation_alt: 'Będące bezgraniczną, niezrównaną ofiarą Samantabhadry,',
        en_phonetic: 'kuntuzangpo lamé chötrin gyi',
        en_translation: 'as samantabhadra’s unsurpassable, cloud-like bestowal,',
    },
    {
        type: 'line',
        ti: 'མཁའ་དབྱིངས་རྣམ་དག་རྒྱ་ཆེར་ཡོངས་བཀོད་དེ། །',
        pl_phonetic: 'kha jing nam dak gja cier jong kö de',
        pl_translation: 'czysty przestwór wypełnia ich moc',
        pl_translation_alt: 'Ułożone są w czystej przestrzeni niebios –',
        en_phonetic: 'khaying namdak gyacher yong kö dé',
        en_translation: 'arranged extensively throughout space’s pure expanse—',
    },
    {
        type: 'line',
        ti: 'ཕྱི་ནང་གསང་བའི་མཆོད་པ་རྒྱ་མཚོས་མཆོད། །',
        pl_phonetic: 'ćhi nang sang łej ćhöpa gyam tsö ćhö',
        pl_translation: 'składam morze darów typów trzech',
        pl_translation_alt: 'składam je zewnętrznie, wewnętrzny oraz w tajemny sposób',
        en_phonetic: 'chi nang sangwé chöpa gyatsö chö',
        en_translation: 'with an ocean of outer, inner and secret gifts, i offer!',
    },
    {
        type: 'line',
        ti: 'ཀུན་ཏུ་བཟང་མོ་གསང་བའི་བྷ་ག་ལ། །',
        pl_phonetic: 'kuntu zangmo sang łej bhaga la',
        pl_translation: 'w tajnym łonie samantabhadri',
        pl_translation_alt: 'W tajemnym łonie Samantabhadri',
        en_phonetic: 'kuntuzangmo sangwé bhaga la',
        en_translation: 'are present in the secret bhaga of samantabhadrī —',
    },
    {
        type: 'line',
        ti: 'རྒྱལ་བའི་དཀྱིལ་འཁོར་རབ་འབྱམས་མ་ལུས་ཀུན། །',
        pl_phonetic: 'gjal łej kilkhor rabdziam malü kün',
        pl_translation: 'nieskończone pola wszech-buddhów',
        pl_translation_alt: 'znajdują się wszystkie nieskończone mandale zwycięskich buddów,',
        en_phonetic: 'gyalwé kyilkhor rabjam malü kün',
        en_translation: 'wherein all the infinite maṇḍalas of the victorious buddhas',
    },
    {
        type: 'line',
        ti: 'འདུ་འབྲལ་མེད་པའི་ངང་དུ་རོ་གཅིག་པས། །',
        pl_phonetic: 'du dżal me pej ngang du ro czig pe',
        pl_translation: 'jednym smakiem poza zmianami,',
        pl_translation_alt: 'przez doświadczenie jednego smaku, poza jednością i rozdzieleniem,',
        en_phonetic: 'dudral mepé ngang du ro chikpé',
        en_translation: 'through an experience of single taste, beyond union and separation,',
    },
    {
        type: 'line',
        ti: 'གཉིས་མེད་བྱང་ཆུབ་སེམས་ཀྱིས་མཉེས་གྱུར་ཅིག །',
        pl_phonetic: 'nji me dziang ćhub sem kji nie gjur czig',
        pl_translation: 'niech upaja umysł bodhi się.',
        pl_translation_alt: 'niechaj nie-dualna bodhicitta zachwyca i syci!',
        en_phonetic: 'nyimé changchub sem kyi nyé gyur chik',
        en_translation: 'may non-dual bodhicitta delight you!',
    },
    {
        type: 'line',
        ti: 'སེམས་ཀྱི་རང་བཞིན་ཆོས་ཉིད་ནམ་མཁའ་ཆེ། །',
        pl_phonetic: 'sem kji rang źhin ćhö nji namkha ćhe',
        pl_translation: 'jakim umysł? - takość przestrzeni',
        pl_translation_alt: 'Natura umysłu jest wielką przestrzenią dharmathy;',
        en_phonetic: 'sem kyi rangshyin chönyi namkha ché',
        en_translation: 'the nature of mind is the great space of dharmatā;',
    },
    {
        type: 'line',
        ti: 'ཆོས་རྣམས་རྣམ་དག་ཡེ་ནས་འོད་གསལ་ཞིང༌། །',
        pl_phonetic: 'ćhö nam nam dak jene ösel źhing',
        pl_translation: 'jasny blask czystością wszech-rzeczy',
        pl_translation_alt: 'zjawiska, całkowicie czyste, zawsze były jasnym światłem;',
        en_phonetic: 'chö nam namdak yené ösal zhing',
        en_translation: 'phenomena, utterly pure, have always been clear light;',
    },
    {
        type: 'line',
        ti: 'རྣལ་འབྱོར་ཉིད་དབྱིངས་སྨྲ་བསམ་ལས་འདས་པས། །',
        pl_phonetic: 'nadzior nji jing ma sam le de pe',
        pl_translation: 'poza myślą, słowem, jedności',
        pl_translation_alt: 'Pole tej jedności jest poza wyrazem i myślą –',
        en_phonetic: 'naljor nyi ying ma sam lé depé',
        en_translation: 'and the realm of this yoga is beyond speech and thought—',
    },
    {
        type: 'line',
        ti: 'མཉམ་ཉིད་བྱང་ཆུབ་སེམས་ལ་རྟག་ཏུ་འདུད། །',
        pl_phonetic: 'niam nji dziang ćhub sem la taktu dü',
        pl_translation: 'bodhiczicie równowagi hołd!',
        pl_translation_alt: 'tej bodhiczicie równości oddaję wieczny hołd!',
        en_phonetic: 'nyamnyi changchub sem la taktu dü',
        en_translation: 'to this bodhicitta of equality, i offer perpetual homage!',
    },
    {
        type: 'line',
        ti: 'ཀུན་བཟང་རྫོགས་ཆེན་ཡེ་ནས་གདལ་བ་ལ། །',
        pl_phonetic: 'kunzang dzog ćhen jene del ła la',
        pl_translation: 'rozpostarta wszem pra-kompletność',
        pl_translation_alt: 'Odwieczna przestronność Wielkiej Kompletności Samantabhadry',
        en_phonetic: 'kunzang dzogchen yené dalwa la',
        en_translation: 'within the ever-excellent, originally expansive great perfection',
    },
    {
        type: 'line',
        ti: 'ཕྱི་ནང་གསང་བའི་བཀོད་པའི་དཀྱིལ་འཁོར་ནི། །',
        pl_phonetic: 'ćhi nang sang łej köpe kilkhor ni',
        pl_translation: 'układ mandali trzech rodzajów',
        pl_translation_alt: 'Zawiera układ mandali zewnętrznych, wewnętrznych i tajemnych;',
        en_phonetic: 'chi nang sangwé köpé kyilkhor ni',
        en_translation: 'is the maṇḍala arrayed with outer, inner and secret aspects;',
    },
    {
        type: 'line',
        ti: 'སྣང་སྲིད་རྣམ་དག་ལྷ་དང་ལྷ་མོའི་དབྱིངས། །',
        pl_phonetic: 'nangsi namdak lha dang lhamoj jing',
        pl_translation: 'rzeczy ład - bóstwa i boginie',
        pl_translation_alt: 'Czystość wszystkiego co istnieje i jawi się, jest domeną bóstw i bogiń;',
        en_phonetic: 'nangsi namdak lha dang lhamö ying',
        en_translation: 'pure apparent existence is the sphere of male and female deities;',
    },
    {
        type: 'line',
        ti: 'བྱུང་དང་འབྱུང་འགྱུར་ཡབ་ཡུམ་ལྷུན་རྫོགས་རྣམས། །',
        pl_phonetic: 'dziung dang dziung gjur jab jum lhün dzok nam',
        pl_translation: 'składnik i istnienie to jab-jum',
        pl_translation_alt: 'Istnienie i jego składniki to kopulujące ich pary: Jab-Jum.',
        en_phonetic: 'jung dang jung gyur yabyum lhün dzok nam',
        en_translation: 'and elements and elemental, spontaneously perfect buddha pairs.',
    },
    {
        type: 'line',
        ti: 'གསང་ཆེན་རབ་དགྱེས་གཟུངས་ཆེན་བདག་ཉིད་མའི། །',
        pl_phonetic: 'sang ćhen rab gje zung ćhen dak nji mej',
        pl_translation: 'syci sekret wielki partnerkę',
        pl_translation_alt: 'Wielki sekret całkowicie zaspokaja suwerenną panią,',
        en_phonetic: 'sang chen rab gyé zung chen daknyimé',
        en_translation: 'the great consort revels in the magnificent secret;',
    },
    {
        type: 'line',
        ti: 'མཁའ་དབྱིངས་ཀློང་ཡངས་པདྨོར་འཁྱིལ་བ་ལ། །',
        pl_phonetic: 'kha jing long jang pemor khjil ła la',
        pl_translation: 'jej wnętrzem rozległość lotosu',
        pl_translation_alt: 'Umiejscowione w jej wnętrzu, jej lotosie: samej przestrzeni',
        en_phonetic: 'khaying long yang pemor khyilwa la',
        en_translation: 'and in the sovereign lady’s lotus, the vast expanse of space,',
    },
    {
        type: 'line',
        ti: 'གཉིས་མེད་ཐིག་ལེ་ཆེན་པོར་འོད་གསལ་ཞིང༌། །',
        pl_phonetic: 'nji me thigle ćhen por ösel źhing',
        pl_translation: 'niedualne thigle - czysty blask',
        pl_translation_alt: 'Jest wielkie thigle niedualności, czyste światło',
        en_phonetic: 'nyimé tiklé chenpor ösal zhing',
        en_translation: 'within the great non-dual bindu, there is clear light',
    },
    {
        type: 'line',
        ti: 'མ་བཅོས་སྤྲོས་མེད་བྱང་ཆུབ་སྙིང་པོའི་སྐུ། །',
        pl_phonetic: 'maćhö czöme dziang ćhub njing poj ku',
        pl_translation: 'wymiar sedna kaji bodhi tu',
        pl_translation_alt: 'Oto nieskomplikowany wymiar niedualnej bodhiczity.',
        en_phonetic: 'machö trömé changchub nyingpö ku',
        en_translation: 'and bodhi-essence kāya, uncontrived and unelaborate.',
    },
    {
        type: 'line',
        ti: 'ཅིར་ཡང་སྣང་བ་བདེ་ཆེན་གཡུང་དྲུང་ལྷ། །',
        pl_phonetic: 'czir jang nang ła dećhen jung dżung lha',
        pl_translation: 'wszystko błogim bóstwem wieczności',
        pl_translation_alt: 'Wszystko, co się jawi, jest wiecznym bóstwem wielkiej rozkoszy,',
        en_phonetic: 'chiryang nangwa dechen yungdrung lha',
        en_translation: 'all that appears is the everlasting deity of great bliss.',
    },
    {
        type: 'line',
        ti: 'འདུ་འབྲལ་མེད་པ་གསང་བའི་དཀྱིལ་འཁོར་ནི། །',
        pl_phonetic: 'du dżel mepa sangłej kilkhor ni',
        pl_translation: 'symbiozy tajemnej mandala',
        pl_translation_alt: 'W tajnej mandali, poza jednością i rozdzieleniem,',
        en_phonetic: 'dudral mepa sangwé kyilkhor ni',
        en_translation: 'in the secret maṇḍala that is beyond union and separation',
    },
    {
        type: 'line',
        ti: 'བདག་ཉིད་ཆེན་པོ་རིགས་ལྔ་ཡབ་ཡུམ་དང༌། །',
        pl_phonetic: 'dag nji ćhen po rig nga jab jum dang',
        pl_translation: 'w niej pięć rodzin spoczywa jab-jum',
        pl_translation_alt: 'są suwerenni, męscy i żeńscy buddhowie pięciu rodów;',
        en_phonetic: 'daknyi chenpo rik nga yabyum dang',
        en_translation: 'are sovereigns, male and female buddhas of the five families,',
    },
    {
        type: 'line',
        ti: 'བྱང་ཆུབ་ལྕམ་དྲལ་ཁྲོ་བོ་ཁྲོ་མོའི་ཚོགས། །',
        pl_phonetic: 'dziang ćhub cziam dżel czho ło czho moj tsok',
        pl_translation: 'bodhisattwów rodziny, gniewni,',
        pl_translation_alt: 'bodhisattwowie i zgromadzenia gniewnych,',
        en_phonetic: 'changchub chamdral trowo tromö tsok',
        en_translation: 'bodhisattvas and hosts of wrathful ones, male and female.',
    },
    {
        type: 'line',
        ti: 'རྡོ་རྗེ་ལྷ་མོ་ཚོགས་རྗེ་ཚོགས་ཀྱི་བདག །',
        pl_phonetic: 'dor dże lhamo tsok dzie tsok kji dak',
        pl_translation: 'wadżra bogiń rzesze, uczty pan',
        pl_translation_alt: 'Pan nad zgromadzeniem wadżra bogiń; Wielcy chwalebni pięciu rodów,',
        en_phonetic: 'dorjé lhamo tsok jé tsok kyi dak',
        en_translation: 'lord over hosts of vajra goddesses, master of the assembly,',
    },
    {
        type: 'line',
        ti: 'རིགས་ལྔ་དཔལ་ཆེན་ཁྲོ་རྒྱལ་ཡབ་ཡུམ་བཅུ། །',
        pl_phonetic: 'rik nga pal ćhen czho gyal jab jum ciu',
        pl_translation: 'głównych pięciu, wielkich dziesięć par',
        pl_translation_alt: 'dziesięciu gniewnych królów i ich partnerki;',
        en_phonetic: 'rik nga palchen trogyal yabyum chu',
        en_translation: 'glorious ones of the five families, ten wrathful kings and consorts,',
    },
    {
        type: 'line',
        ti: 'གནས་དང་ཡུལ་གྱི་ཕྱག་རྒྱ་སྒོ་མ་བཞི། །',
        pl_phonetic: 'ne dang jul gji ćhak gja goma źhi',
        pl_translation: 'kluczniczki, boginie miejsc mocy',
        pl_translation_alt: 'strażniczki świętych miejsc i terytoriów; cztery kluczniki,',
        en_phonetic: 'né dang yul gyi chakgya goma zhi',
        en_translation: 'female guardians of sacred lands and places, four female gatekeepers,',
    },
    {
        type: 'line',
        ti: 'ཡེ་ཤེས་སྤྲུལ་པའི་ལྷ་ཚོགས་མང་པོ་རྣམས། །',
        pl_phonetic: 'je sie czul pej lha tsok mangpo nam',
        pl_translation: 'rzesze bóstw poznania pierwego',
        pl_translation_alt: 'liczne gromady bóstw – emanacje pierwotnego poznania,',
        en_phonetic: 'yeshe trulpé lhatsok mangpo nam',
        en_translation: 'the many hosts of deities who are wisdom emanations,',
    },
    {
        type: 'line',
        ti: 'མ་ལྟར་བྱམས་ཤིང་སྲིང་ལྟར་གདུང་ལ་སོགས། །',
        pl_phonetic: 'ma tar dziam śing sing tar dung la sok',
        pl_translation: 'troskliwe jak matki, jak siostry',
        pl_translation_alt: 'Troskliwe jak matki, wspierające jak siostry;',
        en_phonetic: 'ma tar jam shing sing tar dung lasok',
        en_translation: 'those who are caring like mothers and supportive as sisters,',
    },
    {
        type: 'line',
        ti: 'ལེགས་ཉེས་སྟངས་འཛིན་དམ་ཚིག་རྗེས་གཅོད་མ། །',
        pl_phonetic: 'lek nie tang dzin dam tsik dzie czö ma',
        pl_translation: 'sprawiedliwe, ważąc samaja',
        pl_translation_alt: 'te, które oceniają dobro i zło oraz wyznaczają śluby samaja.',
        en_phonetic: 'leknyé tangdzin damtsik jé chöma',
        en_translation: 'who determine good and bad and evaluate samaya,',
    },
    {
        type: 'line',
        ti: 'ཕྱི་ནང་མཁའ་འགྲོ་རྣལ་འབྱོར་མ་ཡི་ཚོགས། །',
        pl_phonetic: 'ćhi nang khan dżo nal dzior ma ji tsok',
        pl_translation: 'zewnętrznych, wewnętrznych jogiń krąg',
        pl_translation_alt: 'Krąg zewnętrznych i wewnętrznych Jogiń,',
        en_phonetic: 'chi nang khandro naljorma yi tsok',
        en_translation: 'hosts of outer and inner ḍākinīs and yoginīs,',
    },
    {
        type: 'line',
        ti: 'དཔང་གྱུར་རྡོ་རྗེ་དམ་ཅན་དགོངས་སུ་གསོལ། །',
        pl_phonetic: 'pang gjur dor dże dam cien gong su sol',
        pl_translation: 'wadżra sprzysiężeni - spójrzcie tu!',
        pl_translation_alt: 'świadkowie i strzegący wadżra zobowiązań, weźcie mnie pod uwagę!',
        en_phonetic: 'pang gyur dorjé damchen gong su sol',
        en_translation: 'witnesses and holders of vajra commitments, consider me!',
    },
    {
        type: 'line',
        ti: 'ཧཱུྂ། ཐུགས་རྗེའི་གདུང་འཚོབ་རྣལ་འབྱོར་བདག་ཅག་གིས། །',
        pl_phonetic: 'hung, tuk dzie dungtsob nal dzior dak cziak gi',
        pl_translation: 'hung, my jogini troski następcy',
        pl_translation_alt: 'Hum! My, jogini, spadkobiercy współczucia',
        en_phonetic: 'hung, tukjé dungtsob naljor dakchak gi',
        en_translation: 'hūṃ. we vidyādharas, successors of the compassionate,',
    },
    {
        type: 'line',
        ti: 'འགྲོ་བའི་དོན་དུ་བྱང་ཆུབ་སེམས་བསྐྱེད་དེ། །',
        pl_phonetic: 'dżo łej döndu dziang ćhub sem kje de',
        pl_translation: 'w duchu bodhi dążąc ku dobru',
        pl_translation_alt: 'Rozbudzamy w sobie ducha przebudzenia, dla dobra wędrujących istot,',
        en_phonetic: 'drowé döndu changchub semkyé dé',
        en_translation: 'generate bodhicitta for the sake of all living beings.',
    },
    {
        type: 'line',
        ti: 'བླ་མེད་གོ་འཕང་འགྲོད་པར་བྱ་བའི་ཕྱིར། །',
        pl_phonetic: 'lame go phang dżö par działej ćhir',
        pl_translation: 'by najwyższy poziom osiągnąć',
        pl_translation_alt: 'aby osiągnąć nieprzewyższalny stan,',
        en_phonetic: 'lamé gopang dröpar jawé chir',
        en_translation: 'and, in order to progress to the unsurpassable state,',
    },
    {
        type: 'line',
        ti: 'བསྟན་པ་རྒྱ་མཚོ་སོ་སོའི་འདུལ་ཁྲིམས་དང༌། །',
        pl_phonetic: 'tenpa gjam tso sosöj dul czim dang',
        pl_translation: 'wziąwszy śluby systemów wielu',
        pl_translation_alt: 'utrzymujemy różne rodzaje dyscypliny z doktryn niczym ocean.',
        en_phonetic: 'tenpa gyatso sosö dul trim dang',
        en_translation: 'uphold various disciplines from the oceanic teachings:',
    },
    {
        type: 'line',
        ti: 'སྐུ་གསུང་ཐུགས་དང་མཉམ་སྦྱོར་སྡོམ་པའི་མཆོག །',
        pl_phonetic: 'ku sung thuk dang niam dzor dompej ćhok',
        pl_translation: 'ciało, głos, ducha z wzniosłym łącząc',
        pl_translation_alt: 'Najwyższą przysięgę - zjednoczenia z przebudzonym ciałem, mową i umysłem,',
        en_phonetic: 'ku sung tuk dang nyamjor dompé chok',
        en_translation: 'the supreme pledge to unite with enlightened body, speech and mind,',
    },
    {
        type: 'line',
        ti: 'རྡོ་རྗེ་འདའ་དཀའ་དམ་ཚིག་གཏན་གྱི་གཉེར། །',
        pl_phonetic: 'dor dże daka dam tsik ten gji nyer',
        pl_translation: 'wadżra ślubów strzeżem, zgroza rwać!',
        pl_translation_alt: 'Wadżra samaja, naruszyć jest strasznie,',
        en_phonetic: 'dorjé da ka damtsik ten gyi nyer',
        en_translation: 'the vajra samaya, terrible to transgress, ever to be maintained,',
    },
    {
        type: 'line',
        ti: 'སྤྱི་དང་ཁྱད་པར་ལྷག་པའི་དམ་ཚིག་རྣམས། །',
        pl_phonetic: 'ćhi dang khje par lhakpej damtsik nam',
        pl_translation: 'wyższa, wspólna i szczególna więź',
        pl_translation_alt: 'Zawsze utrzymywane powinny być; zarówno ogólne, jak i szczególne, wyższe zobowiązania,',
        en_phonetic: 'chi dang khyepar lhakpé damtsik nam',
        en_translation: 'both the general and special, higher commitments',
    },
    {
        type: 'line',
        ti: 'སྔ་ཕྱིར་མནོས་ཤིང་གཉེར་དུ་སྨྲས་སོ་འཚལ། །',
        pl_phonetic: 'nga ćhir nö śing njer du me so tsal',
        pl_translation: 'raz w raz te przysięgi zawieram',
        pl_translation_alt: 'które otrzymaliśmy wielokrotnie i ślubowaliśmy je podtrzymywać.',
        en_phonetic: 'ngachir nö shing nyer du mé so tsal',
        en_translation: 'we have received time and again and sworn to uphold.',
    },
    {
        type: 'line',
        ti: 'ཡུན་དུ་མི་གཏོང་འདའ་བར་མི་བགྱིད་ཅིང་། །',
        pl_phonetic: 'jün du mi tong dałar mi gji czing',
        pl_translation: 'nie zrywając celowo, w nich trwam',
        pl_translation_alt: 'Choć nie zaniedbujemy ani nie naruszamy celowo naszych przysiąg,',
        en_phonetic: 'yündu mitong dawar migyi ching',
        en_translation: 'we do not intentionally neglect or transgress our vows,',
    },
    {
        type: 'line',
        ti: 'དོན་ལས་གོལ་ཞིང་ལྡོག་སེམས་མ་མཆིས་ཀྱང༌། །',
        pl_phonetic: 'dön le göl źhing dog sem ma ćhi kjang',
        pl_translation: 'choć nie myślę wracać, ni błądzić',
        pl_translation_alt: 'nie chwiejemy się w naszych celach ani nie odwracamy się od nich,',
        en_phonetic: 'dön lé gol zhing dok sem machi kyang',
        en_translation: 'waver in our purpose or turn away from it entirely,',
    },
    {
        type: 'line',
        ti: 'གདོད་བྱ་ལོང་ཡོད་སྙམ་པའི་ལེ་ལོ་ཡིས། །',
        pl_phonetic: 'dö dzia long jö niam pej lelo ji',
        pl_translation: 'to z lenistwa, myśląc że mam czas',
        pl_translation_alt: 'To przekładając działania na później, myśląc że mamy czas,',
        en_phonetic: 'döja long yö nyampé lelo yi',
        en_translation: 'yet through the laziness of postponing actions,',
    },
    {
        type: 'line',
        ti: 'ཀློང་དུ་མ་གྱུར་རྩལ་ཤུགས་ཆུང་བ་དང༌། །',
        pl_phonetic: 'long du magjur tsal shuk ćhung ła dang',
        pl_translation: 'nie dopełniam celu, brak woli',
        pl_translation_alt: 'Nie osiągamy mistrzostwa, z braku woli i siły.',
        en_phonetic: 'long du magyur tsalshuk chungwa dang',
        en_translation: 'we fail to gain mastery and have very little fortitude,',
    },
    {
        type: 'line',
        ti: 'ཤེས་བཞིན་མི་ལྡན་བག་མེད་དབང་གྱུར་ཏེ། །',
        pl_phonetic: 'śie źhin miden bag me łang gjur te',
        pl_translation: 'przez beztroskę, nieopatrznie brnę',
        pl_translation_alt: 'Przez niebaczność, pod wpływem braku uwagi,',
        en_phonetic: 'shezhin miden bakmé wanggyur té',
        en_translation: 'we lack vigilance and stray into carelessness.',
    },
    {
        type: 'line',
        ti: 'སྒོམ་ལ་མི་བརྩོན་བསྙེན་སྒྲུབ་གཡེལ་ལ་སོགས། །',
        pl_phonetic: 'gom la mi tsön nien dżup jel la sok',
        pl_translation: 'przez brak ducha słabnąc w praktyce',
        pl_translation_alt: 'nie wysilając się w medytacji, [fazy] zbliżenia i spełnienia bledną,',
        en_phonetic: 'gom la mitsön nyendrub yel lasok',
        en_translation: 'we make no effort in meditation, neglect approach and accomplishment, and more.',
    },
    {
        type: 'line',
        ti: 'ཚོར་དང་མ་ཚོར་མ་རིག་དབང་གིས་ན། །',
        pl_phonetic: 'tsor dang ma tsor marik łang gi na',
        pl_translation: 'chcąc czy nie chcąc przez uwagi brak',
        pl_translation_alt: 'świadomie czy nieświadomie, przez własną ignorancję,',
        en_phonetic: 'tsor dang matsor marik wang gi na',
        en_translation: 'knowingly and unknowingly, through our own ignorance,',
    },
    {
        type: 'line',
        ti: 'སྟོན་པའི་བཀའ་དང་དམ་ལས་འགལ་གྱུར་ཏེ། །',
        pl_phonetic: 'tön pej ka dang dam le gel gjur te',
        pl_translation: 'idę wbrew znaczeniu buddy słów.',
        pl_translation_alt: 'sprzeniewierzamy się nakazom Buddhy i zobowiązaniom.',
        en_phonetic: 'tönpé ka dang dam lé gal gyur té',
        en_translation: 'we transgress the teacher’s commands and contravene commitments.',
    },
    {
        type: 'line',
        ti: 'རྣལ་འབྱོར་གང་ཞིག་དམ་ཚིག་ཉམས་པ་དང༌། །',
        pl_phonetic: 'nal dzior gang źhik dam tsik niampa dang',
        pl_translation: '“joginom o złamanych ślubach',
        pl_translation_alt: '„Jogin nigdy nie powinien przebywać,',
        en_phonetic: 'naljor gangzhik damtsik nyampa dang',
        en_translation: '“a yogi must never associate, even for an instant,',
    },
    {
        type: 'line',
        ti: 'སྐད་ཅིག་ཙམ་ཡང་འཕྲད་པར་མི་བྱ་ཞེས། །',
        pl_phonetic: 'kechik tsam jang trepar mi dzia źhe',
        pl_translation: 'nawet chwili nie poświęcaj im”',
        pl_translation_alt: 'choćby przez chwilę, z kimś, kto naruszył samaja.”',
        en_phonetic: 'kechik tsam yang trepar mija zhé',
        en_translation: 'with one who has transgressed the samaya.”',
    },
    {
        type: 'line',
        ti: 'བཀའ་ལས་བྱུང་ཞིང་དེ་ལྟར་མ་ལྕོགས་ཏེ། །',
        pl_phonetic: 'ka le dziung źhing detar ma cziok te',
        pl_translation: 'mówi kanon, lecz ja nie słucham',
        pl_translation_alt: 'Tak nakazuje kanon, lecz tego nie przestrzegamy.',
        en_phonetic: 'ka lé jung zhing detar machok té',
        en_translation: 'such is the command, yet we fail to observe it.',
    },
    {
        type: 'line',
        ti: 'གསང་སྒོ་འཆོལ་བས་དབྱེ་བསལ་དཀའ་བ་དང༌། །',
        pl_phonetic: 'sang go ćhol łe je sel kała dang',
        pl_translation: 'co można wyjawiać a co nie',
        pl_translation_alt: 'Trudno jest rozeznać, co można wyjawić a co powinno zostać tajemnicą',
        en_phonetic: 'sang go cholwé yesal kawa dang',
        en_translation: 'confused as to the secret mantra’s entrance, discernment proves difficult;',
    },
    {
        type: 'line',
        ti: 'མངོན་ཤེས་མེད་པས་སྐྱོན་ཅན་མ་རྟོགས་ཏེ། །',
        pl_phonetic: 'ngön śie mepe kjön czien matok te',
        pl_translation: 'mi nie znane poprzez wglądu brak',
        pl_translation_alt: 'Nie wiemy kto nie jest godzien, jako że brak nam wglądu,',
        en_phonetic: 'ngönshé mepé kyönchen matok té',
        en_translation: 'without higher perception, we do not recognize those at fault.',
    },
    {
        type: 'line',
        ti: 'ཉམས་དང་ཚོགས་འདྲེས་ཉམས་པ་བསྐང་བ་དང༌། །',
        pl_phonetic: 'niam dang tsok dże niampa kangła dang',
        pl_translation: 'trwam w upadku wraz upadłymi',
        pl_translation_alt: 'Tak więc przystajemy z tymi którzy upadli, przywracając ich uchybienia,',
        en_phonetic: 'nyam dang tsok dré nyampa kangwa dang',
        en_translation: 'we mix with transgressors in the assembly and restore their transgressions;',
    },
    {
        type: 'line',
        ti: 'ཉམས་དང་སྣོད་མིན་རྣམས་ལ་ཆོས་བཤད་དང༌། །',
        pl_phonetic: 'niam dang nömin nam la ćhö śie dang',
        pl_translation: 'nauczam niegodnych, skalanych',
        pl_translation_alt: 'Nauczamy tych, którzy nie są odpowiednimi odbiorcami (naczyniem),',
        en_phonetic: 'nyam dang nömin nam la chö shé dang',
        en_translation: 'we teach dharma to transgressors and unsuitable recipients;',
    },
    {
        type: 'line',
        ti: 'ཉམས་ལ་མི་འཛེམ་ཉམས་པའི་སྐྱོན་ལ་སོགས། །',
        pl_phonetic: 'niam la mi dzem niampe kjön la sok',
        pl_translation: 'nie stroniąc od hańby, brudzę się',
        pl_translation_alt: 'Nie stroniąc od naruszeń, sami się kalamy.',
        en_phonetic: 'nyam la midzem nyampé kyön lasok',
        en_translation: 'we do not avoid transgressors, but incur the fault of transgression and more;',
    },
    {
        type: 'line',
        ti: 'ཉམས་དང་འགྲོགས་ཤིང་ཉམས་པ་དེ་དག་གི །',
        pl_phonetic: 'niam dang dżok śing niampa de dak gi',
        pl_translation: 'obcując wraz z pohańbionymi',
        pl_translation_alt: 'Obcując z tymi którzy naruszyli [samaja]',
        en_phonetic: 'nyam dang drok shing nyampa dedak gi',
        en_translation: 'thus we have kept company with transgressors',
    },
    {
        type: 'line',
        ti: 'ཉམས་གྲིབ་སྐྱོན་གྱིས་གོས་པར་གྱུར་ཏོ་འཚལ། །',
        pl_phonetic: 'niam dżip kjön gji gö par giur to tsal',
        pl_translation: 'te splamienia, i ich zgubny wpływ',
        pl_translation_alt: 'Skalani jesteśmy ich zgubnym wpływem.',
        en_phonetic: 'nyamdrib kyön gyi göpar gyur to tsal',
        en_translation: 'and been sullied by their corrupting, transgressive influence.',
    },
    {
        type: 'line',
        ti: 'ཚེ་འདིའི་རྐྱེན་དང་ཡུན་གྱི་སྒྲིབ་གྱུར་རྣམས། །',
        pl_phonetic: 'tshe di kjen dang jün gji dżip giur nam',
        pl_translation: 'co na życiu ciążą, czas długi',
        pl_translation_alt: 'Takie uchybienia, które wpływają na obecne życie i powodują długotrwałe zaciemnienie, wyznajemy teraz z umysłem pełnym intensywnego żalu i skruchy.',
        en_phonetic: 'tsé di kyen dang yün gyi drib gyur nam',
        en_translation: 'such failings, which affect this life and cause long-term obscuration,',
    },
    {
        type: 'line',
        ti: 'རབ་གནོང་འགྱོད་པའི་སེམས་ཀྱིས་མཐོལ་ལོ་བཤགས། །',
        pl_phonetic: 'rab nong gjöpe sem kji thöl lo shak',
        pl_translation: 'wszystkie, ze skruchą je wyznaję!',
        pl_translation_alt: '', // Merged with previous line
        en_phonetic: 'rab nong gyöpé sem kyi tol lo shak',
        en_translation: 'we now confess with a mind of intense remorse and regret.',
    },
    {
        type: 'line',
        ti: 'བྱམས་པའི་ཐུགས་རྗེས་བདག་ལ་དགོངས་ནས་ཀྱང༌། །',
        pl_phonetic: 'dziam pej tukdzie dak la gong ne kjang',
        pl_translation: 'z troską i miłością miejcie wzgląd',
        pl_translation_alt: 'Spoglądajcie na nas z miłującym współczuciem,',
        en_phonetic: 'jampé tukjé dak la gong né kyang',
        en_translation: 'consider us with loving kindness and compassion,',
    },
    {
        type: 'line',
        ti: 'གཉིས་མེད་དབྱིངས་ལས་མི་འགྱུར་བདག་བཀོད་དེ། །',
        pl_phonetic: 'nji me jing le min giur dak kö de',
        pl_translation: 'w nie-dualnej sferze osadźcie',
        pl_translation_alt: 'I umacniajcie w sferze nie-dualności.',
        en_phonetic: 'nyimé ying lé mingyur dak kö dé',
        en_translation: 'and secure us steadfastly in the non-dual realm.',
    },
    {
        type: 'line',
        ti: 'མི་དམིགས་བཏང་སྙོམས་ངང་དུ་བཞུགས་ནས་ཀྱང༌། །',
        pl_phonetic: 'mi mig tang niom ngang du źhug ne kjang',
        pl_translation: 'choć tkwiąc w stanie ładu bez punktu',
        pl_translation_alt: 'Mimo iż przebywacie w ekwilibrium bez punktu odniesienia,',
        en_phonetic: 'mimik tangnyom ngang du zhuk né kyang',
        en_translation: 'as you abide in non-referential equanimity,',
    },
    {
        type: 'line',
        ti: 'གཉིས་མེད་དོན་གྱི་ཚངས་པ་སྩལ་དུ་གསོལ། །',
        pl_phonetic: 'nji me dön gji tsangpa tsel du sol',
        pl_translation: 'dajcie łaski w nie-dwoisty prąd.',
        pl_translation_alt: 'udzielcie nam najwyższego, nie-dualnego przebaczenia!',
        en_phonetic: 'nyimé dön gyi tsangpa tsal du sol',
        en_translation: 'grant us the ultimate, non-dual absolution!',
    },
    {
        type: 'line',
        ti: 'དོན་དམ་དམིགས་མེད་སྤྲོས་ལས་འདས་པ་ལ། །',
        pl_phonetic: 'döndam mik me czö le depa la',
        pl_translation: 'absolut: brak punktu oparcia',
        pl_translation_alt: 'W ostatecznym wymiarze, poza odniesieniem i komplikacjami,',
        en_phonetic: 'döndam mikmé trö lé depa la',
        en_translation: 'in the ultimate, beyond reference and elaboration,',
    },
    {
        type: 'line',
        ti: 'རྣམ་རྟོག་གང་ཡང་དམིགས་པར་མི་འགྱུར་ཅིང་། །',
        pl_phonetic: 'nam tok gang jang mik par min gjur czing',
        pl_translation: 'to gdzie nie ma myśli odniesień.',
        pl_translation_alt: 'Nie ma w ogóle myśli, czy przekonań;',
        en_phonetic: 'namtok gangyang mikpar mingyur ching',
        en_translation: 'there is no conceptualising thought whatsoever;',
    },
    {
        type: 'line',
        ti: 'ཀུན་རྫོབ་སྒྱུ་མ་ཙམ་གྱི་དབང་གིས་ན། །',
        pl_phonetic: 'kün dzob giuma tsam gji łang gi na',
        pl_translation: 'jednak niczym miraż względnie tu',
        pl_translation_alt: 'Jednakże w stosunku do pozornej rzeczywistości, która jest niczym miraż',
        en_phonetic: 'kündzob gyuma tsam gyi wang gi na',
        en_translation: 'yet should we err through the relative, mere illusion,',
    },
    {
        type: 'line',
        ti: 'ནོངས་པ་མཆིས་ན་རབ་གནོང་བཟོད་པར་གསོལ། །',
        pl_phonetic: 'nong pa ćhi na rab nong zö par sol',
        pl_translation: 'wyznaję żałując wad, przebacz!',
        pl_translation_alt: 'Gorąco żałując błędów, prosimy o wybaczenie!',
        en_phonetic: 'nongpa chi na rab nong zöpar sol',
        en_translation: 'this we intensely regret: forgive us, we pray!',
    },
    {
        type: 'line',
        ti: 'ཞེས་དྲི་མེད་རྒྱལ་པོ་བཤགས་པའི་རྒྱུད་ལས། ཡེ་ཤེས་ལྷ་དང་འཁོན་གཅུགས་བཤགས་པའི་ལེའུ་བཞི་པ་ཁོལ་དུ་ཕྱུངས་པའོ།། །།',
        pl_phonetic: '',
        pl_translation: 'z czwartego rozdziału tantry niepokalanej spowiedzi, wyznanie niezgody z bóstwami mądrości.\ntłumaczenie: andrzej rybszleger, 2025',
        pl_translation_alt: 'Z Czwartego rozdziału Tantry Niepokalanej Spowiedzi, Wyznanie Niezgody z Bóstwami Mądrości.\nTłumaczenie: Andrzej Rybszleger, 2025',
        en_phonetic: '',
        en_translation: 'from the fourth chapter of the immaculate confession tantra, confession of discord with the wisdom deities.',
    },
];


// Helper functions to process data for TEXTS
const processTextData = (data: any[], lang: Language, phoneticKey?: 'phonetic_pl' | 'phonetic_en', translationKey?: keyof Translatable) => {
  const paragraphs: string[] = [];
  const transliteration: string[] = [];

  data.forEach(item => {
    let textToAdd = "";
    if (lang === 'ti') {
      textToAdd = item.tibetan || item.ti || item.content?.ti || "";
    } else if (translationKey && item.translation && item.translation[translationKey]) {
      textToAdd = item.translation[translationKey];
    } else if (translationKey && item.content && item.content[translationKey]) {
      textToAdd = item.content[translationKey];
    } else if (translationKey && (item as any)[translationKey as string]) { 
      textToAdd = (item as any)[translationKey as string];
    } else { 
      textToAdd = item.translation?.en || item.content?.en || item.en_translation || item.ti || ""; // Fallback for english or ti
    }
    paragraphs.push(textToAdd.replace(/<br\s*\/?>/gi, '\n'));

    if (phoneticKey && (item as any)[phoneticKey]) {
      transliteration.push((item as any)[phoneticKey].replace(/<br\s*\/?>/gi, '\n'));
    } else {
      transliteration.push(""); 
    }
  });
  return { paragraphs, transliteration };
};

const getVajrayanaContent = (lang: Language): TextContent => {
  const paragraphs: string[] = [];
  const transliteration_pl_data: string[] = [];
  const transliteration_en_data: string[] = [];

  const addContent = (
    tibetanText: string,
    translationProvider: () => string | undefined,
    phoneticPlProvider?: () => string | undefined,
    phoneticEnProvider?: () => string | undefined 
  ) => {
    const currentLangText = lang === 'ti' ? tibetanText : translationProvider();
    if (currentLangText !== undefined) { 
      paragraphs.push(currentLangText.replace(/<br\s*\/?>/gi, '\n'));
      
      if (lang === 'pl' && phoneticPlProvider) {
        transliteration_pl_data.push((phoneticPlProvider() || "").replace(/<br\s*\/?>/gi, '\n'));
      } else if (lang === 'pl') {
        transliteration_pl_data.push("");
      }
      
      if (lang === 'en' && phoneticEnProvider) { 
         transliteration_en_data.push((phoneticEnProvider() || "").replace(/<br\s*\/?>/gi, '\n'));
      } else if (lang === 'en' && phoneticPlProvider && !phoneticEnProvider) { // Fallback to PL phonetic if EN specific is not available
        transliteration_en_data.push((phoneticPlProvider() || "").replace(/<br\s*\/?>/gi, '\n'));
      } else if (lang === 'en') {
        transliteration_en_data.push("");
      }
    } else if (lang === 'ti' && tibetanText !== undefined) { 
        paragraphs.push(tibetanText.replace(/<br\s*\/?>/gi, '\n'));
    }
  };
  
  const currentLangOrEn = (translatable: Translatable | undefined): string | undefined => {
    if (!translatable) return undefined;
    return lang === 'ti' ? translatable.ti : (translatable[lang as Exclude<Language, 'ti'>] ?? translatable.en);
  }

  addContent(VAJRAYANA_PREAMBLE.indianTitle.tibetan, () => currentLangOrEn(VAJRAYANA_PREAMBLE.indianTitle.text), () => VAJRAYANA_PREAMBLE.indianTitle.phonetic_pl, () => VAJRAYANA_PREAMBLE.indianTitle.phonetic_en);
  addContent(VAJRAYANA_PREAMBLE.tibetanTitle.tibetan, () => currentLangOrEn(VAJRAYANA_PREAMBLE.tibetanTitle.text), () => VAJRAYANA_PREAMBLE.tibetanTitle.phonetic_pl, () => VAJRAYANA_PREAMBLE.tibetanTitle.phonetic_en);
  addContent(VAJRAYANA_PREAMBLE.homage.tibetan, () => currentLangOrEn(VAJRAYANA_PREAMBLE.homage.translation), () => VAJRAYANA_PREAMBLE.homage.phonetic_pl, () => VAJRAYANA_PREAMBLE.homage.phonetic_en);
  addContent(VAJRAYANA_PREAMBLE.introduction.tibetan, () => currentLangOrEn(VAJRAYANA_PREAMBLE.introduction.translation), () => VAJRAYANA_PREAMBLE.introduction.phonetic_pl, () => VAJRAYANA_PREAMBLE.introduction.phonetic_en);
  
  VAJRAYANA_DOWNFALL_DATA.forEach(downfall => {
    addContent(downfall.tibetan, () => currentLangOrEn(downfall.translation), () => downfall.phonetic_pl, () => downfall.phonetic_en);
    addContent(downfall.confession.tibetan, () => currentLangOrEn(downfall.confession.translation), () => downfall.confession.phonetic_pl, () => downfall.confession.phonetic_en);
  });

  addContent(VAJRAYANA_CONCLUSION.text.tibetan, () => currentLangOrEn(VAJRAYANA_CONCLUSION.text.translation), () => VAJRAYANA_CONCLUSION.text.phonetic_pl, () => VAJRAYANA_CONCLUSION.text.phonetic_en);
  addContent(VAJRAYANA_CONCLUSION.colophon.tibetan, () => currentLangOrEn(VAJRAYANA_CONCLUSION.colophon.translation), () => VAJRAYANA_CONCLUSION.colophon.phonetic_pl, () => VAJRAYANA_CONCLUSION.colophon.phonetic_en);
  
  const titleForLang = currentLangOrEn(UI_STRINGS.vajrayanaMainTitle)!;

  return {
    title: titleForLang,
    paragraphs,
    transliteration_pl: (lang === 'pl' && transliteration_pl_data.some(t => t.trim() !== "")) ? transliteration_pl_data : undefined,
    transliteration_en: (lang === 'en' && transliteration_en_data.some(t => t.trim() !== "")) ? transliteration_en_data : undefined,
  };
};

const getBodhisattvaContent = (lang: Language): TextContent => {
  let title = "";
  const paragraphs: string[] = [];
  const buddhas: { [nameInText: string]: string } = {};
  const transliteration_pl_data: string[] = []; 
  const transliteration_en_data: string[] = [];
  
  let imageUrl: string | undefined = undefined;
  let imageAlt: string | undefined = undefined;
  let imageDataAiHint: string | undefined = undefined;

  const imageItem = BODHISATTVA_TEXT_DATA.find(item => item.type === 'image');
  if (imageItem && imageItem.imageUrl) {
    imageUrl = imageItem.imageUrl;
    imageAlt = imageItem.altText?.[lang as Exclude<Language, 'ti'>] || imageItem.altText?.en;
    imageDataAiHint = imageItem.dataAiHint;
  }
  
  const textItemsForParagraphs = BODHISATTVA_TEXT_DATA.filter(item => item.type !== 'image');

  textItemsForParagraphs.forEach(item => {
    let currentParagraph: string | undefined = undefined;
    let currentPhoneticPL: string | undefined = item.phonetic_pl;
    let currentPhoneticEN: string | undefined = item.phonetic_en;

    const itemContentForLang = lang === 'ti' ? item.content?.ti : (item.content?.[lang as Exclude<Language, 'ti'>] ?? item.content?.en);
    const itemTranslationForLang = lang === 'ti' ? item.translation?.ti : (item.translation?.[lang as Exclude<Language, 'ti'>] ?? item.translation?.en);

    if (item.type === 'title') {
      title = itemContentForLang ?? "Untitled";
      currentParagraph = title;
    } else if (item.type === 'heading') {
      currentParagraph = itemContentForLang ?? "Heading";
    } else if (item.type === 'footer') {
      currentParagraph = lang === 'ti' ? (item.tibetan ?? itemContentForLang) : itemContentForLang;
       if (currentParagraph === undefined && item.content?.en && (lang === 'en' || lang === 'pl')) { 
        currentParagraph = item.content.en;
      }
    } else if (item.type === 'prose-item') {
      currentParagraph = lang === 'ti' ? (item.tibetan || "") : (itemTranslationForLang || "");
      if (item.isBuddhaName && item.sanskrit && (lang === 'pl' || lang === 'en') && currentParagraph) {
         const nameKey = item.translation?.[lang as Exclude<Language, 'ti'>] ?? item.translation?.en;
         if (nameKey) {
            const nameInDisplayedLang = nameKey.split(';')[0].trim(); 
            buddhas[nameInDisplayedLang] = item.sanskrit;
         }
      }
    }
    
    if (currentParagraph !== undefined) {
      paragraphs.push(currentParagraph.replace(/<br\s*\/?>/gi, '\n'));
      
      if (item.type === 'prose-item') { 
          if (lang === 'pl') {
            transliteration_pl_data.push(currentPhoneticPL ? currentPhoneticPL.replace(/<br\s*\/?>/gi, '\n') : "");
          }
          if (lang === 'en') {
            transliteration_en_data.push(currentPhoneticEN ? currentPhoneticEN.replace(/<br\s*\/?>/gi, '\n') : (currentPhoneticPL ? currentPhoneticPL.replace(/<br\s*\/?>/gi, '\n') : "")); 
          }
      } else if (lang === 'pl' || lang === 'en') { 
          if (lang === 'pl') transliteration_pl_data.push(""); 
          if (lang === 'en') transliteration_en_data.push("");
      }
    }
  });
  
  return { 
    title: title || (lang === 'ti' ? UI_STRINGS.bodhisattvaMainTitle.ti! : (UI_STRINGS.bodhisattvaMainTitle[lang as Exclude<Language, 'ti'>] || UI_STRINGS.bodhisattvaMainTitle.en!)), 
    imageUrl,
    imageAlt,
    imageDataAiHint,
    paragraphs, 
    buddhas: (lang === 'pl' || lang === 'en') && Object.keys(buddhas).length > 0 ? buddhas : undefined,
    transliteration_pl: lang === 'pl' && transliteration_pl_data.some(t => t && t.trim() !== "") ? transliteration_pl_data : undefined,
    transliteration_en: lang === 'en' && transliteration_en_data.some(t => t && t.trim() !== "") ? transliteration_en_data : undefined,
  };
};

const getUltimateConfessionContent = (lang: Language): TextContent => {
    let overallTitle = "";
    const paragraphs: string[] = [];
    const paragraphs_alt: string[] = [];
    const transliteration_pl_data: string[] = [];
    const transliteration_en_data: string[] = [];

    const titleItem = ULTIMATE_CONFESSION_RAW_DATA.find(item => item.type === 'title') as Extract<UltimateConfessionRawItem, {type: 'title'}> | undefined;

    if (titleItem) {
        if (lang === 'ti') {
            overallTitle = titleItem.ti_title;
        } else if (lang === 'pl') {
            overallTitle = titleItem.pl_title;
            if (titleItem.pl_title_alt) {
                paragraphs_alt.push(titleItem.pl_title_alt);
            }
        } else { // 'en'
            overallTitle = titleItem.en_title;
        }
    } else {
        overallTitle = (lang === 'ti' ? UI_STRINGS.ultimateConfessionMainTitle.ti : (UI_STRINGS.ultimateConfessionMainTitle[lang as Exclude<Language, 'ti'>] ?? UI_STRINGS.ultimateConfessionMainTitle.en))!;
    }
    
    const contentLines = ULTIMATE_CONFESSION_RAW_DATA.filter(item => item.type === 'line') as Extract<UltimateConfessionRawItem, {type: 'line'}>[];

    contentLines.forEach(item => {
        let currentParagraph: string | undefined;
        let currentParagraphAlt: string | undefined;

        if (lang === 'ti') {
            currentParagraph = item.ti;
        } else if (lang === 'pl') {
            currentParagraph = item.pl_translation;
            currentParagraphAlt = item.pl_translation_alt;
        } else { // 'en'
            currentParagraph = item.en_translation;
        }

        if (currentParagraph !== undefined) {
            paragraphs.push(currentParagraph.replace(/<br\s*\/?>/gi, '\n'));
            if(lang === 'pl' && currentParagraphAlt !== undefined) {
                paragraphs_alt.push(currentParagraphAlt.replace(/<br\s*\/?>/gi, '\n'));
            }

            if (lang === 'pl') {
                transliteration_pl_data.push((item.pl_phonetic || "").replace(/<br\s*\/?>/gi, '\n'));
            }
            if (lang === 'en') {
                transliteration_en_data.push((item.en_phonetic || item.pl_phonetic || "").replace(/<br\s*\/?>/gi, '\n'));
            }
        }
    });

    // The first element of paragraphs_alt is the title, let's prepend it to the main title
    if (lang === 'pl' && paragraphs_alt.length > 0) {
      const altTitle = paragraphs_alt.shift();
      overallTitle = altTitle || overallTitle; // Use alt title if it exists
    }
  
    return {
        title: overallTitle,
        paragraphs,
        paragraphs_alt: (lang === 'pl' && paragraphs_alt.length > 0) ? paragraphs_alt : undefined,
        transliteration_pl: lang === 'pl' && transliteration_pl_data.some(t => t && t.trim() !== "") ? transliteration_pl_data : undefined,
        transliteration_en: lang === 'en' && transliteration_en_data.some(t => t && t.trim() !== "") ? transliteration_en_data : undefined,
    };
};


export const TEXTS: { [key in TextKey]: { [keyA in Language]: TextContent } } = {
  vajrayana: {
    en: getVajrayanaContent('en'),
    pl: getVajrayanaContent('pl'),
    ti: getVajrayanaContent('ti'),
  },
  bodhisattva: {
    en: getBodhisattvaContent('en'),
    pl: getBodhisattvaContent('pl'),
    ti: getBodhisattvaContent('ti'),
  },
  ultimateConfession: {
    en: getUltimateConfessionContent('en'),
    pl: getUltimateConfessionContent('pl'),
    ti: getUltimateConfessionContent('ti'),
  }
};

export const LANGUAGES: { id: Language; label: (currentLang: Language) => string; }[] = [
  { id: 'en', label: (currentLang) => UI_STRINGS.languageTooltipEN[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.languageTooltipEN.en },
  { id: 'pl', label: (currentLang) => UI_STRINGS.languageTooltipPL[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.languageTooltipPL.pl },
  { id: 'ti', label: (currentLang) => UI_STRINGS.languageTooltipTI[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.languageTooltipTI.ti || UI_STRINGS.languageTooltipTI.en },
];

export const TEXT_KEYS: { id: TextKey; label: (currentLang: Language) => string; shortLabel: (currentLang: Language) => string;}[] = [
  { 
    id: 'vajrayana', 
    label: (currentLang) => UI_STRINGS.controlsButtonVajrayana[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonVajrayana.en,
    shortLabel: (currentLang) => UI_STRINGS.controlsButtonVajrayanaShort[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonVajrayanaShort.en,
  },
  { 
    id: 'bodhisattva', 
    label: (currentLang) => UI_STRINGS.controlsButtonBodhisattva[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonBodhisattva.en,
    shortLabel: (currentLang) => UI_STRINGS.controlsButtonBodhisattvaShort[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonBodhisattvaShort.en,
  },
  { 
    id: 'ultimateConfession', 
    label: (currentLang) => UI_STRINGS.controlsButtonUltimateConfession[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonUltimateConfession.en,
    shortLabel: (currentLang) => UI_STRINGS.controlsButtonUltimateConfessionShort[currentLang as Exclude<Language, 'ti'>] || UI_STRINGS.controlsButtonUltimateConfessionShort.en,
  },
];

export const TEXT_SIZE_SCALE: TextSize[] = ['xs', 'sm', 'base', 'lg', 'xl', '2xl'];

export const UI_STRINGS_PAGE: { [key_lang in Language]: { 
    appName: string; 
    selectTextPrompt: string; 
    selectLanguagePrompt: string; 
    textSizeLabel: string;
    decreaseTextSizePrompt: string;
    increaseTextSizePrompt: string;
    footerText: string;
    decreaseAutoscrollSpeedPrompt: string;
    increaseAutoscrollSpeedPrompt: string;
    startAutoscrollPrompt: string;
    pauseAutoscrollPrompt: string;
    toggleTranslationPrompt: string;
} } = {
  en: {
    appName: UI_STRINGS.appName.en,
    selectTextPrompt: UI_STRINGS.controlsLabelText.en,
    selectLanguagePrompt: UI_STRINGS.controlsLabelLanguage.en,
    textSizeLabel: UI_STRINGS.controlsLabelSize.en,
    decreaseTextSizePrompt: UI_STRINGS.decreaseTextSizePrompt.en,
    increaseTextSizePrompt: UI_STRINGS.increaseTextSizePrompt.en,
    footerText: UI_STRINGS.footerText.en,
    decreaseAutoscrollSpeedPrompt: UI_STRINGS.decreaseAutoscrollSpeedPrompt.en,
    increaseAutoscrollSpeedPrompt: UI_STRINGS.increaseAutoscrollSpeedPrompt.en,
    startAutoscrollPrompt: UI_STRINGS.startAutoscrollPrompt.en,
    pauseAutoscrollPrompt: UI_STRINGS.pauseAutoscrollPrompt.en,
    toggleTranslationPrompt: UI_STRINGS.toggleTranslationPrompt.en,
  },
  pl: {
    appName: UI_STRINGS.appName.pl,
    selectTextPrompt: UI_STRINGS.controlsLabelText.pl,
    selectLanguagePrompt: UI_STRINGS.controlsLabelLanguage.pl,
    textSizeLabel: UI_STRINGS.controlsLabelSize.pl,
    decreaseTextSizePrompt: UI_STRINGS.decreaseTextSizePrompt.pl,
    increaseTextSizePrompt: UI_STRINGS.increaseTextSizePrompt.pl,
    footerText: UI_STRINGS.footerText.pl,
    decreaseAutoscrollSpeedPrompt: UI_STRINGS.decreaseAutoscrollSpeedPrompt.pl,
    increaseAutoscrollSpeedPrompt: UI_STRINGS.increaseAutoscrollSpeedPrompt.pl,
    startAutoscrollPrompt: UI_STRINGS.startAutoscrollPrompt.pl,
    pauseAutoscrollPrompt: UI_STRINGS.pauseAutoscrollPrompt.pl,
    toggleTranslationPrompt: UI_STRINGS.toggleTranslationPrompt.pl,
  },
  ti: {
    appName: UI_STRINGS.appName.ti || UI_STRINGS.appName.en,
    selectTextPrompt: UI_STRINGS.controlsLabelText.ti || UI_STRINGS.controlsLabelText.en,
    selectLanguagePrompt: UI_STRINGS.controlsLabelLanguage.ti || UI_STRINGS.controlsLabelLanguage.en,
    textSizeLabel: UI_STRINGS.controlsLabelSize.ti || UI_STRINGS.controlsLabelSize.en,
    decreaseTextSizePrompt: UI_STRINGS.decreaseTextSizePrompt.ti || UI_STRINGS.decreaseTextSizePrompt.en,
    increaseTextSizePrompt: UI_STRINGS.increaseTextSizePrompt.ti || UI_STRINGS.increaseTextSizePrompt.en,
    footerText: UI_STRINGS.footerText.ti || UI_STRINGS.footerText.en,
    decreaseAutoscrollSpeedPrompt: UI_STRINGS.decreaseAutoscrollSpeedPrompt.ti || UI_STRINGS.decreaseAutoscrollSpeedPrompt.en,
    increaseAutoscrollSpeedPrompt: UI_STRINGS.increaseAutoscrollSpeedPrompt.ti || UI_STRINGS.increaseAutoscrollSpeedPrompt.en,
    startAutoscrollPrompt: UI_STRINGS.startAutoscrollPrompt.ti || UI_STRINGS.startAutoscrollPrompt.en,
    pauseAutoscrollPrompt: UI_STRINGS.pauseAutoscrollPrompt.ti || UI_STRINGS.pauseAutoscrollPrompt.en,
    toggleTranslationPrompt: UI_STRINGS.toggleTranslationPrompt.ti || UI_STRINGS.toggleTranslationPrompt.en,
  }
};
