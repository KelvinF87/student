import { Link } from "react-router-dom"
import logo from "../assets/icon-512x512.png"
export default function NavBar() {
	return (
		<nav className="container-navbar">
			<Link to={"/"}>
			   <div className="logo-container">
				<img className="logo" src={logo} alt="" srcSet="image-2x.jpg 2x" />
				<h1>  FacVent</h1>
			   </div>
			</Link>
			<div className="container-ul">
			
					<ul className="ulNav">
						<li className="nav-item active">Dashboar</li>
						<li className="nav-item">Productos</li>
						<li className="nav-item">contact</li>
					</ul>
			
				<button className="btn-yellow navbar-toggler" type="button" data-toggle="collapse" data-target="#">
					🛒Car
				</button>
			</div>
		</nav>
	)

	
}