import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product, setProducts, addToCart, isPOS }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleUpdate = () => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p._id === editedProduct._id ? editedProduct : p))
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setProducts((prevProducts) => prevProducts.filter((p) => p._id !== product._id));
  };

  return (
    <div className="product-card">
      <img src={product.image_url || "/placeholder.svg"} alt={product.name} />
      {isEditing ? (
        <>
          <input
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <input
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
          <input
            value={editedProduct.quantity}
            onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
          />
          <button onClick={handleUpdate}>Guardar</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <p>Cantidad: {product.quantity}</p>
          {isPOS ? (
            <button onClick={() => addToCart(product)} className="addButton" disabled={product.quantity <= 0}>
              Agregar
            </button>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)}>Editar</button>
              <button onClick={handleDelete}>Eliminar</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  setProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  isPOS: PropTypes.bool,
};

ProductItem.defaultProps = {
  addToCart: () => {},
  isPOS: false,
};

export default ProductItem;
