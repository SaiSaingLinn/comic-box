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

  return (
    <div>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <SwipeableDrawer
          anchor={"bottom"}
          open={stateOpen["bottom"]}
          onClose={toggleDrawer("bottom", false)}
          onOpen={toggleDrawer("bottom", true)}
        >
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
        </SwipeableDrawer>
    </div>
  )
}