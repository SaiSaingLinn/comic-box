import React from 'react'
import CarouselGallery from 'src/views/carousel-gallery';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { styled, alpha } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CarouselGalleryWrapper = styled('div')(({ theme }) => ({
  '.image-gallery': {
    background: '#000',
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 5,
    '.image-gallery-content': {
      top: '50%',
      transform: 'translateY(-50%)',
    }
  },
  '.image-gallery-index': {
    bottom: 0,
    top: 'inherit',
    right: '50%',
    transform: 'translateX(60%)',
    '.image-gallery-index-current': {
      '&:before': {
        content: '"("',
      }
    },
    '.image-gallery-index-total': {
      '&:after': {
        content: '")"',
      }
    },
  },
  '.image-gallery-thumbnail': {
    width: '84px',
    height: '84px',
    '&.active': {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    '&:hover': {
      border: `4px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('md')]: {
      width: '48px',
      height: '48px',
    },
    '.image-gallery-thumbnail-image': {
      width: '75px',
      height: '75px',
      [theme.breakpoints.down('md')]: {
        width: '40px',
        height: '40px',
      },
    },
  }
}));

export default function Detail(){
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{color: '#FFF'}}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: '#FFF' }} variant="h6" component="div">
              Close
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <CarouselGalleryWrapper>
            <CarouselGallery 
              options={{
                showNav: true, 
                showThumbnails: true,
                showFullscreenButton: false,
                showPlayButton: false,
                showBullets: true,
                autoPlay: false,
                thumbnailHeight: 200,
                thumbnailWidth: 200,
                useBrowserFullscreen: false,
                showIndex: true,
                indexSeparator: ' of ',
              }}
            />
          </CarouselGalleryWrapper>
        </List>
      </Dialog>
    </>
  );
}