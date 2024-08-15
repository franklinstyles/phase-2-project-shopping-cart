import React from 'react'
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = ({onSearch}) => {
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
        <div className='cart'>
        <MdOutlineShoppingCart />
        </div>
    </div>
  )
}

export default Header