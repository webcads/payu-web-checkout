"use client"

import React from 'react';
import { Product } from '@/interface/product';

interface ProductSelectorProps {
  products: Product[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ products, onChange }) => (
  <select onChange={onChange}>
    <option value="">Select a product</option>
    {products.map((product, index) => (
      <option key={index} value={index.toString()}>
        {product.name}
      </option>
    ))}
  </select>
);

export default ProductSelector;
