import React, { useState, useContext, useEffect } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const relatedItems = products.filter(p => p.category === product.category && p.id !== product.id);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div className="related-items">
        <h3>Related Items</h3>
        <div className="product-list">
          {relatedItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;