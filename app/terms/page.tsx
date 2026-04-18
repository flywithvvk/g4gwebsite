import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Go4Garage terms of service — rules and guidelines for using our platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-primary mb-2">Terms of Service</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: April 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-on-surface-variant">
          <section>
            <h2 className="text-lg font-semibold text-on-surface">1. Acceptance of Terms</h2>
            <p>By accessing or using the Go4Garage website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">2. Services</h2>
            <p>Go4Garage provides an AI-powered automobile intelligence platform including regulatory compliance tools, operational management, workforce training, and EV charging solutions for automotive service centers and related businesses in India.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">3. User Responsibilities</h2>
            <p>You agree to provide accurate information when using our services, maintain the confidentiality of your account credentials, and use our platform in compliance with applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">4. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on this website are owned by Go4Garage. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">5. Limitation of Liability</h2>
            <p>Go4Garage provides its services &ldquo;as is&rdquo; without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">6. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">8. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:go4garageofficial@gmail.com" className="text-primary hover:underline">go4garageofficial@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
