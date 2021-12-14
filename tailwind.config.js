module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: {
        100:'#B91331',
        300: '#730c1f'
      },
      green: '#1E4E56',
      yellow: {
        100:'#fef667',
        500:'#cbc101'
      },
      orange: '#F7664D',
      cream: {
        100:'#ECE7E1',
        300:'#b9a892'
      },
      black: 'black',
      white: 'white'
    },
    fontFamily: {
      cursive: ['Bebas Neue', 'cursive'],
      mono: ['PT Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}
