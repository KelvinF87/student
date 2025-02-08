import React from 'react';
import PropTypes from 'prop-types';

const ClientSelector = ({ clients, selectedClient, setSelectedClient }) => {
  return (
    <select
      value={selectedClient?._id || ""}
      onChange={(e) => {
        const client = clients.find(c => c._id === e.target.value);
        setSelectedClient(client);
      }}
      className="clientSelect"
    >
      <option value="">Seleccionar Cliente</option>
      {clients.map((client) => (
        <option key={client._id} value={client._id}>
          {client.name}
        </option>
      ))}
    </select>
  );
};

ClientSelector.propTypes = {
  clients: PropTypes.array.isRequired,
  selectedClient: PropTypes.object,
  setSelectedClient: PropTypes.func.isRequired,
};

export default ClientSelector;
