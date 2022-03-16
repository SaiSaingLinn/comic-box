import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import BankCard from 'src/components/bank-card'
import TitleCard from 'src/components/title-card'
import theme from 'src/themes/theme'

export default function RequestComic() {
  return (
    <Box>
      <TitleCard data={
        [
          {
            title: 'ဖတ်ချင်​တဲ့ Comic Book ​တွေ​တောင်းမယ်'
          },
          {
            icon: false
          }
        ] 
      } />
      <Box mt={{md: 5, xs: 3}} mb={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='h4' component='h4' sx={{mb: 2}}>Your preferred comic books</Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { mb: 2, width: '100%', maxWidth: '470px' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="filled-basic" 
                label="Comic book suggestion"
                variant="outlined"
              />
            </div>
            <Button variant="contained" size='large'>​တောင်းစိုရန်</Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{display: 'flex'}}>
          <Typography variant='h5' component='p' color={theme.palette.primary.main} mr={1} mb={2} sx={{fontWeight: '500'}}>email:</Typography>
          <a href="mailto:contact@comicbox.net" target="_blank" rel="noopener noreferrer">
            <Typography 
              variant="h5" 
              sx={{
                color: theme.palette.primary.main,
                transition: 'all 0.2s ease-in-out',
                fontWeight: '500',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              contact@comicbox.net
            </Typography>
          </a>
        </Box>
        {/* <Box sx={{display: 'flex'}}>
          <Typography variant='h5' component='p' color={theme.palette.primary.main} mr={1} sx={{fontWeight: '500'}}>phone:</Typography>
          <a href="tel:09778869369" target="_blank" rel="noopener noreferrer">
            <Typography 
              variant="h5" 
              sx={{
                color: theme.palette.primary.main,
                transition: 'all 0.2s ease-in-out',
                fontWeight: '500',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              09778869369
            </Typography>
          </a>
        </Box> */}
      </Container>
    </Box>
  )
}
