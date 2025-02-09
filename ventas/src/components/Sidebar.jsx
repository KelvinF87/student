import PropTypes from "prop-types"

export default function SideBar({ onSelectComponents }) {
  const buttons = [
    { label: "🎛️Dashboard", value: "Dashboard" },
    { label: "📦Productos", value: "Productos" },
    { label: "🛒Ventas", value: "Ventas" },
    { label: "🕵️‍♀️Clientes", value: "Clientes" },
    { label: "📑Reporte", value: "Reporte" },
  ]

  return (
    <div className="sidebar">
      {/* <h2>Side Bar</h2> */}
      {buttons.map((button) => (
        <button key={button.value} className="btn-default btn-max" onClick={() => onSelectComponents(button.value)}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

SideBar.propTypes = {
  onSelectComponents: PropTypes.func.isRequired,
}

