import { Box, Container } from '@mui/material';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: '/comic4.jpg',
    thumbnail: '/comic4.jpg',
  },
  {
    original: '/comic1.png',
    thumbnail: '/comic1.png',
  },
  {
    original: '/comic2.png',
    thumbnail: '/comic2.png',
  },
  {
    original: '/comic3.jpg',
    thumbnail: '/comic3.jpg',
  },
  {
    original: '/comic5.jpg',
    thumbnail: '/comic5.jpg',
  },
];

export default function CarouselGallery(props) {  
  const { options } = props  
  return (
    <Box 
      component="section" 
      sx={{
        marginTop: {          
          xs: 0,
          lg: '24px',
        },
        marginBottom: {
          xs: 0,
          lg: '24px',
        },
      }}
    >
      <Container
        sx={{
          paddingLeft: {          
            xs: 0,
            lg: '24px',
          },
          paddingRight: {
            xs: 0,
            lg: '24px',
          },
        }}
      >
        <ImageGallery 
          items={images}
          lazyLoad={true}
          {...options}
        />
      </Container>
    </Box>
  );
}