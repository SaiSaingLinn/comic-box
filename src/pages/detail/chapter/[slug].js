import React, { useState, useEffect } from 'react'
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
  IconButton,
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
  SkipNext,
  Close,
} from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/lazy";
import "swiper/css/zoom";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
// import Swiper core and required modules
import { Navigation, Pagination, Lazy, Zoom, Thumbs, FreeMode } from 'swiper';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

const detail_data = {
  id: 1,
  title: 'Dark Knights of Steel (2021)',
  desc: 'ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။',
  rating: 3.5,
  status: 'Completed',
  image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
  aurthor: 'Geoff Johns',
  artist: 'Gary Frank',
  chapters: [
    {
      id: 1,
      title: 'Chapter 1',
      sub_title: 'First Contact',
      status: false,
      cover_image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
      image: [
        'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ],
    },
    {
      id: 2,
      title: 'Chapter 2',
      sub_title: 'The First Encounter',
      status: 'New',
      cover_image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F12%2FDark-Knights-of-Steel_1-2000.jpg',
      image: [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F12%2FDark-Knights-of-Steel_1-2000.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ]
    },
    {
      id: 3,
      title: 'Chapter 3',
      sub_title: 'Greetings',
      status: 'New',
      cover_image: 'https://s3.amazonaws.com/comicgeeks/comics/covers/large-2949669.jpg',
      image: [
        'https://s3.amazonaws.com/comicgeeks/comics/covers/large-2949669.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ]
    },
  ]
}

const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  '.swiper': {
    height: '100vh',
    height: 'calc(var(--vh, 1vh) * 100)',
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
      bottom: '82px',
      // top: "18px",
      // right: "30px",
      // background: "none",
      // left: "auto",
      [theme.breakpoints.down('sm')]: {
        bottom: '42px',
        fontSize: '12px',
      },
    },
    '.swiper-wrapper': {
      '.swiper-slide': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    '.img-wrap': {
      position: 'relative', 
      width: '100%',
      maxWidth: '1220px',
      margin: '0 auto',
      textAlign: 'center',
      '& img': {
        height: '100vh',
        maxHeight: 'calc(100vh)',
        objectFit: 'contain',
        width: '100%',
      },
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
  '.mySwiper': {
    height: '72px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    [theme.breakpoints.down('sm')]: {
      height: '38px',
    },
    '.swiper-slide': {
      opacity: '0.4',
      transition: 'all 0.3s',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    '.swiper-slide-thumb-active': {
      opacity: '1',
    },
    '.img-wrap': {
      position: 'relative', 
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
      '& img': {
        height: '100%',
        objectFit: 'cover',
        width: '100%',
      },
    },
  },
}));

export default function ChapterDetail(props) {
  const { posts } = props;
  const router = useRouter();
  const { slug, name } = router.query;
  
  const [chapter, setChapter] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    // filter detail data by chapter slug 
    const chapterData = posts?.chapters?.filter(chapter => chapter.slug === name);
    setChapter(chapterData);
  }, [name]);
  
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
  const [nextChapterSlug, setNextChapterSlug] = useState(null)
  useEffect(() => {
    let next_chapter_index = 0
    posts?.chapters?.map((item, index) => {
      if (item?.slug === name) {
        next_chapter_index = index + 1
      }
    })
    if (next_chapter_index === posts?.chapters?.length) {
      next_chapter_index = 0
    }
    setNextChapterIndex(next_chapter_index)
    // get id of next chapter base on next_chapter_index
    let next_chapter_slug = posts?.chapters[next_chapter_index]?.slug
    setNextChapterSlug(next_chapter_slug)
  }, [posts, name])

  // handle next chapter
  const [onUpdate, setOnUpdate] = useState(false)
  const handleNextChapter = (nextSlug) => {
    router.push(`/detail/chapter/${slug}?name=${nextSlug}`)
    setOnUpdate(true)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (router.pathname === '/detail/chapter/[id]') {
        document.body.style.cssText = `
          width: 100%; 
          position: fixed; 
          overflow-y: scroll; 
          -webkit-overflow-scrolling: touch; 
          top: 0; 
          left: 0;
          height: 100%;
          height: -moz-available;
          height: -webkit-fill-available;
          height: fill-available;
          height: stretch;
        `;
      } else {
        document.body.style.cssText = `
          position: relative;
        `;
      }
    }
    if (typeof window !== "undefined") {
      // Client-side-only code
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    if (typeof window !== "undefined") {
      // Client-side-only code
      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
  }, [])

  return (  
    <>
      {
        chapter?.length > 0 &&
        <Container>
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
              <Link href={`/detail/overview/${posts?.slug}`} passHref>
                <a style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
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
                </a>
              </Link>
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
                {chapter[0]?.title}
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
                {chapter[0]?.sub_title}
              </Typography>
            </Box>
          </Box>
          <Swiper
            modules={[Navigation, Pagination, Zoom, Lazy, FreeMode, Thumbs]}
            navigation={hide_action ? false : true}
            pagination={
              hide_action ? false : {
              type: "fraction",
            }}
            spaceBetween={50}
            slidesPerView={1}
            zoom={true}
            lazy={false}
            onUpdate={(swiper) => {
              onUpdate && swiper.slideTo(0, 1, true) && dispatch(detail.setHideAction('HIDE_ACTION', false))
              setOnUpdate(false)
            }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          >          
            {
              // filter chapter by id
              chapter[0]?.pages?.map((x, i) => (
                <SwiperSlide key={i} onClick={() => handleHideAction()}>
                  <div className='img-wrap swiper-zoom-container'>
                    <img src={x} alt={x} />
                  </div>
                  {/* <div className='img-wrap'>
                    <Image src={x} alt='detail' layout="fill" objectFit="contain" />
                  </div> */}
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
                        // <Link href={`/detail/chapter/${nextChapterSlug}`} passHref>
                          <Button 
                            variant='outlined' 
                            className='outlined-white' 
                            size="large" 
                            fullWidth
                            startIcon={<SkipNext />}
                            onClick={() => handleNextChapter(nextChapterSlug)}
                          >
                            နောက်တစ်ပိုင်း
                          </Button>
                        // </Link>
                      }
                    </div>
                  </div>
                </div>
              </div>         
            </SwiperSlide>
          </Swiper>
          {
            chapter[0]?.pages?.length >= 8 &&
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={5}
              slidesPerView={isMobile ? 8 : 10}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              style={hide_action ? {opacity: 0} : {opacity: '1'}}
            >
              {
                // filter chapter by id
                chapter[0]?.pages?.map((x, i) => (
                  <SwiperSlide key={i} className="img-wrap">
                    <img src={x} alt={x} />
                  </SwiperSlide>
                  ))
              }
            </Swiper>
          }
        </Container>
      }
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

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/book/${params?.slug}`);
  const posts = await res.json()
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/list?perPage=8&page=1`)
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts?.data?.map((post) => ({
    params: { slug: post?.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}