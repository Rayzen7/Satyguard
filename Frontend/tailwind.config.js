/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        poppins1: ['poppins1', 'sans-serif'],
        poppins2: ['poppins2', 'sans-serif'],
      },
      backgroundImage: {
        'primary': 'linear-gradient(138deg, rgba(195,5,255,1) 15%, rgba(255,167,178,1) 92%)',
      },
      keyframes: {
        moveRight: {  
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        moveLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform:'translateX(300%)' }
        },
        move: {
          '0%': { transform: 'translateY(5%)' },
          '25%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
          '75%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(5%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
      },
      animation: {
          moveRight: 'moveRight 1s ease-in-out forwards',
          moveLeft: 'moveLeft 1s ease-in-out forwards',
          move: 'move 10s infinite',
          fadeIn: 'fadeIn 0.5s forwards',
          fadeOut: 'fadeOut 0.5s forwards',
        },
      },
      colors: {
        gray : "#F4F4F4",
        white: "#ffffff",
        black: "#000000",
        purple: "#C305FF",
        pink: "#FFA7B2",
        gray1: "#E3E3E3",
        primary: 'linear-gradient(138deg, rgba(195,5,255,1) 15%, rgba(255,167,178,1) 92%)',
      },
  },
  plugins: [],
}