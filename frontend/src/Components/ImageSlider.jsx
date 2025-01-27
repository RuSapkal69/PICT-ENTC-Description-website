import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/02/01/78/01/360_F_201780104_hetXS26W8alnsbDKbpnr4sVizJfiO12w.jpg',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/025/287/278/small_2x/beautiful-landscape-in-the-mountains-nature-background-ai-generated-photo.jpg',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s',
    },
    {
      url: 'https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg',
    },
    {
      url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Woods_hike_1296x728-header-1-1296x728.jpg?w=1155&h=1528',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg',
    },
  ];


  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const preSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const Arrow = ({ direction, onClick }) => (
    <div className='hidded group-hover: block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer' style={{[direction]: "20px"}}>
      {direction === 'left' ? <BsFillArrowLeftCircleFill onClick={onClick} size={25} /> : <BsFillArrowRightCircleFill onClick={onClick}  size={25} />}
    </div>
  );


  return (
    <div className='max-w-[900px] h-[780px] w-6xl m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      <Arrow direction='left' onClick={preSlide} />
      <Arrow direction='right' onClick={nextSlide} />
    </div>
  )
}

export default ImageSlider
