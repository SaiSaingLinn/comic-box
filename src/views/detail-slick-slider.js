import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Slider from 'react-slick'
import { styled } from '@mui/material/styles';
import {
  Button,
} from '@mui/material';
import Link from 'next/link';
import { detail } from "store/actions"

const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  '.slide-nav': {
    '.slick-list': {
      '.slick-track': {
        '.slick-slide': {
          cursor: 'pointer',
          '&.slick-current': {
            'img': {
              border: `4px solid ${theme.palette.primary.main}`,
              [theme.breakpoints.down('sm')]: {
                border: `3px solid ${theme.palette.primary.main}`,
              },
            },
          },
          'img': {
            objectFit: 'cover',
            margin: '0 auto',
            width: '100%',
            border: '4px solid transparent',
            height: '72px',
            [theme.breakpoints.down('sm')]: {
              border: '3px solid transparent',
              height: '40px'
            },
          },
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
          'img, .coffee-wrap': {
            width: '100%',
            maxWidth: '1220px',
            height: 'calc(100vh - 240px)',
            objectFit: 'contain',
            margin: '10px auto',
          },
          '.coffee-wrap': {
            display: 'flex',
            alignItems: 'center',   
            '.coffee': {
              background: theme.palette.primary.main,
              width: '100%',
              margin: '0 auto',
              textAlign: 'center',
              maxWidth: '620px',
              minHeight: '460px',
              padding: '64px',
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

export default function DetailSlider() {
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
              listing_data?.map((x, i) => (
                <div key={i} className="img-wrap" onClick={() => handleHideAction()}>
                  <img src={x?.image} alt="detail-img"/>
                </div>
                ))
            }
            <div className="img-wrap" onClick={() => handleHideAction()}>
              <div className='coffee-wrap'>
                <div className='coffee'>
                  <img className='smile-icon' src="/smile.svg" alt="smile icon"/>
                  <p className='desc'>ဒီ Comic လေးဖတ်ရတာကြိုက်ရဲ့လား?</p>
                  <div className='btn-wrap'>
                    <Link href="/coffee" passHref>
                      <a>
                        <Button variant='contained'>
                          Coffee ဖိုးပေးမယ်
                        </Button>
                      </a>
                    </Link>
                    <Link href="/coffee" passHref>
                      <a>
                        <Button variant='contained'>
                          မျှဝေမယ်
                        </Button>
                      </a>
                    </Link>
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
        </Slider>
        <div className="slide-index">
          <p>
            {
              `( ${(slideIndex + 1) +' '+ 'of' +' '+ (listing_data?.length + 1)} )`
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
            listing_data?.map((x, i) => (
              <div key={i}>
                <img src={x?.image} alt="detail-img" style={{opacity: hide_action ? '0' : '1', transition: 'ease-in-out .2s'}} />
              </div>
            ))
          }
        </Slider>
      </Container>
    </>
  );
}