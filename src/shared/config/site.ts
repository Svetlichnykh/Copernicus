export const siteConfig = {
  name: "IES Copernicus Berlin — Applicant Assistant",
  officialProgramUrl: "https://copernicusberlin.org",
  officialApplicationUrl: "https://copernicusberlin.org/ies",
  orgUrl: "https://copernicusberlin.org",
} as const;

export const eligibleCountries = [
  { name: "Albania", flag: "🇦🇱" },
  { name: "Armenia", flag: "🇦🇲" },
  { name: "Azerbaijan", flag: "🇦🇿" },
  { name: "Belarus", flag: "🇧🇾" },
  { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Kosovo", flag: "🇽🇰" },
  { name: "Kyrgyzstan", flag: "🇰🇬" },
  { name: "Moldova", flag: "🇲🇩" },
  { name: "Mongolia", flag: "🇲🇳" },
  { name: "Montenegro", flag: "🇲🇪" },
  { name: "North Macedonia", flag: "🇲🇰" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Tajikistan", flag: "🇹🇯" },
  { name: "Turkmenistan", flag: "🇹🇲" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "Uzbekistan", flag: "🇺🇿" },
] as const;

export const partnerUniversities = [
  "Freie Universität Berlin",
  "Humboldt-Universität zu Berlin",
  "Berlin School of Economics and Law (HWR Berlin)",
  "University of Potsdam",
] as const;

export const programStats = [
  { value: "30+", key: "yearsHistory" },
  { value: "25,000+", key: "applicationsReceived" },
  { value: "300+", key: "scholarsGraduated" },
  { value: "100+", key: "disciplinesStudied" },
  { value: "30+", key: "countriesRepresented" },
  { value: "200+", key: "citiesRepresented" },
  { value: "250+", key: "underprivilegedSupported" },
  { value: "150+", key: "partnerUniversities" },
  { value: "300+", key: "internshipsCompleted" },
] as const;

export const fullScholarshipTotalEur = 11405;

export const scholarshipBudgetLineItems = [
  { key: "accommodation", amountEur: 4950 },
  { key: "pocketMoney", amountEur: 1200 },
  { key: "healthInsurance", amountEur: 900 },
  { key: "administrativeCosts", amountEur: 790 },
  { key: "consultingMentoring", amountEur: 750 },
  { key: "educationalTour", amountEur: 560 },
  { key: "internationalSeminars", amountEur: 550 },
  { key: "workshopsTraining", amountEur: 540 },
  { key: "universityEnrolmentFee", amountEur: 350 },
  { key: "socialMeetings", amountEur: 390 },
  { key: "culturalEvents", amountEur: 250 },
  { key: "liabilityInsurance", amountEur: 175 },
] as const;

export const partialScholarshipAccommodationOutOfPocketEur = 1650;
