import React from 'react'
import { BsFillBasketFill, BsSearch } from "react-icons/bs";
import Link from 'next/link';

import { useStateContext} from '../context/StateContext';
import Cart from './Cart';

function Header() {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
          <div className='navbar-container flex items-center'>
              <p className='logo font-extrabold'>
                  <Link href="/">ARTISM</Link>
              </p>

              {/* searchbar */}
              

              {/* Right */}
              <div className='text-black flex items-center text-xs space-x-6 whitespace-nowrap'>
                  <div className=''>
                  <p>Hello Nababrata Deb</p>
                  <Link href='/login'>
                      <p className='font-extrabold md:text-sm link'>Log Out</p>
                  </Link>
                  </div>

                  <div onClick={()=> setShowCart(true)} className=' relative link flex items-center cart-icon'>
                      
                      <span className='absolute top-0 ring-0 md:right-10 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold'>{totalQuantities}</span>
                      <BsFillBasketFill className='h-10' />
                      <p className='hidden md:inline font-extrabold md:text-sm mx-2 '>Cart</p>
                  </div>
                  
          </div>
          {showCart&& <Cart/>}
          </div>
          
  )
}

export default Header