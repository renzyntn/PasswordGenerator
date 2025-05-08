module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'white-bg': 'var(--color-white-bg)', // CSS variable for light mode background
          'white-container': 'var(--color-white-container)',
          'white-button': 'var(--color-white-button)',
          'offwhite-textfield': 'var(--color-offwhite-textfield)',
          'black-text': 'var(--color-black-text)',
          'black-bg': '#121212', // Dark mode background
          'black-container': '#1a1a1a',
          'black-button': '#1f1f1f',
          'white-textfield': '#f0f0f0',
        }
      }
    },
    content: ["./index.html", "./script.js"],
  }