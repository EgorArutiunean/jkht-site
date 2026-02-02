/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-main)',
        'bg-secondary': 'var(--bg-secondary)',
        surface: 'var(--bg-surface)',
        text: 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        border: 'var(--border-light)',
        accent: 'var(--accent-main)',
        'accent-dark': 'var(--accent-dark)',
        'accent-soft': 'var(--accent-soft)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
          sm: '1.25rem',
          lg: '1.75rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1320px',
        },
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.875rem',
        lg: '1.25rem',
        xl: '1.75rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.06)',
        inset: 'inset 0 1px 0 rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
