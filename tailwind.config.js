/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary-background':'#F5F5F5',
      'white' :'#FFFFFF',
      'dark-font': '#0E0E0E',
      'blue-font':'#0E42FD',
      'border':'#D9D9D9',
      'green-background':'#2BD9AF',
      'red-background':'#FF5E84',      
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens:{
      'mobile':'375px',
      'tablet':'768px',
      'laptop':'1200px',
      'desktop':'1440px',
    },
  },
  plugins: [],
}