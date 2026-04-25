import Link from 'next/link';

const POPULAR_LINKS = [
  { label: 'Products', href: '/products', icon: 'inventory_2', desc: 'Explore our 7 AI products' },
  { label: 'Platform', href: '/platform', icon: 'dashboard', desc: 'How Go4Garage works' },
  { label: 'Book Demo', href: '/demo', icon: 'calendar_month', desc: 'See it live in 30 min' },
  { label: 'Contact', href: '/contact', icon: 'mail', desc: 'Talk to our team' },
  { label: 'ROI Calculator', href: '/roi', icon: 'calculate', desc: 'Estimate your savings' },
  { label: 'Pricing', href: '/pricing', icon: 'payments', desc: 'Simple, transparent pricing' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-2xl w-full">

        {/* Animated 404 illustration */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="w-28 h-28 rounded-3xl bg-primary-container/10 border border-primary/10 flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 56 }}>explore_off</span>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center border border-secondary/20">
            <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 14 }}>question_mark</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black gradient-text mb-3 font-display leading-none">404</h1>
        <h2 className="text-2xl font-bold text-on-surface mb-3 font-display">This page doesn&apos;t exist</h2>
        <p className="text-sm text-on-surface-variant mb-10 leading-relaxed max-w-md mx-auto">
          Looks like this URL took a wrong turn. Here are some helpful destinations:
        </p>

        {/* Popular links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {POPULAR_LINKS.map(({ label, href, icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-start gap-1.5 p-4 rounded-2xl bg-surface-bright border border-outline-variant/30 hover:border-primary/30 hover:bg-primary-container/5 transition-all shadow-sm hover:shadow-md text-left"
            >
              <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>{icon}</span>
              </div>
              <span className="font-semibold text-sm text-on-surface font-display">{label}</span>
              <span className="text-[11px] text-on-surface-variant leading-tight">{desc}</span>
            </Link>
          ))}
        </div>

        {/* Back home CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg hover:bg-primary/90 transition-all"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>home</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
