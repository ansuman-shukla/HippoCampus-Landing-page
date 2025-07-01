/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Lime Green for H1 Headings
        'primary': '#BED754', // lime green
        'primary-50': '#F4F9E8', // very light lime
        'primary-100': '#E8F2D1', // light lime
        'primary-200': '#D1E5A3', // lighter lime
        'primary-300': '#BED754', // main lime green
        'primary-400': '#A8C63F', // darker lime
        'primary-500': '#BED754', // lime green
        'primary-600': '#9BB52A', // darker lime
        'primary-700': '#7A9215', // dark lime
        'primary-800': '#596E00', // very dark lime
        'primary-900': '#3A4A00', // darkest lime
        'primary-foreground': '#000000', // black text on lime

        // Secondary Colors - Burnt Orange for H2 & Links
        'secondary': '#E3651D', // burnt orange
        'secondary-50': '#FDF5F0', // very light orange
        'secondary-100': '#FBEAE1', // light orange
        'secondary-200': '#F7D5C3', // lighter orange
        'secondary-300': '#F3C0A5', // light burnt orange
        'secondary-400': '#EFAB87', // medium burnt orange
        'secondary-500': '#E3651D', // main burnt orange
        'secondary-600': '#C8551A', // darker burnt orange
        'secondary-700': '#AD4517', // dark burnt orange
        'secondary-800': '#923514', // darker orange
        'secondary-900': '#772511', // darkest orange
        'secondary-foreground': '#FFFFFF', // white text on orange

        // Accent Colors - Deep Burgundy for Subtle Accents
        'accent': '#750E21', // deep burgundy
        'accent-50': '#F5E8EB', // very light burgundy
        'accent-100': '#EBD1D7', // light burgundy
        'accent-200': '#D7A3AF', // lighter burgundy
        'accent-300': '#C37587', // medium burgundy
        'accent-400': '#AF475F', // darker burgundy
        'accent-500': '#750E21', // main deep burgundy
        'accent-600': '#5C0B1A', // darker burgundy
        'accent-700': '#430813', // dark burgundy
        'accent-800': '#2A050C', // very dark burgundy
        'accent-900': '#110205', // darkest burgundy
        'accent-foreground': '#FFFFFF', // white text on burgundy

        // Background Colors
        'background': '#000000', // main black background
        'background-secondary': '#111111', // slightly lighter black
        'background-tertiary': '#1a1a1a', // dark gray for sections

        // Surface Colors - Card Backgrounds
        'surface': '#222222', // dark grey cards
        'surface-hover': '#2a2a2a', // slightly lighter on hover
        'surface-active': '#333333', // lighter on active

        // Text Colors
        'text-primary': '#F1F1F1', // off-white for H3+ & body text
        'text-secondary': '#A9A9A9', // light grey for muted text
        'text-tertiary': '#888888', // medium gray for subtle text
        'text-inverse': '#000000', // black for light backgrounds

        // Heading Colors
        'heading-h1': '#BED754', // lime green for H1
        'heading-h2': '#E3651D', // burnt orange for H2
        'heading-h3': '#F1F1F1', // off-white for H3+

        // Link Colors
        'link': '#E3651D', // burnt orange for links
        'link-hover': '#BED754', // lime green for link hover

        // Status Colors
        'success': '#BED754', // using lime green for success
        'success-50': '#F4F9E8', // very light lime
        'success-100': '#E8F2D1', // light lime
        'success-foreground': '#000000', // black text on lime

        'warning': '#E3651D', // using burnt orange for warning
        'warning-50': '#FDF5F0', // very light orange
        'warning-100': '#FBEAE1', // light orange
        'warning-foreground': '#FFFFFF', // white text on orange

        'error': '#750E21', // using deep burgundy for error
        'error-50': '#F5E8EB', // very light burgundy
        'error-100': '#EBD1D7', // light burgundy
        'error-foreground': '#FFFFFF', // white text on burgundy

        // Border Colors
        'border': 'rgba(241, 241, 241, 0.12)', // subtle off-white border
        'border-focus': '#BED754', // lime green for focus
        'border-error': '#750E21', // deep burgundy for error
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      backdropBlur: {
        'xs': '2px',
        'glassmorphism': '12px',
      },
      backdropSaturate: {
        '180': '1.8',
      },
      boxShadow: {
        'glassmorphism': '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 4px 14px 0 rgba(190, 215, 84, 0.25)', // lime green shadow
        'primary': '0 4px 14px 0 rgba(190, 215, 84, 0.25)', // lime green shadow
        'secondary': '0 4px 14px 0 rgba(227, 101, 29, 0.25)', // burnt orange shadow
        'accent': '0 4px 14px 0 rgba(117, 14, 33, 0.25)', // deep burgundy shadow
        'glow': '0 0 20px rgba(190, 215, 84, 0.3)', // lime green glow
        'glow-orange': '0 0 20px rgba(227, 101, 29, 0.3)', // burnt orange glow
        'glow-burgundy': '0 0 20px rgba(117, 14, 33, 0.3)', // deep burgundy glow
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
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
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(190, 215, 84, 0.3)' }, // lime green glow
          '100%': { boxShadow: '0 0 30px rgba(190, 215, 84, 0.6)' }, // stronger lime green glow
        },
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}