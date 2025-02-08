import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clientesData from '../data/clientes.json';
import ProductList from '../components/ProducListVenta';
import Cart from '../components/Cart';
import PaymentModal from '../components/PaymentModal';
import ClientSelector from '../components/ClientSelector';

const POSInterface = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('efectivo');
  const [change, setChange] = useState(0);
  const [clients] = useState(clientesData);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToCart = useCallback((product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item._id === product._id);
      if (existingItem) {
        return currentCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((currentCart) => currentCart.filter((item) => item._id !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId, newQuantity) => {
      if (newQuantity === 0) {
        removeFromCart(productId);
      } else {
        setCart((currentCart) =>
          currentCart.map((item) =>
            item._id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    },
    [removeFromCart]
  );

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (!selectedClient) {
      alert('Por favor seleccione un cliente');
      return;
    }

    const total = calculateTotal();
    const receivedAmount = parseFloat(paymentAmount);

    if (receivedAmount < total) {
      alert('El monto recibido es menor al total');
      return;
    }

    setIsProcessing(true);

    try {
      // Simular procesamiento de pago
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Crear objeto de venta
      const sale = {
        id: Date.now(),
        client: selectedClient,
        items: cart,
        total: total,
        paymentMethod: paymentMethod,
        receivedAmount: receivedAmount,
        change: receivedAmount - total,
        date: new Date().toISOString(),
      };

      // Aquí podrías guardar la venta en tu backend
      console.log('Venta realizada:', sale);

      // Limpiar el carrito y cerrar modal
      setCart([]);
      setSelectedClient(null);
      setPaymentAmount('');
      setChange(0);
      setIsPaymentModalOpen(false);
      alert('¡Venta realizada con éxito!');
    } catch (error) {
      alert('Error al procesar el pago');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentAmountChange = (value) => {
    setPaymentAmount(value);
    const total = calculateTotal();
    if (value >= total) {
      setChange(value - total);
    } else {
      setChange(0);
    }
  };

  return (
    <div className="container">
      {/* <h1 className="title">Punto de Venta</h1> */}
      <div className="layout">
        <div className="productsSection">
          <div className="search-section">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchInput"
            />
            <ClientSelector
              clients={clients}
              selectedClient={selectedClient}
              setSelectedClient={setSelectedClient}
            />
          </div>
          <ProductList
            products={products}
            searchTerm={searchTerm}
            addToCart={addToCart}
          />
        </div>
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          calculateTotal={calculateTotal}
          selectedClient={selectedClient}
          openPaymentModal={() => setIsPaymentModalOpen(true)}
        />
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        closeModal={() => setIsPaymentModalOpen(false)}
        selectedClient={selectedClient}
        calculateTotal={calculateTotal}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        paymentAmount={paymentAmount}
        handlePaymentAmountChange={handlePaymentAmountChange}
        change={change}
        handlePaymentSubmit={handlePaymentSubmit}
        isProcessing={isProcessing}
      />
    </div>
  );
};

POSInterface.propTypes = {
  products: PropTypes.array.isRequired,
};

export default POSInterface;
