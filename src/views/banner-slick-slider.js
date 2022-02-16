import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import theme from 'src/themes/theme'
import { styled } from '@mui/material'

const listing_data = [
  {
    id: 1,
    title: 'Justice League',
    status: 'Latest Update',
    desc: 'Chapter 8, Chapter 9',
    image: 'https://vistapointe.net/images/dc-comics-2.jpg',
  },
  {
    id: 2,
    title: 'Batman - Superman (2019-2020)',
    status: 'Completed',
    desc: 'Chapter 10, Chapter 11',
    image: 'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
  },
  {
    id: 3,
    title: 'Wonder Woman',
    status: 'Latest Update',
    desc: 'Chapter 12, Chapter 13',
    image: 'https://i.insider.com/57ee848e11c8e79c0b8b46aa?width=800&format=jpeg',
  },
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
    '@media (min-width: 900px)': {
      left: '60%',
      margin: '0 40px 35px',
    },
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

const HomeBanner = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: false,
    touchThreshold: 50,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
        }
      }
    ]
  }

  return (
    <Box component="section" sx={{background: '#F5F5F6', pt: {md: 5, xs: 0}, pb: {md: 5, xs: 0}, mb: {md: 0, xs: 5}}}>
      <Container sx={{pr: {md: 3, xs: 0}, pl: {md: 3, xs: 0}}}>
        <BannerSliderWrapper>
          <Slider {...settings}>
            { 
              listing_data?.map((x, key) => (
                <Box key={key}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '@media screen and (min-width: 900px)': {
                      flexDirection: 'row',
                    }
                  }}>
                    <Box sx={{
                      width: '100%',
                      '@media screen and (min-width: 900px)': {
                        width: '60%',
                      }
                    }}>
                      <Link href={`/detail/${x?.id}`} passHref>
                        <a>
                          <Image src={x?.image} width={560} height={400} layout="responsive" alt={x?.title} />
                        </a>
                      </Link>
                    </Box>
                    <Box sx={{
                      width: '100%',
                      color: '#FFFFFF',
                      background: theme.palette.secondary.main,                      
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '16px',
                      paddingBottom: '46px',
                      '@media screen and (min-width: 900px)': {
                        width: '40%',
                        padding: '40px',                        
                      }
                    }}>
                      <Typography variant="h5" component="h5" sx={{color: '#8C8C96', mb: {md: 2, xs: 1}}}>{x?.status}</Typography>
                      <Link href={`/detail/${x?.id}`} passHref>
                        <a>
                          <Typography variant="h3" component="h1" sx={{mb: {md: 2, xs: 1}, color: '#FFF'}}>{x?.title}</Typography>
                        </a>
                      </Link>
                      <Typography variant="p" component="p" sx={{color: theme.palette.primary.main, mb: {md: 3, xs: 2}}}>{x?.desc}</Typography>
                      <Link href={`/detail/${x?.id}`} passHref>
                        <Button 
                          variant="contained" 
                          color="light" 
                          sx={{
                            color: theme.palette.secondary.main, 
                            width: 'fit-content',
                            display: 'none',
                            '@media screen and (min-width: 900px)': {
                              display: 'inline-flex',
                            }
                          }} 
                          size="large"
                          component="a"
                        >
                          View more
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))
            }
          </Slider>
        </BannerSliderWrapper>
      </Container>   
    </Box>
  )
}

export default HomeBanner
