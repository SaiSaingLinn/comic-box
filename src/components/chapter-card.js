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
  Stack,
} from '@mui/material';
import NextLink from 'next/link';
import theme from 'src/themes/theme';
import LinesEllipsis from 'react-lines-ellipsis'
import { ArrowCircleRightOutlined } from '@mui/icons-material';

export default function ChapterCard(props) {
  const { data } = props;
  return (
    <>
      {
        data?.chapters?.map(item => (
          <Grid item xs={12} md={6} key={item?.id}>
            <Card>
              <CardActionArea>
                <NextLink href={`/detail/chapter/${item?.id}`} passHref>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}
                    component={'a'}
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
                    <Box sx={{width: '20%'}}>
                      <Image
                        src={item?.cover_image}
                        alt={item?.title}
                        layout="responsive"
                        width={160}
                        height={240}
                        priority
                      />
                    </Box>
                    <CardContent 
                      sx={{
                        width: '90%', 
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
                          <Typography gutterBottom variant="h5" component="h5" sx={{color: theme.palette.text.dark, mb: 1}}>                          
                            {item?.title}
                          </Typography>
                          <Typography gutterBottom variant="paragraph" component="p" sx={{color: theme.palette.text.main, mb: 1}}>                          
                            {item?.sub_title}
                          </Typography>
                        </Box>
                        <Box>
                          <ArrowCircleRightOutlined sx={{color: theme.palette.primary.main}} />
                        </Box>
                      </Stack>
                    </CardContent>
                  </Box>
                </NextLink>
              </CardActionArea>
            </Card>
          </Grid>
      ))}
    </>
  );
}
