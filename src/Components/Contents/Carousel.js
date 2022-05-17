import React from 'react'
import {Link} from 'react-router-dom'
import '../Contents/CarouselStyle.css'



export const Carousel = () => {
  return (
    <div className='hero-img'>
      <div className='heading'>
          <h1 className='carousel-text'>Jason E. Chu</h1>
          <div className='border-b-2 border-zinc-300 w-8/12'></div>
          <p className='carousel-job'>UI /UX Designer  &  Web Developer</p>
      </div>
</div>
  )
}
export default Carousel
