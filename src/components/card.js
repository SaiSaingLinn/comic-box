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

export default function MediaCard(props) {
  const { data } = props
  return (
    <>
      {
        data?.data?.map(item => (
          <Grid item xs={12} md={6} key={item?.id}>
            <Card>
              <CardActionArea>
                <NextLink href={`/detail/overview/${item?.slug}`} passHref>
                  <Link underline="none">
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100%',
                      }}
                    >
                      {
                        item?.status && (
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
                              {item?.status}
                            </Typography>
                          </Box>
                        )
                      }                      
                      <Box sx={{width: '30%'}}>
                        <Image
                          src={item?.cover}
                          alt={item?.title}
                          layout="responsive"
                          width={160}
                          height={240}
                        />
                      </Box>
                      <CardContent 
                        sx={{
                          width: '70%', 
                          padding: { md: '16px', xs: '10px'},
                          '&:last-child': {
                            paddingBottom: { md: '16px', xs: '10px'},
                          },
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="h5" sx={{color: theme.palette.text.dark, mb: 1}}>                          
                          <LinesEllipsis
                            text={item?.title}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            component='p'
                          />
                        </Typography>
                        {
                          item?.rating && (
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
                          )
                        }
                        <Typography variant="paragraph" component="h6" color={theme.palette.text.main} sx={{lineHeight: '1.7'}}>
                          <LinesEllipsis
                            text={item?.desc}
                            maxLine='2'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            component='p'
                          />
                        </Typography>
                      </CardContent>
                    </Box>
                  </Link>
                </NextLink>
              </CardActionArea>
            </Card>
          </Grid>
      ))}
    </>
  );
}
