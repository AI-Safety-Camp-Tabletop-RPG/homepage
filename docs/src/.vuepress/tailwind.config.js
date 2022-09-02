/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme/**/*.{html,vue}",
    "./components/**/*.vue",
  ],
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'Consolas', 'ui-monospace', 'monospace']
    },
    extend: {
      colors: {
        tttYellow: '#fffe00',
        tttCyan: '#00ffa8',
        tttGrey: '#1d2226',
        tttWhite: '#e2ddd9',
        tttBlue: '#0f2cff',
        tttHighlightRed: '#ff0056',
        tttHighlightPink: '#ee00e1',
        tttHighlightBlue: '#0f2cff',
        tttWheelGreen: '#5ab759',
        tttWheelYellow: '#fcc831',
        tttWheelOrange: '#fb8935',
        tttWheelRed: '#f24159',
        tttWheelPink: '#df54c0',
        tttWheelPurple: '#9450ff',
        tttWheelBlue: '#008cff',
        tttWheelCyan: '#18c6b7',
      }
    },
  },
  plugins: [],
}
