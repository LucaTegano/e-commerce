import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"> 
      <p>&copy; {new Date().getFullYear()} Jewels-Shop All rights reserved.</p>
      <p>Contact us: jewels-shop@gmail.com</p>
    </footer>
  );
};

export default Footer;