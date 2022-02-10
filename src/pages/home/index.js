import React from 'react'
import ItemList from 'src/views/item-list';
import HomeBanner from 'src/views/banner-slick-slider';

export default function Home(){
  return (
    <>
      <HomeBanner />
      <ItemList />
    </>
  );
}