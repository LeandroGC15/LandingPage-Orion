/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta modo claro
        primary: {
          DEFAULT: '#7286D3', // Azul lavanda
          light: '#8EA7E9',   // Azul claro
          lighter: '#E5E0FF', // Lavanda muy claro
          lightest: '#FFF2F2' // Rosa muy claro/casi blanco
        },
        // Paleta modo oscuro
        dark: {
          primary: '#17153B',   // Azul muy oscuro/índigo
          secondary: '#2E236C', // Púrpura oscuro
          tertiary: '#433D8B',  // Púrpura medio
          accent: '#C8ACD6'     // Lavanda claro
        },
        // Colores de fondo para modo claro/oscuro
        background: {
          light: '#FFF2F2',     // Rosa muy claro para fondo en modo claro
          dark: '#17153B'       // Azul muy oscuro para fondo en modo oscuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}