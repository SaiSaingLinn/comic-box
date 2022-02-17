import React from 'react'
import { Stack, List, ListItem, Typography, Container, Box } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import theme from 'src/themes/theme';

const Footer = () => {
  return (
    <Box sx={{background: theme.palette.text.dark,}}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            padding: { xs: '16px 0', md: '26px 0' },
          }}
        >
          <Box sx={{textAlign: {xs: 'center', md: 'left'}, marginBottom: {xs: '12px', md: '0'}}}>
            <Typography 
              variant="body2" 
              sx={{
                color: '#8C8C96',
              }}
            >
              © Copyright {(new Date().getFullYear())} Comic Box.
            </Typography>
          </Box>
          <Box sx={{textAlign: {xs: 'center', md: 'left'}, marginBottom: {xs: '12px', md: '0'}}}>
            <a href="mailto:contact@comicbox.net" target="_blank" rel="noopener noreferrer">
              <Typography 
                variant="body2" 
                sx={{
                  color: '#8C8C96',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: theme.palette.light.main,
                  }
                }}
              >
                contact@comicbox.net
              </Typography>
            </a>
          </Box>
          <Box sx={{textAlign: {xs: 'center', md: 'left'}}}>
            <a href="https://www.facebook.com/comic.com.mm/" target="_blank" rel="noopener noreferrer">
              <Typography 
                variant="body2" 
                sx={{
                  color: '#8C8C96', 
                  display: 'flex', 
                  alignItems: 'center',
                  transition: 'all 0.2s ease-in-out',
                  justifyContent: 'center',
                  '&:hover': {
                    color: theme.palette.light.main,
                  }
                }}
              >
                Follow Us On <Facebook sx={{width: '18px', height: '18px', marginLeft: '5px'}} />
              </Typography>
            </a>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;