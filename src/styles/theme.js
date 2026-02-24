import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'var(--background-dark)',
      secondary: 'var(--background-secondary)',
      hightlight: 'var(--background-highlight)'
    },
    text: {
      primary: '#ffffff',
      secondary: 'var(--text-dark)'
    },
    custom: {
      highlight: 'var(--text-highlight)',
      green: 'var(--text-green)',
      blue: 'var(--text-blue)',
      purple: 'var(--text-purple)',
      bluePurple: 'var(--text-blue-purple)'
    }
  },
  typography: {
    subtitle1: {
      fontFamily: 'var(--font-roboto), Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 45
    },
    subtitle2: {
      fontFamily: 'var(--font-roboto), Roboto, sans-serif',
      color: 'var(--text-highlight)',
      fontWeight: 800,
      fontSize: 45
    },
    body1: {
      fontFamily: 'var(--font-roboto), Roboto, sans-serif'
    },
    body2: {
      fontFamily: 'var(--font-roboto), Roboto, sans-serif'
    },
    h1: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700,
      fontSize: 75
    },
    h2: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700
    }
  }
});

export default theme;
