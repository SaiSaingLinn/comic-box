import * as React from 'react';
import Image from 'next/image';
import { 
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
  position: relative;
  width: 345px;
  height: 345px;
  .img {
    object-fit: contain;
  }
`
export default function MediaCard(props) {
  const { data } = props
  return (
    <>
      {
        data.map(item => (
          <Grid item xs={12} md={4} key={item?.id}>
            <Card 
              sx={{ 
                maxWidth: 345,
              }}
            >
              <ImageWrapper>
                <Image
                  src={item?.image}
                  alt={item?.title}
                  layout="fill"
                />
              </ImageWrapper>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
      ))}
    </>
  );
}
