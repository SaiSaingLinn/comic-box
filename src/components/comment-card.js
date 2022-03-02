import * as React from 'react';
import { 
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import theme from 'src/themes/theme';
import LinesEllipsis from 'react-lines-ellipsis'
import { AccountCircle } from '@mui/icons-material';

export default function CommentCard(props) {
  const { data } = props
  return (
    <>
      {
        data.map(item => (
          <Grid item xs={12} key={item?.id}>
            <Card sx={{boxShadow: 'none', border: '1px solid #D7D7DC'}}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  width: '100%',
                  
                }}
                p={{md: 2, xs: 1}}
              >                      
                <CardContent 
                  sx={{
                    padding: '0px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between', 
                    '&:last-child': {
                      paddingBottom: '0px',
                    },
                  }}
                >
                  <Box mr={{md: 2, xs: 1}}>
                    <AccountCircle sx={{ fontSize: 28, color: '#8C8C96' }} />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Typography gutterBottom variant="paragraph" component="p" sx={{color: theme.palette.text.dark, fontWeight: '800'}}>                          
                        <LinesEllipsis
                          text={item?.title}
                          maxLine='1'
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                          component='span'
                        />
                      </Typography>
                      <Typography gutterBottom variant="paragraph" component="p" sx={{color: theme.palette.text.main}} mb={0}>                          
                        <LinesEllipsis
                          text={item?.desc}
                          maxLine='1'
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                          component='span'
                        />
                      </Typography>
                    </Box>
                    
                  </Stack>
                </CardContent>
                <Box sx={{flex: 'none'}} ml={1}>
                  <Typography gutterBottom variant="body2" component="p" sx={{color: theme.palette.text.main}}>2 hrs ago</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
      ))}
    </>
  );
}
