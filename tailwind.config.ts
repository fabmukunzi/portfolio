import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  themes: {
    light: {},
    dark: {},
  },
  theme: {
    extend: {
      colors: {
        secondary: '#a1a1a1',
        secondary_dark: '#282828',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
