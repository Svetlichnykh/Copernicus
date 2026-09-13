import type { Dictionary } from "./en";

export const uz: Dictionary = {
  meta: {
    title: "IES nomzod yordamchisi — Copernicus Berlin",
    description:
      "Copernicus Berlin tomonidan taqdim etiladigan International Excellence Scholarship (IES) stipendiyasi sizga mos kelish-kelmasligini ikki daqiqada tekshiring.",
  },
  nav: {
    checkEligibility: "Mosligingizni tekshiring",
    officialSite: "IES rasmiy sahifasi",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Berlinda bir semestr.",
    titleHighlight: "Butun umrga tarmoq.",
    subtitle:
      "IES Sharqiy va Janubi-Sharqiy Yevropa, Kavkaz va Markaziy Osiyodan bo'lgan iqtidorli talabalar uchun Berlindagi yetakchi universitetda bir semestr ta'lim va amaliy stajirovkani moliyalashtiradi. Dasturni ko'ngillilar jamoasi boshqaradi — ularning ko'pchiligi ilgari o'zlari ham stipendiat bo'lishgan.",
    ctaPrimary: "IES sizga mos kelishini tekshiring — 2 daqiqa",
    ctaSecondary: "IES rasmiy sahifasini ko'ring",
    stats: [
      { value: "1", label: "Berlinda semestr" },
      { value: "8+", label: "hafta stajirovka" },
      { value: "20", label: "mos keluvchi mamlakat" },
      { value: "4", label: "hamkor universitet" },
    ],
  },
  highlights: {
    eyebrow: "Nega aynan IES",
    title: "Oddiy almashinuv semestri emas",
    subtitle:
      "IES akademik ta'limni, real ish tajribasini va faol xalqaro jamoani birlashtiradi.",
    items: [
      {
        title: "Berlindagi yetakchi universitetda ta'lim oling",
        description:
          "Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin yoki University of Potsdam'da bir semestr — barcha ta'lim yo'nalishlari uchun ochiq.",
      },
      {
        title: "8+ hafta stajirovka",
        description:
          "O'qish bilan bir qatorda Berlinda haqiqiy xalqaro ish tajribasiga ega bo'ling va ish beruvchilar qadrlaydigan ko'nikmalarni rivojlantiring.",
      },
      {
        title: "Nafaqat tasdiqlangan, balki moliyalashtirilgan",
        description:
          "To'liq va qisman stipendiyalar oylik cho'ntak pulini, turar joyni, ro'yxatdan o'tish to'lovlarini, javobgarlik sug'urtasini va boshqa xarajatlarni qoplashi mumkin.",
      },
      {
        title: "Almashinuv emas, jamoa",
        description:
          "Dasturning rivojlanishiga faol hissa qo'shadigan stipendiatlar va bitiruvchilarning xalqaro jamoasiga qo'shiling.",
      },
    ],
  },
  stats: {
    eyebrow: "Raqamlarda IES",
    title: "Shunchaki va'da emas, natijalar",
    subtitle: "Imkoniyatlar, o'sish va xalqaro hamkorlik merosi.",
    items: {
      yearsHistory: "yillik IES dasturi tarixi",
      applicationsReceived: "mos ariza qabul qilindi",
      scholarsGraduated: "stipendiat dasturni muvaffaqiyatli tamomladi",
      disciplinesStudied: "Berlin va Potsdamda o'rganilgan akademik yo'nalish",
      countriesRepresented: "IES tarixi davomida vakillik qilingan mamlakat",
      citiesRepresented: "IES stipendiatlari tomonidan vakillik qilingan shahar",
      underprivilegedSupported: "imkoniyati cheklangan talabaga yordam berildi",
      partnerUniversities: "IES uchun mos mamlakatlardagi hamkor universitet",
      internshipsCompleted: "yakunlangan professional stajirovka",
    },
  },
  funding: {
    eyebrow: "Moliyalashtirish",
    title: "To'liq stipendiya aslida nimalarni qoplaydi",
    subtitleTemplate:
      "To'liq IES stipendiyasi olti oylik dastur uchun har bir stipendiatga taxminan €{amount} miqdorida bo'lib, quyidagilarni o'z ichiga oladi:",
    lineItems: {
      accommodation: "Turar joy",
      pocketMoney: "Cho'ntak puli",
      healthInsurance: "Tibbiy sug'urta",
      administrativeCosts: "Ma'muriy xarajatlar",
      consultingMentoring: "Konsultatsiya va mentorlik",
      educationalTour: "Ta'lim sayohati",
      internationalSeminars: "Xalqaro seminarlar",
      workshopsTraining: "Seminar-treninglar",
      universityEnrolmentFee: "Universitetga ro'yxatdan o'tish to'lovi",
      socialMeetings: "Ijtimoiy uchrashuvlar",
      culturalEvents: "Madaniy tadbirlar",
      liabilityInsurance: "Javobgarlik sug'urtasi",
    },
    tiersTitle: "Moliyalashtirish imkoniyatlari",
    tiers: {
      full: {
        name: "To'liq stipendiya",
        covered: [
          "Cho'ntak puli har oy to'lanadi",
          "Tibbiy sug'urta xarajatlari qoplanadi",
          "Turar joy, ro'yxatdan o'tish, javobgarlik sug'urtasi, ta'lim sayohatlari, ijtimoiy uchrashuvlar, ma'muriy xarajatlar, xush kelibsiz to'plami, madaniy tadbirlar, xalqaro seminarlar, konsultatsiya, mentorlik va seminar-treninglarni bevosita Copernicus Berlin qoplaydi",
        ],
        notCovered: ["Yo'l xarajatlari qoplanmaydi"],
      },
      partial_plus: {
        name: "Qisman stipendiya Plus",
        covered: [
          "Cho'ntak puli har oy to'lanadi",
          "Turar joy, ro'yxatdan o'tish, javobgarlik sug'urtasi, ta'lim sayohatlari, ijtimoiy uchrashuvlar, ma'muriy xarajatlar, xush kelibsiz to'plami, madaniy tadbirlar, xalqaro seminarlar, konsultatsiya, mentorlik va seminar-treninglarni bevosita Copernicus Berlin qoplaydi",
        ],
        notCovered: ["Yo'l xarajatlari qoplanmaydi", "Tibbiy sug'urta xarajatlari qoplanmaydi"],
      },
      partial: {
        name: "Qisman stipendiya",
        covered: [
          "Cho'ntak puli har oy to'lanadi",
          "Ro'yxatdan o'tish, javobgarlik sug'urtasi, ta'lim sayohatlari, ijtimoiy uchrashuvlar, ma'muriy xarajatlar, xush kelibsiz to'plami, madaniy tadbirlar, xalqaro seminarlar, konsultatsiya, mentorlik va seminar-treninglarni bevosita Copernicus Berlin qoplaydi",
        ],
        notCovered: [
          "Yo'l xarajatlari qoplanmaydi",
          "Tibbiy sug'urta xarajatlari qoplanmaydi",
          "Ikki oylik turar joy xarajati (€1,650) ni o'zingiz to'lashingiz kerak; qolganini Copernicus Berlin qoplaydi",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Tezkor o'z-o'zini tekshirish",
    title: "IES sizga mos kelishi mumkinmi?",
    subtitle:
      "7 ta qisqa savol, taxminan 90 soniya. Natijangiz darhol chiqadi — tezkor xulosa va sizning kuchli tomonlaringiz hamda tekshirib ko'rishga arzigulik jihatlarning tahlili.",
    progressLabel: "{total} dan {current}-savol",
    nextLabel: "Keyingi",
    backLabel: "Orqaga",
    seeResultLabel: "Natijamni ko'rish",
    otherCountryLabel: "Bu yerda yo'q",
    countryPlaceholder: "Mamlakatingizni tanlang",
    questions: [
      {
        id: "enrollment",
        question:
          "Hozirda universitetda bakalavr, magistr yoki doktorantura talabasi sifatida o'qiyapsizmi?",
        options: [
          { value: "yes", label: "Ha" },
          { value: "no", label: "Yo'q" },
        ],
      },
      {
        id: "country",
        question: "Hozirda shu mamlakatlarning birida yashaysizmi yoki o'qiysizmi?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Akademik ko'rsatkichlaringizni o'rtachadan yuqori deb tavsiflaysizmi (masalan, yuqori GPA, guruhda eng yaxshi, akademik mukofotlar)?",
        options: [
          { value: "yes", label: "Ha, aniq o'rtachadan yuqori" },
          { value: "somewhat", label: "Yaxshi, lekin guruhda eng yaxshisi emas" },
          { value: "not_sure", label: "Aniq bilmayman" },
        ],
      },
      {
        id: "interest",
        question:
          "Berlinda universitet ta'limini kamida 8 haftalik stajirovka bilan birlashtirgan holda bir semestr o'tkazishga qiziqasizmi?",
        options: [
          { value: "yes", label: "Ha, men aynan shuni izlayapman" },
          { value: "no", label: "Unchalik emas" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "Ingliz tilini bilish darajangizni qanday baholaysiz? IES ingliz yoki nemis tilida kamida B1 darajasini talab qiladi — ikkinchisi esa yaxshi bonus bo'ladi.",
        options: [
          { value: "a1", label: "A1 — endi boshlayapman" },
          { value: "a2", label: "A2 — boshlang'ich" },
          { value: "b1", label: "B1 — o'rta" },
          { value: "b2", label: "B2 — o'rtadan yuqori" },
          { value: "c1", label: "C1 — yuqori" },
          { value: "c2", label: "C2 — erkin" },
        ],
      },
      {
        id: "germanLevel",
        question: "Nemis tili-chi? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — endi boshlayapman" },
          { value: "a2", label: "A2 — boshlang'ich" },
          { value: "b1", label: "B1 — o'rta" },
          { value: "b2", label: "B2 — o'rtadan yuqori" },
          { value: "c1", label: "C1 — yuqori" },
          { value: "c2", label: "C2 — erkin" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Qaysi moliyalashtirish darajasi sizga real mos keladi?",
        options: [
          {
            value: "partial",
            label:
              "Yo'l xarajati, tibbiy sug'urta va 2 oylik turar joy uchun ~€1,650 ni o'zim to'lay olaman",
          },
          {
            value: "partial_plus",
            label: "Yo'l xarajati va tibbiy sug'urtani o'zim to'lay olaman, lekin turar joy qoplanishi kerak",
          },
          {
            value: "full",
            label: "Menga cho'ntak puli, turar joy va sug'urta to'liq qoplanishi kerak",
          },
          { value: "not_sure", label: "Hali aniq emas" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Siz kuchli nomzodga o'xshaysiz",
      body: "Javoblaringizga ko'ra, IES siz uchun juda mos bo'lishi mumkin. Ma'lumotlaringizni quyida qoldiring — biz dastur haqida to'liq ma'lumot va rasmiy ariza havolasi bilan bog'lanamiz.",
    },
    possible_fit: {
      title: "Siz yaxshi nomzod bo'lishingiz mumkin",
      body: "IES sizga mos kelishi mumkin — bir nechta tafsilotni rasmiy mezonlar bo'yicha tekshirib ko'rishga arziydi. Ma'lumotlaringizni qoldiring, biz bog'lanamiz.",
    },
    explore_more: {
      title: "Yanada chuqurroq o'rganishga arziydi",
      body: "Sizning profilingiz hali barcha mezonlarga to'liq javob bermaydi, lekin IES baribir ko'rib chiqishga arziydi — stipendiya turlari va talablari turlicha. Ma'lumotlaringizni qoldiring, biz ko'proq ma'lumot yuboramiz.",
    },
    not_eligible: {
      title: "Hozircha emas — lekin IES-ni esda tuting",
      body: "IES hozirda universitetga o'qishga kirgan talabalar uchun mo'ljallangan. O'qishga kirganingizdan so'ng qayting — bu orada ma'lumotlaringizni qoldiring, biz sizni xabardor qilib turamiz.",
    },
    restartLabel: "Tekshiruvni qayta boshlash",
  },
  resultDetails: {
    strengthsTitle: "Sizning kuchli tomonlaringiz",
    considerationsTitle: "Tekshirib ko'rishga arzigulik",
    scholarshipTitle: "Sizga eng mos stipendiya",
    scholarshipNote:
      "O'zingiz qoplay olishingiz haqida aytganlaringizga asoslangan — aniq summa yakuniy arizangizga bog'liq.",
    strengths: {
      enrolledStudent: "Siz hozirda universitet talabasi ekansiz — bu IES-ning asosiy talabi.",
      eligibleCountry: "Sizning mamlakatingiz IES-ning joriy mos mamlakatlar ro'yxatida bor.",
      strongAcademics: "Sizning akademik ko'rsatkichlaringiz aniq o'rtachadan yuqori ko'rinadi.",
      decentAcademics: "Sizning akademik ko'rsatkichlaringiz yetarlicha yaxshi ko'rinadi.",
      genuineInterest: "Siz IES taklif qiladigan ta'lim + stajirovka formatiga chinakam qiziqasiz.",
      languageRequirementMet: "Siz IES-ning til talabiga javob berasiz (ingliz yoki nemis tilida B1+).",
      secondLanguageBonus: "Sizda ikkinchi tilda ham ishchi daraja mavjud — yaxshi bonus.",
    },
    considerations: {
      notEnrolledYet:
        "IES hozirda o'qiyotgan talaba bo'lishni talab qiladi — dasturingizni boshlaganingizdan so'ng yana tekshirib ko'ring.",
      countryNotListed:
        "Sizning mamlakatingiz IES-ning joriy mos mamlakatlar ro'yxatida yo'q edi — ro'yxat o'zgarishi mumkinligi sababli rasmiy sahifadan tekshirib ko'ring.",
      confirmAcademics:
        "GPA yoki baho bo'yicha aniq talablarni rasmiy sahifada tekshirib ko'rishga arziydi.",
      lowInterest:
        "Ta'lim + stajirovka formati aynan siz izlagan narsa bo'lmasligi mumkin — ariza berishdan oldin ko'proq o'qing.",
      languageBelowRequirement:
        "IES ingliz yoki nemis tilida kamida B1 darajasini talab qiladi — ariza berishdan oldin ulardan birini yaxshilashga arzigulik bo'lishi mumkin.",
    },
    scholarshipTiers: {
      full: "To'liq stipendiya",
      partial_plus: "Qisman stipendiya Plus",
      partial: "Qisman stipendiya",
      unsure: "Buni birgalikda aniqlaymiz",
    },
  },
  leadForm: {
    title: "Ko'proq bilishni xohlaysizmi?",
    subtitle: "Sizga mos kelganini tanlang — qisqa ma'lumot xati yoki shaxsiy konsultatsiya.",
    kindInfoLabel: "Shunchaki ma'lumot yuboring",
    kindConsultationLabel: "Konsultatsiya so'rash",
    nameLabel: "Sizga qanday murojaat qilishimiz kerak?",
    namePlaceholder: "Ismingiz",
    emailLabel: "Elektron pochta manzili",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / boshqa ijtimoiy tarmoq",
    instagramPlaceholder: "@username",
    aboutLabel: "O'zingiz haqida bir necha so'z (ixtiyoriy)",
    aboutPlaceholder: "Ta'lim yo'nalishingiz, IES sizni nima bilan qiziqtiradi, boshqa har qanday narsa…",
    consentLabel:
      "Men Copernicus Berlin IES dasturi haqida ma'lumot bilan men bilan bog'lanishiga rozilik bildiraman.",
    submitLabel: "Ma'lumot yuboring",
    submitConsultationLabel: "Konsultatsiyamni so'rash",
    submittingLabel: "Yuborilmoqda…",
    successTitle: "Rahmat!",
    successBody: "Ma'lumotlaringizni oldik va tez orada {email} orqali bog'lanamiz.",
    errorBody: "Bizning tomondan xatolik yuz berdi. Iltimos, biroz vaqtdan so'ng qayta urinib ko'ring.",
    consultationNote: "Jamoamiz tez orada siz bilan shaxsan bog'lanadi.",
  },
  faq: {
    eyebrow: "Ko'p so'raladigan savollar",
    title: "Ko'p so'raladigan savollar",
    items: [
      {
        q: "IES nima?",
        a: "International Excellence Scholarship (IES) — Copernicus Berlin e.V. tomonidan taqdim etiladigan, Sharqiy va Janubi-Sharqiy Yevropa, Kavkaz va Markaziy Osiyodan bo'lgan iqtidorli talabalar uchun Berlinda bir semestr ta'lim va stajirovkani moliyalashtiradigan stipendiya dasturi.",
      },
      {
        q: "Kim ariza topshira oladi?",
        a: "Mos keluvchi mamlakatlardan bo'lgan, kuchli akademik ko'rsatkichlarga ega, istalgan yo'nalishdagi bakalavr, magistr va doktorantura talabalari. To'liq mos kelish mezonlari IES rasmiy sahifasida keltirilgan.",
      },
      {
        q: "Stipendiya nimalarni qoplaydi?",
        a: "Stipendiya turiga qarab (to'liq yoki qisman), u oylik cho'ntak puli, turar joy, ro'yxatdan o'tish to'lovlari, javobgarlik sug'urtasi, ta'lim sayohatlari va ijtimoiy tadbirlarni o'z ichiga olishi mumkin.",
      },
      {
        q: "Ariza topshirgandan keyin nima bo'ladi?",
        a: "Arizalar ko'rib chiqiladi va saralangan nomzodlar keyingi tanlov bosqichlariga taklif qilinadi. Muvaffaqiyatli nomzodlar Berlinda universitet ta'limini stajirovka bilan birlashtirgan holda bir semestr o'tkazadilar.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Bu Copernicus Berlin IES Skills Challenge uchun yaratilgan mustaqil, norasmiy nomzod yordamchisi prototipidir. Bu Copernicus Berlinning rasmiy veb-sayti emas.",
    officialLinkLabel: "IES dasturining rasmiy sahifasi",
    applicationLinkLabel: "Rasmiy ariza formasi",
    madeFor: "IES Skills Challenge uchun yaratilgan",
    privacyLinkLabel: "Maxfiylik siyosati",
    termsLinkLabel: "Foydalanish shartlari",
  },
  languageSwitcher: {
    label: "Til",
  },
  cookieConsent: {
    message:
      "Til tanlovingizni eslab qolish uchun biz oz miqdorda lokal xotiradan foydalanamiz. Kuzatuv yo'q, uchinchi tomon cookie-lari yo'q.",
    accept: "Tushunarli",
    privacyLinkLabel: "Maxfiylik siyosati",
  },
};
