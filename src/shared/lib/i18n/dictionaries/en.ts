export const en = {
  meta: {
    title: "IES Applicant Assistant — Copernicus Berlin",
    description:
      "Check in two minutes whether the International Excellence Scholarship (IES) by Copernicus Berlin could be for you.",
  },
  nav: {
    checkEligibility: "Check your fit",
    officialSite: "Official IES page",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "One semester in Berlin.",
    titleHighlight: "A network for life.",
    subtitle:
      "IES funds a semester at a top Berlin university plus a hands-on internship for outstanding students from Eastern & Southeastern Europe, the Caucasus and Central Asia. It's run by a volunteer team — many of them former scholarship holders themselves.",
    ctaPrimary: "Check if IES fits you — 2 min",
    ctaSecondary: "See the official IES page",
    stats: [
      { value: "1", label: "semester in Berlin" },
      { value: "8+", label: "weeks of internship" },
      { value: "20", label: "eligible countries" },
      { value: "4", label: "partner universities" },
    ],
  },
  highlights: {
    eyebrow: "Why IES",
    title: "Not just an exchange semester",
    subtitle:
      "IES combines academic study, real work experience and an active international community.",
    items: [
      {
        title: "Study at a top Berlin university",
        description:
          "One semester at Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin or the University of Potsdam — open to all fields of study.",
      },
      {
        title: "8+ weeks of internship",
        description:
          "Gain hands-on international work experience in Berlin alongside your studies, building skills employers value.",
      },
      {
        title: "Funded, not just approved",
        description:
          "Full and partial scholarships can cover monthly pocket money, accommodation, enrollment fees, liability insurance and more.",
      },
      {
        title: "A community, not just an exchange",
        description:
          "Join an international team of scholarship holders and alumni who actively contribute to and help shape the programme.",
      },
    ],
  },
  stats: {
    eyebrow: "IES in numbers",
    title: "A track record, not just a promise",
    subtitle: "A legacy of opportunity, growth, and international cooperation.",
    items: {
      yearsHistory: "years of IES programme history",
      applicationsReceived: "qualified applications received",
      scholarsGraduated: "scholarship holders successfully completed the programme",
      disciplinesStudied: "academic disciplines studied in Berlin and Potsdam",
      countriesRepresented: "countries represented throughout the history of IES",
      citiesRepresented: "cities represented by IES scholarship holders",
      underprivilegedSupported: "students with fewer opportunities supported",
      partnerUniversities: "partner universities across IES-eligible countries",
      internshipsCompleted: "professional internships completed",
    },
  },
  funding: {
    eyebrow: "Funding",
    title: "What a full scholarship actually covers",
    subtitleTemplate:
      "A full IES scholarship amounts to approximately €{amount} per scholarship holder for a six-month programme and includes:",
    lineItems: {
      accommodation: "Accommodation",
      pocketMoney: "Pocket money",
      healthInsurance: "Health insurance",
      administrativeCosts: "Administrative costs",
      consultingMentoring: "Consulting and mentoring",
      educationalTour: "Educational tour",
      internationalSeminars: "International seminars",
      workshopsTraining: "Workshops and training",
      universityEnrolmentFee: "University enrolment fee",
      socialMeetings: "Social meetings",
      culturalEvents: "Cultural events",
      liabilityInsurance: "Liability insurance",
    },
    tiersTitle: "Funding opportunities",
    tiers: {
      full: {
        name: "Full Scholarship",
        covered: [
          "Pocket money is paid monthly",
          "Health insurance costs are reimbursed",
          "Accommodation, enrolment, liability insurance, educational trips, social meetings, administration, welcome package, cultural events, international seminars, consulting, mentoring and workshops are covered directly by Copernicus Berlin",
        ],
        notCovered: ["Travel expenses are not covered"],
      },
      partial_plus: {
        name: "Partial Scholarship Plus",
        covered: [
          "Pocket money is paid monthly",
          "Accommodation, enrolment, liability insurance, educational trips, social meetings, administration, welcome package, cultural events, international seminars, consulting, mentoring and workshops are covered directly by Copernicus Berlin",
        ],
        notCovered: ["Travel expenses are not covered", "Health insurance costs are not covered"],
      },
      partial: {
        name: "Partial Scholarship",
        covered: [
          "Pocket money is paid monthly",
          "Enrolment, liability insurance, educational trips, social meetings, administration, welcome package, cultural events, international seminars, consulting, mentoring and workshops are covered directly by Copernicus Berlin",
        ],
        notCovered: [
          "Travel expenses are not covered",
          "Health insurance costs are not covered",
          "Accommodation costs for two months (€1,650) have to be paid; the rest is covered by Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Quick self-check",
    title: "Could IES be for you?",
    subtitle:
      "7 quick questions, about 90 seconds. Your result appears instantly — a quick verdict plus a breakdown of your strengths and what's worth double-checking.",
    progressLabel: "Question {current} of {total}",
    nextLabel: "Next",
    backLabel: "Back",
    seeResultLabel: "See my result",
    otherCountryLabel: "Not listed here",
    countryPlaceholder: "Select your country",
    questions: [
      {
        id: "enrollment",
        question:
          "Are you currently enrolled as a Bachelor's, Master's, or PhD student at a university?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "country",
        question: "Do you currently live in or study in one of these countries?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Would you describe your academic record as above average (e.g. strong GPA, top of your class, academic awards)?",
        options: [
          { value: "yes", label: "Yes, clearly above average" },
          { value: "somewhat", label: "Good, but not top of class" },
          { value: "not_sure", label: "Not sure" },
        ],
      },
      {
        id: "interest",
        question:
          "Are you interested in spending one semester in Berlin combining university study with a minimum 8-week internship?",
        options: [
          { value: "yes", label: "Yes, that's exactly what I'm looking for" },
          { value: "no", label: "Not really" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "How would you rate yourself in English? IES needs at least B1 in English or German — the other one is a nice bonus.",
        options: [
          { value: "a1", label: "A1 — just starting" },
          { value: "a2", label: "A2 — basic" },
          { value: "b1", label: "B1 — intermediate" },
          { value: "b2", label: "B2 — upper-intermediate" },
          { value: "c1", label: "C1 — advanced" },
          { value: "c2", label: "C2 — fluent" },
        ],
      },
      {
        id: "germanLevel",
        question: "And German? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — just starting" },
          { value: "a2", label: "A2 — basic" },
          { value: "b1", label: "B1 — intermediate" },
          { value: "b2", label: "B2 — upper-intermediate" },
          { value: "c1", label: "C1 — advanced" },
          { value: "c2", label: "C2 — fluent" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Which funding level would realistically work for you?",
        options: [
          {
            value: "partial",
            label:
              "I can cover travel, health insurance, and ~€1,650 for 2 months of accommodation myself",
          },
          {
            value: "partial_plus",
            label: "I can cover travel and health insurance myself, but need accommodation covered",
          },
          {
            value: "full",
            label: "I need pocket money, accommodation and insurance fully covered",
          },
          { value: "not_sure", label: "Not sure yet" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "You look like a strong match",
      body: "Based on your answers, IES could be a great fit for you. Leave your details below and we'll follow up with the full programme details and the official application link.",
    },
    possible_fit: {
      title: "You could be a good fit",
      body: "IES might well work for you — a couple of details are worth double-checking against the official criteria. Leave your details and we'll follow up.",
    },
    explore_more: {
      title: "Worth exploring further",
      body: "Your profile doesn't tick every box yet, but IES is still worth a look — scholarship types and requirements vary. Leave your details and we'll send more information.",
    },
    not_eligible: {
      title: "Not quite yet — but keep IES in mind",
      body: "IES is designed for currently enrolled university students. Once you're enrolled, come back — meanwhile leave your details and we'll keep you posted.",
    },
    restartLabel: "Retake the check",
  },
  resultDetails: {
    strengthsTitle: "Your strengths",
    considerationsTitle: "Worth double-checking",
    scholarshipTitle: "Best-fit scholarship for you",
    scholarshipNote:
      "Based on what you told us you could cover yourself — the exact figure depends on your final application.",
    strengths: {
      enrolledStudent: "You're a currently enrolled university student — IES's core requirement.",
      eligibleCountry: "Your country is on the current IES-eligible list.",
      strongAcademics: "Your academic record sounds clearly above average.",
      decentAcademics: "Your academic record sounds solid.",
      genuineInterest: "You're genuinely interested in the study + internship format IES offers.",
      languageRequirementMet: "You meet IES's language requirement (B1+ in English or German).",
      secondLanguageBonus: "You also have a working level of the other language — a nice bonus.",
    },
    considerations: {
      notEnrolledYet:
        "IES requires being a currently enrolled student — worth checking again once you've started your programme.",
      countryNotListed:
        "Your country wasn't on the current IES-eligible list — double-check the official page, as it can change.",
      confirmAcademics:
        "It's worth double-checking the exact GPA or grade requirements on the official page.",
      lowInterest:
        "The study + internship format may not be exactly what you're looking for — read more before applying.",
      languageBelowRequirement:
        "IES asks for at least B1 in English or German — it may be worth improving one of them before applying.",
    },
    scholarshipTiers: {
      full: "Full Scholarship",
      partial_plus: "Partial Scholarship Plus",
      partial: "Partial Scholarship",
      unsure: "Let's figure this out together",
    },
  },
  leadForm: {
    title: "Want to know more?",
    subtitle: "Choose what works for you — a quick info email, or a personal consultation.",
    kindInfoLabel: "Just send me the info",
    kindConsultationLabel: "Request a consultation",
    nameLabel: "How should we address you?",
    namePlaceholder: "Your first name",
    emailLabel: "Email address",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / other social",
    instagramPlaceholder: "@username",
    aboutLabel: "A few words about you (optional)",
    aboutPlaceholder: "Your field of study, what excites you about IES, anything else…",
    consentLabel:
      "I agree that Copernicus Berlin may contact me with information about the IES programme.",
    submitLabel: "Send me the info",
    submitConsultationLabel: "Request my consultation",
    submittingLabel: "Sending…",
    successTitle: "Thank you!",
    successBody: "We've received your details and will follow up at {email} soon.",
    errorBody: "Something went wrong on our side. Please try again in a moment.",
    consultationNote: "Our team will get in touch with you personally soon.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is IES?",
        a: "The International Excellence Scholarship (IES) is a scholarship programme by Copernicus Berlin e.V. that funds one semester of study plus an internship in Berlin for outstanding students from Eastern & Southeastern Europe, the Caucasus and Central Asia.",
      },
      {
        q: "Who can apply?",
        a: "Bachelor's, Master's and PhD students of any field of study from eligible countries, with a strong academic record. Full eligibility criteria are listed on the official IES page.",
      },
      {
        q: "What does the scholarship cover?",
        a: "Depending on the scholarship type (full or partial), it can include monthly pocket money, accommodation, enrollment fees, liability insurance, educational trips and social events.",
      },
      {
        q: "What happens after I apply?",
        a: "Applications are reviewed and shortlisted candidates are invited to further selection rounds. Successful applicants join a semester in Berlin combining university study with an internship.",
      },
    ],
  },
  footer: {
    disclaimer:
      "This is an independent, unofficial applicant-assistant prototype created for the Copernicus Berlin IES Skills Challenge. It is not an official Copernicus Berlin website.",
    officialLinkLabel: "Official IES programme page",
    applicationLinkLabel: "Official application form",
    madeFor: "Built for the IES Skills Challenge",
    privacyLinkLabel: "Privacy Policy",
    termsLinkLabel: "Terms of Use",
  },
  languageSwitcher: {
    label: "Language",
  },
  cookieConsent: {
    message:
      "We use a small amount of local storage to remember your language choice. No tracking, no third-party cookies.",
    accept: "Got it",
    privacyLinkLabel: "Privacy Policy",
  },
};

export type Dictionary = typeof en;
