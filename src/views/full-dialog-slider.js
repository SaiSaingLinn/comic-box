import React from 'react'
import { useSelector } from "react-redux"
import DetailSlider from 'src/views/detail-slick-slider';
import {
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

export default function FullDialogSlider(props) {
  const { data, handleClose, state, detail_data, handleClickOpen } = props;
  const { hide_action } = useSelector(state => state.detail);
  return (
    <Container>
      <Dialog
        fullScreen
        open={state?.open}
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
          paddingRight: '0px',
          paddingLeft: '0px',
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
                  position: 'absolute',
                  left: '16px',
                }}
                onClick={handleClose}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  sx={{
                    color: '#FFF',
                    padding: '8px',
                    
                    '@media screen and (min-width: 900px)': {
                      padding: '8px',
                    }
                  }}
                >
                  <Close 
                    sx={{
                      fontSize: '1.5rem',
                      // width: '40px',
                      // height: '40px',
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
                  variant="h5" 
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
                  }} 
                  variant="h5" 
                  component="h2"
                >
                  {data?.title}
                </Typography>
                <Typography 
                  sx={{ 
                    flex: 1, 
                    color: '#FFF',
                  }} 
                  variant="caption" 
                  component="p"
                >
                  {data?.sub_title}
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <DetailSlider data={data} detail_data={detail_data} handleClickOpen={handleClickOpen} handleClose={handleClose} />
      </Dialog>
    </Container>
  )
}