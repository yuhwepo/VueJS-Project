/** @type {import('tailwindcss').Config} */
// export const content = ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'];
// export const theme = {
//   extend: {}
// };
// export const plugins = [
//   {
//     'tailwindCSS.includeLanguages': {
//       plaintext: 'html'
//     }
//   }
// ];
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    {
      'tailwindCSS.includeLanguages': {
        plaintext: 'html'
      }
    }
  ]
};
