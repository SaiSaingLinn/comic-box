import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MediaCard from 'src/components/card';

const listing_data = [
  {
    id: 1,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 2,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 3,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
]

export default function ItemList() {
  return (
    <Container>
      <Typography variant="h4">Listing</Typography>
      <Grid container spacing={{ xs: 12, md: 4 }}>
        <MediaCard data={listing_data} />
      </Grid>
    </Container>
  );
}
