import * as React from 'react';
import { 
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import theme from 'src/themes/theme';
import Link from 'next/link';

export default function CoffeeCard() {
  return (
    <Grid item xs={12}>
      <Card sx={{boxShadow: 'none', border: '1px solid #D7D7DC', background: theme.palette.primary.main, borderRadius: '8px'}}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: {md: 'row', xs: 'column'},
          }}
          pt={4}
          pb={4}
          pr={{md: 5, xs: 3}}
          pl={{md: 5, xs: 3}}
        >                      
          <CardContent 
            sx={{
              padding: '0px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', 
              flexDirection: {md: 'row', xs: 'column'},
              '&:last-child': {
                paddingBottom: '0px',
              },
            }}
          >
            <Box mr={{md: 3, xs: 0}} mb={{md: 0, xs: 2}}>
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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={{md: 0, xs: 2}}
            >
              <Box>
                <Typography gutterBottom variant="h3" component="p" mb={1} sx={{color: '#FFF', fontWeight: '800', textAlign: {md: 'left', xs: 'center'}}}>                          
                  More Coffee = More Comic
                </Typography>
                <Typography gutterBottom variant="h5" component="p" sx={{color: '#FFF', textAlign: {md: 'left', xs: 'center'}, fontWeight: '500', lineHeight: '28px'}} mb={0}>                          
                  Comic တွေ တစ်ဝကြီးဖတ်ဖို့ Coffee ဖိုးလေးတွေ စေတနာရှိသလောက်ပေးလို့ရပါပြီ။
                </Typography>
              </Box>
            </Stack>
          </CardContent>
          <Box sx={{flex: 'none'}} ml={1}>
            <Link href="/coffee" passHref>
              <Button 
                variant="contained" 
                component="a"
                className="btn-black"
              >                      
                Coffee ဖိုးပေးမယ်
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
