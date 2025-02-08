import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import AddProductForm from './AddProductForm';

export default function ProductList({ products, setProducts, searchTerm, addToCart, isPOS }) {
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

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func,
  searchTerm: PropTypes.string,
  addToCart: PropTypes.func,
  isPOS: PropTypes.bool,
};

ProductList.defaultProps = {
  setProducts: () => {},
  searchTerm: "",
  addToCart: () => {},
  isPOS: false,
};
