/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    screens: {
      'mn': '1020px',
      // => @media (min-width: 640px) { ... }
      'pk': {'max': '1020px'},
      // => @media (max-width: 1279px) { ... }

      'pl': {'max': '760px'},
      // => @media (max-width: 1023px) { ... }

      'plp': {'max': '600px'},
      // => @media (max-width: 767px) { ... }

      'ph': {'max': '440px'},
      // => @media (max-width: 639px) { ... }
    }
  }
}