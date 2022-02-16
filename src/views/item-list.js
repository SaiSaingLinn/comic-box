import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MediaCard from 'src/components/card';

const listing_data = [
  {
    id: 1,
    title: 'Dark Knights of Steel (2021)',
    desc: 'Daily Planet သတင်းဌာနကအလုပ်သင်လေး Clark Kent အဖြစ် Superman ရဲ့ ဘဝအစပိုင်းကို ပြထားတယ်။',
    rating: 3.5,
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
  },
  {
    id: 2,
    title: 'Superman - Brainiac (2009)',
    desc: 'Daily Planet သတင်းဌာနကအလုပ်သင် လေး Clark Kent အဖြစ် Superman ရဲ့ ဘဝအစပိုင်းကို ပြထားတယ်။',
    rating: 3.5,
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/02/NTW_Cv89_08911_DIGITAL_61fac3e2e09370.76389321.jpg?itok=NdbFakh1',
  },
  {
    id: 3,
    title: 'Batman - Three Jokers (2020)',
    desc: 'Daily Planet သတင်းဌာနကအလုပ်သင် လေး Clark Kent အဖြစ် Superman ရဲ့ ဘဝအစပိုင်းကို ပြထားတယ်။',
    rating: 4.5,
    status: false,
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/gn-covers/2022/02/BM_DET%20%28COVER%29_61fac436bcbd47.32846319.jpg?itok=D9v8-P5K',
  },
  {
    id: 4,
    title: 'Justice League - Last Ride (2021) Justice League - Last Ride (2021) ',
    desc: 'ခေတ်အဆက်ဆက် လင်းနို့လူသား ရုပ်ရှင်တွေမှာအကောင်းဆုံးဗီလိန်တွေထဲက တစ်ယောက်အဖြစ် ပါနေကျပါပဲ။ဒီကားက Batman ရဲ့ ဘဝအစပိုင်းကို ပြထားတယ်။',
    rating: 3,
    status: 'New Chapter',
    image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/JL_Cv72_07211_DIGITAL_61eb16f4e06f43.36030814.jpg?itok=jYNt5Lo4',
  },
]

export default function ItemList() {
  return (
    <Box component="section" sx={{mt: 5, mb: 5}}>
      <Container>
        <Typography variant="h3" component="h2" mb={3}>Fetaured Comics</Typography>
        <Grid container spacing={2}>
          <MediaCard data={listing_data} />
        </Grid>
      </Container>
    </Box>
  );
}
