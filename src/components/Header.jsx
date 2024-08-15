import React, { useState } from 'react'
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


const Header = ({onSearch, cartItems, setCartItems}) => {

  // const [cartItems, setCartItems] = useState([])

  const handleBuy = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }
  return (
    <div className='header'>
        <h1>FOOD PALACE</h1>
        <div className='search'>
            <input 
            className='search'
            id='search'
            placeholder='Search...'
            text='text'
            />
        </div>
        <Link className='cart' to={"/cart"}>
        <MdOutlineShoppingCart />
          {cartItems.length > 0 && (
          <span>{cartItems.length}</span>
            

          )}
        
        </Link>
    </div>
  )
}

export default Header
