module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: 'var(--white)',
      indigo: 'var(--indigo)',
      lightGreen: 'var(--light-green)',
      darkGreen: 'var(--dark-green)',
      pink: 'var(--pink)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
