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
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
