import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MD3 Surface tokens — light theme
        surface: {
          DEFAULT: '#ffffff',
          dim: '#f5f5f5',
          bright: '#ffffff',
          'container-lowest': '#ffffff',
          'container-low': '#ffffff',
          container: '#fafafa',
          'container-high': '#f5f5f5',
          'container-highest': '#f0f0f0',
        },
        // MD3 Primary — warm amber/brown
        primary: {
          DEFAULT: '#904d00',
          container: '#f18a22',
          on: '#ffffff',
          'on-container': '#301600',
        },
        // MD3 Secondary — purple
        secondary: {
          DEFAULT: '#7b41b3',
          container: '#c588fe',
          on: '#ffffff',
          'on-container': '#2d0052',
        },
        // MD3 Tertiary — green
        tertiary: {
          DEFAULT: '#006e2f',
          container: '#22bc5a',
          on: '#ffffff',
          'on-container': '#00210a',
        },
        // MD3 Error
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        // Outline — black borders
        outline: {
          DEFAULT: '#000000',
          variant: '#000000',
        },
        // On-surface text
        'on-surface': {
          DEFAULT: '#1c1b1b',
          variant: '#4d4544',
        },
        // Inverse
        'inverse-surface': '#312f2f',
        'inverse-on-surface': '#f4efed',
        'inverse-primary': '#ffb77c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
