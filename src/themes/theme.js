import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#10B981',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
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
          [theme.breakpoints.up('sm')]: {
            minHeight: '72px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
        },
      },
    },
  },
});

export default theme;