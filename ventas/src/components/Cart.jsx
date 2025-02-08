import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, updateQuantity, removeFromCart, calculateTotal, selectedClient, openPaymentModal }) => {
  return (
    <div className="cartSection">
      <h2 className="cartTitle">Carrito</h2>
      {selectedClient && (
        <div className="selected-client">
          Cliente: {selectedClient.name}
        </div>
      )}
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="cartList">
          {cart.map((item) => (
            <li key={item._id} className="cartItem">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="quantityControl">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item._id)} className="removeButton">
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <button
        className="checkoutButton"
        disabled={cart.length === 0 || !selectedClient}
        onClick={openPaymentModal}
      >
        Procesar Pago
      </button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  calculateTotal: PropTypes.func.isRequired,
  selectedClient: PropTypes.object,
  openPaymentModal: PropTypes.func.isRequired,
};

export default Cart;
