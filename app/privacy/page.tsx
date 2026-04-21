import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Go4Garage privacy policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-on-surface-variant mb-8">Last updated: April 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-on-surface-variant">
          <section>
            <h2 className="text-lg font-semibold text-on-surface">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, company name, and message when you use our contact form. We also collect standard web analytics data (pages visited, browser type, IP address) to improve our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">2. How We Use Your Information</h2>
            <p>We use collected information to respond to your inquiries, improve our platform, send relevant updates about our products and services, and comply with legal obligations. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">3. Data Storage & Security</h2>
            <p>Your data is stored securely using industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">4. Cookies</h2>
            <p>Our website uses essential cookies to ensure proper functionality. We may use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">5. Third-Party Services</h2>
            <p>We use third-party services for hosting (Firebase/Google Cloud), analytics, and form processing. These services have their own privacy policies governing the use of your information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:go4garageofficial@gmail.com" className="text-primary hover:underline">go4garageofficial@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-on-surface">8. Contact</h2>
            <p>If you have questions about this privacy policy, contact us at <a href="mailto:go4garageofficial@gmail.com" className="text-primary hover:underline">go4garageofficial@gmail.com</a> or <a href="mailto:connect@go4garage.in" className="text-primary hover:underline">connect@go4garage.in</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
