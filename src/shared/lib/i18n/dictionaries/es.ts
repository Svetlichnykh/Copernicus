import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Asistente para postulantes IES — Copernicus Berlin",
    description:
      "Descubre en dos minutos si la International Excellence Scholarship (IES) de Copernicus Berlin es para ti.",
  },
  nav: {
    checkEligibility: "Comprueba tu perfil",
    officialSite: "Página oficial de IES",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Un semestre en Berlín.",
    titleHighlight: "Una red para toda la vida.",
    subtitle:
      "IES financia un semestre en una de las mejores universidades de Berlín más unas prácticas profesionales para estudiantes destacados de Europa del Este y Sudeste, el Cáucaso y Asia Central. Lo gestiona un equipo de voluntarios, muchos de ellos antiguos becarios.",
    ctaPrimary: "Comprueba si IES es para ti — 2 min",
    ctaSecondary: "Ver la página oficial de IES",
    stats: [
      { value: "1", label: "semestre en Berlín" },
      { value: "8+", label: "semanas de prácticas" },
      { value: "20", label: "países elegibles" },
      { value: "4", label: "universidades asociadas" },
    ],
  },
  highlights: {
    eyebrow: "Por qué IES",
    title: "Más que un simple intercambio",
    subtitle:
      "IES combina estudios académicos, experiencia laboral real y una comunidad internacional activa.",
    items: [
      {
        title: "Estudia en una gran universidad de Berlín",
        description:
          "Un semestre en la Freie Universität Berlin, la Humboldt-Universität zu Berlin, la HWR Berlin o la Universidad de Potsdam, en cualquier área de estudio.",
      },
      {
        title: "8+ semanas de prácticas",
        description:
          "Experiencia laboral internacional real en Berlín mientras estudias, desarrollando habilidades que valoran los empleadores.",
      },
      {
        title: "Financiado, no solo aprobado",
        description:
          "Las becas completas y parciales pueden cubrir manutención mensual, alojamiento, matrícula, seguro de responsabilidad civil y más.",
      },
      {
        title: "Una comunidad, no solo un intercambio",
        description:
          "Te unes a un equipo internacional de becarios y alumni que contribuyen activamente a dar forma al programa.",
      },
    ],
  },
  stats: {
    eyebrow: "IES en cifras",
    title: "Resultados, no solo promesas",
    subtitle: "Un legado de oportunidades, crecimiento y cooperación internacional.",
    items: {
      yearsHistory: "años de historia del programa IES",
      applicationsReceived: "solicitudes cualificadas recibidas",
      scholarsGraduated: "becarios completaron el programa con éxito",
      disciplinesStudied: "disciplinas académicas cursadas en Berlín y Potsdam",
      countriesRepresented: "países representados a lo largo de la historia de IES",
      citiesRepresented: "ciudades representadas por becarios de IES",
      underprivilegedSupported: "estudiantes con menos oportunidades han recibido apoyo",
      partnerUniversities: "universidades asociadas en países elegibles para IES",
      internshipsCompleted: "prácticas profesionales completadas",
    },
  },
  funding: {
    eyebrow: "Financiación",
    title: "Qué cubre realmente una beca completa",
    subtitleTemplate:
      "Una beca IES completa asciende a aproximadamente €{amount} por becario para un programa de seis meses e incluye:",
    lineItems: {
      accommodation: "Alojamiento",
      pocketMoney: "Manutención mensual",
      healthInsurance: "Seguro médico",
      administrativeCosts: "Costes administrativos",
      consultingMentoring: "Asesoría y mentoría",
      educationalTour: "Viaje educativo",
      internationalSeminars: "Seminarios internacionales",
      workshopsTraining: "Talleres y formación",
      universityEnrolmentFee: "Matrícula universitaria",
      socialMeetings: "Encuentros sociales",
      culturalEvents: "Actividades culturales",
      liabilityInsurance: "Seguro de responsabilidad civil",
    },
    tiersTitle: "Opciones de financiación",
    tiers: {
      full: {
        name: "Beca Completa",
        covered: [
          "La manutención mensual se paga cada mes",
          "Los costes del seguro médico se reembolsan",
          "Copernicus Berlin cubre directamente alojamiento, matrícula, seguro de responsabilidad civil, viajes educativos, encuentros sociales, administración, kit de bienvenida, actividades culturales, seminarios internacionales, asesoría, mentoría y talleres",
        ],
        notCovered: ["Los gastos de viaje no están cubiertos"],
      },
      partial_plus: {
        name: "Beca Parcial Plus",
        covered: [
          "La manutención mensual se paga cada mes",
          "Copernicus Berlin cubre directamente alojamiento, matrícula, seguro de responsabilidad civil, viajes educativos, encuentros sociales, administración, kit de bienvenida, actividades culturales, seminarios internacionales, asesoría, mentoría y talleres",
        ],
        notCovered: [
          "Los gastos de viaje no están cubiertos",
          "Los costes del seguro médico no están cubiertos",
        ],
      },
      partial: {
        name: "Beca Parcial",
        covered: [
          "La manutención mensual se paga cada mes",
          "Copernicus Berlin cubre directamente matrícula, seguro de responsabilidad civil, viajes educativos, encuentros sociales, administración, kit de bienvenida, actividades culturales, seminarios internacionales, asesoría, mentoría y talleres",
        ],
        notCovered: [
          "Los gastos de viaje no están cubiertos",
          "Los costes del seguro médico no están cubiertos",
          "Hay que pagar el alojamiento de dos meses (€1.650); el resto lo cubre Copernicus Berlin",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Autoevaluación rápida",
    title: "¿Podría IES ser para ti?",
    subtitle:
      "7 preguntas breves, unos 90 segundos. Verás tu resultado al instante: un veredicto rápido más un desglose de tus puntos fuertes y lo que conviene confirmar.",
    progressLabel: "Pregunta {current} de {total}",
    nextLabel: "Siguiente",
    backLabel: "Atrás",
    seeResultLabel: "Ver mi resultado",
    otherCountryLabel: "Mi país no aparece aquí",
    countryPlaceholder: "Selecciona tu país",
    questions: [
      {
        id: "enrollment",
        question:
          "¿Estás actualmente matriculado como estudiante de grado, máster o doctorado en una universidad?",
        options: [
          { value: "yes", label: "Sí" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "country",
        question: "¿Vives o estudias actualmente en uno de estos países?",
        options: [],
      },
      {
        id: "academics",
        question:
          "¿Dirías que tu rendimiento académico está por encima de la media (nota media alta, top de la clase, premios académicos)?",
        options: [
          { value: "yes", label: "Sí, claramente por encima de la media" },
          { value: "somewhat", label: "Bueno, pero no el mejor de la clase" },
          { value: "not_sure", label: "No estoy seguro/a" },
        ],
      },
      {
        id: "interest",
        question:
          "¿Te interesa pasar un semestre en Berlín combinando estudios universitarios con unas prácticas de al menos 8 semanas?",
        options: [
          { value: "yes", label: "Sí, es justo lo que busco" },
          { value: "no", label: "No demasiado" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "¿Cómo valorarías tu nivel de inglés? IES exige al menos B1 en inglés o alemán — saber el otro es un buen extra.",
        options: [
          { value: "a1", label: "A1 — empezando" },
          { value: "a2", label: "A2 — básico" },
          { value: "b1", label: "B1 — intermedio" },
          { value: "b2", label: "B2 — intermedio alto" },
          { value: "c1", label: "C1 — avanzado" },
          { value: "c2", label: "C2 — fluido" },
        ],
      },
      {
        id: "germanLevel",
        question: "¿Y el alemán? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — empezando" },
          { value: "a2", label: "A2 — básico" },
          { value: "b1", label: "B1 — intermedio" },
          { value: "b2", label: "B2 — intermedio alto" },
          { value: "c1", label: "C1 — avanzado" },
          { value: "c2", label: "C2 — fluido" },
        ],
      },
      {
        id: "financialCapacity",
        question: "¿Qué nivel de financiación encajaría realmente contigo?",
        options: [
          {
            value: "partial",
            label:
              "Puedo cubrir el viaje, el seguro médico y ~€1.650 de alojamiento de 2 meses por mi cuenta",
          },
          {
            value: "partial_plus",
            label: "Puedo cubrir el viaje y el seguro médico, pero necesito el alojamiento cubierto",
          },
          {
            value: "full",
            label: "Necesito manutención, alojamiento y seguro totalmente cubiertos",
          },
          { value: "not_sure", label: "Todavía no lo sé" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Pareces un candidato muy fuerte",
      body: "Según tus respuestas, IES podría encajar muy bien contigo. Deja tus datos abajo y nos pondremos en contacto con los detalles del programa y el enlace a la solicitud oficial.",
    },
    possible_fit: {
      title: "Podrías encajar bien",
      body: "IES podría funcionar para ti — conviene confirmar un par de detalles con los criterios oficiales. Deja tus datos y nos pondremos en contacto.",
    },
    explore_more: {
      title: "Vale la pena explorarlo más",
      body: "Tu perfil aún no cumple todos los puntos, pero IES sigue mereciendo una mirada: los tipos de beca y requisitos varían. Deja tus datos y te enviaremos más información.",
    },
    not_eligible: {
      title: "Todavía no — pero ten IES en mente",
      body: "IES está pensado para estudiantes universitarios ya matriculados. En cuanto te matricules, vuelve — mientras tanto deja tus datos y te mantendremos informado/a.",
    },
    restartLabel: "Repetir la evaluación",
  },
  resultDetails: {
    strengthsTitle: "Tus puntos fuertes",
    considerationsTitle: "Conviene confirmar",
    scholarshipTitle: "La beca que mejor encaja contigo",
    scholarshipNote:
      "Según lo que nos dijiste que podrías cubrir tú mismo/a — la cifra exacta depende de tu solicitud final.",
    strengths: {
      enrolledStudent: "Ya estás matriculado/a en la universidad, el requisito principal de IES.",
      eligibleCountry: "Tu país está en la lista actual de países elegibles para IES.",
      strongAcademics: "Tu expediente académico suena claramente por encima de la media.",
      decentAcademics: "Tu expediente académico suena sólido.",
      genuineInterest: "Te interesa de verdad el formato de estudios + prácticas que ofrece IES.",
      languageRequirementMet: "Cumples el requisito de idioma de IES (B1+ en inglés o alemán).",
      secondLanguageBonus: "Además tienes un nivel funcional del otro idioma — un buen extra.",
    },
    considerations: {
      notEnrolledYet:
        "IES exige estar matriculado/a actualmente — vuelve a comprobarlo cuando empieces tu programa.",
      countryNotListed:
        "Tu país no estaba en la lista actual de países elegibles para IES — confírmalo en la página oficial, ya que puede cambiar.",
      confirmAcademics:
        "Conviene confirmar los requisitos exactos de nota media en la página oficial.",
      lowInterest:
        "El formato de estudios + prácticas puede no ser exactamente lo que buscas — lee más antes de solicitarlo.",
      languageBelowRequirement:
        "IES pide al menos B1 en inglés o alemán — quizá te convenga mejorar uno de los dos antes de solicitarlo.",
    },
    scholarshipTiers: {
      full: "Beca Completa",
      partial_plus: "Beca Parcial Plus",
      partial: "Beca Parcial",
      unsure: "Vamos a verlo juntos",
    },
  },
  leadForm: {
    title: "¿Quieres saber más?",
    subtitle: "Elige lo que prefieras: un correo rápido con la información, o una consulta personal.",
    kindInfoLabel: "Solo envíame la info",
    kindConsultationLabel: "Quiero una consulta",
    nameLabel: "¿Cómo te llamamos?",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@usuario",
    instagramLabel: "Instagram / otra red social",
    instagramPlaceholder: "@usuario",
    aboutLabel: "Unas palabras sobre ti (opcional)",
    aboutPlaceholder: "Tu área de estudio, qué te atrae de IES, lo que quieras contarnos…",
    consentLabel:
      "Acepto que Copernicus Berlin pueda contactarme con información sobre el programa IES.",
    submitLabel: "Enviar la info",
    submitConsultationLabel: "Solicitar mi consulta",
    submittingLabel: "Enviando…",
    successTitle: "¡Gracias!",
    successBody: "Hemos recibido tus datos y te contactaremos pronto en {email}.",
    errorBody: "Algo ha fallado por nuestra parte. Inténtalo de nuevo en un momento.",
    consultationNote: "Nuestro equipo se pondrá en contacto contigo personalmente en breve.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es IES?",
        a: "La International Excellence Scholarship (IES) es un programa de becas de Copernicus Berlin e.V. que financia un semestre de estudios más unas prácticas en Berlín para estudiantes destacados de Europa del Este y Sudeste, el Cáucaso y Asia Central.",
      },
      {
        q: "¿Quién puede solicitarla?",
        a: "Estudiantes de grado, máster y doctorado de cualquier área, de países elegibles, con un buen expediente académico. Los criterios completos están en la página oficial de IES.",
      },
      {
        q: "¿Qué cubre la beca?",
        a: "Según el tipo de beca (completa o parcial), puede incluir manutención mensual, alojamiento, matrícula, seguro de responsabilidad civil, viajes formativos y actividades sociales.",
      },
      {
        q: "¿Qué ocurre después de solicitarla?",
        a: "Las solicitudes se revisan y los candidatos preseleccionados pasan a nuevas fases del proceso. Quienes son seleccionados pasan un semestre en Berlín combinando estudios y prácticas.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Este es un prototipo independiente y no oficial creado para el IES Skills Challenge de Copernicus Berlin. No es un sitio web oficial de Copernicus Berlin.",
    officialLinkLabel: "Página oficial del programa IES",
    applicationLinkLabel: "Formulario oficial de solicitud",
    madeFor: "Creado para el IES Skills Challenge",
    privacyLinkLabel: "Política de privacidad",
    termsLinkLabel: "Términos de uso",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  cookieConsent: {
    message:
      "Usamos un poco de almacenamiento local para recordar tu idioma. Sin rastreo ni cookies de terceros.",
    accept: "Entendido",
    privacyLinkLabel: "Política de privacidad",
  },
};
