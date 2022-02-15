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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: theme.palette.secondary.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: '500',
        },
        h1: {
          fontSize: '2.5rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
          },
        },
        h2: {
          fontSize: '2rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
          },
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem',
          },
        },
        h4: {
          fontSize: '1.25rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
          },
        },
        h5: {
          fontSize: '1rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        h6: {
          fontSize: '0.75rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.5rem',
          },
        },
        paragraph: {
          fontSize: '1rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        body1: {
          fontSize: '1rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        body2: {
          fontSize: '0.75rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.5rem',
          },
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.5rem',
          },
        },
        button: {
          fontSize: '0.75rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.5rem',
          },
        },
        overline: {
          fontSize: '0.75rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.5rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: '800',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#fff',
          borderRadius: '0px',
        },
      },
    },
  },
});

export default theme;