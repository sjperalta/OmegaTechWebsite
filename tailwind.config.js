/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
        "primary": "var(--primary)",
        "surface-bright": "var(--surface-bright)",
        "primary-container": "var(--primary-container)",
        "on-surface-variant": "var(--on-surface-variant)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "outline": "var(--outline)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "tertiary-container": "var(--tertiary-container)",
        "on-error": "var(--on-error)",
        "on-surface": "var(--on-surface)",
        "surface-variant": "var(--surface-variant)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "surface-container-highest": "var(--surface-container-highest)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "inverse-surface": "var(--inverse-surface)",
        "on-secondary": "var(--on-secondary)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "outline-variant": "var(--outline-variant)",
        "on-primary": "var(--on-primary)",
        "on-background": "var(--on-background)",
        "background": "var(--background)",
        "surface": "var(--surface)",
        "secondary-fixed": "var(--secondary-fixed)",
        "primary-fixed": "var(--primary-fixed)",
        "secondary-container": "var(--secondary-container)",
        "tertiary": "var(--tertiary)",
        "error-container": "var(--error-container)",
        "surface-dim": "var(--surface-dim)",
        "surface-container-high": "var(--surface-container-high)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "error": "var(--error)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "on-tertiary": "var(--on-tertiary)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "on-secondary-container": "var(--on-secondary-container)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "on-error-container": "var(--on-error-container)",
        "surface-tint": "var(--surface-tint)",
        "secondary": "var(--secondary)",
        "inverse-primary": "var(--inverse-primary)",
        "on-primary-container": "var(--on-primary-container)",
        glass: 'var(--glass-bg)',
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        headline: ['var(--font-display)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1rem', // Overridden
        '3xl': '1.5rem', // Overridden
        '4xl': '2rem',
        '5xl': '2.5rem',
        'full': '9999px',
      },
      backdropBlur: {
        glass: '12px',
      },
      boxShadow: {
        'glow-primary': '0 0 20px -5px hsl(var(--primary) / 0.3)',
      },
      spacing: {
        '16': '4rem',
        '20': '5rem',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        }
      },
      animation: {
        'slide-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
