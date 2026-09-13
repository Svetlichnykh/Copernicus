import type { Dictionary } from "./en";

export const sq: Dictionary = {
  meta: {
    title: "Asistenti i Kandidatëve IES — Copernicus Berlin",
    description:
      "Kontrollo brenda dy minutash nëse bursa International Excellence Scholarship (IES) e Copernicus Berlin është e përshtatshme për ty.",
  },
  nav: {
    checkEligibility: "Kontrollo përshtatshmërinë tënde",
    officialSite: "Faqja zyrtare e IES",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Një semestër në Berlin.",
    titleHighlight: "Një rrjet për gjithë jetën.",
    subtitle:
      "IES financon një semestër në një nga universitetet më të mira të Berlinit, si dhe një praktikë profesionale për studentë të shquar nga Evropa Lindore dhe Juglindore, Kaukazi dhe Azia Qendrore. Programi drejtohet nga një ekip vullnetarësh — shumë prej tyre ish-bursistë të vetë programit.",
    ctaPrimary: "Kontrollo nëse IES të përshtatet — 2 min",
    ctaSecondary: "Shiko faqen zyrtare të IES",
    stats: [
      { value: "1", label: "semestër në Berlin" },
      { value: "8+", label: "javë praktikë" },
      { value: "20", label: "vende të pranueshme" },
      { value: "4", label: "universitete partnere" },
    ],
  },
  highlights: {
    eyebrow: "Pse IES",
    title: "Jo thjesht një semestër shkëmbimi",
    subtitle:
      "IES kombinon studimin akademik, përvojën reale të punës dhe një komunitet aktiv ndërkombëtar.",
    items: [
      {
        title: "Studio në një nga universitetet më të mira të Berlinit",
        description:
          "Një semestër në Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin ose University of Potsdam — i hapur për të gjitha fushat e studimit.",
      },
      {
        title: "8+ javë praktikë",
        description:
          "Fito përvojë praktike ndërkombëtare pune në Berlin paralelisht me studimet, duke ndërtuar aftësi që i vlerësojnë punëdhënësit.",
      },
      {
        title: "I financuar, jo thjesht i miratuar",
        description:
          "Bursat e plota dhe të pjesshme mund të mbulojnë xhepin mujor, akomodimin, tarifat e regjistrimit, sigurimin e përgjegjësisë dhe më shumë.",
      },
      {
        title: "Një komunitet, jo thjesht një shkëmbim",
        description:
          "Bëhu pjesë e një ekipi ndërkombëtar bursistësh dhe alumnësh që kontribuojnë aktivisht dhe ndihmojnë në formësimin e programit.",
      },
    ],
  },
  stats: {
    eyebrow: "IES në shifra",
    title: "Një histori suksesi, jo thjesht një premtim",
    subtitle: "Një trashëgimi mundësish, rritjeje dhe bashkëpunimi ndërkombëtar.",
    items: {
      yearsHistory: "vite histori e programit IES",
      applicationsReceived: "aplikime të kualifikuara të marra",
      scholarsGraduated: "bursistë e përfunduan me sukses programin",
      disciplinesStudied: "disiplina akademike të studiuara në Berlin dhe Potsdam",
      countriesRepresented: "vende të përfaqësuara gjatë gjithë historisë së IES",
      citiesRepresented: "qytete të përfaqësuara nga bursistët e IES",
      underprivilegedSupported: "studentë me më pak mundësi të mbështetur",
      partnerUniversities: "universitete partnere në vendet e pranueshme për IES",
      internshipsCompleted: "praktika profesionale të përfunduara",
    },
  },
  funding: {
    eyebrow: "Financimi",
    title: "Çfarë mbulon në të vërtetë një bursë e plotë",
    subtitleTemplate:
      "Një bursë e plotë IES arrin afërsisht €{amount} për bursist për një program gjashtëmujor dhe përfshin:",
    lineItems: {
      accommodation: "Akomodimi",
      pocketMoney: "Xhepi (shpenzime personale)",
      healthInsurance: "Sigurimi shëndetësor",
      administrativeCosts: "Kostot administrative",
      consultingMentoring: "Konsulencë dhe mentorim",
      educationalTour: "Udhëtim edukativ",
      internationalSeminars: "Seminare ndërkombëtare",
      workshopsTraining: "Punëtori dhe trajnime",
      universityEnrolmentFee: "Tarifa e regjistrimit universitar",
      socialMeetings: "Takime shoqërore",
      culturalEvents: "Evente kulturore",
      liabilityInsurance: "Sigurimi i përgjegjësisë",
    },
    tiersTitle: "Mundësitë e financimit",
    tiers: {
      full: {
        name: "Bursë e plotë",
        covered: [
          "Xhepi paguhet çdo muaj",
          "Kostot e sigurimit shëndetësor rimbursohen",
          "Akomodimi, regjistrimi, sigurimi i përgjegjësisë, udhëtimet edukative, takimet shoqërore, administrimi, paketa mirëpritëse, eventet kulturore, seminaret ndërkombëtare, konsulenca, mentorimi dhe punëtoritë mbulohen drejtpërdrejt nga Copernicus Berlin",
        ],
        notCovered: ["Shpenzimet e udhëtimit nuk mbulohen"],
      },
      partial_plus: {
        name: "Bursë e pjesshme Plus",
        covered: [
          "Xhepi paguhet çdo muaj",
          "Akomodimi, regjistrimi, sigurimi i përgjegjësisë, udhëtimet edukative, takimet shoqërore, administrimi, paketa mirëpritëse, eventet kulturore, seminaret ndërkombëtare, konsulenca, mentorimi dhe punëtoritë mbulohen drejtpërdrejt nga Copernicus Berlin",
        ],
        notCovered: ["Shpenzimet e udhëtimit nuk mbulohen", "Kostot e sigurimit shëndetësor nuk mbulohen"],
      },
      partial: {
        name: "Bursë e pjesshme",
        covered: [
          "Xhepi paguhet çdo muaj",
          "Regjistrimi, sigurimi i përgjegjësisë, udhëtimet edukative, takimet shoqërore, administrimi, paketa mirëpritëse, eventet kulturore, seminaret ndërkombëtare, konsulenca, mentorimi dhe punëtoritë mbulohen drejtpërdrejt nga Copernicus Berlin",
        ],
        notCovered: [
          "Shpenzimet e udhëtimit nuk mbulohen",
          "Kostot e sigurimit shëndetësor nuk mbulohen",
          "Kostot e akomodimit për dy muaj (€1,650) duhet të paguhen vetë; pjesa tjetër mbulohet nga Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Vetë-kontroll i shpejtë",
    title: "A mund të jetë IES për ty?",
    subtitle:
      "7 pyetje të shpejta, rreth 90 sekonda. Rezultati yt shfaqet menjëherë — një vlerësim i shpejtë plus një përmbledhje e pikave të forta dhe çfarë ia vlen të kontrollosh.",
    progressLabel: "Pyetja {current} nga {total}",
    nextLabel: "Tjetra",
    backLabel: "Prapa",
    seeResultLabel: "Shiko rezultatin tim",
    otherCountryLabel: "Nuk është listuar këtu",
    countryPlaceholder: "Zgjidh vendin tënd",
    questions: [
      {
        id: "enrollment",
        question:
          "A je aktualisht i/e regjistruar si student/e Bachelor, Master ose Doktoraturë në një universitet?",
        options: [
          { value: "yes", label: "Po" },
          { value: "no", label: "Jo" },
        ],
      },
      {
        id: "country",
        question: "A jeton apo studion aktualisht në një nga këto vende?",
        options: [],
      },
      {
        id: "academics",
        question:
          "A do ta përshkruaje rezultatin tënd akademik si mbi mesatare (p.sh. mesatare e lartë, i/e pari/a në klasë, shpërblime akademike)?",
        options: [
          { value: "yes", label: "Po, qartësisht mbi mesatare" },
          { value: "somewhat", label: "Mirë, por jo i/e pari/a në klasë" },
          { value: "not_sure", label: "Nuk jam i/e sigurt" },
        ],
      },
      {
        id: "interest",
        question:
          "A je i/e interesuar të kalosh një semestër në Berlin duke kombinuar studimet universitare me një praktikë prej minimum 8 javësh?",
        options: [
          { value: "yes", label: "Po, kjo është pikërisht ajo që kërkoj" },
          { value: "no", label: "Jo vërtet" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "Si e vlerëson veten në anglisht? IES kërkon të paktën B1 në anglisht ose gjermanisht — gjuha tjetër është një bonus i mirë.",
        options: [
          { value: "a1", label: "A1 — sapo po fillon" },
          { value: "a2", label: "A2 — bazë" },
          { value: "b1", label: "B1 — mesatar" },
          { value: "b2", label: "B2 — mesatar i lartë" },
          { value: "c1", label: "C1 — i/e avancuar" },
          { value: "c2", label: "C2 — i/e rrjedhshëm/me" },
        ],
      },
      {
        id: "germanLevel",
        question: "Po gjermanisht? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — sapo po fillon" },
          { value: "a2", label: "A2 — bazë" },
          { value: "b1", label: "B1 — mesatar" },
          { value: "b2", label: "B2 — mesatar i lartë" },
          { value: "c1", label: "C1 — i/e avancuar" },
          { value: "c2", label: "C2 — i/e rrjedhshëm/me" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Cili nivel financimi do të funksiononte realisht për ty?",
        options: [
          {
            value: "partial",
            label:
              "Mund të mbuloj vetë udhëtimin, sigurimin shëndetësor dhe ~€1,650 për 2 muaj akomodim",
          },
          {
            value: "partial_plus",
            label: "Mund të mbuloj vetë udhëtimin dhe sigurimin shëndetësor, por kam nevojë që akomodimi të mbulohet",
          },
          {
            value: "full",
            label: "Kam nevojë që xhepi, akomodimi dhe sigurimi të mbulohen plotësisht",
          },
          { value: "not_sure", label: "Ende nuk jam i/e sigurt" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Dukesh si një përshtatje e fortë",
      body: "Bazuar në përgjigjet e tua, IES mund të jetë shumë e përshtatshme për ty. Lëri të dhënat e tua më poshtë dhe ne do të vazhdojmë me detajet e plota të programit dhe linkun zyrtar të aplikimit.",
    },
    possible_fit: {
      title: "Mund të jesh një përshtatje e mirë",
      body: "IES mund të funksionojë mirë për ty — disa detaje ia vlen t'i kontrollosh dyfish sipas kritereve zyrtare. Lëri të dhënat e tua dhe ne do të vazhdojmë.",
    },
    explore_more: {
      title: "Ia vlen ta eksplorosh më tej",
      body: "Profili yt ende nuk plotëson çdo kriter, por IES ia vlen gjithsesi ta shohësh — llojet e bursave dhe kërkesat ndryshojnë. Lëri të dhënat e tua dhe ne do të dërgojmë më shumë informacion.",
    },
    not_eligible: {
      title: "Jo ende — por mbaje IES në mendje",
      body: "IES është menduar për studentë aktualisht të regjistruar në universitet. Sapo të regjistrohesh, kthehu përsëri — ndërkohë lëri të dhënat e tua dhe ne do të të mbajmë të informuar.",
    },
    restartLabel: "Rifillo kontrollin",
  },
  resultDetails: {
    strengthsTitle: "Pikat e tua të forta",
    considerationsTitle: "Ia vlen të kontrollosh dyfish",
    scholarshipTitle: "Bursa më e përshtatshme për ty",
    scholarshipNote:
      "Bazuar në atë që na the se mund ta mbulosh vetë — shifra e saktë varet nga aplikimi yt final.",
    strengths: {
      enrolledStudent: "Je aktualisht student/e i/e regjistruar në universitet — kërkesa themelore e IES.",
      eligibleCountry: "Vendi yt është në listën aktuale të vendeve të pranueshme për IES.",
      strongAcademics: "Rezultati yt akademik tingëllon qartësisht mbi mesatare.",
      decentAcademics: "Rezultati yt akademik tingëllon i qëndrueshëm.",
      genuineInterest: "Je vërtet i/e interesuar në formatin studime + praktikë që ofron IES.",
      languageRequirementMet: "Plotëson kërkesën gjuhësore të IES (B1+ në anglisht ose gjermanisht).",
      secondLanguageBonus: "Ke gjithashtu një nivel pune të gjuhës tjetër — një bonus i mirë.",
    },
    considerations: {
      notEnrolledYet:
        "IES kërkon që të jesh aktualisht student/e i/e regjistruar — ia vlen ta kontrollosh përsëri sapo të fillosh programin.",
      countryNotListed:
        "Vendi yt nuk ishte në listën aktuale të vendeve të pranueshme për IES — kontrollo faqen zyrtare, pasi mund të ndryshojë.",
      confirmAcademics:
        "Ia vlen të kontrollosh saktësisht kërkesat për mesataren ose notat në faqen zyrtare.",
      lowInterest:
        "Formati studime + praktikë mund të mos jetë saktësisht ajo që kërkon — lexo më shumë para se të aplikosh.",
      languageBelowRequirement:
        "IES kërkon të paktën B1 në anglisht ose gjermanisht — mund të ia vlejë ta përmirësosh njërën prej tyre para se të aplikosh.",
    },
    scholarshipTiers: {
      full: "Bursë e plotë",
      partial_plus: "Bursë e pjesshme Plus",
      partial: "Bursë e pjesshme",
      unsure: "Le ta zbulojmë së bashku",
    },
  },
  leadForm: {
    title: "Do të dish më shumë?",
    subtitle: "Zgjidh çfarë të përshtatet — një email i shpejtë informues, ose një konsultim personal.",
    kindInfoLabel: "Thjesht më dërgo informacionin",
    kindConsultationLabel: "Kërko një konsultim",
    nameLabel: "Si duhet të të drejtohemi?",
    namePlaceholder: "Emri yt",
    emailLabel: "Adresa e email-it",
    emailPlaceholder: "ti@universiteti.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / rrjet tjetër social",
    instagramPlaceholder: "@username",
    aboutLabel: "Disa fjalë për ty (opsionale)",
    aboutPlaceholder: "Fusha jote e studimit, çfarë të entuziazmon te IES, çdo gjë tjetër…",
    consentLabel:
      "Pajtohem që Copernicus Berlin të më kontaktojë me informacion rreth programit IES.",
    submitLabel: "Më dërgo informacionin",
    submitConsultationLabel: "Kërko konsultimin tim",
    submittingLabel: "Duke dërguar…",
    successTitle: "Faleminderit!",
    successBody: "I morëm të dhënat e tua dhe do të vazhdojmë së shpejti në {email}.",
    errorBody: "Diçka shkoi keq nga ana jonë. Të lutemi provo përsëri pas pak.",
    consultationNote: "Ekipi ynë do të të kontaktojë personalisht së shpejti.",
  },
  faq: {
    eyebrow: "Pyetje të shpeshta",
    title: "Pyetjet më të shpeshta",
    items: [
      {
        q: "Çfarë është IES?",
        a: "International Excellence Scholarship (IES) është një program burse i Copernicus Berlin e.V. që financon një semestër studimi plus një praktikë në Berlin për studentë të shquar nga Evropa Lindore dhe Juglindore, Kaukazi dhe Azia Qendrore.",
      },
      {
        q: "Kush mund të aplikojë?",
        a: "Studentë Bachelor, Master dhe Doktoraturë të çdo fushe studimi nga vendet e pranueshme, me një rezultat akademik të fortë. Kriteret e plota të përshtatshmërisë janë të listuara në faqen zyrtare të IES.",
      },
      {
        q: "Çfarë mbulon bursa?",
        a: "Në varësi të llojit të bursës (e plotë ose e pjesshme), mund të përfshijë xhep mujor, akomodim, tarifa regjistrimi, sigurim përgjegjësie, udhëtime edukative dhe evente shoqërore.",
      },
      {
        q: "Çfarë ndodh pas aplikimit?",
        a: "Aplikimet shqyrtohen dhe kandidatët e përzgjedhur ftohen në raunde të mëtejshme përzgjedhjeje. Aplikuesit e suksesshëm bëjnë një semestër në Berlin duke kombinuar studimet universitare me një praktikë.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Ky është një prototip i pavarur dhe jozyrtar i asistentit të kandidatëve, krijuar për Copernicus Berlin IES Skills Challenge. Nuk është një faqe zyrtare e Copernicus Berlin.",
    officialLinkLabel: "Faqja zyrtare e programit IES",
    applicationLinkLabel: "Formulari zyrtar i aplikimit",
    madeFor: "Krijuar për IES Skills Challenge",
    privacyLinkLabel: "Politika e privatësisë",
    termsLinkLabel: "Kushtet e përdorimit",
  },
  languageSwitcher: {
    label: "Gjuha",
  },
  cookieConsent: {
    message:
      "Përdorim një sasi të vogël ruajtjeje lokale për të mbajtur mend zgjedhjen tënde të gjuhës. Pa gjurmim, pa cookie të palëve të treta.",
    accept: "E kuptova",
    privacyLinkLabel: "Politika e privatësisë",
  },
};
