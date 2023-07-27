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
          floral: "#FFFAF0",
        },
        pastel: {
          400: "#ffdc5e",
          500: "#ff600a",
          600: "#90cf8e",
          700: "#78c6f7",
        }
      }
    },
  },
  plugins: [],
}
