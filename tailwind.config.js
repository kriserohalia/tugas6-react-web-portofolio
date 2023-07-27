/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    container:{
        center:true,
        padding:'16px'
    },
    extend: {
      colors: {
        primary: "#22c55e",
        secondary:'#64748b'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};
