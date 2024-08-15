import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            alert("Proceeding to checkout...");
            navigate('/checkout');
        } else {
            alert("Your cart is empty!");
        }
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <p>Price: ${item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))
            )}
            <div className="checkout">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;