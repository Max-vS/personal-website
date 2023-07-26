/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'timeline': '1fr 150px 1fr',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: {
          powder: "#FEFEFA",
          alice: "#F0F8FF",
          magnolia: "#EFF1FF",
          ghost: "#F8F9FF",
          smoke: "#F5F5F5",
          platinum: "#E5E4E2",
          wolf: "#DBD7D2",
          isa: "#EEEEEB",
        },
        pastel: {
          100: "#ccd5ae",
          200: "#e9edc9",
          300: "#fefae0",
          400: "#faedcd",
          500: "#d4a373",
          600: "#8093f1",
          700: "#8093f1",
          800: "#f7aef8",
          900: "#b388eb"
        }
      }
    },
  },
  plugins: [],
}
