/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Nouvelle couleur d'accentuation pour une identité de marque plus forte
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Couleurs premium pour les dégradés
        premium: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          gold: '#f59e0b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'text-reveal': 'text-reveal 1s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.3)',
            transform: 'scale(1.02)',
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'text-reveal': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'huge': 'clamp(3rem, 12vw, 12rem)',
        'massive': 'clamp(2rem, 8vw, 8rem)',
        'giant': 'clamp(1.5rem, 6vw, 6rem)',
      },
      lineHeight: {
        'extra-tight': '0.75',
        'super-tight': '0.8',
      },
      letterSpacing: {
        'super-tight': '-0.05em',
        'ultra-tight': '-0.08em',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};