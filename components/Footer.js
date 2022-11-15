import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 <span className='italic font-extrabold'>ARTISM</span> All rights reserverd</p>
      <p className="icons">
      
        <AiFillInstagram className='cursor-pointer' />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
