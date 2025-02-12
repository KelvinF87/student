import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, searchTerm, addToCart }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="productGrid">
      {filteredProducts.map((product) => (
        <div key={product._id} className="productCard">
          <img
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            className="productImage"
          />
          <h3>{product.name}</h3>
          <p className="price">{product.price.toFixed(2)}€</p>
          <p className="stock">Stock: {product.quantity}</p>
          <div className='buttonContainer-product'>
            <button
              onClick={() => addToCart(product)}
              className="addButton"
              disabled={product.quantity <= 0}
            >
              Agregar..
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
