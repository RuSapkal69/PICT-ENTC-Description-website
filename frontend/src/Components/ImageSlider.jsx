import React, { useState, useEffect } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s' },
    { url: 'https://t4.ftcdn.net/jpg/02/01/78/01/360_F_201780104_hetXS26W8alnsbDKbpnr4sVizJfiO12w.jpg' },
    { url: 'https://static.vecteezy.com/system/resources/thumbnails/025/287/278/small_2x/beautiful-landscape-in-the-mountains-nature-background-ai-generated-photo.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s' },
    { url: 'https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg' },
    { url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Woods_hike_1296x728-header-1-1296x728.jpg?w=1155&h=1528' },
    { url: 'https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg' },
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className='w-full max-w-[1200px] mx-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[600px] rounded-xl bg-center bg-cover transition-all duration-500'
      ></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition hidden group-hover:block'
      >
        <BsFillArrowLeftCircleFill size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition hidden group-hover:block'
      >
        <BsFillArrowRightCircleFill size={30} />
      </button>
    </div>
  );
};

export default ImageSlider;
