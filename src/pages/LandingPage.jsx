import React from 'react';
import ProductCard from '../components/ProductCard';
import NewsLetter from '../components/NewsLetter';
import { landingPageJewels } from '../data/landingPage';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="product-list">
        {landingPageJewels.map((jewel) => (
          <ProductCard
            key={jewel.id}
            product={jewel}
          />
        ))}
      </div>
      <NewsLetter />
    </div>
  );
};

export default LandingPage;