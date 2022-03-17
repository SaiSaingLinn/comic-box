import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Slider from 'react-slick'
import { styled } from '@mui/material/styles';
import {
  Box,
  Button, 
  Typography,
  SpeedDialAction,
  SpeedDial,
  Snackbar,
} from '@mui/material';
import Link from 'next/link';
import { detail } from "store/actions"
import Image from 'next/image';
import theme from 'src/themes/theme';
import { 
  Coffee, 
  Share, 
  Facebook, 
  FileCopy, 
  SkipNext
} from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/lazy";
// import Swiper core and required modules
import { Navigation, Pagination, Lazy } from 'swiper';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  '.swiper': {
    '.swiper-button-prev': {
      left: '40px',
      width: '48px',
      height: '48px',
      background: 'rgb(29, 29, 33)',
      borderRadius: '50%',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '&:after': {
        fontSize: '12px',
      },
    },
    '.swiper-button-next': {
      right: '40px',
      width: '48px',
      height: '48px',
      background: 'rgb(29, 29, 33)',
      borderRadius: '50%',
      color: '#FFF',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '&:after': {
        fontSize: '12px',
      },
    },
    '.swiper-pagination': {
      color: '#FFF',
      fontWeight: '800',
      background: 'rgba(29, 29, 33, 0.5)',
      width: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '5px 10px',
      borderRadius: '8px',
      fontSize: '14px',
    },
  },
  '.img-wrap': {
    position: 'relative', 
    width: '100%',
    maxWidth: '1220px',
    height: 'calc(100vh - 165px)',
    margin: '10px auto',
    '.coffee-wrap': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',   
      '.coffee': {
        background: theme.palette.primary.main,
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: '620px',
        minHeight: '460px',
        padding: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
          maxWidth: '312px',
          minHeight: '336px',
          padding: '24px',
        },            
        '.smile-icon': {
          width: '64px',
          height: '64px',
          marginBottom: '24px',
          [theme.breakpoints.down('sm')]: {
            width: '48px',
            height: '48px',
            marginBottom: '16px',
          },
        },
        '.desc': {
          color: '#FFF',
          marginBottom: '24px',
          [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
          },
        },
        '.btn-wrap': {
          display: 'flex',
          flexDirection: 'column',
          'a': {
            marginBottom: '12px',
            '&:last-child': {
              marginBottom: '0'
            },
            [theme.breakpoints.down('sm')]: {
              marginBottom: '12px',
              '&:last-child': {
                marginBottom: '0'
              },
            },
          }
        }
      },
    },
  },
}));

export default function DetailSwiper(props) {
  const { data, detail_data, handleClickOpen, handleClose } = props;

  const swiper = useSwiper();
  
  const dispatch = useDispatch()
  const { hide_action } = useSelector(state => state.detail)

  // hide all action example arrow and thumbnail 
  const handleHideAction = () => {
    hide_action ?
    dispatch(detail.setHideAction('HIDE_ACTION', false)) :
    dispatch(detail.setHideAction('HIDE_ACTION', true))
  }

  // toast alert 
  const [toast, setToast] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })

  const handleCloseToast = () => {
    setToast({ open: false });
  };

  const { vertical, horizontal, open } = toast

  // handle copy code 
  const handleCopy = () => {
    /* Copy code */
    navigator.clipboard.writeText(window.location.href)
    setToast({ open: true});
  }

  // get next chapter index if exist
  const [nextChapterIndex, setNextChapterIndex] = useState(null)
  const [nextChapterId, setNextChapterId] = useState(null)
  useEffect(() => {
    let next_chapter_index = 0
    detail_data?.chapters?.map((item, index) => {
      if (item.id === data.id) {
        next_chapter_index = index + 1
      }
    })
    if (next_chapter_index === detail_data?.chapters?.length) {
      next_chapter_index = 0
    }
    setNextChapterIndex(next_chapter_index)
    // get id of next chapter base on next_chapter_index
    let next_chapter_id = detail_data?.chapters?.[next_chapter_index]?.id
    setNextChapterId(next_chapter_id)
  }, [detail_data, data])

  // handle next chapter
  const handleNextChapter = () => {
    // close current chapter and then set time out 1s before open next chapter
    handleClose()
    setTimeout(() => {
      handleClickOpen(nextChapterId)
      dispatch(detail.setHideAction('HIDE_ACTION', false))
    }, 1000)
  }

  return (  
    <>
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={hide_action ? false : true}
          pagination={
            hide_action ? false : {
            type: "fraction",
          }}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => swiper && swiper.slideTo(0, 1, false)}
        >
          {
            data?.image?.map((x, i) => (
              <SwiperSlide key={i} onClick={() => handleHideAction()}>
                {/* <img src={x} alt={data?.title} /> */}
                <div className='img-wrap'>
                  <Image src={x} alt={data?.title} layout="fill" objectFit="contain" />
                </div>
              </SwiperSlide>
              ))
          }
          <SwiperSlide onClick={() => handleHideAction()}>
            <div className='img-wrap'>
              <div className='coffee-wrap'>
                <div className='coffee'>
                  <img className='smile-icon' src="/smile.svg" alt="smile icon"/>
                  <Typography variant='h4' component='h4' sx={{color: '#FFF', mb: 3}}>ဒီ Comic လေးဖတ်ရတာကြိုက်ရဲ့လား?</Typography>
                  {/* <p className='desc'>ဒီ Comic လေးဖတ်ရတာကြိုက်ရဲ့လား?</p> */}
                  <div className='btn-wrap'>
                    <Link href={`/coffee`} passHref>
                      <Button 
                        variant="contained" 
                        color="light" 
                        sx={{
                          color: theme.palette.secondary.main, 
                          width: 'fit-content',
                        }} 
                        size="large"
                        component="a"
                        startIcon={<Coffee />}
                      >
                        Coffee ဖိုးပေးမယ်
                      </Button>
                    </Link>
                    <Box sx={{transform: 'translateZ(0px)', flexGrow: 1, minHeight: {md: '52px', xs: '44px'}}}>
                      <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%'}}
                        icon={<Share />}
                        className="speed-dial-white"
                      >
                        <SpeedDialAction
                          icon={<FileCopy />}
                          onClick={() => handleCopy()}
                          key="Copy Link"
                          tooltipTitle="Copy Link"
                          tooltipOpen
                        />
                        <SpeedDialAction
                          icon={<Facebook />}
                          onClick={() => console.log('You clicked Share')}
                          key="Facebook"
                          tooltipTitle="Facebook"
                          tooltipOpen
                        />
                      </SpeedDial>
                    </Box>
                    {
                      nextChapterIndex !== null &&
                      nextChapterIndex > 0 &&
                      <Button 
                        variant='outlined' 
                        className='outlined-white' 
                        size="large" 
                        fullWidth
                        startIcon={<SkipNext />}
                        onClick={() => handleNextChapter()}
                      >
                        နောက်တစ်ပိုင်း
                      </Button>
                    }
                  </div>
                </div>
              </div>
            </div>         
          </SwiperSlide>
        </Swiper>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Copied to clipboard"
        key={vertical + horizontal}
        onClose={handleCloseToast}
      />
    </>
  );
}