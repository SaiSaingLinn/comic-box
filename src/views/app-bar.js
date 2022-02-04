import React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import { 
  IconButton, 
  Box, 
  InputBase, 
  useScrollTrigger, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography,
  Container,
  Menu,
  MenuItem,
  Button
} from '@mui/material';
import { Search, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';

const LinkWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    paddingRight: theme.spacing(5),
    textDecoration: 'none',
    color: theme.palette.text.main,
    '&:hover': {
      color: '#FFF',
      transition: 'all .2s'
    },
    '&:last-child': {
      paddingRight: 0,
    },
  },
}));

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const pages = ['Home', 'About Us', 'Request Comics', 'Feedback'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ElevateAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (                    
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 9, display: { xs: 'none', md: 'flex' } }}
              >
                <Link href="/" passHref>
                  <a>
                    <img src="/comic-box-logo.svg" alt="Comic Box logo" style={{display: 'block'}} />
                  </a>
                </Link>
              </Typography>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: '#FFFFFF', padding: '12px 0' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>              
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <Link href="/" passHref>
                  <a>
                    <img src="/comic-box-logo.svg" alt="Comic Box logo" style={{display: 'block'}} />
                  </a>
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                <LinkWrapper>
                  {pages.map((page) => (
                    <Link key={page} href={`/${page.toLowerCase()}`} passHref>
                      <a>
                        <Typography 
                          noWrap 
                          component="span"
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, display: 'block' }}
                        >
                          {page}
                        </Typography>
                      </a>
                    </Link>
                  ))}
                </LinkWrapper>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: '#FFFFFF', padding: '12px 0' }}
                >
                  <Search />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}