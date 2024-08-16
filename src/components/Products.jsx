import React, { useState, useEffect } from 'react';
import Burger from '../assets/Screenshot_from_2024-08-14_14-42-02-removebg-preview.png';

const Products = ({ addToCart, searchQuery }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shopping-cart-server-mocha.vercel.app/items')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const scrollToProducts = () => {
        const productListElement = document.querySelector('.product-list');
        productListElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="product-container">
            <div className='welcome'>
                <div className='statement'>
                    <h1>Welcome to FoodPalace</h1>
                    <h2>It's not just food,<br />It's an experience</h2>
                    <p>Discover the best food in town</p>
                    <button className='start-buying' onClick={scrollToProducts}>
                        Start Buying
                    </button>
                </div>
                <div className='welcome-image'>
                    <img src={Burger} alt="Food-palace" />
                </div>
            </div>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <h2>{product.title}</h2>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToCart(product)}>BUY 🤑</button>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Products;
