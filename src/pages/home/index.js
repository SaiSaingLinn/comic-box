import React from 'react'
import ItemList from 'src/views/item-list';
import HomeBanner from 'src/views/banner-slick-slider';

export default function Home(props){
  const { data } = props;
  return (
    <>
      <HomeBanner />
      <ItemList data={data} />
    </>
  );
}