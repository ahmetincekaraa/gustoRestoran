/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px"
        }
      },
      //#ffbe33  
      colors: {
        primary:"#009467",
        secondary:"#222837",
        ired:"#CE2B37",
        danger:"red",
        success: "green",
        iwhite: "#F4F5F0"
      },
      fontFamily:{
        dancing: ["Dancing Script", "cursive"],
        lora: ["Lora Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}