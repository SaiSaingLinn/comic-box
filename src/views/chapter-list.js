import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ChapterCard from 'src/components/chapter-card';
import theme from 'src/themes/theme';

const listing_data = [
  {
    id: 1,
    title: 'Chapter 1',
    desc: 'First Contact',
    status: 'New',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
  },
  {
    id: 2,
    title: 'Chapter 2',
    desc: 'Hide and Seek',
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/NTW_Cv89_08911_DIGITAL_61fac3e2e09370.76389321.jpg?itok=NdbFakh1',
  },
  {
    id: 3,
    title: 'Chapter 3',
    desc: 'Greetings',
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/gn-covers/2022/02/BM_DET%20%28COVER%29_61fac436bcbd47.32846319.jpg?itok=D9v8-P5K',
  },
  {
    id: 4,
    title: 'Chapter 4',
    desc: 'Mind Over Matter',   
    status: 'New',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/JL_Cv72_07211_DIGITAL_61eb16f4e06f43.36030814.jpg?itok=jYNt5Lo4',
  },
  {
    id: 5,
    title: 'Chapter 5',
    desc: 'Triumph and Tragedy',
    status: 'New',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/AQMTB_Cv6_00611_DIGITAL_61fac3b33ce686.63542306.jpg?itok=6TdLQHs4',
  },
]

export default function ChapterList() {
  return (
    <Box component="section" sx={{background: '#F5F5F6', pt: {md: 5, xs: 0}, pb: {md: 5, xs: 0},}}>
      <Container>
        <Typography variant="h3" component="h2" mb={3}>Chapters</Typography>
        <Grid container spacing={3}>
          <ChapterCard data={listing_data} />
        </Grid>
        <Box sx={{mt: {md: 5, xs: 3}, textAlign: 'center'}}>
          <a href="https://www.facebook.com/comic.com.mm/" target="_blank" rel="noopener noreferrer">
            <Typography variant="p" component="p" mb={3} sx={{color: theme.palette.red.main}}>More Coming Soon..! Follow Us On Facebook.</Typography>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
