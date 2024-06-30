/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(at center 80%, #0a1029 0%, #0a0b10 40%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#94a3e4',
        'secondary-color': '#10278b',
        'accent-color': '#3f62fd',
        'accent-color-hover': '#728bfe',
        'background-color': '#06070e',
        'background-sec-color': '#14161f',
        'text-color': '#e6e8ef',
        'primary-color': '#94a3e4'
      },
      boxShadow: {
        'accent-normal': '0px 0px 10px 0px rgba(14, 58, 253, 0.6)',
        'accent-hover': '0px 0px 20px 0px rgba(14, 58, 253, 0.6)'
      }
    },

  },
  plugins: [],
}
