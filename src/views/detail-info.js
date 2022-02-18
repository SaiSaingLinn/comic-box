import * as React from 'react';
import Image from 'next/image';
import { 
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
  Box,
  Rating,
  Container,
} from '@mui/material';
import NextLink from 'next/link';
import theme from 'src/themes/theme';
import LinesEllipsis from 'react-lines-ellipsis'
import ShowMoreText from "react-show-more-text";
import { styled } from '@mui/material';

const Desc = styled(Box)(({ theme }) => ({
  '.my-anchor-css-class': {
    color: theme.palette.primary.main,
  },
}));

export default function DetailInfo(props) {
  const { item } = props;

  const executeOnClick = () => {
    console.log('clicked');
  };

  return (
    <Box component="section" sx={{mt: 5, mb: 5}}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >                      
          <Box sx={{width: '30%'}}>
            <Image
              src={item?.image}
              alt={item?.title}
              layout="responsive"
              width={160}
              height={240}
            />
          </Box>
          <Box 
            sx={{
              width: '70%', 
              paddingTop: '0px',
              padding: { md: '0 24px', xs: '16px 0'},
            }}
          >
            {
              item?.status && (
                <Box 
                  sx={{
                    background: item?.status === 'Completed' ? theme.palette.sky.light : theme.palette.red.main,
                    display: 'inline-block',
                  }}
                  mb={1}
                >
                  <Typography 
                    variant='caption' 
                    component='p' 
                    sx={{
                      color: item?.status === 'Completed' ? theme.palette.sky.dark : theme.palette.light.main, 
                      fontWeight: '800',
                      padding: {md: '4px 8px', xs: '3px 6px'},
                    }}
                  >
                    {item?.status}
                  </Typography>
                </Box>
              )
            }
            <Typography gutterBottom variant="h3" component="h1" sx={{color: theme.palette.text.dark, mb: 1}}>                          
              <LinesEllipsis
                text={item?.title}
                maxLine='1'
                ellipsis='...'
                trimRight
                basedOn='letters'
                component='span'
              />
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', mb: {md: 2, xs: 1}}}>
              <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                sx={{
                  fontWeight: '800', 
                  marginRight: '5px',
                  color: theme.palette.text.main,                              
                }}
              >
                {item?.rating}
              </Typography>
              <Rating name="half-rating-read" value={item?.rating} precision={0.5} readOnly size="small" />
            </Box>
            <Desc>
              <Typography variant="paragraph" component="div" color={theme.palette.text.main} sx={{lineHeight: '1.7'}}>
                <ShowMoreText
                  /* Default options */
                  lines={4}
                  more="See more"
                  less=""
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  onClick={() => executeOnClick()}
                  expanded={false}
                  width={0}
                  truncatedEndingComponent={"... "}
                >
                  {item?.desc}
                </ShowMoreText>
              </Typography>
            </Desc>
            <Box sx={{mt: {md: 2, xs: 1}}}>
              <Box>
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '800', color: theme.palette.text.main}}>Aurthor:</Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{fontWeight: '400', color: theme.palette.text.main}}>{item?.aurthor}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
