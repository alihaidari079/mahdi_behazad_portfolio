/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e10',
        panel: '#18181b',
        card: '#1e1e22',
        line: '#2a2a2e',
        muted: '#9a9aa2',
        accent: '#ef2d56',
        accentSoft: '#ef2d5622',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
