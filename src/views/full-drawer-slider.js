import React, { useEffect, useState } from 'react'
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
  Button,
  SwipeableDrawer,
  ListItemText,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
} from '@mui/material'
import {
  Close, Inbox, Mail,
} from '@mui/icons-material';
import DetailSwiper from './detail-swiper-slider';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const SliderWrapper = styled('div')(({ theme }) => ({
  '.main-slide': {
    '.keen-slider__slide': {
      // maxWidth: '1144px !important',
      // minWidth: '100% !important',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& img': {
        width: '100%',
        height: '100vh',
        objectFit: 'contain',
        maxWidth: '1144px !important',
      }
    }
  },
  '.thumbnail': {
    height: '72px',
    width: '100% !important',
    position: 'absolute !important',
    bottom: '0',
    left: '0',
    '.keen-slider__slide': {
      cursor: 'pointer',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
    }
  },
  '.navigation-wrapper': {
    position: "relative",
  },
  '.arrow': {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fill: '#fff',
    cursor: 'pointer',
    WebkitTransform: 'translateY(-50%)',
  },
  '.arrow--left': {
    left: '5px',
  },
  '.arrow--right': {
    left: 'auto',
    right: '5px',
  },
  '.arrow--disabled': {
    fill: 'rgba(255, 255, 255, 0.5)',
  },
}))

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
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
  const { hide_action } = useSelector(state => state.detail);
  console.log('data', data)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 10,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  // toggleDrawer to false on scroll up and scroll down
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', () => {
        toggleDrawer("bottom", false)
      })
    }
  }, [toggleDrawer])

  const list = () => (
    <Box
      sx={{ 
        width: 'auto', 
        height: "100vh",
        padding: "0",
        margin: "0",
        overflow: "hidden"
      }}
      role="presentation"
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
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}} onClick={toggleDrawer("bottom", false)}>
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
            }} 
            variant="h5" 
            component="h2"
          >
            Title Title
          </Typography>
          <Typography 
            sx={{ 
              flex: 1, 
              color: '#FFF',
              whiteSpace: "nowrap", 
              width: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis", 
            }} 
            variant="caption" 
            component="p"
          >
            Subtitle Subtitle
          </Typography>
        </Box>
      </Box>
      <SliderWrapper>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider main-slide">
            {
              data?.image?.map((item, index) => (
                <div className={`keen-slider__slide number-slide${index + 1}`} key={index}>
                  <img src={item} />
                </div>
              ))
            }
          </div>
          {loaded && instanceRef.current && (
            <>
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
            </>
          )}
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
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
          onClose={toggleDrawer("bottom", false)}
          onOpen={toggleDrawer("bottom", true)}
        >
          {list()}
        </SwipeableDrawer>
    </div>
  )
}