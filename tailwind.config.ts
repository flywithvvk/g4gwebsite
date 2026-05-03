import type { Config } from "tailwindcss";

/* =====================================================================
   Go4Garage — PR 1: Tailwind config mirroring editorial tokens
   =====================================================================
   Drop-in replacement for tailwind.config.ts. All existing class names
   (bg-primary, text-secondary, border-outline, font-display, etc.)
   continue to work — only their VALUES change to the editorial palette.
   New utilities (bg-paper, text-ink, text-saffron, font-deva, font-mono)
   are added for upcoming components.
   ===================================================================== */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── NEW editorial tokens ──────────────────────────────────────
        paper: {
          DEFAULT: '#f9fbfd',
          mute: 'rgba(26,23,20,0.62)',
        },
        bone:    '#f2f5f8',
        ink: {
          DEFAULT: '#1a1714',
          soft:    '#3a342d',
          mute:    '#8a7f6e',
        },
        saffron: {
          DEFAULT: '#f06b1a',
          deep:    '#c84d0d',
          soft:    '#fbe7d3',
        },
        rule: '#d5dee7',

        // Brand continuity tokens — preserve current Go4Garage/product colours
        brand: {
          primary:            '#904d00',
          'primary-bright':   '#f18a22',
          secondary:          '#7b41b3',
          'secondary-bright': '#c588fe',
          tertiary:           '#006e2f',
          'tertiary-bright':  '#22bc5a',
        },

        // ─── EXISTING MD3 tokens — kept alive, remapped to editorial ──
        // Surface (was white; now warm bone paper)
        surface: {
          DEFAULT:                  '#f9fbfd',
          dim:                      '#f2f5f8',
          bright:                   '#ffffff',
          'container-lowest':       '#ffffff',
          'container-low':          '#f9fbfd',
          container:                '#f3f6f9',
          'container-high':         '#e9eef3',
          'container-highest':      '#dde5ed',
        },
        // Primary — Go4Garage brand amber, preserved
        primary: {
          DEFAULT:        '#904d00',
          container:      '#f18a22',
          on:             '#ffffff',
          'on-container': '#301600',
        },
        // Secondary — product purple, preserved
        secondary: {
          DEFAULT:        '#7b41b3',
          container:      '#c588fe',
          on:             '#ffffff',
          'on-container': '#2d0052',
        },
        // Tertiary — product green, preserved
        tertiary: {
          DEFAULT:        '#006e2f',
          container:      '#22bc5a',
          on:             '#ffffff',
          'on-container': '#00210a',
        },
        // Error
        error: {
          DEFAULT:   '#b3321a',
          container: '#fbe1d6',
        },
        // Outline (was black; now editorial ink)
        outline: {
          DEFAULT: '#1a1714',
          variant: '#d5dee7',
        },
        // On-surface text
        'on-surface': {
          DEFAULT: '#1a1714',
          variant: '#3a342d',
        },
        // Inverse — for dark sections
        'inverse-surface':    '#1a1714',
        'inverse-on-surface': '#f8fafc',
        'inverse-primary':    '#f06b1a',
      },
      fontFamily: {
        // sans = body (Inter unchanged — existing copy doesn't reflow)
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // display = Fraunces (was Space Grotesk; opt-in via class="font-display")
        display: ['Fraunces', 'Space Grotesk', 'Inter', 'Georgia', 'serif'],
        // NEW
        mono:    ['JetBrains Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
        deva:    ['Noto Sans Devanagari', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};

export default config;
