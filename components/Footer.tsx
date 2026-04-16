'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Share2,
  ExternalLink,
  Globe,
  Code,
} from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Company Section
  const companyLinks: FooterSection = {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Investors', href: '/investors' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/contact' },
      { label: 'Press', href: '/about' },
    ],
  };

  // Products Section (7 products)
  const productsLinks: FooterSection = {
    title: 'Products',
    links: [
      { label: 'URGAA (URJA) Platform', href: '/products' },
      { label: 'GSTSAAS', href: '/products' },
      { label: 'Ignition Mobile App', href: '/products' },
      { label: 'EV VIDYA ARJUN', href: '/products' },
      { label: 'KAILASH-AI', href: '/products' },
      { label: 'Eka-AI', href: '/products' },
    ],
  };

  // Solutions Section (6 personas)
  const solutionsLinks: FooterSection = {
    title: 'Solutions',
    links: [
      { label: 'For Charge Point Operators', href: '/solutions' },
      { label: 'For Fleet Operators', href: '/solutions' },
      { label: 'For EV Drivers', href: '/solutions' },
      { label: 'For Workshops', href: '/solutions' },
      { label: 'For Government', href: '/solutions' },
      { label: 'For OEM Partners', href: '/solutions' },
    ],
  };

  // Connect Section (Social & Contact)
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/go4garage' },
    { label: 'Twitter', href: 'https://twitter.com/go4garage' },
    { label: 'Facebook', href: 'https://facebook.com/go4garage' },
    { label: 'Instagram', href: 'https://instagram.com/go4garage' },
    { label: 'GitHub', href: 'https://github.com/go4garage' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@go4garage.com', href: 'mailto:hello@go4garage.com' },
    { icon: Phone, text: '+91-XXXX-XXXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: MapPin, text: 'Bangalore, India', href: '#location' },
  ];

  const renderFooterSection = (section: FooterSection, colIndex: number) => (
    <div key={colIndex} className="flex flex-col space-y-4">
      <h3 className="text-base font-semibold text-accent-cyan capitalize tracking-wide">
        {section.title}
      </h3>
      <ul className="space-y-2.5">
        {section.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <Link
              href={link.href}
              className="text-gray-400 text-sm hover:text-accent-cyan transition-colors duration-300 ease-out"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative bg-gradient-to-b from-primary via-primary-light to-primary-dark text-gray-300">
      {/* Glass effect background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      </div>

      {/* Premium dark background with subtle border */}
      <div className="relative">
        <div className="border-t border-gray-800/50 backdrop-blur-sm bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Main footer content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Brand & Description */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="url(#footerLogoGrad)" />
                    <text x="20" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif" dominantBaseline="central">G4G</text>
                    <path d="M10 24 L16 24 L16 30 Q13 32 10 30 Z" fill="rgba(255,255,255,0.6)"/>
                    <path d="M24 24 L30 24 L30 30 Q27 32 24 30 Z" fill="rgba(255,255,255,0.6)"/>
                    <rect x="17" y="26" width="6" height="2" rx="1" fill="rgba(255,255,255,0.4)"/>
                    <defs><linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#00E5FF"/><stop offset="1" stopColor="#0066FF"/></linearGradient></defs>
                  </svg>
                  <span className="text-lg font-semibold text-white">Go4Garage</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  India's AI-powered automobile intelligence platform accelerating EV adoption and charging scale.
                </p>
                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-gray-800/30">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <Link
                        key={idx}
                        href={info.href}
                        className="flex items-center space-x-2 text-xs text-gray-400 hover:text-accent-cyan transition-colors duration-300"
                      >
                        <Icon className="w-4 h-4 text-accent-cyan" />
                        <span>{info.text}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Footer Sections */}
              {[companyLinks, productsLinks, solutionsLinks].map((section, idx) =>
                renderFooterSection(section, idx)
              )}

              {/* Connect Section */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-base font-semibold text-accent-cyan capitalize tracking-wide">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all duration-300 group text-xs font-medium"
                    >
                      <span className="text-gray-400 group-hover:text-accent-cyan transition-colors duration-300">
                        {social.label.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>

            {/* Bottom Section with Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
              {/* Copyright Text */}
              <div className="text-xs text-gray-500 text-center md:text-left">
                <p>
                  &copy; {currentYear} Go4Garage. All rights reserved. |
                  <span className="mx-2">Built with</span>
                  <span className="text-accent-cyan">passion</span>
                  <span className="mx-2">for India's EV future</span>
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
                <Link
                  href="#privacy"
                  className="text-gray-500 hover:text-accent-cyan transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#terms"
                  className="text-gray-500 hover:text-accent-cyan transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#cookies"
                  className="text-gray-500 hover:text-accent-cyan transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="#security"
                  className="text-gray-500 hover:text-accent-cyan transition-colors duration-300"
                >
                  Security
                </Link>
              </div>
            </div>

            {/* Premium accent line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan/0 via-accent-blue/50 to-accent-green/0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
