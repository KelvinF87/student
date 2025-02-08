import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddProductForm = ({ setProducts, products }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image_url: "",
  });

  const handleAdd = () => {
    if (newProduct.name && newProduct.price) {
      const productToAdd = {
        ...newProduct,
        _id: Date.now().toString(),
        sales: 0,
      };
      setProducts([...products, productToAdd]);
      setNewProduct({ name: "", price: "", quantity: "", image_url: "" });
    }
  };

  return (
    <div className="add-product-form">
      <input
        type="text"
        placeholder="Nombre"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={newProduct.image_url}
        onChange={(e) => setNewProduct({ ...newProduct, image_url: e.target.value })}
      />
      <button onClick={handleAdd}>Añadir Producto</button>
    </div>
  );
};

AddProductForm.propTypes = {
  setProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default AddProductForm;
