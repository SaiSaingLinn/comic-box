import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
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
  Button,
  SwipeableDrawer,
  ListItemText,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
  SpeedDial,
  SpeedDialAction,
} from '@mui/material'
import {
  Close, Coffee, Facebook, FileCopy, Inbox, Mail, Share, SkipNext,
} from '@mui/icons-material';
import DetailSwiper from './detail-swiper-slider';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { isMobile } from 'react-device-detect';
import { detail } from "store/actions"
import Link from 'next/link';
import theme from 'src/themes/theme';

const SliderWrapper = styled('div')(({ theme }) => ({
  '.main-slide': {
    height: '100vh',
    '.keen-slider__slide': {
      // maxWidth: '1144px !important',
      // minWidth: '100% !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: "transform .1s linear",
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        maxWidth: '1144px !important',
      }
    },
    '.img-wrap': {
      position: 'relative', 
      width: '100%',
      maxWidth: '1144px',
      margin: '0 auto',
      textAlign: 'center',
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
  },
  '.thumbnail': {
    height: '72px',
    width: '100% !important',
    position: 'absolute !important',
    bottom: '0',
    left: '0',
    [theme.breakpoints.down('md')]: {
      height: '38px',
    },
    '.keen-slider__slide': {
      opacity: '0.4',
      transition: 'all 0.3s',
      '&:hover': {
        cursor: 'pointer',
      },
      '&.active': {
        opacity: '1',
      },
      '& img': {
        height: '100%',
        objectFit: 'cover',
        width: '100%',
      }
    }
  },
  '.navigation-wrapper': {
    position: "relative",
  },
  '.arrow': {
    width: '12px',
    height: '12px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fill: '#fff',
    cursor: 'pointer',
    WebkitTransform: 'translateY(-50%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '.arrow--left': {
    left: '40px',
  },
  '.arrow--right': {
    left: 'auto',
    right: '40px',
  },
  '.arrow--disabled': {
    fill: 'rgba(255, 255, 255, 0.5)',
  },
}))

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider?.slides?.forEach((slide) => {
        slide?.classList?.remove("active")
      })
    }
    function addActive(idx) {
      slider?.slides[idx]?.classList?.add("active")
    }

    function addClickEvents() {
      slider?.slides?.forEach((slide, idx) => {
        slide?.addEventListener("click", () => {
          if (mainRef?.current) mainRef?.current?.moveToIdx(idx)
        })
      })
    }

    slider?.on("created", () => {
      if (!mainRef?.current) return
      addActive(slider?.track?.details?.rel)
      addClickEvents()
      mainRef?.current?.on("animationStarted", (main) => {
        removeActive()
        const next = main?.animator?.targetIdx || 0
        addActive(main?.track?.absToRel(next))
        slider?.moveToIdx(next)
      })
    })
  }
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{background: disabeld ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 1)', width: '40px', height: '40px', borderRadius: '50%', padding: '14px'}}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default function FullDrawerSlider(props) {
  const { data, handleClose, state, detail_data, handleClickOpen, stateOpen, toggleDrawer } = props;
  const dispatch = useDispatch();
  const { hide_action } = useSelector(state => state.detail);
  // hide all action example arrow and thumbnail 
  const handleHideAction = () => {
    hide_action ?
    dispatch(detail.setHideAction('HIDE_ACTION', false)) :
    dispatch(detail.setHideAction('HIDE_ACTION', true))
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [opacities, setOpacities] = useState([])
  
  useEffect(() => {
    stateOpen.bottom && setCurrentSlide(0)
  }, [stateOpen])
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    // mode: 'free-snap',
    renderMode: 'performance',
    rubberband: false,
    defaultAnimation: {
      duration: 500,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      // console.log('slide changed', slider)
      // const new_opacities = slider.track.details.slides.map((slide) => slide.portion)
      // setOpacities(new_opacities)
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
    created() {
      setLoaded(true)
      // if (typeof window !== "undefined") {
      //   // Client-side-only code
      //   const mainSlide = document.querySelector('.main-slide');
      //   const windowHeight = window.innerHeight;
      //   mainSlide.style.height = `${windowHeight}px`;
      // }
      // for get window inner height 
      if (typeof window !== "undefined") {
        const mainSlide = document.querySelector('.main-slide');
        const windowHeight = window.innerHeight;
        mainSlide.style.height = `${windowHeight}px`;

        // detect if screen was rotate
        const supportsOrientationChange = "onorientationchange" in window,
          orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
        
        window.addEventListener(orientationEvent, function() {
          // console.log(window.orientation + " " + screen.width+ " " + this.innerHeight + " " + screen.height);
          if (window.orientation === 0) {
            mainSlide.style.height = `${windowHeight}px`;
          } else {
            // console.log('screen.height', screen.height)
            mainSlide.style.height = `${screen.height}px`;
          }
        }, false);
      }
    },
  })

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      dragSpeed: 30,
      // mode: "free",
      rubberband: false,
      slides: {
        perView: isMobile ? 8 : 10,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  // get next chapter index if exist
  const [nextChapterIndex, setNextChapterIndex] = useState(null)
  const [nextChapterId, setNextChapterId] = useState(null)
  useEffect(() => {
    let next_chapter_index = 0
    detail_data?.chapters?.map((item, index) => {
      if (item?.id === data?.id) {
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
  const handleNextChapter = async () => {
    // close current chapter and then set time out 1s before open next chapter
    await toggleDrawer("bottom", false, null)
    setTimeout(async () => {
      await toggleDrawer("bottom", true, nextChapterId)
      dispatch(detail.setHideAction('HIDE_ACTION', false))
    }, 300)
  }

  const list = () => (
    <Box
      sx={{ 
        width: 'auto', 
        padding: "0",
        margin: "0",
        overflow: "hidden"
      }}
      role="presentation"
      className="keen-wrapper"
      // onClick={toggleDrawer("bottom", false)}
      // onKeyDown={toggleDrawer("bottom", false)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '9',
          background: 'rgba(29, 29, 33, 0.5)',
          padding: '8px 0',
          opacity: hide_action ? '0' : '1',
          transition: 'ease-in-out .2s',
          '@media screen and (min-width: 900px)': {
            padding: '10px 40px',
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
            '@media screen and (min-width: 900px)': {
              left: '40px',
            }
          }}
        >
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}} onClick={() => toggleDrawer("bottom", false)}>
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
              whiteSpace: "nowrap", 
              width: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis", 
              textAlign: "center",
            }} 
            variant="h5" 
            component="h2"
          >
            Chapter 1
          </Typography>
          <Typography 
            sx={{ 
              flex: 1, 
              color: '#FFF',
              whiteSpace: "nowrap", 
              width: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis", 
              textAlign: "center",
            }} 
            variant="caption" 
            component="p"
          >
            First Contact
          </Typography>
        </Box>
      </Box>
      <SliderWrapper>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider main-slide" onClick={() => handleHideAction()}>
            {
              data?.image?.map((item, index) => (
                <div 
                  className={`keen-slider__slide number-slide${index + 1}`}
                  key={index} 
                  style={{
                    opacity: opacities[index],
                    visibility: opacities[index] === 0 ? 'hidden' : 'visible',
                  }}
                >
                  <img src={item} alt="slide" />
                </div>
              ))
            }
            <div className={`keen-slider__slide`}>
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
                        // <Link href={`/detail/chapter/${nextChapterSlug}`} passHref>
                          <Button 
                            variant='outlined' 
                            className='outlined-white' 
                            size="large" 
                            fullWidth
                            startIcon={<SkipNext />}
                            // onClick toggle drawer false and settimeout to 1000 and toggle drawer true
                            onClick={() => handleNextChapter()}
                          >
                            နောက်တစ်ပိုင်း
                          </Button>
                        // </Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div style={{opacity: hide_action ? '0' : '1',}}>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail" style={{opacity: hide_action ? '0' : '1',}}>
          {
            data?.image?.map((item, index) => (
              <div className={`keen-slider__slide number-slide${index + 1}`} key={index}>
                <img src={item} />
              </div>
            ))
          }
        </div>
      </SliderWrapper>
    </Box>
  );

  return (
    <div>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <SwipeableDrawer
          anchor={"bottom"}
          open={stateOpen["bottom"]}
          onClose={() => toggleDrawer("bottom", false)}
          onOpen={() => toggleDrawer("bottom", true)}
          transitionDuration={{ appear: 10, enter: 10, exit: 10 }}
          minFlingVelocity={1000}
          swipeAreaWidth={200}
          disableBackdropTransition={true}
          disableSwipeToOpen={true}
        >
          {list()}
        </SwipeableDrawer>
    </div>
  )
}