import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField, 
} from '@mui/material';
import CommentCard from 'src/components/comment-card';
import { AddComment } from '@mui/icons-material';

const listing_data = [
  {
    id: 1,
    title: 'User #9481',
    desc: 'ဒီတင်ထားတာကဖတ်လို့ရတယ်မလား',
  },
  {
    id: 2,
    title: 'User #2456',
    desc: 'batman rebirth လေးတင်ပေးပါ',
  },
  {
    id: 3,
    title: 'User #3234',
    desc: 'Next issues?',
  },
]

export default function CommentList() {
  // handle comment dialog 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // handle comment dialog end

  return (
    <Box component="section" sx={{mt: 5, mb: 5}}>
      <Container>
        <Box mb={{md: 4, xs: 2}} sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <Typography variant="h3" component="h2">Comments (6)</Typography>
          <Button 
            variant="contained" 
            startIcon={<AddComment />} 
            className="btn-gray" 
            onClick={handleClickOpen}
            sx={{display: {md: 'inline-flex', xs: 'none'}}}
          >
            Add a comment
          </Button>
        </Box>
        <Grid container spacing={2} mb={{md: 2, xs: 1}}>
          <CommentCard data={listing_data} />
        </Grid>
        <Box>
          <Button variant="text">View more comments</Button>
        </Box>
        <Box mt={2}>
          <Button 
            variant="contained" 
            startIcon={<AddComment />} 
            className="btn-gray" 
            onClick={handleClickOpen}
            sx={{display: {xs: 'inline-flex', md: 'none'}}}
          >
            Add a comment
          </Button>
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} fullWidth>
        <DialogTitle variant="h5" sx={{fontWeight: '800', paddingBottom: '0'}}>Your Comment</DialogTitle>
        <DialogContent sx={{paddingTop: "20px !important"}}>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="outlined-basic" 
            label="Write a comment..."
            variant="outlined"
          />
        </DialogContent>
        <DialogContent sx={{display: 'flex', justifyContent: 'flex-end', paddingTop: '0'}}>
          <Button variant='contained' onClick={handleClose}>Post</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
