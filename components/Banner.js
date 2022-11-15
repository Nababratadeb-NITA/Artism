import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { urlFor } from '../lib/client';


function Banner({ banner }) {
  return (
      <div className='relative'>
          <div className='absolute w-full h-28 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10' />
          <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
          ><div>
                  <img className='rounded-t-lg' src={urlFor(banner.image)} alt="" />
                  
            </div>
          </Carousel>
    </div>
  )
}

export default Banner