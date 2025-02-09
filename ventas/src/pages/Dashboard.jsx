// https://www.ag-grid.com/charts/react/quick-start/?utm_source=charts-homepage&utm_medium=features-section&utm_campaign=homepage-cta
import { useState, useEffect } from "react";
import SideBar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import ClientList from "../components/ClientList";
import POSInterface from "./PosVen";
import Productos from "../data/productos.json";
import Clientes from "../data/clientes.json";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");
  const [products, setProducts] = useState(Productos);
  const [clients, setClients] = useState(Clientes);

  const [summary, setSummary] = useState({
    totalProducts: 0,
    totalClients: 0,
    totalSales: 0,
  });

  useEffect(() => {
    // Calcular el resumen
    setSummary({
      // totalProducts: products.length ,
      totalProducts: products.reduce(
        (total, product) => total + product.quantity,
        0
      ),
      totalTipoProductos: products.length,
      totalClients: clients.length,
      totalSales: products.reduce(
        (total, product) => total + product.sales * product.price,
        0
      ),
    });
  }, [products, clients]);

  const Components = {
    Dashboard: (
      <div className="dashboard-summary">
        <h2>Resumen</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Productos</h3>
            <p>{summary.totalProducts}</p>
          </div>
          <div className="summary-card">
            <h3>Total Tipo Productos</h3>
            <p>{summary.totalTipoProductos}</p>
          </div>
          <div className="summary-card">
            <h3>Total Clientes</h3>
            <p>{summary.totalClients}</p>
          </div>
          <div className="summary-card">
            <h3>Total Ventas</h3>
            <p>{summary.totalSales.toFixed(2)} €</p>
          </div>
        </div>
      </div>
    ),
    Productos: <ProductList products={products} setProducts={setProducts} />,
    Ventas: <POSInterface products={products} />,
    Clientes: <ClientList clients={clients} setClients={setClients} />,
    Reporte: <div>Contenido de Reporte</div>,
  };

  return (
    <div className="container-dashboard">
      <SideBar onSelectComponents={setSelectedComponent} />
      <div className="dashboard">
        <h1>{selectedComponent}</h1>
        {Components[selectedComponent] || null}
      </div>
    </div>
  );
}
