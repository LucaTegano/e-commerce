import React from 'react';
import ProductCard from '../components/ProductCard';
import { orecchini } from '../data/orecchini';

const Orecchini = () => {
  return (
    <div>
      <h1>Orecchini</h1>
      <div className="product-list">
        {orecchini.map((earring) => (
          <ProductCard
            key={earring.id}
            product={earring}
          />
        ))}
      </div>
    </div>
  );
};

export default Orecchini;