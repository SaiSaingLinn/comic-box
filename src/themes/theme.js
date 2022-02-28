import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { alpha } from '@mui/material';

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
    light: {
      main: '#FFFFFF',
    },
    red: {
      main: '#E11900',
    },
    sky: {
      light: '#E0F2FE',
      dark: '#0EA5E9',
    }
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
            fontSize: '1.125rem',
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
          fontSize: '1.125rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.875rem',
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
          fontSize: '0.875rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        caption: {
          fontSize: '0.875rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        overline: {
          fontSize: '0.875rem',
          fontWeight: '500',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: '800',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
          },
        },
        contained: {
          color: '#FFFFFF',
        },
        outlined: {
          '&.outlined-white': {
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
          }
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          '&.speed-dial-white': {
            '.MuiSpeedDial-fab': {
              color: '#FFFFFF',
              border: '1px solid #FFFFFF',
              width: '100%',
              marginBottom: '12px'
            },
          },
        },
        fab: {
          borderRadius: '4px',
          width: 'initial',
          height: 'initial',
          minWidth: '64px',
          background: 'transparent',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          boxShadow: 'none',
          color: theme.palette.primary.main,
          padding: '5px 15px',
          fontWeight: '800',
          fontSize: '1rem',
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:hover': {
            background: alpha(theme.palette.primary.main, 0.04),
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:after': {
            content: '"မျှ​ဝေမယ်"',
          },
          '.MuiSvgIcon-root': {
            fontSize: '20px',
            marginRight: '8px',
          },
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
            width: '100%',
            minHeight: 'initial',
          },
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        staticTooltipLabel: {
          minWidth: '110px',
          [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem',
            minWidth: '90px',
          },
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.16)',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('sm')]: {
            minWidth: '28px',
            height: '28px',
            padding: '0 4px',
            margin: '0 2px',
          },
          '&.Mui-selected': {
            color: theme.palette.light.main,
            background: theme.palette.primary.main,
            '&:hover': {
              background: theme.palette.primary.main,
            },
          },
        },
      },
    },
  },
});

export default theme;