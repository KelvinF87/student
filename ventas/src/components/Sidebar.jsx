
export default function SideBar({ onSelectComponents }) {
	return (
	  <div className="sidebar">
		<h2>Side Bar</h2>
		<button className="btn-default btn-max" onClick={() => onSelectComponents("Productos")}>📦Productos</button>
		<button className="btn-default btn-max" onClick={() => onSelectComponents("Ventas")}>🛒Ventas</button>
		<button className="btn-default btn-max" onClick={() => onSelectComponents("Clientes")}>🕵️‍♀️Clientes</button>
		<button className="btn-default btn-max" onClick={() => onSelectComponents("Reporte")}>📑Reporte</button>
	  </div>
	);
  }
  