// src/styles/theme.js
const theme = {
  colors: {
    background: {
      primary: '#121212',
      secondary: '#1e1e1e',
      tertiary: '#2a2a2a',
      card: '#222',
      hover: '#333',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
      tertiary: '#ccc',
      muted: '#888',
    },
    accent: {
      primary: '#ff0000',
      secondary: '#ff3c5f',
      tertiary: '#ff7c2b',
      gradient: 'linear-gradient(90deg, #ff3c5f 0%, #ff7c2b 100%)',
      gradientHover: 'linear-gradient(90deg, #ff7c2b 0%, #ff3c5f 100%)',
    },
    neutral: {
      primary: '#333',
      secondary: '#555',
      tertiary: '#777',
      gradient: 'linear-gradient(90deg, #333 0%, #555 100%)',
      gradientHover: 'linear-gradient(90deg, #555 0%, #777 100%)',
    },
    error: '#ff6b6b',
    border: '#333',
  },
  fonts: {
    primary: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '5px',
    sm: '8px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    xxl: '30px',
    xxxl: '40px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '24px',
  },
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.12)',
    md: '0 2px 8px rgba(0,0,0,0.15)',
    lg: '0 4px 16px rgba(0,0,0,0.2)',
    xl: '0 8px 24px rgba(0,0,0,0.4)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  zIndex: {
    modal: 1000,
    dropdown: 100,
    header: 10,
    base: 1,
  },
};

export default theme;