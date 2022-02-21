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
} from '@mui/material';
import Link from 'next/link';
import { detail } from "store/actions"
import Image from 'next/image';
import theme from 'src/themes/theme';
import { 
  Coffee, 
  Share, 
  Facebook, 
  FileCopy 
} from '@mui/icons-material';

const actions = [
  { icon: <FileCopy />, name: 'Copy Link' },
  { icon: <Facebook />, name: 'Facebook' },
];

const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  '.slide-nav': {
    '.slick-list': {
      '.slick-track': {
        '.slick-slide': {
          cursor: 'pointer',
          '&.slick-current': {
            '.img-wrap': {
              border: `4px solid ${theme.palette.primary.main}`,
              [theme.breakpoints.down('sm')]: {
                border: `3px solid ${theme.palette.primary.main}`,
              },
            },
          },
          '.img-wrap': {
            margin: '0 auto',
            width: '100%',
            border: '4px solid transparent',
            height: '72px',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
              border: '3px solid transparent',
              height: '40px'
            },
          },
          // '&.slick-current': {
          //   'img': {
          //     border: `4px solid ${theme.palette.primary.main}`,
          //     [theme.breakpoints.down('sm')]: {
          //       border: `3px solid ${theme.palette.primary.main}`,
          //     },
          //   },
          // },
          // 'img': {
          //   objectFit: 'cover',
          //   margin: '0 auto',
          //   width: '100%',
          //   border: '4px solid transparent',
          //   height: '72px',
          //   [theme.breakpoints.down('sm')]: {
          //     border: '3px solid transparent',
          //     height: '40px'
          //   },
          // },
        },
      },
    },
  },
  '.main-slide': {
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
    },
    '.slick-prev': {
      left: '40px',
      '&:before': {
        background: "url('/leftArrow.svg') no-repeat center / cover",
      },
    },
    '.slick-next': {
      right: '40px',
      '&:before': {
        background: "url('/rightArrow.svg') no-repeat center / cover",
      }
    },
    '.slick-list': {
      '.slick-track': {
        '.slick-slide': {
          '.img-wrap': {
            position: 'relative', 
            width: '100%',
            maxWidth: '1220px',
            height: 'calc(100vh - 240px)',
            margin: '10px auto',
          },
          // '.coffee-wrap': {
          //   width: '100%',
          //   maxWidth: '1220px',
          //   height: 'calc(100vh - 240px)',
          //   objectFit: 'contain',
          //   margin: '10px auto',
          // },
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
                  marginBottom: '24px',
                  '&:last-child': {
                    marginBottom: '0'
                  },
                  [theme.breakpoints.down('sm')]: {
                    marginBottom: '16px',
                    '&:last-child': {
                      marginBottom: '0'
                    },
                  },
                }
              }
            },
          },
        },
      },
    },
  },
  '.slide-index': {
    textAlign: 'center',
    'p': {
      color: '#FFF',
      fontSize: '14px',
      margin: '12px 0',
      fontWeight: '800',
      '@media screen and (min-width: 900px)': {
        fontSize: '16px',
        margin: '16px 0',
      }
    }
  }
}));

const listing_data = [
  {
    id: 7,
    title: 'Item 7',
    price: '$100',
    image: '/comic4.jpg',
  },
  {
    id: 8,
    title: 'Item 8',
    price: '$200',
    image: '/comic1.png',
  },
  {
    id: 9,
    title: 'Item 9',
    price: '$300',
    image: '/comic2.png',
  },
  {
    id: 10,
    title: 'Item 10',
    price: '$400',
    image: '/comic3.jpg',
  },
  {
    id: 11,
    title: 'Item 11',
    price: '$500',
    image: '/comic5.jpg',
  },
  {
    id: 1,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 2,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 3,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
  {
    id: 4,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 5,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 6,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
]

const settingsMain = {
  arrows: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
      }
    }
  ]
}

const settingsNav = {
  slidesToShow: 20,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 16,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 12,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 8,
      }
    }
  ]
}

export default function DetailSlider(props) {
  const { data } = props;
  
  const dispatch = useDispatch()
  const { hide_action } = useSelector(state => state.detail)
  
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)
  
  let slider1 = useMemo(() => [], []);
  let slider2 = useMemo(() => [], []);
  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  // hide all action example arrow and thumbnail 
  const handleHideAction = () => {
    hide_action ?
    dispatch(detail.setHideAction('HIDE_ACTION', false)) :
    dispatch(detail.setHideAction('HIDE_ACTION', true))
  }

  return (  
    <>
      <Container>
        <Slider
            className="main-slide"
            infinite={false}
            touchThreshold= {50}
            asNavFor={nav2}
            ref={slider => (slider1 = slider)}
            afterChange={current => setSlideIndex(current)}
            {...settingsMain}
          >
            {
              data?.image?.map((x, i) => (
                <div key={i} onClick={() => handleHideAction()}>
                  {/* <img src={x} alt={data?.title} /> */}
                  <div className='img-wrap'>
                    <Image src={x} alt={data?.title} layout="fill" objectFit="contain" />
                  </div>
                </div>
                ))
            }
            <div onClick={() => handleHideAction()}>
              <div className='img-wrap'>
                <div className='coffee-wrap'>
                  <div className='coffee'>
                    <img className='smile-icon' src="/smile.svg" alt="smile icon"/>
                    <Typography variant='h4' component='h4' sx={{color: '#FFF', mb: 3}}>ဒီ Comic လေးဖတ်ရတာကြိုက်ရဲ့လား?</Typography>
                    {/* <p className='desc'>ဒီ Comic လေးဖတ်ရတာကြိုက်ရဲ့လား?</p> */}
                    <div className='btn-wrap'>
                      <Link href={`/`} passHref>
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
                          startIcon={<Coffee />}
                        >
                          Coffee ဖိုးပေးမယ်
                        </Button>
                      </Link>
                      <Box sx={{transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                          ariaLabel="SpeedDial basic example"
                          sx={{ position: 'absolute', bottom: 0, left: 0, }}
                          icon={<Share />}
                          className="speed-dial-white"
                        >
                          {actions.map((action) => (
                            <SpeedDialAction
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                              tooltipOpen
                            />
                          ))}
                        </SpeedDial>
                      </Box>
                      <Link href="/coffee" passHref>
                        <a>
                          <Button variant='contained'>
                            နောက်တစ်ပိုင်း
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>         
            </div>
        </Slider>
        <div className="slide-index">
          <p>
            {
              `( ${(slideIndex + 1) +' '+ 'of' +' '+ (data?.image?.length + 1)} )`
            }
          </p>
        </div>
        <Slider
          className="slide-nav"
          infinite={false}
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
          swipeToSlide={true}
          arrows={false}
          focusOnSelect={true}
          {...settingsNav}
        >
          {
            data?.image?.map((x, i) => (
              <div key={i}>
                {/* <img src={x} alt={data?.title} style={{opacity: hide_action ? '0' : '1', transition: 'ease-in-out .2s'}} /> */}
                <div className='img-wrap' style={{opacity: hide_action ? '0' : '1', transition: 'ease-in-out .2s'}}>
                  <Image src={x} alt={data?.title} layout="fill" objectFit="cover" />
                </div>
              </div>
            ))
          }
        </Slider>
      </Container>
    </>
  );
}