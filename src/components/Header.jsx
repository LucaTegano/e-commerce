import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/icons/cart-icon.svg';
import hamburgerIcon from '../assets/icons/hamburger-icon.svg.png'; // Updated path
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h2>Jewels-Shop</h2>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/collane" onClick={toggleMenu}>Collane</Link>
        </li>
        <li>
          <Link to="/orecchini" onClick={toggleMenu}>Orecchini</Link>
        </li>
        <li>
          <Link to="/piercing" onClick={toggleMenu}>Piercing</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" />
      </div>
      <div className="header-icons">
        <Link to="/cart">
          <div className="cart-icon">
            <img src={cartIcon} alt="Cart" />
            {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;