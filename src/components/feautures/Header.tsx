import React from 'react'
import { useAppSelector } from '../../customHooks/hooks'
import { getCartItems } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { assets, icons } from '../../utils/assets'
import { textMessage } from '../../utils/constants'
import SeachBar from '../common/SeachBar'

const Header = () => {

  const cartItems = useAppSelector(getCartItems)
  const cartItemCount = cartItems.length
  return (
    <header className="bg-blue-600 text-white w-full ">
      <div className="container  w-full flex items-center justify-around py-2 mx-auto ">
        {/* Left side - Logo */}
        <Link to="/">
          <div className="w-8 flex items-center md:mx-8">
            <img
              src={assets.logo}
              alt="Flipkart"
              className="max-h-8 md:w-auto"
            />
            <span className='hidden md:block px-1  font-semibold font-mono text-xs'>{textMessage.CompanyName}</span>
          </div>
        </Link>

        {/* Center --Search bar icon */}
        <SeachBar />

        {/* Right side - Cart */}
        <Link to="/cart">
          <div className="relative flex items-center">
            {icons.cart}
            {cartItemCount > 0 && (
              <span className="absolute top-4 left-4 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
            <div className='text-white ml-2 font-bold'>
              Cart
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header