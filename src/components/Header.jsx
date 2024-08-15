import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = ({ onSearch, cartItems }) => {

  const handleSearchChange = (e) => {
    onSearch(e.target.value);  
  };

  return (
    <div className='header'>
        <h1>FOOD PALACE</h1>
        <div className='search'>
            <input 
              className='search'
              id='search'
              placeholder='Search...'
              type='text'
              onChange={handleSearchChange} 
            />
        </div>
        <Link className='cart' to={"/cart"}>
          <MdOutlineShoppingCart />
          {cartItems.length > 0 && (
            <span>{cartItems.length}</span>
          )}
        </Link>
    </div>
  );
};

export default Header;