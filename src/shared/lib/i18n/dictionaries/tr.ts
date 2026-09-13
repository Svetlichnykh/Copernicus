import type { Dictionary } from "./en";

export const tr: Dictionary = {
  meta: {
    title: "IES Başvuru Asistanı — Copernicus Berlin",
    description:
      "Copernicus Berlin'in International Excellence Scholarship (IES) programının size uygun olup olmadığını iki dakikada öğrenin.",
  },
  nav: {
    checkEligibility: "Uygunluğunuzu kontrol edin",
    officialSite: "Resmî IES sayfası",
  },
  hero: {
    eyebrow: "Copernicus Berlin · International Excellence Scholarship",
    title: "Berlin'de bir dönem.",
    titleHighlight: "Ömür boyu sürecek bir ağ.",
    subtitle:
      "IES, Doğu ve Güneydoğu Avrupa, Kafkasya ve Orta Asya'dan başarılı öğrencilere Berlin'in önde gelen bir üniversitesinde bir dönem eğitim ve uygulamalı bir staj imkânı sunar. Program, çoğu eski burslu olan gönüllü bir ekip tarafından yürütülür.",
    ctaPrimary: "IES size uygun mu? — 2 dk",
    ctaSecondary: "Resmî IES sayfasını görüntüle",
    stats: [
      { value: "1", label: "dönem Berlin'de" },
      { value: "8+", label: "hafta staj" },
      { value: "20", label: "uygun ülke" },
      { value: "4", label: "ortak üniversite" },
    ],
  },
  highlights: {
    eyebrow: "Neden IES",
    title: "Sıradan bir değişim programı değil",
    subtitle:
      "IES; akademik eğitimi, gerçek iş deneyimini ve aktif bir uluslararası topluluğu bir araya getirir.",
    items: [
      {
        title: "Berlin'in önde gelen üniversitesinde okuyun",
        description:
          "Freie Universität Berlin, Humboldt-Universität zu Berlin, HWR Berlin veya Potsdam Üniversitesi'nde bir dönem — tüm bölümlere açık.",
      },
      {
        title: "8+ hafta staj",
        description:
          "Eğitiminizle birlikte Berlin'de gerçek, uluslararası iş deneyimi kazanın — işverenlerin değer verdiği beceriler edinin.",
      },
      {
        title: "Sadece onay değil, gerçek destek",
        description:
          "Tam veya kısmi burslar; aylık harçlık, konaklama, kayıt ücretleri, sorumluluk sigortası ve daha fazlasını kapsayabilir.",
      },
      {
        title: "Bir değişim değil, bir topluluk",
        description:
          "Programın şekillenmesine aktif katkı sağlayan burslular ve mezunlardan oluşan uluslararası bir ekibin parçası olun.",
      },
    ],
  },
  stats: {
    eyebrow: "Rakamlarla IES",
    title: "Sadece bir vaat değil, kanıtlanmış bir geçmiş",
    subtitle: "Fırsat, gelişim ve uluslararası iş birliğinin mirası.",
    items: {
      yearsHistory: "yıllık IES programı geçmişi",
      applicationsReceived: "nitelikli başvuru alındı",
      scholarsGraduated: "burslu programı başarıyla tamamladı",
      disciplinesStudied: "Berlin ve Potsdam'da okunan akademik disiplin",
      countriesRepresented: "IES tarihi boyunca temsil edilen ülke",
      citiesRepresented: "IES bursluları tarafından temsil edilen şehir",
      underprivilegedSupported: "dezavantajlı öğrenciye destek verildi",
      partnerUniversities: "IES'e uygun ülkelerde ortak üniversite",
      internshipsCompleted: "profesyonel staj tamamlandı",
    },
  },
  funding: {
    eyebrow: "Finansman",
    title: "Tam burs gerçekte neleri kapsıyor",
    subtitleTemplate:
      "Tam bir IES bursu, altı aylık bir program için burslu başına yaklaşık €{amount} tutarındadır ve şunları içerir:",
    lineItems: {
      accommodation: "Konaklama",
      pocketMoney: "Harçlık",
      healthInsurance: "Sağlık sigortası",
      administrativeCosts: "İdari giderler",
      consultingMentoring: "Danışmanlık ve mentorluk",
      educationalTour: "Eğitim gezisi",
      internationalSeminars: "Uluslararası seminerler",
      workshopsTraining: "Atölye ve eğitimler",
      universityEnrolmentFee: "Üniversite kayıt ücreti",
      socialMeetings: "Sosyal buluşmalar",
      culturalEvents: "Kültürel etkinlikler",
      liabilityInsurance: "Sorumluluk sigortası",
    },
    tiersTitle: "Finansman seçenekleri",
    tiers: {
      full: {
        name: "Tam Burs",
        covered: [
          "Harçlık aylık olarak ödenir",
          "Sağlık sigortası masrafları geri ödenir",
          "Konaklama, kayıt, sorumluluk sigortası, eğitim gezileri, sosyal buluşmalar, idari işler, karşılama paketi, kültürel etkinlikler, uluslararası seminerler, danışmanlık, mentorluk ve atölyeler doğrudan Copernicus Berlin tarafından karşılanır",
        ],
        notCovered: ["Seyahat masrafları karşılanmaz"],
      },
      partial_plus: {
        name: "Kısmi Burs Plus",
        covered: [
          "Harçlık aylık olarak ödenir",
          "Konaklama, kayıt, sorumluluk sigortası, eğitim gezileri, sosyal buluşmalar, idari işler, karşılama paketi, kültürel etkinlikler, uluslararası seminerler, danışmanlık, mentorluk ve atölyeler doğrudan Copernicus Berlin tarafından karşılanır",
        ],
        notCovered: ["Seyahat masrafları karşılanmaz", "Sağlık sigortası masrafları karşılanmaz"],
      },
      partial: {
        name: "Kısmi Burs",
        covered: [
          "Harçlık aylık olarak ödenir",
          "Kayıt, sorumluluk sigortası, eğitim gezileri, sosyal buluşmalar, idari işler, karşılama paketi, kültürel etkinlikler, uluslararası seminerler, danışmanlık, mentorluk ve atölyeler doğrudan Copernicus Berlin tarafından karşılanır",
        ],
        notCovered: [
          "Seyahat masrafları karşılanmaz",
          "Sağlık sigortası masrafları karşılanmaz",
          "İki aylık konaklama ücreti (€1.650) ödenmelidir; kalanını Copernicus Berlin karşılar",
        ],
      },
    },
  },
  quiz: {
    eyebrow: "Hızlı ön kontrol",
    title: "IES size uygun olabilir mi?",
    subtitle:
      "7 kısa soru, yaklaşık 90 saniye. Sonucunuzu anında görürsünüz — hızlı bir değerlendirme, artı güçlü yönleriniz ve doğrulamanız gereken noktaların özeti.",
    progressLabel: "Soru {current} / {total}",
    nextLabel: "İleri",
    backLabel: "Geri",
    seeResultLabel: "Sonucumu gör",
    otherCountryLabel: "Ülkem burada yok",
    countryPlaceholder: "Ülkenizi seçin",
    questions: [
      {
        id: "enrollment",
        question:
          "Şu anda bir üniversitede lisans, yüksek lisans veya doktora öğrencisi olarak kayıtlı mısınız?",
        options: [
          { value: "yes", label: "Evet" },
          { value: "no", label: "Hayır" },
        ],
      },
      {
        id: "country",
        question: "Şu anda bu ülkelerden birinde mi yaşıyor veya okuyorsunuz?",
        options: [],
      },
      {
        id: "academics",
        question:
          "Akademik başarınızı ortalamanın üzerinde tanımlar mısınız (yüksek not ortalaması, sınıf birinciliği, akademik ödüller)?",
        options: [
          { value: "yes", label: "Evet, açıkça ortalamanın üzerinde" },
          { value: "somewhat", label: "İyi, ama sınıf birincisi değil" },
          { value: "not_sure", label: "Emin değilim" },
        ],
      },
      {
        id: "interest",
        question:
          "Üniversite eğitimini en az 8 haftalık bir staj ile birleştiren Berlin'de bir dönem geçirmekle ilgileniyor musunuz?",
        options: [
          { value: "yes", label: "Evet, tam olarak aradığım şey bu" },
          { value: "no", label: "Pek değil" },
        ],
      },
      {
        id: "englishLevel",
        question:
          "İngilizce seviyenizi nasıl değerlendirirsiniz? IES en az B1 seviyesinde İngilizce veya Almanca istiyor — diğerini de bilmek güzel bir artı.",
        options: [
          { value: "a1", label: "A1 — yeni başlıyorum" },
          { value: "a2", label: "A2 — temel" },
          { value: "b1", label: "B1 — orta düzey" },
          { value: "b2", label: "B2 — orta üstü" },
          { value: "c1", label: "C1 — ileri düzey" },
          { value: "c2", label: "C2 — akıcı" },
        ],
      },
      {
        id: "germanLevel",
        question: "Peki Almanca? Wie schätzt du dich selbst ein?",
        options: [
          { value: "a1", label: "A1 — yeni başlıyorum" },
          { value: "a2", label: "A2 — temel" },
          { value: "b1", label: "B1 — orta düzey" },
          { value: "b2", label: "B2 — orta üstü" },
          { value: "c1", label: "C1 — ileri düzey" },
          { value: "c2", label: "C2 — akıcı" },
        ],
      },
      {
        id: "financialCapacity",
        question: "Sizin için gerçekçi olarak hangi finansman düzeyi uygun olur?",
        options: [
          {
            value: "partial",
            label: "Seyahat, sağlık sigortası ve 2 aylık konaklama için ~€1.650'yi kendim karşılayabilirim",
          },
          {
            value: "partial_plus",
            label: "Seyahat ve sağlık sigortasını kendim karşılayabilirim, ama konaklamanın karşılanması gerekiyor",
          },
          {
            value: "full",
            label: "Harçlık, konaklama ve sigortanın tamamen karşılanması gerekiyor",
          },
          { value: "not_sure", label: "Henüz emin değilim" },
        ],
      },
    ],
  },
  result: {
    strong_fit: {
      title: "Güçlü bir aday gibi görünüyorsunuz",
      body: "Yanıtlarınıza göre IES sizin için harika bir fırsat olabilir. Aşağıya bilgilerinizi bırakın; program detayları ve resmî başvuru bağlantısıyla size ulaşalım.",
    },
    possible_fit: {
      title: "İyi bir aday olabilirsiniz",
      body: "IES sizin için uygun olabilir — birkaç detayı resmî kriterlerle karşılaştırmakta fayda var. Bilgilerinizi bırakın, size ulaşalım.",
    },
    explore_more: {
      title: "Daha yakından incelemeye değer",
      body: "Profiliniz henüz her kriteri karşılamıyor, ancak IES yine de değerlendirmeye değer — burs türleri ve koşullar değişkenlik gösterir. Bilgilerinizi bırakın, daha fazla bilgi gönderelim.",
    },
    not_eligible: {
      title: "Şimdilik değil — ama IES'i aklınızda tutun",
      body: "IES, halihazırda bir üniversiteye kayıtlı öğrenciler için tasarlanmıştır. Kayıt olduğunuzda tekrar gelin — bu arada bilgilerinizi bırakın, sizi haberdar edelim.",
    },
    restartLabel: "Kontrolü tekrar yap",
  },
  resultDetails: {
    strengthsTitle: "Güçlü yönleriniz",
    considerationsTitle: "Doğrulamakta fayda var",
    scholarshipTitle: "Size en uygun burs türü",
    scholarshipNote:
      "Kendi karşılayabileceğinizi belirttiğiniz duruma göre — kesin rakam nihai başvurunuza bağlıdır.",
    strengths: {
      enrolledStudent: "Halihazırda bir üniversiteye kayıtlısınız — IES'in temel şartı bu.",
      eligibleCountry: "Ülkeniz güncel IES uygunluk listesinde.",
      strongAcademics: "Akademik geçmişiniz açıkça ortalamanın üzerinde görünüyor.",
      decentAcademics: "Akademik geçmişiniz oldukça iyi görünüyor.",
      genuineInterest: "IES'in sunduğu eğitim + staj formatıyla gerçekten ilgileniyorsunuz.",
      languageRequirementMet: "IES'in dil şartını karşılıyorsunuz (İngilizce veya Almancada B1+).",
      secondLanguageBonus: "Diğer dilde de çalışma düzeyinde bilginiz var — güzel bir artı.",
    },
    considerations: {
      notEnrolledYet:
        "IES, halihazırda kayıtlı bir öğrenci olmanızı gerektirir — programınıza başladığınızda tekrar kontrol etmekte fayda var.",
      countryNotListed:
        "Ülkeniz güncel IES uygunluk listesinde değildi — liste değişebildiği için resmî sayfadan tekrar kontrol edin.",
      confirmAcademics:
        "Tam not ortalaması gereksinimlerini resmî sayfadan doğrulamakta fayda var.",
      lowInterest:
        "Eğitim + staj formatı tam olarak aradığınız şey olmayabilir — başvurmadan önce daha fazla bilgi edinin.",
      languageBelowRequirement:
        "IES, İngilizce veya Almancada en az B1 istiyor — başvurmadan önce birini geliştirmek isteyebilirsiniz.",
    },
    scholarshipTiers: {
      full: "Tam Burs",
      partial_plus: "Kısmi Burs Plus",
      partial: "Kısmi Burs",
      unsure: "Birlikte netleştirelim",
    },
  },
  leadForm: {
    title: "Tüm detayları ve kişisel bir görüşme ister misiniz?",
    subtitle: "Sizin için uygun olanı seçin — hızlı bir bilgi e-postası ya da kişisel bir görüşme.",
    kindInfoLabel: "Sadece bilgi gönderin",
    kindConsultationLabel: "Görüşme talep ediyorum",
    nameLabel: "Size nasıl hitap edelim?",
    namePlaceholder: "Adınız",
    emailLabel: "E-posta adresi",
    emailPlaceholder: "you@university.edu",
    telegramLabel: "Telegram",
    telegramPlaceholder: "@kullaniciadi",
    instagramLabel: "Instagram / diğer sosyal medya",
    instagramPlaceholder: "@kullaniciadi",
    aboutLabel: "Kendiniz hakkında birkaç söz (isteğe bağlı)",
    aboutPlaceholder: "Okuduğunuz bölüm, IES'te sizi ne heyecanlandırıyor, başka her şey…",
    consentLabel:
      "Copernicus Berlin'in IES programı hakkında bilgi vermek üzere benimle iletişime geçebileceğini kabul ediyorum.",
    submitLabel: "Bilgileri gönder",
    submitConsultationLabel: "Görüşme talep et",
    submittingLabel: "Gönderiliyor…",
    successTitle: "Teşekkürler!",
    successBody: "Bilgilerinizi aldık, yakında {email} adresinden sizinle iletişime geçeceğiz.",
    errorBody: "Bizim tarafımızda bir sorun oluştu. Lütfen birazdan tekrar deneyin.",
    consultationNote: "Ekibimiz yakında sizinle kişisel olarak iletişime geçecek.",
  },
  faq: {
    eyebrow: "Sık sorulan sorular",
    title: "Sık sorulan sorular",
    items: [
      {
        q: "IES nedir?",
        a: "International Excellence Scholarship (IES), Copernicus Berlin e.V. tarafından yürütülen; Doğu ve Güneydoğu Avrupa, Kafkasya ve Orta Asya'dan başarılı öğrencilere Berlin'de bir dönem eğitim ve staj imkânı finanse eden bir burs programıdır.",
      },
      {
        q: "Kimler başvurabilir?",
        a: "Uygun ülkelerden, güçlü bir akademik geçmişe sahip, her bölümden lisans, yüksek lisans ve doktora öğrencileri. Tüm uygunluk kriterleri resmî IES sayfasında listelenmiştir.",
      },
      {
        q: "Burs neleri kapsar?",
        a: "Burs türüne (tam veya kısmi) bağlı olarak; aylık harçlık, konaklama, kayıt ücretleri, sorumluluk sigortası, eğitim gezileri ve sosyal etkinlikler kapsanabilir.",
      },
      {
        q: "Başvurduktan sonra ne olur?",
        a: "Başvurular değerlendirilir ve ön elemeyi geçen adaylar sonraki seçim aşamalarına davet edilir. Başarılı adaylar, üniversite eğitimini staj ile birleştiren bir dönemi Berlin'de geçirir.",
      },
    ],
  },
  footer: {
    disclaimer:
      "Bu, Copernicus Berlin IES Skills Challenge için hazırlanmış bağımsız, resmî olmayan bir prototiptir. Copernicus Berlin'in resmî web sitesi değildir.",
    officialLinkLabel: "Resmî IES program sayfası",
    applicationLinkLabel: "Resmî başvuru formu",
    madeFor: "IES Skills Challenge için hazırlandı",
    privacyLinkLabel: "Gizlilik Politikası",
    termsLinkLabel: "Kullanım Koşulları",
  },
  languageSwitcher: {
    label: "Dil",
  },
  cookieConsent: {
    message:
      "Dil tercihinizi hatırlamak için az miktarda yerel depolama kullanıyoruz. Takip yok, üçüncü taraf çerez yok.",
    accept: "Anladım",
    privacyLinkLabel: "Gizlilik Politikası",
  },
};
