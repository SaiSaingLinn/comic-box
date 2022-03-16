import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import theme from 'src/themes/theme'
import { styled } from '@mui/material'
import RecommendedCard from 'src/components/recommended-card'

const listing_data = [
  {
    id: 1,
    title: 'Aquaman: The Becoming',
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/AQMTB_Cv6_00611_DIGITAL_61fac3b33ce686.63542306.jpg?itok=6TdLQHs4',
  },
  {
    id: 2,
    title: 'The Flash',
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/FLS_Cv779_77911_DIGITAL_61fac3fb546c23.93883459.jpg?itok=QjyFoKKp',
  },
  {
    id: 3,
    title: 'Batman: The Knight',
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/BM_TK_Cv2_00211_DIGITAL_61fac3683f83e1.66471464.jpg?itok=2AEC_Brk',
  },
  {
    id: 4,
    title: 'Wonder Woman',
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/WW_Cv784_78411_DIGITAL_61eb17782bd463.76220579.jpg?itok=AgNnOjt-',
  },
  {
    id: 5,
    title: 'Justice League Last Ride (2021) Justice League Last Ride (2021) Justice League Last Ride (2021) Justice League Last Ride (2021)',
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/JL_Cv72_07211_DIGITAL_61eb16f4e06f43.36030814.jpg?itok=jYNt5Lo4',
  },
  {
    id: 6,
    title: 'Batman - Three Jokers (2020)',
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/gn-covers/2022/02/BM_DET%20%28COVER%29_61fac436bcbd47.32846319.jpg?itok=D9v8-P5K',
  }
]

const BannerSliderWrapper = styled('div')(({ theme }) => ({
  '.slick-arrow': {
    zIndex: '9',
    background: '#1D1D21',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    '&:before': {
      content: '" "',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '6px',
      height: '12px',
      margin: 'auto',
    },
    '&:hover, &:focus': {
      background: '#1D1D21',
    },
  },
  '.slick-prev': {
    left: '-60px',
    '&:before': {
      background: "url('/leftArrow.svg') no-repeat center / cover",
    },
  },
  '.slick-next': {
    right: '-60px',
    '&:before': {
      background: "url('/rightArrow.svg') no-repeat center / cover",
    }
  },
  '& .slick-dots': {
    bottom: '0',
    width: 'auto',
    left: '0%',
    margin: '0 10px 24px',
    '@media (minWidth: 900px)': {
      left: '60%',
      margin: '0 40px 35px',
    },
    // [theme.breakpoints.up('sm')]: {
    //   left: '60%',
    //   margin: '0 40px 35px',
    // },
    '& li': {
      margin: 0,
      '& button': {
        '&:before': {
          fontSize: '8px',
          color: '#FFFFFF',
        },
      },
      '&.slick-active button': {
        '&:before': {
          color: '#FFFFFF',
        },
      },
    },
  },
}))

const RecommendedList = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    speed: 100,
    infinite: false,
    touchThreshold: 50,
    easing: "ease-in-out",
    useCSS: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          arrows: false,
        }
      }
    ]
  }

  return (
    <Box component="section" sx={{mt: 5, mb: 5}}>
      <Container>
      <Typography variant="h3" component="h2" mb={{md: 3, xs: 2}}>Recommended</Typography>
        <BannerSliderWrapper>
          <Slider {...settings}>
            { 
              listing_data?.map((x, i) => 
                <Grid container spacing={{md: 3, xs: 2}} key={i}>
                  <RecommendedCard data={x} /> 
                </Grid>
              )
            }
          </Slider>
        </BannerSliderWrapper>
      </Container>   
    </Box>
  )
}

export default RecommendedList
