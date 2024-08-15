import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        window.alert(`${product.title} has been added to the cart!`);
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Router>
            <div className="App">
                <Header cartItems={cartItems} setCartItems={setCartItems}onSearch={handleSearch} />
                <nav className='nav'>
                   <Link to="/">Products</Link>
                   <Link to="/cart">Cart ({cartItems.length})</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Products addToCart={addToCart} searchQuery={searchQuery} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App

