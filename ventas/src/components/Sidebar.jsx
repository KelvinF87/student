export default function SideBar({ onSelectItem }) {
	return (
	  <div className="sidebar">
		<h2>Side Bar</h2>
		<button className="btn-default btn-max" onClick={() => onSelectItem("Productos")}>📦Productos</button>
		<button className="btn-default btn-max" onClick={() => onSelectItem("Ventas")}>🛒Ventas</button>
		<button className="btn-default btn-max" onClick={() => onSelectItem("Clientes")}>🕵️‍♀️Clientes</button>
		<button className="btn-default btn-max" onClick={() => onSelectItem("Reporte")}>📑Reporte</button>
	  </div>
	);
  }
  