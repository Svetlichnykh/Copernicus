import type { Dictionary } from "./en";

export const de: Dictionary = {
  meta: {
    title: "IES-Bewerberassistent — Copernicus Berlin",
    description:
      "Finde in zwei Minuten heraus, ob das International Excellence Scholarship (IES) von Copernicus Berlin das Richtige für dich ist.",
  },
  nav: {
    checkEligibility: "Passt es zu dir?",
    officialSite: "Offizielle IES-Seite",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Ein Semester in Berlin.",
    titleHighlight: "Ein Netzwerk fürs Leben.",
    subtitle:
      "IES finanziert ein Semester an einer Top-Universität in Berlin plus ein praxisnahes Praktikum für herausragende Studierende aus Ost- und Südosteuropa, dem Kaukasus und Zentralasien. Das Programm wird von einem ehrenamtlichen Team geleitet — viele davon selbst ehemalige Stipendiat:innen.",
    ctaPrimary: "Prüfe, ob IES zu dir passt — 2 Min.",
    ctaSecondary: "Zur offiziellen IES-Seite",
    stats: [
      { value: "1", label: "Semester in Berlin" },
      { value: "8+", label: "Wochen Praktikum" },
      { value: "20", label: "teilnahmeberechtigte Länder" },
      { value: "4", label: "Partneruniversitäten" },
    ],
  },
  highlights: {
    eyebrow: "Warum IES",
    title: "Mehr als nur ein Austauschsemester",
    subtitle:
      "IES verbindet akademisches Studium, echte Berufserfahrung und eine aktive internationale Community.",
    items: [
      {
        title: "Studieren an einer Top-Universität in Berlin",
        description:
          "Ein Semester an der Freien Universität Berlin, der Humboldt-Universität zu Berlin, der HWR Berlin oder der Universität Potsdam — offen für alle Studienfächer.",
      },
      {
        title: "8+ Wochen Praktikum",
        description:
          "Sammle praktische internationale Berufserfahrung in Berlin parallel zu deinem Studium und baue Fähigkeiten auf, die Arbeitgeber schätzen.",
      },
      {
        title: "Finanziert, nicht nur bewilligt",
        description:
          "Voll- und Teilstipendien können monatliches Taschengeld, Unterkunft, Einschreibegebühren, Haftpflichtversicherung und mehr abdecken.",
      },
      {
        title: "Eine Community, nicht nur ein Austausch",
        description:
          "Werde Teil eines internationalen Teams aus Stipendiat:innen und Alumni, die das Programm aktiv mitgestalten.",
      },
    ],
  },
  stats: {
    eyebrow: "IES in Zahlen",
    title: "Eine Erfolgsbilanz, kein bloßes Versprechen",
    subtitle: "Ein Vermächtnis aus Chancen, Wachstum und internationaler Zusammenarbeit.",
    items: {
      yearsHistory: "Jahre IES-Programmgeschichte",
      applicationsReceived: "qualifizierte Bewerbungen erhalten",
      scholarsGraduated: "Stipendiat:innen haben das Programm erfolgreich abgeschlossen",
      disciplinesStudied: "Studienfächer in Berlin und Potsdam studiert",
      countriesRepresented: "Länder in der gesamten Geschichte von IES vertreten",
      citiesRepresented: "Städte, aus denen IES-Stipendiat:innen kommen",
      underprivilegedSupported: "Studierende mit weniger Chancen unterstützt",
      partnerUniversities: "Partneruniversitäten in IES-berechtigten Ländern",
      internshipsCompleted: "absolvierte Praktika",
    },
  },
  funding: {
    eyebrow: "Finanzierung",
    title: "Was ein Vollstipendium tatsächlich abdeckt",
    subtitleTemplate:
      "Ein IES-Vollstipendium beträgt pro Stipendiat:in für ein sechsmonatiges Programm etwa €{amount} und umfasst:",
    lineItems: {
      accommodation: "Unterkunft",
      pocketMoney: "Taschengeld",
      healthInsurance: "Krankenversicherung",
      administrativeCosts: "Verwaltungskosten",
      consultingMentoring: "Beratung und Mentoring",
      educationalTour: "Bildungsreise",
      internationalSeminars: "Internationale Seminare",
      workshopsTraining: "Workshops und Schulungen",
      universityEnrolmentFee: "Immatrikulationsgebühr",
      socialMeetings: "Gesellige Treffen",
      culturalEvents: "Kulturelle Veranstaltungen",
      liabilityInsurance: "Haftpflichtversicherung",
    },
    tiersTitle: "Finanzierungsmöglichkeiten",
    tiers: {
      full: {
        name: "Vollstipendium",
        covered: [
          "Taschengeld wird monatlich ausgezahlt",
          "Kosten für die Krankenversicherung werden erstattet",
          "Unterkunft, Einschreibung, Haftpflichtversicherung, Bildungsreisen, gesellige Treffen, Verwaltung, Willkommenspaket, kulturelle Veranstaltungen, internationale Seminare, Beratung, Mentoring und Workshops werden direkt von Copernicus Berlin übernommen",
        ],
        notCovered: ["Reisekosten werden nicht übernommen"],
      },
      partial_plus: {
        name: "Teilstipendium Plus",
        covered: [
          "Taschengeld wird monatlich ausgezahlt",
          "Unterkunft, Einschreibung, Haftpflichtversicherung, Bildungsreisen, gesellige Treffen, Verwaltung, Willkommenspaket, kulturelle Veranstaltungen, internationale Seminare, Beratung, Mentoring und Workshops werden direkt von Copernicus Berlin übernommen",
        ],
        notCovered: ["Reisekosten werden nicht übernommen", "Krankenversicherungskosten werden nicht übernommen"],
      },
      partial: {
        name: "Teilstipendium",
        covered: [
          "Taschengeld wird monatlich ausgezahlt",
          "Einschreibung, Haftpflichtversicherung, Bildungsreisen, gesellige Treffen, Verwaltung, Willkommenspaket, kulturelle Veranstaltungen, internationale Seminare, Beratung, Mentoring und Workshops werden direkt von Copernicus Berlin übernommen",
        ],
        notCovered: [
          "Reisekosten werden nicht übernommen",
          "Krankenversicherungskosten werden nicht übernommen",
          "Unterkunftskosten für zwei Monate (€1.650) müssen selbst getragen werden; den Rest übernimmt Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Schneller Selbstcheck",
    title: "Könnte IES zu dir passen?",
    subtitle:
      "7 kurze Fragen, etwa 90 Sekunden. Dein Ergebnis erscheint sofort — eine schnelle Einschätzung plus eine Übersicht deiner Stärken und dem, was sich zu prüfen lohnt.",
    progressLabel: "Frage {current} von {total}",
    nextLabel: "Weiter",
    backLabel: "Zurück",
    seeResultLabel: "Mein Ergebnis ansehen",
    otherCountryLabel: "Nicht aufgeführt",
    countryPlaceholder: "Wähle dein Land",
    questions: [
      {
        id: "enrollment",
        question:
          "Bist du aktuell als Bachelor-, Master- oder Promotionsstudent:in an einer Universität eingeschrieben?",
        options: [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nein" },
        ],
      },
      {
        id: "country",
        question: "Lebst oder studierst du derzeit in einem dieser Länder?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Würdest du deine akademischen Leistungen als überdurchschnittlich bezeichnen (z. B. starker Notendurchschnitt, Jahrgangsbeste:r, akademische Auszeichnungen)?",
        options: [
          { value: "yes", label: "Ja, klar überdurchschnittlich" },
          { value: "somewhat", label: "Gut, aber nicht Jahrgangsbeste:r" },
          { value: "not_sure", label: "Nicht sicher" },
        ],
      },
      {
        id: "interest",
        question:
          "Interessiert es dich, ein Semester in Berlin zu verbringen und dabei ein Studium mit einem mindestens 8-wöchigen Praktikum zu verbinden?",
        options: [
          { value: "yes", label: "Ja, genau das suche ich" },
          { value: "no", label: "Nicht wirklich" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "Wie schätzt du dein Englisch ein? IES verlangt mindestens B1 in Englisch oder Deutsch — die jeweils andere Sprache ist ein netter Bonus.",
        options: [
          { value: "a1", label: "A1 — Anfänger:in" },
          { value: "a2", label: "A2 — Grundkenntnisse" },
          { value: "b1", label: "B1 — Mittelstufe" },
          { value: "b2", label: "B2 — gehobene Mittelstufe" },
          { value: "c1", label: "C1 — fortgeschritten" },
          { value: "c2", label: "C2 — fließend" },
        ],
      },
      {
        id: "germanLevel",
        question: "Und Deutsch? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — Anfänger:in" },
          { value: "a2", label: "A2 — Grundkenntnisse" },
          { value: "b1", label: "B1 — Mittelstufe" },
          { value: "b2", label: "B2 — gehobene Mittelstufe" },
          { value: "c1", label: "C1 — fortgeschritten" },
          { value: "c2", label: "C2 — fließend" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Welches Finanzierungsniveau würde realistisch für dich funktionieren?",
        options: [
          {
            value: "partial",
            label:
              "Ich kann Reisekosten, Krankenversicherung und ~€1.650 für 2 Monate Unterkunft selbst tragen",
          },
          {
            value: "partial_plus",
            label: "Ich kann Reisekosten und Krankenversicherung selbst tragen, brauche aber die Unterkunft finanziert",
          },
          {
            value: "full",
            label: "Ich brauche vollständige Deckung von Taschengeld, Unterkunft und Versicherung",
          },
          { value: "not_sure", label: "Noch nicht sicher" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Du scheinst gut zu passen",
      body: "Basierend auf deinen Antworten könnte IES sehr gut zu dir passen. Hinterlasse unten deine Daten — wir melden uns mit allen Programmdetails und dem offiziellen Bewerbungslink.",
    },
    possible_fit: {
      title: "Du könntest gut passen",
      body: "IES könnte durchaus für dich funktionieren — ein paar Details solltest du noch anhand der offiziellen Kriterien prüfen. Hinterlasse deine Daten, wir melden uns.",
    },
    explore_more: {
      title: "Lohnt sich, genauer anzuschauen",
      body: "Dein Profil erfüllt noch nicht alle Kriterien, aber IES lohnt trotzdem einen Blick — Stipendienarten und Anforderungen variieren. Hinterlasse deine Daten, wir schicken dir mehr Infos.",
    },
    not_eligible: {
      title: "Noch nicht ganz — aber behalte IES im Hinterkopf",
      body: "IES richtet sich an aktuell eingeschriebene Studierende. Sobald du eingeschrieben bist, schau wieder vorbei — hinterlasse bis dahin deine Daten, wir halten dich auf dem Laufenden.",
    },
    restartLabel: "Check erneut starten",
  },
  resultDetails: {
    strengthsTitle: "Deine Stärken",
    considerationsTitle: "Lohnt sich zu prüfen",
    scholarshipTitle: "Am besten zu dir passendes Stipendium",
    scholarshipNote:
      "Basierend darauf, was du laut deinen Angaben selbst tragen kannst — die genaue Summe hängt von deiner endgültigen Bewerbung ab.",
    strengths: {
      enrolledStudent: "Du bist derzeit an einer Universität eingeschrieben — die zentrale Voraussetzung für IES.",
      eligibleCountry: "Dein Land steht auf der aktuellen Liste der IES-berechtigten Länder.",
      strongAcademics: "Deine akademischen Leistungen klingen klar überdurchschnittlich.",
      decentAcademics: "Deine akademischen Leistungen klingen solide.",
      genuineInterest: "Du interessierst dich wirklich für das Studium-plus-Praktikum-Format von IES.",
      languageRequirementMet: "Du erfüllst die Sprachanforderung von IES (B1+ in Englisch oder Deutsch).",
      secondLanguageBonus: "Du hast außerdem ein Arbeitsniveau in der jeweils anderen Sprache — ein netter Bonus.",
    },
    considerations: {
      notEnrolledYet:
        "IES setzt eine aktuelle Immatrikulation voraus — es lohnt sich, das nach Beginn deines Studiums erneut zu prüfen.",
      countryNotListed:
        "Dein Land stand nicht auf der aktuellen Liste der IES-berechtigten Länder — prüfe die offizielle Seite, die Liste kann sich ändern.",
      confirmAcademics:
        "Es lohnt sich, die genauen Anforderungen an Notendurchschnitt oder Noten auf der offiziellen Seite zu prüfen.",
      lowInterest:
        "Das Studium-plus-Praktikum-Format entspricht vielleicht nicht ganz dem, was du suchst — lies dich vor der Bewerbung genauer ein.",
      languageBelowRequirement:
        "IES verlangt mindestens B1 in Englisch oder Deutsch — es könnte sich lohnen, eine der beiden Sprachen vor der Bewerbung zu verbessern.",
    },
    scholarshipTiers: {
      full: "Vollstipendium",
      partial_plus: "Teilstipendium Plus",
      partial: "Teilstipendium",
      unsure: "Das finden wir gemeinsam heraus",
    },
  },
  leadForm: {
    title: "Möchtest du mehr erfahren?",
    subtitle: "Wähle, was zu dir passt — eine kurze Info-E-Mail oder eine persönliche Beratung.",
    kindInfoLabel: "Schick mir einfach die Infos",
    kindConsultationLabel: "Beratung anfragen",
    nameLabel: "Wie sollen wir dich ansprechen?",
    namePlaceholder: "Dein Vorname",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@universitaet.de",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@username",
    instagramLabel: "Instagram / anderes soziales Netzwerk",
    instagramPlaceholder: "@username",
    aboutLabel: "Ein paar Worte zu dir (optional)",
    aboutPlaceholder: "Dein Studienfach, was dich an IES begeistert, was auch immer…",
    consentLabel:
      "Ich stimme zu, dass Copernicus Berlin mich mit Informationen zum IES-Programm kontaktieren darf.",
    submitLabel: "Infos an mich senden",
    submitConsultationLabel: "Meine Beratung anfragen",
    submittingLabel: "Wird gesendet…",
    successTitle: "Danke!",
    successBody: "Wir haben deine Daten erhalten und melden uns bald unter {email}.",
    errorBody: "Bei uns ist etwas schiefgelaufen. Bitte versuche es gleich noch einmal.",
    consultationNote: "Unser Team meldet sich bald persönlich bei dir.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufig gestellte Fragen",
    items: [
      {
        q: "Was ist IES?",
        a: "Das International Excellence Scholarship (IES) ist ein Stipendienprogramm von Copernicus Berlin e.V., das ein Studiensemester plus Praktikum in Berlin für herausragende Studierende aus Ost- und Südosteuropa, dem Kaukasus und Zentralasien finanziert.",
      },
      {
        q: "Wer kann sich bewerben?",
        a: "Bachelor-, Master- und Promotionsstudierende aller Fachrichtungen aus teilnahmeberechtigten Ländern mit starken akademischen Leistungen. Die vollständigen Teilnahmekriterien findest du auf der offiziellen IES-Seite.",
      },
      {
        q: "Was deckt das Stipendium ab?",
        a: "Je nach Stipendienart (voll oder teilweise) kann es monatliches Taschengeld, Unterkunft, Einschreibegebühren, Haftpflichtversicherung, Bildungsreisen und gesellige Veranstaltungen umfassen.",
      },
      {
        q: "Was passiert nach meiner Bewerbung?",
        a: "Bewerbungen werden geprüft, und in die engere Auswahl gekommene Kandidat:innen werden zu weiteren Auswahlrunden eingeladen. Erfolgreiche Bewerber:innen verbringen ein Semester in Berlin, das Studium mit einem Praktikum verbindet.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Dies ist ein unabhängiger, inoffizieller Bewerberassistent-Prototyp, der für die Copernicus Berlin IES Skills Challenge erstellt wurde. Es handelt sich nicht um eine offizielle Website von Copernicus Berlin.",
    officialLinkLabel: "Offizielle IES-Programmseite",
    applicationLinkLabel: "Offizielles Bewerbungsformular",
    madeFor: "Erstellt für die IES Skills Challenge",
    privacyLinkLabel: "Datenschutzerklärung",
    termsLinkLabel: "Nutzungsbedingungen",
  },
  languageSwitcher: {
    label: "Sprache",
  },
  cookieConsent: {
    message:
      "Wir verwenden einen geringen Umfang an lokalem Speicher, um deine Sprachwahl zu merken. Kein Tracking, keine Cookies von Drittanbietern.",
    accept: "Verstanden",
    privacyLinkLabel: "Datenschutzerklärung",
  },
};
