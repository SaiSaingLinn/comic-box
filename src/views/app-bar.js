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
import { Search, Menu as MenuIcon, Close, ForkRight, Coffee } from '@mui/icons-material';
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

export default function ElevateAppBar(props) {
  const dispatch = useDispatch();
  const { recentData } = useSelector(state => state.recent);
  const router = useRouter();

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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <IconButton 
          onClick={toggleDrawer(anchor, false)}
          sx={{
            color: '#FFF',
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <List>
        {/* {pages.map((text) => (
          <ListItem button key={text} sx={{textDecoration: 'none'}}>
            <Link href="/" passHref>
              <a style={{textDecoration: 'none'}}>
                <ListItemText primary={text} sx={{color: '#FFF', textDecoration: 'none'}}/>
              </a>
            </Link>
          </ListItem>
        ))} */}
        <ListItem button sx={{paddingTop: '16px', paddingBottom: '16px'}}>
          <Link href="/" passHref>
            <a style={{textDecoration: 'none'}}>
              <Typography variant="h4" sx={{color: '#FFF', textDecoration: 'none'}}>Home</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{paddingTop: '16px', paddingBottom: '16px'}}>
          <Link href="/" passHref>
            <a style={{textDecoration: 'none'}}>
              <Typography variant="h4" sx={{color: '#FFF', textDecoration: 'none'}}>About Us</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{paddingTop: '16px', paddingBottom: '16px'}}>
          <Link href="/" passHref>
            <a style={{textDecoration: 'none'}}>
              <Typography variant="h4" sx={{color: '#FFF', textDecoration: 'none'}}>Request Comics</Typography>
            </a>
          </Link>
        </ListItem>
        <ListItem button sx={{paddingTop: '16px', paddingBottom: '16px'}}>
          <Typography variant="h4" sx={{color: '#FFF', textDecoration: 'none'}} onClick={handleClickOpen}>Feedback</Typography>
        </ListItem>
      </List>
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
                        sx={{ my: 2, display: 'block' }}
                      >
                        Home
                      </Typography>
                    </a>
                  </Link>
                  <Link href={`/`} passHref>
                    <a>
                      <Typography 
                        noWrap 
                        component="span"
                        sx={{ my: 2, display: 'block' }}
                      >
                        About Us
                      </Typography>
                    </a>
                  </Link>
                  <Link href={`/`} passHref>
                    <a>
                      <Typography 
                        noWrap 
                        component="span"
                        sx={{ my: 2, display: 'block' }}
                      >
                        Request Comics
                      </Typography>
                    </a>
                  </Link>
                  <Typography 
                    noWrap 
                    component="span"
                    sx={{ my: 2, display: 'block' }}
                    onClick={handleClickOpen}
                    sx={(theme) => ({
                        color: theme.palette.text.main,
                        cursor: 'pointer',
                        transition: 'ease-in-out .2s',
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
                <Button 
                  sx={{display: { xs: 'none', md: 'inline-flex' }, marginRight: '25px'}}
                  variant="contained" 
                  startIcon={<Coffee />}
                >Coffee ဖိုး
                </Button>
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