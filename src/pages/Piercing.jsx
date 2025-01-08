import React from 'react';
import ProductCard from '../components/ProductCard';
import { piercing } from '../data/piercing';

const Piercing = () => {
  return (
    <div>
      <h1>Piercings</h1>
      <div className="product-list">
        {piercing.map((piercingItem) => (
          <ProductCard
            key={piercingItem.id}
            product={piercingItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Piercing;