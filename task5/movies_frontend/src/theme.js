import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    customColor: {
      base_01: '#fff',
      base_02: '#f6f7f8',
      base_03: '#9299a2',
      base_04: '#333333',
      base_05: '#666666',
      base_06: 'rgba(0, 0, 0, 0.2)',
    },
    button: {
      main: '#FFDD2D',
      light: '#fcc521',
      dark: '#fab619',
      contrastText: '#000000',
    },
    searchButton: {
        main: '#FFFFFF',
        light: '#fcc521',
        dark: '#ECF1F7',
        contrastText: '#336FEE',
    }
  },
  typography: {
    fontFamily: [
      'Inter',
    ].join(','),
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 'normal',
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 'normal',
    },
  },
});
