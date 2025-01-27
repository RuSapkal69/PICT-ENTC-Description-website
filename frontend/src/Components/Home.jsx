import React from 'react'
import ImageSlider from './ImageSlider'

const Home = () => {
  return (

    <div className='flex justify-center items-center h-screen'>
      <div className='flex-1 text-5xl  text-center'>
        <h1>
          Welcome to the EnTC Department of PICT.
        </h1>
      </div>
      <div className='flex-1 h-[780px] w-6xl m-auto px-4 relative group'>
        <ImageSlider />
      </div>
    </div>
  )
}

export default Home
