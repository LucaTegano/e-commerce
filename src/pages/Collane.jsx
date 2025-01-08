import React from 'react';
import ProductCard from '../components/ProductCard';
import { collane } from '../data/collane';

const Collane = () => {
  return (
    <div>
      <h1>Collane</h1>
      <div className="product-list">
        {collane.map((necklace) => (
          <ProductCard
            key={necklace.id}
            product={necklace}
          />
        ))}
      </div>
    </div>
  );
};

export default Collane;