'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Investors', href: '/investors' },
        { label: 'Contact', href: '/contact' },
        { label: 'Impact', href: '/impact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'URGAA (URJA)', href: '/products' },
        { label: 'GSTSAAS', href: '/products' },
        { label: 'Ignition App', href: '/products' },
        { label: 'EV VIDYA ARJUN', href: '/products' },
        { label: 'KAILASH-AI', href: '/products' },
        { label: 'Eka-AI', href: '/products' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Charge Point Operators', href: '/solutions' },
        { label: 'Fleet Operators', href: '/solutions' },
        { label: 'EV Drivers', href: '/solutions' },
        { label: 'Workshops', href: '/solutions' },
        { label: 'Government', href: '/solutions' },
      ],
    },
  ];

  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/go4garage', icon: 'link' },
    { label: 'Twitter', href: 'https://twitter.com/go4garage', icon: 'tag' },
    { label: 'GitHub', href: 'https://github.com/go4garage', icon: 'code' },
  ];

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/icon.png" alt="Go4Garage" width={32} height={32} className="rounded-lg" />
              <Image src="/logo.jpg" alt="Go4Garage" width={120} height={32} className="h-7 w-auto object-contain" />
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              India&apos;s AI-powered automobile intelligence platform accelerating EV adoption and charging scale.
            </p>
            <div className="space-y-2 pt-4 border-t border-outline-variant/30">
              <a href="mailto:hello@go4garage.com" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                hello@go4garage.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>call</span>
                +91 9876 543 210
              </a>
              <span className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
                Bangalore, India
              </span>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold font-display text-on-surface tracking-wide">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-outline-variant/30 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-on-surface-variant text-center md:text-left">
            &copy; {currentYear} Go4Garage. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container/20 hover:border-primary/30 transition-all text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{s.icon}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-5 text-xs text-on-surface-variant">
            <Link href="#privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#security" className="hover:text-primary transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
