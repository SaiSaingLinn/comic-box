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
import DetailInfo from 'src/views/detail-info';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const detail_data = {
  id: 1,
  title: 'Dark Knights of Steel (2021)',
  desc: 'ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။',
  rating: 3.5,
  status: 'Completed',
  image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
  aurthor: 'Geoff Johns',
  artist: 'Geoff Johns',
}

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
    <>
      <DetailInfo item={detail_data} />
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
    </>
  );
}