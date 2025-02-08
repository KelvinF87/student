import { useState } from "react";
import PropTypes from "prop-types";

export default function ClientList({ clients, setClients }) {
  const [editingClient, setEditingClient] = useState(null);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEdit = (client) => {
    setEditingClient(client);
  };

  const handleUpdate = (updatedClient) => {
    setClients(
      clients.map((c) => (c._id === updatedClient._id ? updatedClient : c))
    );
    setEditingClient(null);
  };

  const handleDelete = (clientId) => {
    setClients(clients.filter((c) => c._id !== clientId));
  };

  const handleAdd = () => {
    if (newClient.name.length >= 3 && newClient.email.includes("@")) {
      const clientToAdd = {
        ...newClient,
        _id: Date.now().toString(),
      };
      setClients([...clients, clientToAdd]);
      setNewClient({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="client-list">
      <div className="add-client-form">
        <input
          type="text"
          placeholder="Nombre"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newClient.email}
          onChange={(e) =>
            setNewClient({ ...newClient, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={newClient.phone}
          onChange={(e) =>
            setNewClient({ ...newClient, phone: e.target.value })
          }
        />
        <button onClick={handleAdd}>Añadir Cliente</button>
      </div>
      <div className="client-grid">
        {clients.map((client) => (
          <div key={client._id} className="client-card">
            {editingClient && editingClient._id === client._id ? (
              <>
                <input
                  value={editingClient.name}
                  onChange={(e) =>
                    setEditingClient({ ...editingClient, name: e.target.value })
                  }
                />
                <input
                  value={editingClient.email}
                  onChange={(e) =>
                    setEditingClient({
                      ...editingClient,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  value={editingClient.phone}
                  onChange={(e) =>
                    setEditingClient({
                      ...editingClient,
                      phone: e.target.value,
                    })
                  }
                />
                <button onClick={() => handleUpdate(editingClient)}>
                  Guardar
                </button>
              </>
            ) : (
              <>
                <h3>{client.name}</h3>
                <p>Email: {client.email}</p>
                <p>Teléfono: {client.phone}</p>
                <button onClick={() => handleEdit(client)}>Editar</button>
              </>
            )}
            <button onClick={() => handleDelete(client._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
  setClients: PropTypes.func.isRequired,
};
