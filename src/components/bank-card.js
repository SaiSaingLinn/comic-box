import React, { useState } from 'react';
import { 
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Stack,
  Snackbar,
} from '@mui/material';
import theme from 'src/themes/theme';
import { ContentCopy } from '@mui/icons-material';

export default function BankCard(props) {
  const { data } = props

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
  const handleCopy = (number) => {
    /* Copy code */
    navigator.clipboard.writeText(number)
    setToast({ open: true});
  }

  return (
    <>
      {
        data.map(item => (
          <Grid item xs={12} md={6} key={item?.id}>
            <Typography variant='caption' component='h6' sx={{fontWeight: '800', color: '#8C8C96'}} mb={1}>{item?.title}</Typography>
            <Card>
              <CardActionArea onClick={() => handleCopy(item?.number)}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                  }}
                >                
                  <Box sx={{width: '15%', padding: { md: '16px', xs: '10px'},}}>
                    <img
                      src={item?.image}
                      alt={item?.title}
                      style={{
                        width: '40px',
                        height: '40px',
                      }}
                    />
                  </Box>
                  <CardContent 
                    sx={{
                      width: '85%', 
                      padding: { md: '16px', xs: '10px'},
                      '&:last-child': {
                        paddingBottom: { md: '16px', xs: '10px'},
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography gutterBottom variant="body1" component="h5" sx={{color: theme.palette.text.dark}}>                          
                          {item?.name}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p" sx={{color: theme.palette.text.dark, fontWeight: '800'}}>                          
                          {item?.number}
                        </Typography>
                      </Box>
                      <Box>
                        <ContentCopy sx={{color: theme.palette.primary.main}} />
                      </Box>
                    </Stack>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
      ))}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Copied to clipboard"
        key={vertical + horizontal}
        onClose={handleClose}
      />
    </>
  );
}
