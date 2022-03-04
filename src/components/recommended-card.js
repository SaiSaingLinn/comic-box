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
} from '@mui/material';
import NextLink from 'next/link';
import theme from 'src/themes/theme';
import LinesEllipsis from 'react-lines-ellipsis'

export default function RecommendedCard(props) {
  const { data } = props
  return (
    <Grid item>
      <Card sx={{boxShadow: 'none'}}>
        <CardActionArea>
          <NextLink href={`/detail/1`} passHref>
            <Link underline="none">
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                {
                  data?.status && (
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      background: theme.palette.red.main,
                      zIndex: 1,
                    }}>
                      <Typography 
                        variant='caption' 
                        component='p' 
                        sx={{
                          color: theme.palette.light.main, 
                          fontWeight: '800',
                          padding: {md: '4px 8px', xs: '3px 6px'},
                        }}
                      >
                        {data?.status}
                      </Typography>
                    </Box>
                  )
                }                      
                <Box>
                  <Image
                    src={data?.image}
                    alt={data?.title}
                    layout="responsive"
                    width={222}
                    height={333}
                  />
                </Box>
                <CardContent 
                  sx={{
                    padding: 0,
                    paddingTop: { md: 2, xs: 1},
                    '&:last-child': {
                      paddingBottom: '0px',
                    },
                  }}
                >
                  <Typography gutterBottom variant="paragraph" component="h2" sx={{color: theme.palette.text.dark, mb: 1}}>                          
                    <LinesEllipsis
                      text={data?.title}
                      maxLine='2'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                      component='p'
                      style={{margin: '0'}}
                    />
                  </Typography>
                </CardContent>
              </Box>
            </Link>
          </NextLink>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
