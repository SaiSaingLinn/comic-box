import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ChapterCard from 'src/components/chapter-card';
import theme from 'src/themes/theme';

export default function ChapterList(props) {
  const { data, toggleDrawer, stateOpen } = props;
  return (
    <Box component="section" sx={{background: '#F5F5F6', pt: {md: 5, xs: 3}, pb: {md: 5, xs: 3},}}>
      <Container>
        <Typography variant="h3" component="h2" mb={{md: 3, xs: 2}}>Chapters</Typography>
        <Grid container spacing={{md: 3, xs: 2}}>
          <ChapterCard data={data} toggleDrawer={toggleDrawer} stateOpen={stateOpen} />
        </Grid>
        <Box sx={{mt: {md: 5, xs: 3}, textAlign: 'center'}}>
          <a href="https://www.facebook.com/comic.com.mm/" target="_blank" rel="noopener noreferrer">
            <Typography variant="paragraph" component="p" mb={3} sx={{color: theme.palette.red.main, mb: 0}}>More Coming Soon..! Follow Us On Facebook.</Typography>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
