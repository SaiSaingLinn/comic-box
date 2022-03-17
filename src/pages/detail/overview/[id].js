import React, { useEffect, useState } from 'react'
import DetailInfo from 'src/views/detail-info';
import FullDialogSlider from 'src/views/full-dialog-slider';
import ChapterList from 'src/views/chapter-list';
import CommentList from 'src/views/comment-list';
import CoffeeCard from 'src/components/coffee-card';
import { Box, Container } from '@mui/material';
import RecommendedList from 'src/views/recommended-list';

const detail_data = {
  id: 1,
  title: 'Dark Knights of Steel (2021)',
  desc: 'ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။ ကျူးကျော်သူသည် ကျွန်ုပ်တို့၏ကမ္ဘာကို ဗုံးကြဲတိုက်ခိုက်သောအခါ၊ Superman သည် သူ၏ရန်သူဟောင်းကို ရင်ဆိုင်ရန် အာကာသအနက်ရှိုင်းဆုံးအထိရောက်ဆုံးသို့ ခရီးလှည့်လည်ခဲ့သည်။ သို့သော် သူတွေ့ကြုံရသည့် Brainiac သည် သူအရင်ကနှင့်မတူပေ။',
  rating: 3.5,
  status: 'Completed',
  image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
  aurthor: 'Geoff Johns',
  artist: 'Gary Frank',
  chapters: [
    {
      id: 1,
      title: 'Chapter 1',
      sub_title: 'First Contact',
      status: false,
      cover_image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
      image: [
        'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/comic-covers/2022/01/DKoS_Cv4_00411_DIGITAL_61eb15ad0488e9.78465565.jpg?itok=G0npqegi',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ],
    },
    {
      id: 2,
      title: 'Chapter 2',
      sub_title: 'The First Encounter',
      status: 'New',
      cover_image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F12%2FDark-Knights-of-Steel_1-2000.jpg',
      image: [
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F12%2FDark-Knights-of-Steel_1-2000.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ]
    },
    {
      id: 3,
      title: 'Chapter 3',
      sub_title: 'Greetings',
      status: 'New',
      cover_image: 'https://s3.amazonaws.com/comicgeeks/comics/covers/large-2949669.jpg',
      image: [
        'https://s3.amazonaws.com/comicgeeks/comics/covers/large-2949669.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/beea3625dd7bbb3c492dfe28aab0fc44._SX1600_QL80_TTD_.jpg',
        'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:392/h:578/q:75/https://bleedingcool.com/wp-content/uploads/2021/08/dark-knights-4.jpg',
        'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/975075/Previews/9513be81216d4970a85274c24d0ffad9._SX1600_QL80_TTD_.jpg',
        'https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/2/17.jpg',
        'https://www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/08/dark-knights-of-steel-preview-3.jpg',
        'https://www.comicsunearthed.com/wp-content/uploads/2021/11/Batman-Medieval-Robins-header.jpg',
        'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/Dark-Knight-Of-Steel-6.jfif-.jpg?q=50&fit=crop&w=740&h=1057&dpr=1.5',
        'https://boombabyhome.files.wordpress.com/2021/11/dark-knights-of-steel-1-page-2.jpg',
        'https://i0.wp.com/batman-news.com/wp-content/uploads/2021/12/Dark-Knights-of-Steel-2-1.png?resize=696%2C382&quality=80&strip=info&ssl=1',
        'https://i0.wp.com/aiptcomics.com/wp-content/uploads/2021/10/COL09.jpg?ssl=1',
        'https://i.insider.com/5c21315f01c0ea07ad186e92?width=700',
      ]
    },
  ]
}

export default function OverviewDetail() {
  const [chapterData, setChapterData] = useState(null)
  const [state, setState] = useState({
    open: false,
    chapter: null,
  });

  const handleClickOpen = (id) => {
    setState({open: true, chapter: id});
    if (typeof window !== "undefined") {
      // Client-side-only code
      document.body.style.cssText = "height: 100%; position: fixed; overflow-y: scroll; -webkit-overflow-scrolling: touch;";
    }
  };
  
  const handleClose = () => {
    setState({open: false, chapter: null});
    if (typeof window !== "undefined") {
      // Client-side-only code
      document.body.style.cssText = null;
    }
  };

  useEffect(() => {
    let id = state.chapter; 
    if (id) {
      let chapter_data = detail_data.chapters.find(chapter => chapter.id === id);
      setChapterData(chapter_data);
    }
  }, [state.chapter])

  return (
    <>
      <DetailInfo data={detail_data} handleClickOpen={handleClickOpen} />
      <FullDialogSlider data={chapterData} state={state} handleClose={handleClose} detail_data={detail_data} handleClickOpen={handleClickOpen} />
      <ChapterList data={detail_data} handleClickOpen={handleClickOpen} />
      <CommentList />
      <Box component="section" sx={{mt: 5, mb: 5}}>
        <Container>
          <CoffeeCard />
        </Container>
      </Box>
      <RecommendedList />
    </>
  );
}