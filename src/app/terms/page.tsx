import type { Metadata } from "next";

import { LegalLayout, LegalSection, LegalList } from "../legal-layout";

export const metadata: Metadata = {
  title: "Terms of Use — IES Applicant Assistant",
  robots: { index: false, follow: false },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" updated="1 January 2026">
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By using this website (the &ldquo;Site&rdquo;), you agree to these Terms of Use. If you
          do not agree, please do not use the Site.
        </p>
      </LegalSection>

      <LegalSection title="2. What this Site is — and what it is not">
        <p>
          This Site is an independent, unofficial prototype built by{" "}
          <strong>Example Operator</strong> for the Copernicus Berlin IES Skills
          Challenge, a skills-demonstration exercise. It provides an informal, non-binding
          self-check on whether the International Excellence Scholarship (IES) programme run by
          Copernicus Berlin e.V. might suit a given applicant, based on the answers you provide.
        </p>
        <p>
          <strong>
            This Site is not operated, endorsed, or verified by Copernicus Berlin e.V.
          </strong>{" "}
          The self-check result is a personal, automated estimate only and is not an eligibility
          decision, an offer, or a guarantee of any kind. The IES programme name, description, and
          publicly stated figures referenced on this Site belong to and are sourced from
          Copernicus Berlin e.V.&rsquo;s own official materials, used here descriptively for an
          educational challenge submission. All rights in the IES programme, its name, and the
          Copernicus Berlin logo remain with Copernicus Berlin e.V. The only authoritative source
          for eligibility criteria and the real application process is the official Copernicus
          Berlin website.
        </p>
      </LegalSection>

      <LegalSection title="3. No professional or legal advice">
        <p>
          Nothing on this Site constitutes legal, immigration, financial, or educational
          consulting advice. Always confirm scholarship criteria, deadlines, and requirements
          directly on the official Copernicus Berlin IES pages before making any decisions or
          submitting a real application.
        </p>
      </LegalSection>

      <LegalSection title="4. Your responsibilities">
        <LegalList
          items={[
            "Provide accurate information when using the self-check and any follow-up form.",
            "Do not attempt to disrupt, overload, or gain unauthorized access to the Site or its admin panel.",
            "Do not use automated tools (bots) to submit the self-check or the lead form.",
            "Use the Site only for its intended purpose of exploring your possible fit for the IES programme.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          The Site&rsquo;s own code, design, and original text are the property of{" "}
          <strong>Example Operator</strong>, except where noted. The Copernicus Berlin
          name, logo, and programme materials remain the property of Copernicus Berlin e.V. and
          are used here for descriptive, non-commercial, educational purposes connected to the
          Skills Challenge only.
        </p>
      </LegalSection>

      <LegalSection title="6. Disclaimer of warranties">
        <p>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
          warranties of any kind, express or implied, including but not limited to accuracy,
          completeness, reliability, or fitness for a particular purpose. Programme details such
          as figures, eligible countries, and scholarship amounts may change; we make reasonable
          efforts to keep this Site aligned with publicly available official information but do
          not guarantee it is current or complete.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law,{" "}
          <strong>Example Operator</strong> shall not be liable for any indirect,
          incidental, special, or consequential damages, or any loss of opportunity (including in
          connection with a real IES application), arising out of or relating to your use of the
          Site. Nothing in these Terms excludes liability that cannot be excluded under applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to the Site and these Terms">
        <p>
          We may modify or discontinue the Site, or update these Terms, at any time. Continued use
          of the Site after changes take effect constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These Terms are governed by the laws of{" "}
          <strong>Example Country</strong>, without
          regard to its conflict-of-law principles, except where mandatory consumer-protection
          law of your place of residence grants you additional rights that cannot be waived.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these Terms can be sent to <strong>example@example.com</strong>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
