/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#09080A',
        'dark-text': '#9e9ea4',
        'dark-text-secondary': '#c2c1c1',
        'dark-text-primary': '#FAFAFA',
        'dark-accent': '#CFE5FF',
        'dark-border': '#272627',
        'dark-card': '#242323',
        'dark-card-border': '#7a7878',
        'dark-nav': '#2d2c2c',
        'dark-nav-hover': '#191919',
        
        // Light theme colors
        'light-bg': '#f8fafc',
        'light-text': '#334155',
        'light-text-secondary': '#64748b',
        'light-text-primary': '#1e293b',
        'light-accent': '#3b82f6',
        'light-border': '#e2e8f0',
        'light-card': '#ffffff',
        'light-card-border': '#cbd5e1',
        'light-nav': '#f1f5f9',
        'light-nav-hover': '#e2e8f0',
      }
    },
  },
  plugins: [],
}

