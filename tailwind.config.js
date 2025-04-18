// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        janus: {
          red: '#930b0b',
          blue: '#000e56',
          black: '#000000',
          green: '#265811',
          purple: '#341164',
        },
      },
    },
  },
  plugins: [],
}
