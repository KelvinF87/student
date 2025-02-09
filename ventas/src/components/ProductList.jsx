import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import AddProductForm from './AddProductForm';

export default function ProductList({
  products = [],
  setProducts = () => {},
  searchTerm = "",
  addToCart = () => {},
  isPOS = false
}) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {!isPOS && <AddProductForm setProducts={setProducts} products={products} />}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            setProducts={setProducts}
            addToCart={addToCart}
            isPOS={isPOS}
          />
        ))}
      </div>
    </div>
  );
}
