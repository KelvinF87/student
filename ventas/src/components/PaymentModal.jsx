import React from 'react';
import PropTypes from 'prop-types';

const PaymentModal = ({
  isOpen,
  closeModal,
  selectedClient,
  calculateTotal,
  paymentMethod,
  setPaymentMethod,
  paymentAmount,
  handlePaymentAmountChange,
  change,
  handlePaymentSubmit,
  isProcessing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Procesar Pago</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="payment-details">
            <p>Cliente: {selectedClient?.name}</p>
            <p>Total a pagar: ${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="payment-inputs">
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
            </select>

            {paymentMethod === 'efectivo' && (
              <>
                <input
                  type="number"
                  placeholder="Monto recibido"
                  value={paymentAmount}
                  onChange={(e) => handlePaymentAmountChange(e.target.value)}
                />
                {change > 0 && (
                  <div className="change-amount">
                    Cambio a devolver: ${change.toFixed(2)}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="modal-actions">
            <button type="button" onClick={closeModal} disabled={isProcessing}>
              Cancelar
            </button>
            <button type="submit" disabled={isProcessing || (paymentMethod === 'efectivo' && !paymentAmount)}>
              {isProcessing ? "Procesando..." : "Confirmar Pago"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedClient: PropTypes.object,
  calculateTotal: PropTypes.func.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  setPaymentMethod: PropTypes.func.isRequired,
  paymentAmount: PropTypes.string.isRequired,
  handlePaymentAmountChange: PropTypes.func.isRequired,
  change: PropTypes.number.isRequired,
  handlePaymentSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default PaymentModal;
