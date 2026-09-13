import type { Dictionary } from "./en";

export const bs: Dictionary = {
  meta: {
    title: "Asistent za prijavu IES — Copernicus Berlin",
    description:
      "Provjeri za dvije minute da li ti odgovara stipendija International Excellence Scholarship (IES) od Copernicus Berlina.",
  },
  nav: {
    checkEligibility: "Provjeri da li ispunjavaš uslove",
    officialSite: "Zvanična stranica IES-a",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Jedan semestar u Berlinu.",
    titleHighlight: "Mreža kontakata za cijeli život.",
    subtitle:
      "IES finansira semestar na vrhunskom univerzitetu u Berlinu, kao i praktičnu stručnu praksu za izuzetne studente iz Istočne i Jugoistočne Evrope, Kavkaza i Centralne Azije. Program vodi tim volontera — mnogi od njih su i sami nekada bili stipendisti.",
    ctaPrimary: "Provjeri da li ti IES odgovara — 2 min",
    ctaSecondary: "Pogledaj zvaničnu stranicu IES-a",
    stats: [
      { value: "1", label: "semestar u Berlinu" },
      { value: "8+", label: "sedmica prakse" },
      { value: "20", label: "zemalja koje ispunjavaju uslove" },
      { value: "4", label: "univerziteta partnera" },
    ],
  },
  highlights: {
    eyebrow: "Zašto IES",
    title: "Ne samo razmjena",
    subtitle:
      "IES kombinuje akademsko obrazovanje, stvarno radno iskustvo i aktivnu međunarodnu zajednicu.",
    items: [
      {
        title: "Studiraj na vrhunskom univerzitetu u Berlinu",
        description:
          "Jedan semestar na Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin ili University of Potsdam — otvoreno za sve oblasti studija.",
      },
      {
        title: "8+ sedmica stručne prakse",
        description:
          "Steci praktično međunarodno radno iskustvo u Berlinu uporedo sa studijama, gradeći vještine koje poslodavci cijene.",
      },
      {
        title: "Finansirano, ne samo odobreno",
        description:
          "Puna i djelimična stipendija mogu pokriti mjesečni džeparac, smještaj, troškove upisa, osiguranje od odgovornosti i drugo.",
      },
      {
        title: "Zajednica, ne samo razmjena",
        description:
          "Pridruži se međunarodnom timu stipendista i alumnija koji aktivno doprinose programu i oblikuju ga.",
      },
    ],
  },
  stats: {
    eyebrow: "IES u brojkama",
    title: "Dokazani rezultati, ne samo obećanja",
    subtitle: "Nasljeđe prilika, rasta i međunarodne saradnje.",
    items: {
      yearsHistory: "godina historije programa IES",
      applicationsReceived: "kvalifikovanih prijava primljeno",
      scholarsGraduated: "stipendista uspješno završilo program",
      disciplinesStudied: "akademskih oblasti izučavano u Berlinu i Potsdamu",
      countriesRepresented: "zemalja predstavljeno tokom historije IES-a",
      citiesRepresented: "gradova predstavljeno stipendistima IES-a",
      underprivilegedSupported: "studenata sa manje mogućnosti podržano",
      partnerUniversities: "univerziteta partnera u zemljama koje ispunjavaju uslove za IES",
      internshipsCompleted: "stručnih praksi završeno",
    },
  },
  funding: {
    eyebrow: "Finansiranje",
    title: "Šta puna stipendija zapravo pokriva",
    subtitleTemplate:
      "Puna IES stipendija iznosi približno €{amount} po stipendisti za šestomjesečni program i uključuje:",
    lineItems: {
      accommodation: "Smještaj",
      pocketMoney: "Džeparac",
      healthInsurance: "Zdravstveno osiguranje",
      administrativeCosts: "Administrativni troškovi",
      consultingMentoring: "Savjetovanje i mentorstvo",
      educationalTour: "Edukativno putovanje",
      internationalSeminars: "Međunarodni seminari",
      workshopsTraining: "Radionice i obuke",
      universityEnrolmentFee: "Troškovi upisa na univerzitet",
      socialMeetings: "Društvena druženja",
      culturalEvents: "Kulturni događaji",
      liabilityInsurance: "Osiguranje od odgovornosti",
    },
    tiersTitle: "Mogućnosti finansiranja",
    tiers: {
      full: {
        name: "Puna stipendija",
        covered: [
          "Džeparac se isplaćuje mjesečno",
          "Troškovi zdravstvenog osiguranja se nadoknađuju",
          "Smještaj, upis, osiguranje od odgovornosti, edukativna putovanja, društvena druženja, administracija, welcome paket, kulturni događaji, međunarodni seminari, savjetovanje, mentorstvo i radionice direktno pokriva Copernicus Berlin",
        ],
        notCovered: ["Putni troškovi nisu pokriveni"],
      },
      partial_plus: {
        name: "Djelimična stipendija Plus",
        covered: [
          "Džeparac se isplaćuje mjesečno",
          "Smještaj, upis, osiguranje od odgovornosti, edukativna putovanja, društvena druženja, administracija, welcome paket, kulturni događaji, međunarodni seminari, savjetovanje, mentorstvo i radionice direktno pokriva Copernicus Berlin",
        ],
        notCovered: ["Putni troškovi nisu pokriveni", "Troškovi zdravstvenog osiguranja nisu pokriveni"],
      },
      partial: {
        name: "Djelimična stipendija",
        covered: [
          "Džeparac se isplaćuje mjesečno",
          "Upis, osiguranje od odgovornosti, edukativna putovanja, društvena druženja, administracija, welcome paket, kulturni događaji, međunarodni seminari, savjetovanje, mentorstvo i radionice direktno pokriva Copernicus Berlin",
        ],
        notCovered: [
          "Putni troškovi nisu pokriveni",
          "Troškovi zdravstvenog osiguranja nisu pokriveni",
          "Troškovi smještaja za dva mjeseca (€1.650) moraju se platiti samostalno; ostatak pokriva Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Brza provjera",
    title: "Da li bi IES mogao biti za tebe?",
    subtitle:
      "7 kratkih pitanja, oko 90 sekundi. Rezultat se pojavljuje odmah — brza ocjena plus pregled tvojih prednosti i onoga što vrijedi provjeriti.",
    progressLabel: "Pitanje {current} od {total}",
    nextLabel: "Dalje",
    backLabel: "Nazad",
    seeResultLabel: "Prikaži moj rezultat",
    otherCountryLabel: "Nije na listi",
    countryPlaceholder: "Odaberi svoju zemlju",
    questions: [
      {
        id: "enrollment",
        question:
          "Da li si trenutno upisan/a kao student/ica osnovnih, master ili doktorskih studija na univerzitetu?",
        options: [
          { value: "yes", label: "Da" },
          { value: "no", label: "Ne" },
        ],
      },
      {
        id: "country",
        question: "Da li trenutno živiš ili studiraš u jednoj od ovih zemalja?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Da li bi svoj akademski uspjeh opisao/la kao iznadprosječan (npr. visok prosjek ocjena, najbolji/a u razredu, akademske nagrade)?",
        options: [
          { value: "yes", label: "Da, jasno iznadprosječan" },
          { value: "somewhat", label: "Dobar, ali ne najbolji u razredu" },
          { value: "not_sure", label: "Nisam siguran/na" },
        ],
      },
      {
        id: "interest",
        question:
          "Da li te zanima da provedeš jedan semestar u Berlinu, kombinujući studije na univerzitetu sa praksom od najmanje 8 sedmica?",
        options: [
          { value: "yes", label: "Da, to je tačno ono što tražim" },
          { value: "no", label: "Ne baš" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "Kako bi ocijenio/la svoje znanje engleskog jezika? IES zahtijeva minimalno B1 nivo engleskog ili njemačkog — drugi jezik je lijep bonus.",
        options: [
          { value: "a1", label: "A1 — tek počinjem" },
          { value: "a2", label: "A2 — osnovni" },
          { value: "b1", label: "B1 — srednji" },
          { value: "b2", label: "B2 — viši srednji" },
          { value: "c1", label: "C1 — napredni" },
          { value: "c2", label: "C2 — tečno" },
        ],
      },
      {
        id: "germanLevel",
        question: "A njemački? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — tek počinjem" },
          { value: "a2", label: "A2 — osnovni" },
          { value: "b1", label: "B1 — srednji" },
          { value: "b2", label: "B2 — viši srednji" },
          { value: "c1", label: "C1 — napredni" },
          { value: "c2", label: "C2 — tečno" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Koji nivo finansiranja bi ti realno odgovarao?",
        options: [
          {
            value: "partial",
            label:
              "Mogu sam/a pokriti put, zdravstveno osiguranje i ~€1.650 za 2 mjeseca smještaja",
          },
          {
            value: "partial_plus",
            label: "Mogu sam/a pokriti put i zdravstveno osiguranje, ali mi je potreban pokriven smještaj",
          },
          {
            value: "full",
            label: "Potrebno mi je potpuno pokriće džeparca, smještaja i osiguranja",
          },
          { value: "not_sure", label: "Još nisam siguran/na" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Izgledaš kao snažan kandidat",
      body: "Na osnovu tvojih odgovora, IES bi mogao biti odličan izbor za tebe. Ostavi svoje podatke ispod i javit ćemo ti se sa svim detaljima programa i zvaničnim linkom za prijavu.",
    },
    possible_fit: {
      title: "Mogao/la bi biti dobar izbor",
      body: "IES bi ti mogao odgovarati — vrijedi provjeriti par detalja u odnosu na zvanične kriterije. Ostavi svoje podatke i javit ćemo ti se.",
    },
    explore_more: {
      title: "Vrijedi dodatno istražiti",
      body: "Tvoj profil još ne ispunjava sve kriterije, ali IES svakako vrijedi razmotriti — vrste stipendija i uslovi variraju. Ostavi svoje podatke i poslat ćemo ti više informacija.",
    },
    not_eligible: {
      title: "Još ne — ali zadrži IES na umu",
      body: "IES je namijenjen studentima koji su trenutno upisani na univerzitet. Kada se upišeš, vrati se — u međuvremenu ostavi svoje podatke i javljat ćemo ti se.",
    },
    restartLabel: "Ponovi provjeru",
  },
  resultDetails: {
    strengthsTitle: "Tvoje prednosti",
    considerationsTitle: "Vrijedi provjeriti",
    scholarshipTitle: "Stipendija koja ti najbolje odgovara",
    scholarshipNote:
      "Na osnovu onoga što si naveo/la da možeš sam/a pokriti — tačan iznos zavisi od tvoje konačne prijave.",
    strengths: {
      enrolledStudent: "Trenutno si upisan/a student/ica univerziteta — osnovni uslov za IES.",
      eligibleCountry: "Tvoja zemlja se nalazi na trenutnoj listi zemalja koje ispunjavaju uslove za IES.",
      strongAcademics: "Tvoj akademski uspjeh zvuči jasno iznadprosječno.",
      decentAcademics: "Tvoj akademski uspjeh zvuči solidno.",
      genuineInterest: "Iskreno te zanima format studija + prakse koji nudi IES.",
      languageRequirementMet: "Ispunjavaš jezički uslov IES-a (B1+ u engleskom ili njemačkom).",
      secondLanguageBonus: "Također imaš radni nivo i drugog jezika — lijep bonus.",
    },
    considerations: {
      notEnrolledYet:
        "IES zahtijeva da budeš trenutno upisan/a student/ica — vrijedi ponovo provjeriti čim započneš studije.",
      countryNotListed:
        "Tvoja zemlja nije bila na trenutnoj listi zemalja koje ispunjavaju uslove za IES — provjeri zvaničnu stranicu, jer se lista može mijenjati.",
      confirmAcademics:
        "Vrijedi provjeriti tačne uslove za prosjek ocjena na zvaničnoj stranici.",
      lowInterest:
        "Format studija + prakse možda nije tačno ono što tražiš — pročitaj više prije prijave.",
      languageBelowRequirement:
        "IES traži minimalno B1 nivo engleskog ili njemačkog — možda vrijedi poboljšati jedan od njih prije prijave.",
    },
    scholarshipTiers: {
      full: "Puna stipendija",
      partial_plus: "Djelimična stipendija Plus",
      partial: "Djelimična stipendija",
      unsure: "Zajedno ćemo to riješiti",
    },
  },
  leadForm: {
    title: "Želiš znati više?",
    subtitle: "Odaberi šta ti odgovara — kratak informativni email ili lična konsultacija.",
    kindInfoLabel: "Samo mi pošaljite informacije",
    kindConsultationLabel: "Zatraži konsultaciju",
    nameLabel: "Kako da te oslovljavamo?",
    namePlaceholder: "Tvoje ime",
    emailLabel: "Email adresa",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / druge društvene mreže",
    instagramPlaceholder: "@username",
    aboutLabel: "Nekoliko riječi o tebi (opciono)",
    aboutPlaceholder: "Tvoje polje studija, šta te oduševljava kod IES-a, bilo šta drugo…",
    consentLabel:
      "Slažem se da me Copernicus Berlin može kontaktirati sa informacijama o programu IES.",
    submitLabel: "Pošalji mi informacije",
    submitConsultationLabel: "Zatraži moju konsultaciju",
    submittingLabel: "Slanje…",
    successTitle: "Hvala ti!",
    successBody: "Primili smo tvoje podatke i uskoro ćemo ti se javiti na {email}.",
    errorBody: "Nešto je pošlo po zlu s naše strane. Molimo pokušaj ponovo za trenutak.",
    consultationNote: "Naš tim će te uskoro lično kontaktirati.",
  },
  faq: {
    eyebrow: "Česta pitanja",
    title: "Često postavljena pitanja",
    items: [
      {
        q: "Šta je IES?",
        a: "International Excellence Scholarship (IES) je stipendijski program Copernicus Berlin e.V. koji finansira jedan semestar studija plus stručnu praksu u Berlinu za izuzetne studente iz Istočne i Jugoistočne Evrope, Kavkaza i Centralne Azije.",
      },
      {
        q: "Ko se može prijaviti?",
        a: "Studenti osnovnih, master i doktorskih studija bilo koje oblasti iz zemalja koje ispunjavaju uslove, sa snažnim akademskim uspjehom. Potpuni kriteriji podobnosti navedeni su na zvaničnoj stranici IES-a.",
      },
      {
        q: "Šta stipendija pokriva?",
        a: "U zavisnosti od vrste stipendije (puna ili djelimična), može uključivati mjesečni džeparac, smještaj, troškove upisa, osiguranje od odgovornosti, edukativna putovanja i društvena druženja.",
      },
      {
        q: "Šta se dešava nakon što se prijavim?",
        a: "Prijave se pregledaju, a kandidati koji uđu u uži izbor pozivaju se na dalje krugove selekcije. Uspješni kandidati provode semestar u Berlinu kombinujući studije na univerzitetu sa praksom.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Ovo je nezavisan, nezvaničan prototip asistenta za prijavu, kreiran za Copernicus Berlin IES Skills Challenge. Ovo nije zvanična web stranica Copernicus Berlina.",
    officialLinkLabel: "Zvanična stranica programa IES",
    applicationLinkLabel: "Zvanični obrazac za prijavu",
    madeFor: "Kreirano za IES Skills Challenge",
    privacyLinkLabel: "Politika privatnosti",
    termsLinkLabel: "Uslovi korištenja",
  },
  languageSwitcher: {
    label: "Jezik",
  },
  cookieConsent: {
    message:
      "Koristimo malu količinu lokalne memorije da zapamtimo tvoj izbor jezika. Bez praćenja, bez kolačića trećih strana.",
    accept: "Razumijem",
    privacyLinkLabel: "Politika privatnosti",
  },
};
