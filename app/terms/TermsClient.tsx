'use client';

import Link from 'next/link';

export default function TermsClient() {
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
        <h1 className="text-3xl font-bold font-display text-primary mb-2">Terms of Service</h1>
        <p className="text-sm text-on-surface-variant mb-1">
          <strong className="text-on-surface">Go4Garage Antigravity Technologies Pvt. Ltd.</strong>
        </p>
        <p className="text-sm text-on-surface-variant mb-10">Last updated: April 2026</p>

        <p className="text-base text-on-surface-variant leading-relaxed mb-10">
          Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before accessing or using the
          Go4Garage platform and services. By creating an account or using our services, you agree to be bound by
          these Terms. If you do not agree, please do not use our services.
        </p>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">1. Acceptance of Terms</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              These Terms constitute a legally binding agreement between you (and your organisation, if applicable)
              and Go4Garage Antigravity Technologies Pvt. Ltd. (&ldquo;Go4Garage&rdquo;, &ldquo;we&rdquo;,
              &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website at{' '}
              <a href="https://www.go4garage.com" className="text-primary hover:underline">www.go4garage.com</a>{' '}
              or using any of our products or services, you accept these Terms in full. If you are entering into
              these Terms on behalf of an organisation, you represent that you have the authority to bind that
              organisation.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">2. Description of Services</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>
                Go4Garage provides a cloud-based SaaS platform designed for the electric vehicle (EV) industry in
                India. Our current product suite includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-on-surface">URGAA (ऊर्जा):</strong> EV charging network management and CPO operations platform.</li>
                <li><strong className="text-on-surface">GSTSAAS:</strong> GST compliance and regulatory management for automotive businesses.</li>
                <li><strong className="text-on-surface">Ignition App:</strong> Workshop operations management and service workflow tool.</li>
                <li><strong className="text-on-surface">EV VIDYA ARJUN:</strong> EV technician training and certification platform.</li>
                <li><strong className="text-on-surface">KAILASH-AI:</strong> Predictive maintenance and AI diagnostics for EV fleets.</li>
                <li><strong className="text-on-surface">Eka-AI:</strong> AI-powered business intelligence and reporting for automobile sector stakeholders.</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any service (or feature thereof) at any
                time with reasonable prior notice to active subscribers.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">3. User Accounts &amp; Registration</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>To access our platform, you must create an account and provide accurate, current, and complete information. You agree to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Maintain the confidentiality of your account credentials and not share them with third parties.</li>
                <li>Promptly notify us at <a href="mailto:connect@go4garage.in" className="text-primary hover:underline">connect@go4garage.in</a> of any unauthorised access to your account.</li>
                <li>Ensure that all users within your organisation comply with these Terms.</li>
                <li>Provide accurate billing and contact information and keep it up to date.</li>
              </ul>
              <p>
                You are responsible for all activity that occurs under your account. Go4Garage is not liable for any
                loss arising from unauthorised use of your credentials.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">4. Acceptable Use Policy</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>You agree not to use our services to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Violate any applicable Indian or international law or regulation.</li>
                <li>Transmit unlawful, harmful, defamatory, or fraudulent content.</li>
                <li>Reverse engineer, decompile, or attempt to extract source code from our platform.</li>
                <li>Use automated means (bots, scrapers) to access the platform without prior written consent.</li>
                <li>Upload or transmit malware, viruses, or any code designed to damage or disrupt our systems.</li>
                <li>Attempt to gain unauthorised access to other accounts, systems, or networks.</li>
                <li>Resell or sublicense our services without a written reseller agreement.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate this policy without prior notice.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">5. Intellectual Property</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              All intellectual property in and relating to the Go4Garage platform — including but not limited to
              software, source code, algorithms, AI models (including our proprietary Automobile LLM), designs,
              trademarks, logos, and documentation — is and remains the exclusive property of Go4Garage Antigravity
              Technologies Pvt. Ltd. These Terms do not grant you any ownership rights. Your subscription grants
              you a limited, non-exclusive, non-transferable, revocable licence to access and use the platform
              solely for your internal business purposes. Any feedback or suggestions you provide may be used by
              us to improve our services without compensation or attribution.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">6. Payment Terms</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-on-surface">Subscription:</strong> Access to our platform is provided
                  on a subscription basis. Fees are billed in advance on a monthly or annual cycle as per the plan
                  you select. All prices are in Indian Rupees (INR) and exclusive of applicable GST.
                </li>
                <li>
                  <strong className="text-on-surface">Cancellation:</strong> You may cancel your subscription at
                  any time from your account dashboard. Cancellation takes effect at the end of the current billing
                  period. We do not prorate partial months.
                </li>
                <li>
                  <strong className="text-on-surface">Refunds:</strong> Subscription fees are non-refundable
                  except where required by applicable law or as expressly stated in your order. If you believe a
                  charge was made in error, contact{' '}
                  <a href="mailto:connect@go4garage.in" className="text-primary hover:underline">connect@go4garage.in</a>{' '}
                  within 14 days of the charge.
                </li>
                <li>
                  <strong className="text-on-surface">Non-payment:</strong> We reserve the right to suspend
                  access to your account if payment is not received within 7 days of the due date.
                </li>
              </ul>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">7. Data Ownership</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              All data you upload, input, or generate within the platform (&ldquo;Customer Data&rdquo;) remains
              your property. Go4Garage does not claim ownership over your Customer Data. You grant us a limited
              licence to process your Customer Data solely to provide and improve the services. Upon termination
              of your subscription, you may export your data for up to 60 days. After this period, we may delete
              your data from our active systems in accordance with our retention policy.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">8. Limitation of Liability</h2>
            <div className="space-y-3 text-base text-on-surface-variant leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, Go4Garage and its officers, directors,
                employees, and affiliates shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages, including but not limited to loss of profits, data, goodwill, or business
                interruption, arising out of or in connection with your use of our services.
              </p>
              <p>
                Our aggregate liability to you for any claims arising under these Terms shall not exceed the
                total amount paid by you for the services in the twelve (12) months preceding the claim.
              </p>
              <p>
                The services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties
                of any kind, express or implied, including but not limited to warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">9. Indemnification</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              You agree to defend, indemnify, and hold harmless Go4Garage and its officers, directors, employees,
              agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses
              (including reasonable legal fees) arising out of or in any way connected with: (a) your access to
              or use of our services; (b) your violation of these Terms; (c) your infringement of any third-party
              intellectual property rights; or (d) any data or content you submit to the platform.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">10. Governing Law</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Subject to the
              arbitration clause below, you agree to submit to the exclusive jurisdiction of the courts located in
              Bangalore, Karnataka, India for the resolution of any disputes not subject to arbitration.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">11. Dispute Resolution</h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Any dispute, controversy, or claim arising out of or relating to these Terms or the breach,
              termination, or invalidity thereof shall first be attempted to be resolved through good-faith
              negotiations. If not resolved within 30 days, the dispute shall be referred to and finally resolved
              by arbitration in accordance with the Arbitration and Conciliation Act, 1996 (as amended). The
              arbitration shall be conducted by a sole arbitrator, in the English language, seated in Bangalore,
              Karnataka, India. The decision of the arbitrator shall be final and binding on both parties.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-on-surface mb-3">12. Contact</h2>
            <div className="text-base text-on-surface-variant leading-relaxed space-y-1">
              <p>For questions or notices regarding these Terms:</p>
              <p className="mt-3">
                <strong className="text-on-surface">Legal Team</strong><br />
                Go4Garage Antigravity Technologies Pvt. Ltd.<br />
                Bangalore, Karnataka, India
              </p>
              <p className="mt-2">
                Email:{' '}
                <a href="mailto:legal@go4garage.in" className="text-primary hover:underline">
                  legal@go4garage.in
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Bottom link */}
        <div className="mt-12 pt-6 border-t border-outline-variant/30">
          <Link href="/privacy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
            View our Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
