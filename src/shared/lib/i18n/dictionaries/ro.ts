import type { Dictionary } from "./en";

export const ro: Dictionary = {
  meta: {
    title: "Asistent pentru candidați IES — Copernicus Berlin",
    description:
      "Verifică în două minute dacă bursa International Excellence Scholarship (IES) oferită de Copernicus Berlin este potrivită pentru tine.",
  },
  nav: {
    checkEligibility: "Verifică dacă ți se potrivește",
    officialSite: "Pagina oficială IES",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Un semestru la Berlin.",
    titleHighlight: "O rețea pentru toată viața.",
    subtitle:
      "IES finanțează un semestru la o universitate de top din Berlin, plus un stagiu practic, pentru studenți excepționali din Europa de Est și de Sud-Est, Caucaz și Asia Centrală. Este administrat de o echipă de voluntari — mulți dintre ei foști bursieri.",
    ctaPrimary: "Verifică dacă IES ți se potrivește — 2 min",
    ctaSecondary: "Vezi pagina oficială IES",
    stats: [
      { value: "1", label: "semestru la Berlin" },
      { value: "8+", label: "săptămâni de stagiu" },
      { value: "20", label: "țări eligibile" },
      { value: "4", label: "universități partenere" },
    ],
  },
  highlights: {
    eyebrow: "De ce IES",
    title: "Nu doar un semestru de schimb",
    subtitle:
      "IES combină studiul academic, experiența de lucru reală și o comunitate internațională activă.",
    items: [
      {
        title: "Studiază la o universitate de top din Berlin",
        description:
          "Un semestru la Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin sau University of Potsdam — deschis tuturor domeniilor de studiu.",
      },
      {
        title: "8+ săptămâni de stagiu",
        description:
          "Dobândește experiență practică de lucru internațională la Berlin pe parcursul studiilor, dezvoltând abilități apreciate de angajatori.",
      },
      {
        title: "Finanțat, nu doar aprobat",
        description:
          "Bursele integrale și parțiale pot acoperi bani de buzunar lunari, cazare, taxe de înscriere, asigurare de răspundere civilă și multe altele.",
      },
      {
        title: "O comunitate, nu doar un schimb",
        description:
          "Alătură-te unei echipe internaționale de bursieri și absolvenți care contribuie activ și ajută la modelarea programului.",
      },
    ],
  },
  stats: {
    eyebrow: "IES în cifre",
    title: "Un istoric dovedit, nu doar o promisiune",
    subtitle: "O moștenire de oportunități, dezvoltare și cooperare internațională.",
    items: {
      yearsHistory: "ani de istorie a programului IES",
      applicationsReceived: "candidaturi calificate primite",
      scholarsGraduated: "bursieri care au finalizat cu succes programul",
      disciplinesStudied: "discipline academice studiate la Berlin și Potsdam",
      countriesRepresented: "țări reprezentate de-a lungul istoriei IES",
      citiesRepresented: "orașe reprezentate de bursierii IES",
      underprivilegedSupported: "studenți cu oportunități reduse sprijiniți",
      partnerUniversities: "universități partenere în țările eligibile IES",
      internshipsCompleted: "stagii profesionale finalizate",
    },
  },
  funding: {
    eyebrow: "Finanțare",
    title: "Ce acoperă efectiv o bursă integrală",
    subtitleTemplate:
      "O bursă IES integrală este de aproximativ €{amount} per bursier pentru un program de șase luni și include:",
    lineItems: {
      accommodation: "Cazare",
      pocketMoney: "Bani de buzunar",
      healthInsurance: "Asigurare de sănătate",
      administrativeCosts: "Costuri administrative",
      consultingMentoring: "Consultanță și mentorat",
      educationalTour: "Excursie educațională",
      internationalSeminars: "Seminarii internaționale",
      workshopsTraining: "Ateliere și traininguri",
      universityEnrolmentFee: "Taxă de înscriere la universitate",
      socialMeetings: "Întâlniri sociale",
      culturalEvents: "Evenimente culturale",
      liabilityInsurance: "Asigurare de răspundere civilă",
    },
    tiersTitle: "Opțiuni de finanțare",
    tiers: {
      full: {
        name: "Bursă integrală",
        covered: [
          "Banii de buzunar se plătesc lunar",
          "Costurile asigurării de sănătate sunt rambursate",
          "Cazarea, înscrierea, asigurarea de răspundere civilă, excursiile educaționale, întâlnirile sociale, administrarea, pachetul de bun venit, evenimentele culturale, seminariile internaționale, consultanța, mentoratul și atelierele sunt acoperite direct de Copernicus Berlin",
        ],
        notCovered: ["Cheltuielile de transport nu sunt acoperite"],
      },
      partial_plus: {
        name: "Bursă parțială Plus",
        covered: [
          "Banii de buzunar se plătesc lunar",
          "Cazarea, înscrierea, asigurarea de răspundere civilă, excursiile educaționale, întâlnirile sociale, administrarea, pachetul de bun venit, evenimentele culturale, seminariile internaționale, consultanța, mentoratul și atelierele sunt acoperite direct de Copernicus Berlin",
        ],
        notCovered: ["Cheltuielile de transport nu sunt acoperite", "Costurile asigurării de sănătate nu sunt acoperite"],
      },
      partial: {
        name: "Bursă parțială",
        covered: [
          "Banii de buzunar se plătesc lunar",
          "Înscrierea, asigurarea de răspundere civilă, excursiile educaționale, întâlnirile sociale, administrarea, pachetul de bun venit, evenimentele culturale, seminariile internaționale, consultanța, mentoratul și atelierele sunt acoperite direct de Copernicus Berlin",
        ],
        notCovered: [
          "Cheltuielile de transport nu sunt acoperite",
          "Costurile asigurării de sănătate nu sunt acoperite",
          "Costurile de cazare pentru două luni (€1.650) trebuie plătite; restul este acoperit de Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Verificare rapidă",
    title: "IES ți s-ar putea potrivi?",
    subtitle:
      "7 întrebări rapide, aproximativ 90 de secunde. Rezultatul apare instant — un verdict rapid plus o analiză a punctelor tale forte și a ceea ce merită verificat.",
    progressLabel: "Întrebarea {current} din {total}",
    nextLabel: "Următoarea",
    backLabel: "Înapoi",
    seeResultLabel: "Vezi rezultatul meu",
    otherCountryLabel: "Nu este în listă",
    countryPlaceholder: "Selectează țara ta",
    questions: [
      {
        id: "enrollment",
        question:
          "Ești în prezent înscris(ă) ca student(ă) la licență, master sau doctorat la o universitate?",
        options: [
          { value: "yes", label: "Da" },
          { value: "no", label: "Nu" },
        ],
      },
      {
        id: "country",
        question: "Locuiești sau studiezi în prezent în una dintre aceste țări?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Ți-ai descrie rezultatele academice ca fiind peste medie (de ex. medie mare, printre primii din grupă, premii academice)?",
        options: [
          { value: "yes", label: "Da, clar peste medie" },
          { value: "somewhat", label: "Bine, dar nu printre primii" },
          { value: "not_sure", label: "Nu sunt sigur(ă)" },
        ],
      },
      {
        id: "interest",
        question:
          "Ești interesat(ă) să petreci un semestru la Berlin, combinând studiile universitare cu un stagiu de minimum 8 săptămâni?",
        options: [
          { value: "yes", label: "Da, exact asta caut" },
          { value: "no", label: "Nu prea" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "Cum ți-ai evalua nivelul de engleză? IES cere cel puțin B1 la engleză sau germană — cealaltă limbă este un bonus plăcut.",
        options: [
          { value: "a1", label: "A1 — abia încep" },
          { value: "a2", label: "A2 — de bază" },
          { value: "b1", label: "B1 — intermediar" },
          { value: "b2", label: "B2 — intermediar superior" },
          { value: "c1", label: "C1 — avansat" },
          { value: "c2", label: "C2 — fluent" },
        ],
      },
      {
        id: "germanLevel",
        question: "Și germana? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — abia încep" },
          { value: "a2", label: "A2 — de bază" },
          { value: "b1", label: "B1 — intermediar" },
          { value: "b2", label: "B2 — intermediar superior" },
          { value: "c1", label: "C1 — avansat" },
          { value: "c2", label: "C2 — fluent" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Ce nivel de finanțare ți s-ar potrivi realist?",
        options: [
          {
            value: "partial",
            label:
              "Pot să-mi acopăr singur(ă) transportul, asigurarea de sănătate și ~€1.650 pentru 2 luni de cazare",
          },
          {
            value: "partial_plus",
            label: "Pot să-mi acopăr singur(ă) transportul și asigurarea de sănătate, dar am nevoie ca cazarea să fie acoperită",
          },
          {
            value: "full",
            label: "Am nevoie ca banii de buzunar, cazarea și asigurarea să fie acoperite integral",
          },
          { value: "not_sure", label: "Încă nu sunt sigur(ă)" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Pari a fi un candidat puternic",
      body: "Pe baza răspunsurilor tale, IES ar putea fi o alegere excelentă pentru tine. Lasă-ți datele mai jos și te vom contacta cu toate detaliile programului și linkul oficial de aplicare.",
    },
    possible_fit: {
      title: "Ai putea fi o potrivire bună",
      body: "IES ar putea funcționa pentru tine — merită să verifici câteva detalii cu criteriile oficiale. Lasă-ți datele și te vom contacta.",
    },
    explore_more: {
      title: "Merită explorat mai departe",
      body: "Profilul tău nu bifează încă toate criteriile, dar IES tot merită luat în calcul — tipurile de burse și cerințele variază. Lasă-ți datele și îți vom trimite mai multe informații.",
    },
    not_eligible: {
      title: "Încă nu — dar ține IES minte",
      body: "IES este conceput pentru studenți înscriși în prezent la o universitate. Odată ce te înscrii, revino — între timp lasă-ți datele și te vom ține la curent.",
    },
    restartLabel: "Reia verificarea",
  },
  resultDetails: {
    strengthsTitle: "Punctele tale forte",
    considerationsTitle: "Merită verificat",
    scholarshipTitle: "Bursa potrivită pentru tine",
    scholarshipNote:
      "Pe baza a ceea ce ne-ai spus că poți acoperi singur(ă) — suma exactă depinde de candidatura finală.",
    strengths: {
      enrolledStudent: "Ești în prezent student(ă) la o universitate — cerința de bază a IES.",
      eligibleCountry: "Țara ta este pe lista actuală de țări eligibile IES.",
      strongAcademics: "Rezultatele tale academice par clar peste medie.",
      decentAcademics: "Rezultatele tale academice par solide.",
      genuineInterest: "Ești cu adevărat interesat(ă) de formatul studiu + stagiu oferit de IES.",
      languageRequirementMet: "Îndeplinești cerința lingvistică IES (B1+ la engleză sau germană).",
      secondLanguageBonus: "Ai și un nivel funcțional în cealaltă limbă — un bonus plăcut.",
    },
    considerations: {
      notEnrolledYet:
        "IES cere să fii în prezent student(ă) înscris(ă) — merită verificat din nou după ce începi programul.",
      countryNotListed:
        "Țara ta nu era pe lista actuală de țări eligibile IES — verifică pagina oficială, deoarece se poate schimba.",
      confirmAcademics:
        "Merită să verifici cerințele exacte privind media sau notele pe pagina oficială.",
      lowInterest:
        "Formatul studiu + stagiu ar putea să nu fie exact ceea ce cauți — citește mai mult înainte de a aplica.",
      languageBelowRequirement:
        "IES cere cel puțin B1 la engleză sau germană — ar putea merita să-ți îmbunătățești una dintre ele înainte de a aplica.",
    },
    scholarshipTiers: {
      full: "Bursă integrală",
      partial_plus: "Bursă parțială Plus",
      partial: "Bursă parțială",
      unsure: "Să lămurim asta împreună",
    },
  },
  leadForm: {
    title: "Vrei să afli mai multe?",
    subtitle: "Alege ce ți se potrivește — un email rapid cu informații sau o consultație personală.",
    kindInfoLabel: "Trimite-mi doar informațiile",
    kindConsultationLabel: "Solicită o consultație",
    nameLabel: "Cum să te adresăm?",
    namePlaceholder: "Prenumele tău",
    emailLabel: "Adresă de email",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / altă rețea socială",
    instagramPlaceholder: "@username",
    aboutLabel: "Câteva cuvinte despre tine (opțional)",
    aboutPlaceholder: "Domeniul tău de studiu, ce te atrage la IES, orice altceva…",
    consentLabel:
      "Sunt de acord ca Copernicus Berlin să mă contacteze cu informații despre programul IES.",
    submitLabel: "Trimite-mi informațiile",
    submitConsultationLabel: "Solicită consultația mea",
    submittingLabel: "Se trimite…",
    successTitle: "Mulțumim!",
    successBody: "Am primit datele tale și te vom contacta în curând la {email}.",
    errorBody: "Ceva nu a funcționat corect din partea noastră. Te rugăm să încerci din nou peste puțin timp.",
    consultationNote: "Echipa noastră te va contacta personal în curând.",
  },
  faq: {
    eyebrow: "Întrebări frecvente",
    title: "Întrebări frecvente",
    items: [
      {
        q: "Ce este IES?",
        a: "International Excellence Scholarship (IES) este un program de burse al Copernicus Berlin e.V. care finanțează un semestru de studiu plus un stagiu la Berlin pentru studenți excepționali din Europa de Est și de Sud-Est, Caucaz și Asia Centrală.",
      },
      {
        q: "Cine poate aplica?",
        a: "Studenți la licență, master și doctorat din orice domeniu de studiu, din țările eligibile, cu rezultate academice solide. Criteriile complete de eligibilitate sunt listate pe pagina oficială IES.",
      },
      {
        q: "Ce acoperă bursa?",
        a: "În funcție de tipul bursei (integrală sau parțială), aceasta poate include bani de buzunar lunari, cazare, taxe de înscriere, asigurare de răspundere civilă, excursii educaționale și evenimente sociale.",
      },
      {
        q: "Ce se întâmplă după ce aplic?",
        a: "Candidaturile sunt analizate, iar candidații selectați sunt invitați la etape ulterioare de selecție. Candidații admiși petrec un semestru la Berlin, combinând studiile universitare cu un stagiu.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Acesta este un prototip independent și neoficial de asistent pentru candidați, creat pentru IES Skills Challenge Copernicus Berlin. Nu este un site oficial Copernicus Berlin.",
    officialLinkLabel: "Pagina oficială a programului IES",
    applicationLinkLabel: "Formularul oficial de aplicare",
    madeFor: "Creat pentru IES Skills Challenge",
    privacyLinkLabel: "Politica de confidențialitate",
    termsLinkLabel: "Termeni de utilizare",
  },
  languageSwitcher: {
    label: "Limbă",
  },
  cookieConsent: {
    message:
      "Folosim o cantitate mică de stocare locală pentru a reține alegerea limbii tale. Fără urmărire, fără cookie-uri terțe.",
    accept: "Am înțeles",
    privacyLinkLabel: "Politica de confidențialitate",
  },
};
