/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', /* Yavaş dönme efekti */
        'spin-normal': 'spin 2s linear infinite', /* Orta dönme efekti */
        'spin-fast': 'spin 1s linear infinite', /* Hızlı dönme efekti */

        'spin-before': 'spin 3s linear infinite 0s', /* Başlangıçta 0 saniye gecikmeli yavaş dönme */
        'spin-now': 'spin 2s linear infinite 0.3s', /* Başlangıçta 0.3 saniye gecikmeli orta dönme */
        'spin-after': 'spin 1s linear infinite 0.6s', /* Başlangıçta 0.6 saniye gecikmeli hızlı dönme */

        'bounce-slow': 'bounce 3s linear infinite', /* Yavaş zıplama efekti */
        'bounce-normal': 'bounce 2s linear infinite', /* Orta zıplama efekti */
        'bounce-fast': 'bounce 1s linear infinite', /* Hızlı zıplama efekti */

        'bounce-before': 'bounce 1s linear infinite 0s', /* Başlangıçta 0 saniye gecikmeli zıplama */
        'bounce-now': 'bounce 1s linear infinite 0.3s', /* Başlangıçta 0.3 saniye gecikmeli zıplama */
        'bounce-after': 'bounce 1s linear infinite 0.6s', /* Başlangıçta 0.6 saniye gecikmeli zıplama */

        'pulse-slow': 'pulse 3s linear infinite', /* Yavaş nabız efekti */
        'pulse-normal': 'pulse 2s linear infinite', /* Orta nabız efekti */
        'pulse-fast': 'pulse 1s linear infinite', /* Hızlı nabız efekti */

        'pulse-before': 'pulse 2.5s 0s linear infinite', /* 0 saniye gecikmeli nabız efekti */
        'pulse-now': 'pulse 1.5s 3s linear infinite', /* 3 saniye gecikmeli nabız efekti */
        'pulse-after': 'pulse 4.5s 6s linear infinite', /* 6 saniye gecikmeli nabız efekti */
      },
      colors: {
        theme:{
          'white': '#fdfefe',
          'black': '#181818',
          '1': '#e0e7ff',
          '2': '#c7d2fe',
          '3': '#a5b4fc',
        }
      },
    },
  },
  plugins: [],
}

