import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recent } from 'store/actions';
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
  Button,
  TextField,
  Autocomplete,
  InputAdornment,
} from '@mui/material';
import { Search, Menu as MenuIcon, Close, ForkRight } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  position: 'absolute',
  top: '50%',
  left: 0,
  width: '100%',
  transform: 'translateY(-50%)',
  '.MuiTextField-root': {
    '.MuiOutlinedInput-root': {
      color: '#FFF',
      padding: '5px 9px',
      '.MuiInputAdornment-root': {
        color: '#8C8C96',
      },
      '.MuiOutlinedInput-input': {
        paddingRight: '100px',
        [theme.breakpoints.down('sm')]: {
          paddingRight: '75px',
        },
      },
      '.MuiAutocomplete-endAdornment': {
        top: '50%',
        right: '80px',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('sm')]: {
          right: '60px',
        },
        'button': {
          fontSize: '1rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
          },
          'svg': {
            display: 'none',
            color: '#FFF',
          },
          '&:after': {
            content: '"Clear"',
            color: '#FFF',
          }
        },
      },
      'fieldset': {
        borderColor: 'transparent'
      }
    },
  },
  '.clear-search-wrapper': {
    position: 'absolute',
    top: '50%',
    right: '80px',
    transform: 'translateY(-50%)',
    [theme.breakpoints.down('sm')]: {
      right: '60px',
    },
    '.clear-search': {
      color: '#FFF',
      cursor: 'pointer',
    }
  },
  '.close-icon-wrapper': {
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    [theme.breakpoints.down('sm')]: {
      right: '7px',
    },
    '.close-icon': {
      color: '#FFF',
    }
  }
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
  const dispatch = useDispatch();
  const { recentData } = useSelector(state => state.recent);

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  // handle search 
  let textInput = useRef(null);
  const [openSearch, setOpenSearch] = useState(false)
  
  const handleToggleSearch = () => {
    setTimeout(() => {
      textInput.current.focus();
    }, 100);
    openSearch ? setOpenSearch(false) : setOpenSearch(true)
  }

  const [comicName, setComicName] = useState('')
  const handleSearch = () => {
    if (comicName !== '') {
      let concatData = [...recentData, comicName];
      let newRecentData = [... new Set(concatData)];
      let reverseRecentData = newRecentData.reverse();
      // if array is more than 5, slice it to 5
      if (reverseRecentData.length > 5) {
        reverseRecentData = reverseRecentData.slice(0, 5);
      }
      dispatch(recent.setRecentData('GET_RECENT_SEARCH', reverseRecentData));
      router.push(`/search/keyword=${encodeURIComponent(comicName)}`)
    }
  }
  
  const handleClearSearch = (e) => {
    e.preventDefault()
    setComicName('')
  }
  // handle search end

  return (                    
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Container sx={{position: 'relative'}}>
            <Toolbar
              sx={
                openSearch ?
                {
                  visibility: 'hidden',
                  opacity: '0',
                  transition: 'ease-in-out .2s',
                }
                :
                {
                  visibility: 'visible',
                  opacity: '1',
                  transition: 'ease-in-out .2s',
                }
              }
            >
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
                  onClick={() => handleToggleSearch()}
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
            <SearchWrapper style={
              openSearch ? 
              {
                visibility: 'visible',
                opacity: '1',
                transition: 'ease-in-out .2s',
              }
              :
              {
                visibility: 'hidden',
                opacity: '0',
                transition: 'ease-in-out .2s',
              }
            }>
              <Box sx={{position: 'relative'}}>
                <Autocomplete               
                  freeSolo
                  id="disabled-options-demo"
                  options={recentData?.length > 0 ? recentData : []}
                  // getOptionDisabled={(option) =>
                  //   option === recents[0]
                  // }
                  fullWidth
                  onChange={(event, newValue) => {
                    setComicName(newValue)
                  }}
                  renderInput={params => {
                    return (
                      <>
                        <TextField
                          placeholder="Search here..."
                          inputRef={textInput}
                          {...params}
                          onChange={e => setComicName(e.target.value)}
                          onKeyPress={e => e.key === 'Enter' && handleSearch()}
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <>
                                <InputAdornment position="start">
                                  <Search />
                                </InputAdornment>
                                { params.InputProps.startAdornment }
                              </>
                            )
                          }}
                        />
                      </>
                    );
                  }}
                />
                {/* <Box className="clear-search-wrapper">
                  {
                    comicName !== '' &&
                    <span className="clear-search" type="submit" onClick={handleClearSearch}>
                      Clear
                    </span>
                  }
                </Box> */}
                <Box className="close-icon-wrapper">
                  <IconButton 
                    className="close-icon"
                    onClick={() => handleToggleSearch()}  
                  >
                    <Close />
                  </IconButton>
                </Box>
              </Box>
            </SearchWrapper>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}