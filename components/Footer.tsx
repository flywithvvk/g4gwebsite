'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IndiaFlag } from '@/components/IndiaFlag';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Investors', href: '/investors' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Impact', href: '/impact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'URGAA (ऊर्जा)', href: '/products/urgaa' },
        { label: 'GST (Go4Garage Service Tools)', href: '/products/gstsaas' },
        { label: 'Ignition App', href: '/products/ignition' },
        { label: 'EV VIDYA ARJUN', href: '/products/arjun' },
        { label: 'KAILASH-AI', href: '/products/kailash-ai' },
        { label: 'Eka-AI', href: '/products/eka-ai' },
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
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
  ];

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <Image src="/icon.png" alt="Go4Garage" width={40} height={40} className="rounded-xl" />
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              India&apos;s AI-powered automobile intelligence platform accelerating EV adoption and charging scale across 33 states.
            </p>

            {/* Social icons with proper SVG logos */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com/company/go4garage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go4Garage on LinkedIn"
                className="w-9 h-9 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40 transition-all group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface-variant group-hover:text-[#0A66C2] transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/go4garage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go4Garage on X (Twitter)"
                className="w-9 h-9 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center hover:bg-on-surface/8 hover:border-on-surface/30 transition-all group"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.243 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/go4garage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go4Garage on GitHub"
                className="w-9 h-9 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-center hover:bg-on-surface/8 hover:border-on-surface/30 transition-all group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <div className="space-y-2 pt-2 border-t border-outline-variant/30">
              <a href="mailto:go4garageofficial@gmail.com" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>mail</span>
                go4garageofficial@gmail.com
              </a>
              <a href="mailto:connect@go4garage.in" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>mail</span>
                connect@go4garage.in
              </a>
              <span className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>location_on</span>
                <IndiaFlag size={16} /> India · Bharat
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

        {/* Bottom bar */}
        <div className="h-px bg-outline-variant/30 mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-on-surface-variant text-center md:text-left">
            &copy; {currentYear} Go4Garage Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-5 text-xs text-on-surface-variant">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
