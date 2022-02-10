import React from 'react'
import Slider from 'react-slick'

const listing_data = [
  {
    id: 1,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 2,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 3,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
  {
    id: 4,
    title: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    id: 5,
    title: 'Item 2',
    price: '$200',
    image: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    id: 6,
    title: 'Item 3',
    price: '$300',
    image: 'https://picsum.photos/id/1019/1000/600/',
  },
]

const HomeBanner = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  }

  return (
    <div>
      <Slider {...settings}>
        { 
          listing_data?.map((x, key) => (
            <React.Fragment key={key}>
              <img src={x.image} alt={x.title} />
            </React.Fragment>
          ))
        }
      </Slider>        
    </div>
  )
}

export default HomeBanner
