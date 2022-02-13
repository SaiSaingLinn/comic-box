import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
  palette: {
    primary: {
      main: '#10B981',
    },
    secondary: {
      main: '#1D1D21',
    },
    error: {
      main: red.A400,
    },
    text: {
      main: '#6E6E78',
      dark: '#1D1D21',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

theme = createTheme(theme, {
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: theme.palette.secondary.main,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          paddingLeft: '0px',
          paddingRight: '0px',
          justifyContent: 'space-between',
          [theme.breakpoints.up('md')]: {
            minHeight: '72px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
          [theme.breakpoints.down('md')]: {
            minHeight: '48px',            
            paddingLeft: '0px',
            paddingRight: '0px',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: '0px',
          padding: '0px',
          margin: '0px',
        },
      },
    },    
  },
});

export default theme;