import type { Metadata } from "next";

import { LegalLayout, LegalSection, LegalList } from "../legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — IES Applicant Assistant",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="1 January 2026">
      <LegalSection title="1. Who this policy covers">
        <p>
          This Privacy Policy explains how <strong>Example Operator, example@example.com</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, the &ldquo;Operator&rdquo;) collects, uses, and
          protects personal data submitted through this website (the &ldquo;Site&rdquo;).
        </p>
        <p>
          The Site is an independent, unofficial applicant-assistant tool built for the
          Copernicus Berlin IES Skills Challenge. <strong>It is not operated by, and this policy
          does not apply to, Copernicus Berlin e.V.</strong> Any application you submit through
          the official IES application form is governed by Copernicus Berlin e.V.&rsquo;s own
          privacy policy, available on their website.
        </p>
      </LegalSection>

      <LegalSection title="2. What personal data we collect">
        <p>We collect the following categories of personal data when you use the eligibility self-check and its follow-up form:</p>
        <LegalList
          items={[
            <>
              <strong>Self-check responses:</strong> your answers to the eligibility questions
              (enrollment status, country, academic self-assessment, interest in the programme,
              self-assessed English and German level, and which funding tier would work for you).
            </>,
            <>
              <strong>Contact details you choose to provide</strong> when requesting information
              or a consultation: your name, email address, and, if you provide them, Telegram
              and/or Instagram (or other social media) handles, and any free-text information
              you add about yourself.
            </>,
            <>
              <strong>Preference data:</strong> your selected display language, stored in your
              browser&rsquo;s local storage (not sent to us as personal data, but referenced when
              you submit a form).
            </>,
            <>
              <strong>Technical and log data:</strong> standard web server / hosting logs (such as
              IP address, browser type, and access timestamps) collected automatically by our
              hosting provider for security and operational purposes.
            </>,
          ]}
        />
        <p>
          Submitting your name, contact details, and message is always optional — you can choose
          the &ldquo;just send me the info&rdquo; option, which only requires an email address.
        </p>
      </LegalSection>

      <LegalSection title="3. Why we process this data, and our legal basis">
        <LegalList
          items={[
            <>
              <strong>To respond to your request</strong> (sending you programme information
              and/or arranging a personal consultation) — legal basis: your consent (Art. 6(1)(a)
              GDPR), given when you tick the consent checkbox and submit the form.
            </>,
            <>
              <strong>To operate and secure the Site</strong> (e.g. preventing spam/bot
              submissions via a honeypot field, maintaining server logs) — legal basis: our
              legitimate interest in running a functioning, secure service (Art. 6(1)(f) GDPR).
            </>,
          ]}
        />
        <p>
          We do not use your data for automated decision-making that produces legal or similarly
          significant effects, and the self-check result you see is an informal,
          non-binding self-assessment — not a decision made about you by Copernicus Berlin e.V.
        </p>
      </LegalSection>

      <LegalSection title="4. Who else processes your data">
        <p>
          We use the following third-party processors to operate the Site. Each acts on our
          instructions under a data processing agreement (or equivalent contractual terms) and
          has its own privacy policy:
        </p>
        <LegalList
          items={[
            <>
              <strong>Supabase</strong> (database hosting) — stores form submissions. Data centre
              region: <strong>Example region</strong>.
            </>,
            <>
              <strong>Resend</strong> (transactional email delivery) — sends the confirmation
              email after you submit a form. Data centre region: <strong>Example region</strong>.
            </>,
            <>
              <strong>Example hosting provider</strong> — hosts the application itself and its
              server logs.
            </>,
          ]}
        />
        <p>
          Where any of these processors handle data outside the European Economic Area, such
          transfers rely on the processor&rsquo;s own applicable safeguards (such as Standard
          Contractual Clauses).
        </p>
        <p>We do not sell personal data, and we do not use it for third-party advertising.</p>
      </LegalSection>

      <LegalSection title="5. How long we keep your data">
        <p>
          We retain self-check submissions for as long as reasonably necessary to respond to your
          request and for a limited period afterward for record-keeping, and in any case no
          longer than <strong>12 months</strong> unless a longer period is required by law. You
          can request earlier deletion at any time (see Section 6).
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <LegalList
          items={[
            "Access the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data",
            "Restrict or object to certain processing",
            "Receive a copy of your data in a portable format",
            "Withdraw consent at any time, without affecting the lawfulness of processing before withdrawal",
            "Lodge a complaint with your local data protection supervisory authority",
          ]}
        />
        <p>
          To exercise any of these rights, contact us at <strong>example@example.com</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies and local storage">
        <p>
          The Site does not use third-party advertising or analytics cookies. It uses your
          browser&rsquo;s local storage to remember your selected display language and whether
          you have dismissed the cookie notice — this data stays on your device and is not
          transmitted to us. If you access the password-protected admin panel, a single,
          strictly necessary, first-party session cookie is set to keep you signed in; it is not
          used for tracking.
        </p>
      </LegalSection>

      <LegalSection title="8. Children's privacy">
        <p>
          The Site is intended for prospective university-level applicants and is not directed at
          children under 16. We do not knowingly collect personal data from children under 16.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo;
          date at the top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about this policy or your data can be sent to{" "}
          <strong>example@example.com</strong>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
