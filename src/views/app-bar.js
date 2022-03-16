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
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Search, Menu as MenuIcon, Close, ForkRight, Coffee, Facebook, AccessTime } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from 'src/themes/theme';

const LinkWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    paddingRight: theme.spacing(5),
    textDecoration: 'none',
    color: theme.palette.text.main,
    transition: 'ease-in-out .2s',
    '&:hover': {
      color: '#FFF',
      // transition: 'all .2s'
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
  height: '100%',
  '.MuiTextField-root': {
    '.MuiOutlinedInput-root': {
      color: '#FFF',
      padding: '5px 9px',
      height: '100%',
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

export default function ElevateAppBar(props) {
  const dispatch = useDispatch();
  const { recentData } = useSelector(state => state.recent);
  const router = useRouter();
  // reverse the recent data to show the latest first
  const recentDataReversed = recentData.slice().reverse();
  // handle feedback dialog 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // handle feedback dialog end

  // drawer 
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, position: 'relative', height: 'calc(100vh - 40px)' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <IconButton 
          onClick={toggleDrawer(anchor, false)}
          sx={{
            color: '#FFF',
            padding: '16px 24px',
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <List>
        <ListItem button sx={{padding: '16px 24px'}}>
          <Link href="/" passHref>
            <a>
              <Typography variant="h4" sx={{color: '#FFF'}}>Home</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{padding: '16px 24px'}}>
          <Link href="/about-us" passHref>
            <a>
              <Typography variant="h4" sx={{color: '#FFF'}}>About Us</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{padding: '16px 24px'}}>
          <Link href="/request-comic" passHref>
            <a>
              <Typography variant="h4" sx={{color: '#FFF'}}>Request Comics</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{padding: '16px 24px'}}>
          <Typography variant="h4" sx={{color: '#FFF'}} onClick={handleClickOpen}>Feedback</Typography>
        </ListItem>
        <ListItem button sx={{padding: '16px 24px'}}>
          <Link href="/coffee" passHref>
            <Button 
              component="a"
              variant="contained" 
              fullWidth={true}
              startIcon={<Coffee />}
            >                      
              Coffee ဖိုးပေးမယ်
            </Button>
          </Link>
        </ListItem>
      </List>
      <Box sx={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
        <List>
          <ListItem button sx={{padding: '8px 24px'}}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Typography variant="p" sx={{fontSize: '14px', color: '#FFF', display: 'flex', alignItems: 'center'}}>Follow Us On <Facebook sx={{width: '18px', height: '18px', marginLeft: '5px'}} /></Typography>
            </a>
          </ListItem>
          <ListItem button sx={{padding: '8px 24px'}}>
            <a href="mailto:contact@comicbox.net" target="_blank" rel="noopener noreferrer">
              <Typography variant="p" sx={{fontSize: '14px', color: theme.palette.primary.main}}>email: contact@comicbox.net</Typography>
            </a>
          </ListItem>
          {/* <ListItem button sx={{padding: '8px 24px'}}>
            <a href="tel:09778869369" target="_blank" rel="noopener noreferrer">
              <Typography variant="p" sx={{fontSize: '14px', color: theme.palette.primary.main}}>Phone: 09778869369</Typography>
            </a>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  );
  // drawer end 

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
  
  const handleSearchData = (value) => {
    let concatData = [...recentData, value];
    let newRecentData = [... new Set(concatData)];
    // if array is more than 5, slice it to 5
    if (newRecentData.length > 5) {
      newRecentData = newRecentData.slice(1);
    }
    dispatch(recent.setRecentData('GET_RECENT_SEARCH', newRecentData));
    router.push(`/search/keyword=${encodeURIComponent(value)}`)
  }

  const handleSearch = () => {
    if (comicName !== '') {
      handleSearchData(comicName)
    }
  }

  const handleAutoSearch = (value) => {
    handleSearchData(value)
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
              {/* desktop logo */}
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
              {/* end desktop logo */}
              {/* mobile menu  */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer('left', true)}
                  sx={{ color: '#FFFFFF', padding: '12px 0' }}
                >
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor={'left'}
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                  disableDiscovery={true}
                >
                  {list('left')}
                </SwipeableDrawer>
              </Box>
              {/* end mobile menu */}
              {/* mobile logo */}
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
              {/* end mobile logo */}
              {/* desktop menu  */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
                <LinkWrapper>
                  <Link href={`/`} passHref>
                    <a>
                      <Typography 
                        noWrap 
                        component="span"
                        sx={{ 
                          my: 2, 
                          display: 'block',
                          color: router.pathname === '/' && '#FFF', 
                        }}
                      >
                        Home
                      </Typography>
                    </a>
                  </Link>
                  <Link href={`/about-us`} passHref>
                    <a>
                      <Typography 
                        noWrap 
                        component="span"
                        sx={{ 
                          my: 2, 
                          display: 'block',
                          color: router.pathname === '/about-us' && '#FFF', 
                        }}
                      >
                        About Us
                      </Typography>
                    </a>
                  </Link>
                  <Link href={`/request-comic`} passHref>
                    <a>
                      <Typography 
                        noWrap 
                        component="span"
                        sx={{ 
                          my: 2, 
                          display: 'block',
                          color: router.pathname === '/request-comic' && '#FFF', 
                        }}
                      >
                        Request Comics
                      </Typography>
                    </a>
                  </Link>
                  <Typography 
                    noWrap 
                    component="span"
                    onClick={handleClickOpen}
                    sx={(theme) => ({
                        color: theme.palette.text.main,
                        cursor: 'pointer',
                        transition: 'ease-in-out .2s',
                        my: 2,
                        display: 'block',
                        '&:hover': {
                          color: '#FFF',
                        }
                      }
                    )}
                  >
                    Feedback
                  </Typography>
              </LinkWrapper>
              </Box>
              {/* end desktop menu */}
              <Box>
                <Link href="/coffee" passHref>
                  <Button 
                    sx={{display: { xs: 'none', md: 'inline-flex' }, marginRight: '25px'}}
                    variant="contained" 
                    startIcon={<Coffee />}
                    component="a"
                  >                      
                    Coffee ဖိုး
                  </Button>
                </Link>
                <IconButton
                  onClick={() => handleToggleSearch()}
                  sx={{ color: '#FFFFFF', padding: '12px 0' }}
                >
                  <Search />
                </IconButton>
              </Box>
            </Toolbar>
            {/* search bar */}
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
              <Box sx={{position: 'relative', height: '100%', display: 'flex', justifyContent: 'center'}}>
                <Autocomplete   
                  sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}            
                  freeSolo
                  id="disabled-options-demo"
                  options={recentDataReversed?.length > 0 ? recentDataReversed : []}
                  fullWidth
                  autoComplete
                  autoHighlight
                  blurOnSelect
                  onChange={(event, newValue) => {
                    newValue !== "" && newValue !== null && handleAutoSearch(newValue)
                  }}
                  renderOption={
                    (props, option) => (
                      <Box component="li" {...props}>
                        <AccessTime sx={{color: '#8C8C96', width: '1rem', height: '1rem', marginRight: '10px'}} />
                        {option}
                      </Box>
                    )
                  }
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
            {/* end search bar */}
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} fullWidth>
        <DialogTitle variant="h5" sx={{fontWeight: '800', paddingBottom: '0'}}>Send Us Feedback</DialogTitle>
        <DialogContent sx={{paddingTop: "20px !important"}}>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="outlined-basic" 
            label="Your feedback here.."
            variant="outlined"
          />
        </DialogContent>
        <DialogContent sx={{display: 'flex', justifyContent: 'flex-end', paddingTop: '0'}}>
          <Button variant='contained' onClick={handleClose}>အကြံပေးမယ်</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}