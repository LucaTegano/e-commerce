import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const increaseQuantity = (productId) => {
    updateQuantity(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    updateQuantity(productId, -1);
  };

  const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
  const subTotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const tax = subTotal * 0.22;
  const total = subTotal + tax;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cart.map((product) => (
                <li key={product.id} className="cart-item">
                  <img src={product.image} alt={product.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(product.id)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(product.id)} className="remove-from-cart">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Sub-Total: {subTotal.toFixed(2)} €</p>
            <p>Tax (22%): {tax.toFixed(2)} €</p>
            <p>Total: {total.toFixed(2)} €</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;