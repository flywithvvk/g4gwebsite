'use client';

import Link from 'next/link';
import { IndiaFlag } from '@/components/IndiaFlag';

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-surface text-on-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors mb-8"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Back to Go4Garage
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold font-display text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-on-surface-variant mb-1">
          <strong className="text-on-surface">Go4Garage Antigravity Technologies Pvt. Ltd.</strong>
        </p>
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 2026</p>

        <p className="text-base text-on-surface-variant leading-relaxed mb-10">
          This Privacy Policy describes how Go4Garage Antigravity Technologies Pvt. Ltd. (&ldquo;Go4Garage&rdquo;,
          &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, stores, and discloses your
          personal data in accordance with the{' '}
          <strong className="text-on-surface">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and
          other applicable Indian laws. By using our platform and services, you consent to the practices described herein.
        </p>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">1. Information We Collect</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Account Data:</strong> Name, email address, phone number,
                  company name, job title, and password hash when you register for an account.
                </li>
                <li>
                  <strong className="text-on-surface">Usage Data:</strong> Pages visited, features used, session
                  duration, IP address, browser type, device identifiers, and clickstream data collected automatically
                  as you interact with our platform.
                </li>
                <li>
                  <strong className="text-on-surface">Vehicle &amp; Workshop Data:</strong> Vehicle registration
                  numbers, service records, diagnostic data, technician assignments, and workshop operational data
                  entered into our platform by you or your organisation.
                </li>
                <li>
                  <strong className="text-on-surface">Payment Information:</strong> Billing address, GST
                  identification number, and transaction references. Card and bank account details are processed
                  directly by our PCI-DSS-compliant payment partners and are not stored on our servers.
                </li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">2. How We Use Your Information</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Service Delivery:</strong> To operate, maintain, and
                  improve our SaaS products including URGAA, GSTSAAS, Ignition App, EV VIDYA ARJUN, KAILASH-AI,
                  and Eka-AI.
                </li>
                <li>
                  <strong className="text-on-surface">AI Model Improvement:</strong> Aggregated and anonymised
                  usage and vehicle data may be used to train and improve our proprietary Automobile LLM. We never
                  use identifiable personal data for model training without explicit consent.
                </li>
                <li>
                  <strong className="text-on-surface">Communications:</strong> To send transactional emails,
                  product updates, and promotional communications. You may opt out of marketing emails at any time
                  via the unsubscribe link.
                </li>
                <li>
                  <strong className="text-on-surface">Legal &amp; Compliance:</strong> To comply with applicable
                  laws, respond to lawful requests from government authorities, and enforce our agreements.
                </li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">3. Data Sharing</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Service Providers:</strong> We share data with trusted
                  third-party vendors (e.g., cloud hosting, payment gateways, analytics, email delivery) who
                  process data solely on our behalf under binding data processing agreements.
                </li>
                <li>
                  <strong className="text-on-surface">Legal Requirements:</strong> We may disclose personal data
                  if required by law, court order, or to protect the rights, property, or safety of Go4Garage, our
                  users, or the public.
                </li>
                <li>
                  <strong className="text-on-surface">Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred to the successor entity subject to
                  equivalent privacy protections.
                </li>
                <li>
                  <strong className="text-on-surface">No Sale of Data:</strong> We do not sell, rent, or trade
                  your personal data to third parties for their own marketing purposes.
                </li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">4. Data Storage &amp; Security</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>
                All personal data is stored on servers located in <strong className="text-on-surface">India</strong>{' '}
                (Google Cloud Platform, Mumbai region). Data is encrypted in transit using TLS 1.2+ and at rest
                using AES-256 encryption.
              </p>
              <p>
                We implement role-based access controls, audit logging, and regular security assessments. In the
                event of a data breach, we will notify affected users and the Data Protection Board of India as
                required under the DPDP Act, 2023.
              </p>
              <p>
                Retention periods: Account data is retained for the duration of your subscription plus 3 years.
                Usage logs are retained for 12 months. Payment records are retained for 7 years as required by
                Indian financial regulations.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">5. Your Rights (Under DPDP Act 2023)</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>
                As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following
                rights with respect to your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-on-surface">Right of Access:</strong> Request a summary of your personal data we hold and how it is being processed.</li>
                <li><strong className="text-on-surface">Right to Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                <li><strong className="text-on-surface">Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
                <li><strong className="text-on-surface">Right to Data Portability:</strong> Receive your personal data in a structured, machine-readable format.</li>
                <li><strong className="text-on-surface">Right to Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer or the Data Protection Board of India.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:privacy@go4garage.in" className="text-primary hover:underline">privacy@go4garage.in</a>.
                We will respond within 72 hours and resolve requests within 30 days.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">6. Cookies &amp; Tracking</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>We use the following categories of cookies:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Essential Cookies:</strong> Necessary for the platform to
                  function (authentication tokens, session state). These cannot be disabled.
                </li>
                <li>
                  <strong className="text-on-surface">Analytics Cookies:</strong> Used to understand how users
                  navigate our platform (e.g., Google Analytics, Firebase Analytics). These are anonymised and
                  aggregated.
                </li>
              </ul>
              <p>
                You may opt out of analytics cookies by adjusting your browser settings, using a browser
                extension such as the Google Analytics Opt-out Add-on, or emailing us at{' '}
                <a href="mailto:privacy@go4garage.in" className="text-primary hover:underline">privacy@go4garage.in</a>.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">7. Children&apos;s Privacy</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Our services are intended for business users and are not directed at individuals under the age of 18.
              We do not knowingly collect personal data from minors. If we become aware that a minor has provided
              personal data, we will delete it promptly. Parents or guardians may contact us at{' '}
              <a href="mailto:privacy@go4garage.in" className="text-primary hover:underline">privacy@go4garage.in</a>.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">8. Changes to This Policy</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law.
              We will notify you of material changes by sending an email to the address associated with your account
              at least 14 days before the changes take effect. The &ldquo;Last updated&rdquo; date at the top of
              this page reflects the most recent revision.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">9. Contact Us</h2>
            <div className="text-base text-on-surface-variant leading-relaxed space-y-1">
              <p>For privacy-related queries, requests, or complaints:</p>
              <p className="mt-3">
                <strong className="text-on-surface">Data Protection Officer / Grievance Officer</strong><br />
                Go4Garage Antigravity Technologies Pvt. Ltd.<br />
                <span className="inline-flex items-center gap-1.5"><IndiaFlag size={15} /> India · Bharat</span>
              </p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:privacy@go4garage.in" className="text-primary hover:underline">
                  privacy@go4garage.in
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Bottom link */}
        <div className="mt-12 pt-6 border-t border-outline-variant/30">
          <Link href="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
            View our Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
