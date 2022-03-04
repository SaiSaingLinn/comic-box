import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function TitleCard(props) {
  const { data } = props
  return (
    <Box sx={{background: '#ECFDF5'}} pt={{md: 6, xs: 3}} pb={{md: 6, xs: 3}}>
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
        {
          data[1]?.icon &&
          <Box mr={{md: 2, xs: 1}}>
            <img 
              src='/coffee-cup.svg' 
              alt='coffee cup' 
              style={
                {
                  width: '44px',
                  height: '44px',
                  '@media screen and (minWidth: 900px)': {
                    width: '56px',
                    height: '56px',
                  }
                }
              } 
            />
          </Box>
        }
        <Box>
          <Typography variant="h1" component="h2" sx={{transform: 'translateY(-5px)'}}>{data[0]?.title}</Typography>
        </Box>
      </Container>
    </Box>
  )
}
