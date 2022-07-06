import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Typography,
  Box,
  Rating,
  Container,
  Stack,
  Button,
  SpeedDialAction,
  SpeedDial,
  styled,
  Snackbar,
} from '@mui/material';
import theme from 'src/themes/theme';
import LinesEllipsis from 'react-lines-ellipsis';
import ShowMoreText from "react-show-more-text";
import { 
  Facebook, 
  PlayCircleOutline, 
  Share, 
  FileCopy 
} from '@mui/icons-material';
import Link from 'next/link';

const Desc = styled("div")(({ theme }) => ({
  '.my-anchor-css-class': {
    color: theme.palette.primary.main,
  },
}));

const actions = [
  { icon: <FileCopy />, name: 'Copy Link' },
  { icon: <Facebook />, name: 'Facebook' },
];

export default function DetailInfo(props) {
  const { data, state, detail_data, handleClickOpen, toggleDrawer } = props;

  // toast alert 
  const [toast, setToast] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })

  const handleClose = () => {
    setToast({ open: false });
  };

  const { vertical, horizontal, open } = toast

  // handle copy code 
  const handleCopy = () => {
    /* Copy code */
    navigator.clipboard.writeText(window.location.href)
    setToast({ open: true});
  }

  return (
    <Box component="section" sx={{mt: {md: 5, xs: 3}, mb: {md: 5, xs: 3}}}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >                      
          <Box sx={{width: {md: '30%', xs: '40%'}}}>
            {/* <Image
              src={data?.cover}
              alt={data?.title}
              layout="responsive"
              width={160}
              height={240}
              priority
            /> */}
          </Box>
          <Box 
            sx={{
              width: {md: '70%', xs: '60%'}, 
              paddingTop: '0px',
              padding: { md: '0 24px', xs: '0 16px'},
            }}
          >
            {
              data?.status && (
                <Box 
                  sx={{
                    background: data?.status === 'Completed' ? theme.palette.sky.light : theme.palette.red.main,
                    display: 'inline-block',
                  }}
                  mb={1}
                >
                  <Typography 
                    variant='caption' 
                    component='p' 
                    sx={{
                      color: data?.status === 'Completed' ? theme.palette.sky.dark : theme.palette.light.main, 
                      fontWeight: '800',
                      padding: {md: '4px 8px', xs: '3px 6px'},
                    }}
                  >
                    {data?.status}
                  </Typography>
                </Box>
              )
            }
            <Typography gutterBottom variant="h3" component="h1" sx={{color: theme.palette.text.dark, mb: 1}}>                          
              <LinesEllipsis
                text={data?.title}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
                component='span'
              />
            </Typography>
            {
              data?.rating && (
                <Box sx={{display: 'flex', alignItems: 'center', mb: {md: 2, xs: 2}}}>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p" 
                    sx={{
                      fontWeight: '800', 
                      marginRight: '5px',
                      color: theme.palette.text.main,                              
                    }}
                  >
                    {data?.rating}
                  </Typography>
                  <Rating name="half-rating-read" value={data?.rating} precision={0.5} readOnly size="small" />
                </Box>
              )
            }
            <Box sx={{
              mb: {md: 2, xs: 1},
              display: {sm: 'block', xs: 'none'},
            }}>
              <Desc>
                <Typography variant="paragraph" component="div" color={theme.palette.text.main} sx={{lineHeight: '1.7'}}>
                  <ShowMoreText
                    /* Default options */
                    lines={4}
                    more="See more"
                    less=""
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    // onClick={() => executeOnClick()}
                    expanded={false}
                    width={0}
                    truncatedEndingComponent={"... "}
                  >
                    {data?.desc}
                  </ShowMoreText>
                </Typography>
              </Desc>
            </Box>
            <Box sx={{mb: {md: 3, xs: 2}}}>
              <Stack direction="row" spacing={2} sx={{mb: {md: 1, xs: 0.5}}}>              
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '800', color: theme.palette.text.main, minWidth: {md: '60px', xs: '50px'}}}>Aurthor:</Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '400', color: theme.palette.text.main}}>{data?.author}</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>              
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '800', color: theme.palette.text.main, minWidth: {md: '60px', xs: '50px'}}}>Artist:</Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '400', color: theme.palette.text.main}}>{data?.artist}</Typography>
              </Stack>
            </Box>
            <Box sx={{
              mb: {md: 2, xs: 1},
              display: {sm: 'block', xs: 'none'},
            }}>
              <Stack direction="row" spacing={2}>
                {/* <Link href={`/detail/chapter/${data?.slug}?name=${data?.chapters[0]?.slug}`}>
                  <Button 
                    variant="contained" 
                    startIcon={<PlayCircleOutline />}
                    component="a"
                  >                      
                    အခုဖတ်မယ်
                  </Button>
                </Link> */}
                <Button 
                  variant="contained" 
                  startIcon={<PlayCircleOutline />}
                  onClick={() => toggleDrawer('bottom', true, 1)}
                >                      
                  အခုဖတ်မယ်
                </Button>
                <Box sx={{transform: 'translateZ(0px)', flexGrow: 1 }}>
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 0, left: 0 }}
                    icon={<Share />}
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
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          mb: {xs: 2},
          mt: {xs: 2},
          display: {sm: 'none', xs: 'block'},
        }}>
          <Desc>
            <Typography variant="paragraph" component="div" color={theme.palette.text.main} sx={{lineHeight: '1.7'}}>
              <ShowMoreText
                /* Default options */
                lines={3}
                more="See more"
                less=""
                className="content-css"
                anchorClass="my-anchor-css-class"
                // onClick={() => executeOnClick()}
                expanded={false}
                width={0}
                truncatedEndingComponent={"... "}
              >
                {data?.desc}
              </ShowMoreText>
            </Typography>
          </Desc>
        </Box>
        <Box sx={{
          display: {sm: 'none', xs: 'block'},
        }}>
          <Stack direction="row" spacing={2}>
            {/* <Link href={`/detail/chapter/1`}>
              <Button 
                variant="contained" 
                startIcon={<PlayCircleOutline />}
                fullWidth
                component="a"
              >                      
                အခုဖတ်မယ်
              </Button>
            </Link> */}
            <Button 
              variant="contained" 
              startIcon={<PlayCircleOutline />}
              onClick={() => toggleDrawer('bottom', true, 1)}
              fullWidth
            >                      
              အခုဖတ်မယ်
            </Button>
            <Box sx={{transform: 'translateZ(0px)', flexGrow: 1, width: '100%' }}>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
                icon={<Share />}
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
          </Stack>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Copied to clipboard"
        key={vertical + horizontal}
        onClose={handleClose}
      />
    </Box>
  );
}
