module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: 'var(--white)',
      white85: 'var(--white-85)',
      indigo: 'var(--indigo)',
      lightGreen: 'var(--light-green)',
      darkGreen: 'var(--dark-green)',
      pink: 'var(--pink)',
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'Verdana', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['Source Serif Pro', 'ui-serif', 'Georgia', 'serif'],
      'mono': ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
