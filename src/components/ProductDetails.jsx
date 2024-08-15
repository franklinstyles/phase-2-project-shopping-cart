import React from 'react';

const ProductDetails = ({ selectedProduct, add }) => {
    return (
        <div className="details">
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={add}>BUY 🤑</button>
        </div>
    );
};


export default ProductDetails;
