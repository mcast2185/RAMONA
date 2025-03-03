import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     fontFamily: {
      syne: ['Syne', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      PoiretOne: ['Poiret One', 'sans-serif']
    },
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1379px'},
      'lg': {'min': "800", "max": '1323px'},
      'md': {'min': '767px', 'max': '1100px'},
      'sm': {'min': '400px','max': '866px'},
    },
    extend: {
      boxShadow: {
        "button": "10px 16px 40px 0 rgb(255 84 117 / 46%)"
      },
      padding: {
        "clamp": "clamp(50px, 30vh, 100px) 0"
      },
      gridTemplateColumns: {
        "2.5": "1.25fr 1fr"
      },
      colors: {
        "--yellow": "#d0b20b",
        "--purple": "#400578",
      },
      fontFamily: {
        "DarkerGrotesque": ['Darker Grotesque', 'sans-serif'],
        "DMSerifDisplay": ["DM Serif Display", "serif"],
        "EbGaramond": ["EB Garamond", "serif"],
        "Imbue": ['Imbue', 'serif'],
        "Inter": ['Inter', 'sans-serif'],
        "MajorMonoDisplay": ['Major Mono Display', 'monospace'],
        "Megrim": ["Megrim"],
        "NotoSerifDisplay": ["Noto Serif Display", "serif"],
        "PinyonScript": ["Pinyon Script", "cursive"],
        "PoiretOne": ["Poiret One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
