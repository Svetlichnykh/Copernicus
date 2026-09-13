import { SiteHeader } from "@/widgets/site-header";
import { HeroSection } from "@/widgets/hero-section";
import { EligibilityWidget } from "@/widgets/eligibility-widget";
import { ProgramHighlights } from "@/widgets/program-highlights";
import { ProgramStats } from "@/widgets/program-stats";
import { FundingOverview } from "@/widgets/funding-overview";
import { FaqSection } from "@/widgets/faq-section";
import { SiteFooter } from "@/widgets/site-footer";
import { CookieConsent } from "@/widgets/cookie-consent";

export function HomeView() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <EligibilityWidget />
        <ProgramHighlights />
        <ProgramStats />
        <FundingOverview />
        <FaqSection />
      </main>
      <SiteFooter />
      <CookieConsent />
    </div>
  );
}
