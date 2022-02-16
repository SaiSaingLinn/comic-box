import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import DetailSlider from 'src/views/detail-slick-slider';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  Container,
} from '@mui/material'
import {
  Close,
} from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Detail() {
  const [open, setOpen] = React.useState(false);
  const { hide_action } = useSelector(state => state.detail)

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-scrollPaper': {
            '& .MuiDialog-paperFullScreen': {
              // overflow: 'hidden',
              width: "100vw",
              height: "100%",
              height: "-webkit-fill-available",
              backgroundColor: '#000',
            },
          },
        }}
      >        
        <AppBar sx={{ 
          position: 'relative', 
          background: 'transparent',
          paddingRight: '22px',
          paddingLeft: '22px',
          opacity: hide_action ? '0' : '1',
          transition: 'ease-in-out .2s',
          '@media screen and (min-width: 900px)': {
            paddingRight: '40px',
            paddingLeft: '40px',
          }
        }}>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                '@media screen and (min-width: 900px)': {
                  width: 'calc(100% - 84px)',
                }     
              }}
            > 
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleClose}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  sx={{
                    color: '#FFF',
                    padding: '0px',
                    '@media screen and (min-width: 900px)': {
                      padding: '8px',
                    }
                  }}
                >
                  <Close 
                    sx={{
                      fontSize: '1rem',
                      '@media screen and (min-width: 900px)': {
                        fontSize: '1.5rem',
                      } 
                    }}
                  />
                </IconButton>
                <Typography 
                  sx={{ 
                    ml: 2, 
                    flex: 1, 
                    color: '#FFF', 
                    marginLeft: '6px',
                    display: 'none',
                    '@media screen and (min-width: 900px)': {
                      display: 'block',
                    } 
                  }} 
                  variant="h6" 
                  component="div"
                >
                  Close
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}>
                <Typography 
                  sx={{ 
                    flex: 1, 
                    color: '#FFF', 
                    fontSize: '14px',
                    '@media screen and (min-width: 900px)': {
                      fontSize: '16px',
                    }
                  }} 
                  variant="h2" 
                  component="h2"
                >
                  Chapter 1
                </Typography>
                <Typography 
                  sx={{ 
                    flex: 1, 
                    color: '#FFF', 
                    fontSize: '12px',
                    '@media screen and (min-width: 900px)': {
                      fontSize: '14px',
                    }
                  }} 
                  variant="p" 
                  component="p"
                >
                  First Contact
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <DetailSlider />
      </Dialog>
    </Container>
  );
}