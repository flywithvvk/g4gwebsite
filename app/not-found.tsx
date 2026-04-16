import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 bg-primary-container/15 rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 40 }}>explore_off</span>
        </div>
        <h1 className="text-6xl font-black gradient-text mb-4 font-display">404</h1>
        <h2 className="text-xl font-bold text-on-surface mb-3 font-display">Page Not Found</h2>
        <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>home</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
