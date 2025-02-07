import SideBar from "../components/Sidebar";
import { useState } from "react";
import TableList from "../components/TableList";
import Productos from "../data/productos.json";

export default function DashBoard() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const Components = () => {
    switch (selectedComponent) {
      case "Productos":
        return <TableList data={Productos} />;
      case "Ventas":
        return <div>Contenido de Ventas</div>;
      case "Clientes":
        return <div>Contenido de Clientes</div>;
      case "Reporte":
        return <div>Contenido de Reporte</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container-dashboard">
      <SideBar onSelectComponents={setSelectedComponent} />
      <div className="dashboard">
        <h1>Dashboard</h1>
        {selectedComponent && <h3>{selectedComponent}</h3>}
        {Components()}
      </div>
    </div>
  );
}

