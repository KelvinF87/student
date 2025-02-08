import SideBar from "../components/Sidebar";
import { useState } from "react";
import TableList from "../components/TableListItem";
import Productos from "../data/productos.json";
import Clientes from "../data/clientes.json"
import TableListCliente from "../components/TableListCliente";
import POSInterface from "./PosVen";

export default function DashBoard() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const Components = () => {
	switch (selectedComponent) {
	  case "Productos":
		return <TableList data={Productos} />;
	  case "Ventas":
		return <POSInterface />;
	  case "Clientes":
		return <TableListCliente data={Clientes} />;
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
		<img src="" alt="" />
	  </div>
	</div>
  );
}

