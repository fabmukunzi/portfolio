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
        border_color: '#3f3f4699',
        dark_bg_color: '#0c0c0c'
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
