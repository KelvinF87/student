import { Link } from "react-router-dom"
import logo from "../assets/icon-512x512.png"

export default function NavBar() {
  return (
    <nav className="container-navbar">
      <Link to="/dashboard">
        <div className="logo-container">
          <img className="logo" src={logo} alt="FacVent Logo" />
          <h1>FacVent</h1>
        </div>
      </Link>
      <div className="container-ul">
        <ul className="ulNav">
          <li className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/ventas">Ventas</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos">Productos</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

