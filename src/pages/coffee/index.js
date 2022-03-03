import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BankCard from 'src/components/bank-card'
import TitleCard from 'src/components/title-card'
import theme from 'src/themes/theme'

const bankCardData = [
  {
    id: 1,
    title: 'AYA BANK ACCOUNT',
    name: 'Kyaw Min Htet',
    number: '811 6611 433',
    image: '/aya.svg',
  },
  {
    id: 2,
    title: 'AYA PAY',
    name: 'Kyaw Min Htet',
    number: '09 953 502 589',
    image: '/apay.svg',
  },
  {
    id: 3,
    title: 'KBZ BANK ACCOUNT',
    name: 'Kyaw Min Htet',
    number: '811 6611 433',
    image: '/kbz.svg',
  },
  {
    id: 4,
    title: 'KBZ PAY',
    name: 'Kyaw Min Htet',
    number: '09 953 502 589',
    image: '/kpay.svg',
  },
  {
    id: 5,
    title: 'WAVE MONEY',
    name: 'Kyaw Min Htet',
    number: '09 953 502 589',
    image: '/wave.svg',
  },
]  

export default function Coffee() {
  return (
    <Box>
      <TitleCard />
      <Box mt={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='h4' component='h4' sx={{mb: 2}} color={theme.palette.primary.main}>More Coffee = More Comic</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2}}>ဒီ COMIC BOX မှာ ဖတ်နေတဲ့ COMIC လေးတွေဖြစ်လာဖို့ ကျွန်တော်တို့ အဖွဲ့သားတွေ အားလုံးက ညဘက်တွေ အိပ်ရေးပျက်ခံပြီး ဘာသာပြန်ကြ၊ စာတွေ ဒီဇိုင်းလုပ်ကြနဲ့ မမောနိုင် မပန်းနိုင် ကြိုးစားနေပါတယ်။ အဲ ဒါပေမယ့် အခုလို ညဘက်တွေမှာ လန်းလန်းဆန်းဆန်းနဲ့ ဘာသာပြန်တာ၊ အလုပ်လုပ်တာတွေ လုပ်ဖို့ Coffee.....Coffee လိုတယ်ခင်ဗျာ။ </Typography>
          <Typography variant='body1' component='p' sx={{mb: 2}}>Coffee ကူမှ ဘာသာပြန်ရတာတွေ၊ အလုပ်လုပ်ရတာတွေ ဈာန်ဝင်ပြီး မြန်မြန်ပြီးတာပါ။ ဒီတော့ COMIC အပိုင်းသစ်တွေ များများနဲ့မြန်မြန်ဖတ်ချင်တယ်ဆိုရင်တော့ COMIC BOX အဖွဲ့သားတွေကို စေတနာရှိသလောက် Coffee ဖိုးလေးတွေပေးလို့ရပါတယ်။ Coffee ဖိုးများများရလေ... Coffee များများဝယ်နိုင်ပြီး...များများသောက်ရင်း COMIC အသစ်တွေ ပိုပိုပြီးလုပ်နိုင်လေပါပဲ။</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2}}>နှစ်သက်တဲ့ Payment Method နဲ့ စေတနာရှိသလောက် Coffee ဖိုးလေးတွေပေးလို့ရပါပြီ။ တစ်ခါထက်ပိုပြီး ခဏခဏ Coffee ဖိုးပေးမယ်ဆိုရင်လည်း ကျွန်တော်တို့ COMIC BOX ဝိုင်းတော်သားတွေက စိတ်မဆိုးပါဘူး။ ဟဲဟဲဟဲ....</Typography>
        </Container>
      </Box>
      <Box mt={{md: 8, xs: 4}} mb={{md: 8, xs: 4}}>
        <Container>
          <Grid container columnSpacing={3} rowSpacing={{md: 5, xs: 3}}>
            <BankCard data={bankCardData} />
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
