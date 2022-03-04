import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CoffeeCard from 'src/components/coffee-card'
import TitleCard from 'src/components/title-card'
import theme from 'src/themes/theme'

export default function AboutUs() {
  return (
    <Box>
      <TitleCard data={
        [
          {
            title: 'About Comic Box'
          },
          {
            icon: false
          }
        ] 
      } />
      <Box mt={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='body1' component='p' sx={{mb: 2, lineHeight: '28px'}}>COMIC များ……လွယ်လွယ်လေး…..ဆိုင်က ဝယ်ဖတ်မှာပေ့ါ? ဒီလိုဗျာ။ ခင်ဗျားက COMIC စာအုပ်တစ်ခါဖတ်ဖို့ တစ်ခါ အပြင်သွားပြီး ဝယ်/ငှားဖတ်ရတာမျိုးမလုပ်ရတော့ဘဲ Website ပေါ်မှာ Click တစ်ချက်ခေါက်လိုက်တာနဲ့ ကိုယ်ဖတ်ချင်တဲ့ COMIC တွေကို ထိုင်ရာက မထဘဲ စိတ်ကြိုက်ဖတ်လို့ရချင်တယ်ဆိုရင် လောလောဆယ် ဘယ် Website ကိုသွားမလဲ?  Webtoon? Web Comic?  မဟုတ်သေးဘူး။ အဲ့ဒါတွေက နိုင်ငံခြားက Site တွေ… မြန်မာဘာသာနဲ့ အခမဲ့ ဖတ်လို့ရမယ့် Site ကမှ ခင်ဗျားအတွက် ပိုကောင်းတာပေ့ါ။</Typography>
        </Container>
      </Box>
      <Box mt={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='h4' component='h4' sx={{mb: 2, lineHeight: '28px'}}>မလိုပါဘူး။ COMIC တွေကို Facebook မှာလည်း ဖတ်လို့ရတာပဲ?</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2, lineHeight: '28px'}}>ဘယ်ကသာ….. Facebook မှာက ဖတ်လို့ရတယ်ဆိုပေမယ့်။ Facebook မှာက သတင်းတွေ၊ အတင်းတွေ၊ သူများ Selfie တွေ၊ ကြော်ငြာတွေကို ကျော်ခွပြီး COMIC တွေရှာဖတ်ရတာ သိပ်မဟန်ဘူးလေ။ Feel လည်း ကျဲတယ်။</Typography>
        </Container>
      </Box>
      <Box mt={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='h4' component='h4' sx={{mb: 2, lineHeight: '28px'}}>COMIC BOX အကြောင်းကို တစ်ကြောင်းတည်းနဲ့ ဖော်ပြမယ်ဆိုရင်?</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2, lineHeight: '28px'}}>အပေါ်ကရေးထားတဲ့ စာတွေဖတ်ရမှာ ရှုပ်တယ်ဆိုရင် ဒါလေးပဲ ဖတ်ပြီး စိတ်ထဲ စွဲအောင် မှတ်ထားလိုက်တော့ဗျာ။ COMIC BOX ဆိုတာ ကိုယ်ဖတ်ချင်တဲ့ COMIC တွေကို တစ်နေရာတည်းမှာ အကောင်းဆုံးနဲ့ အမြန်ဆုံး၊ အဆင်အပြေဆုံး ဖတ်လို့ရမယ့် Platform တစ်ခုပါပဲ။</Typography>
          <img src='/diagram.svg' alt='diagram' style={{width: '100%', marginBottom: '16px'}}/>
        </Container>
      </Box>
      <Box mt={{md: 5, xs: 3}}>
        <Container>
          <Typography variant='h4' component='h4' sx={{mb: 2, lineHeight: '28px'}}>COMIC BOX က ဘယ်လိုရပ်တည်နေလဲ?</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2, lineHeight: '28px'}}>ဒီအကြောင်းလေးတော့ ပြောပြချင်ပါတယ်။ မျက်ရည်ချူတာ မဟုတ်ပါဘူး။ ကျွန်တော်တို့ COMIC BOX ၀ိုင်းတော်သားတွေက COMIC ချစ်သူတွေဖြစ်တော့ ဒီ COMIC တွေဖတ်ဖို့ ခင်ဗျားတို့ကို ငွေ၊ အချိန် မကုန်စေချင်ပါဘူး။ ဒါကြောင့်လည်း Website တွေ App တွေလုပ်…ကိုယ့်စားရိတ်ကိုယ်စိုက်ပြီး ဘာသာပြန်ရင်း COMIC တွေ အားရပါးရဖတ်လို့ရအောင် လုပ်နေတာပါ။</Typography>
          <Typography variant='body1' component='p' sx={{mb: 2, lineHeight: '28px'}}>တဖြည်းဖြည်းနဲ့ ဖတ်သူများလာလေ…ကျွန်တော်တို့မှာ ကုန်ကျစားရိတ်များပြီး စားရိတ်ထောင်းလေပါပဲ။ ဒီတော့ ကျွန်တော်တို့ Website ဖိုး၊ ဘာသာပြန်ဖိုး၊ Server ဖိုးတွေ ကာမိအောင် Coffee လျှော့သောက်နေကြရပါတယ်။ Coffee သိပ်မသောက်ရရင် ကျွန်တော်တို့တွေရဲ့ ဖန်တီးနိုင်စွမ်းတွေလျော့ပြီး COMIC BOX မှာ COMIC တင်နိုင်တဲ့ အရေအတွက်တွေ နည်းသွားမှာ စိုးမိလို့..။ COMIC တွေကို ကြိုက်တယ်…ဆက်ဖတ်ချင်တယ်ဆိုရင်တော့ ကျွန်တော်တို့အတွက် စေတနာရှိသလောက် Coffee ဖိုးလေးတွေ ပေးစေချင်ပါတယ်။ Coffee တိုက်တယ်ပေ့ါဗျာ။ ဒါလေးပါပဲ။</Typography>
        </Container>
      </Box>
      <Box component="section" mt={{md: 5, xs: 3}}>
        <Container>
          <CoffeeCard />
        </Container>
      </Box>
      <Box mt={{md: 5, xs: 3}} mb={{md: 5, xs: 3}}>
        <Container>
          <Box sx={{display: 'flex'}}>
            <Typography variant='h5' component='p' color={theme.palette.primary.main} mr={1} mb={2} sx={{fontWeight: '500'}}>email:</Typography>
            <a href="mailto:contact@comicbox.net" target="_blank" rel="noopener noreferrer">
              <Typography 
                variant="h5" 
                sx={{
                  color: theme.palette.primary.main,
                  transition: 'all 0.2s ease-in-out',
                  fontWeight: '500',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                contact@comicbox.net
              </Typography>
            </a>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Typography variant='h5' component='p' color={theme.palette.primary.main} mr={1} sx={{fontWeight: '500'}}>phone:</Typography>
            <a href="tel:09778869369" target="_blank" rel="noopener noreferrer">
              <Typography 
                variant="h5" 
                sx={{
                  color: theme.palette.primary.main,
                  transition: 'all 0.2s ease-in-out',
                  fontWeight: '500',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                09778869369
              </Typography>
            </a>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
