import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import ItemDetails from "./pages/ItemDetails";
import POSInterface from "./pages/PosVen";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="*" element={<Error404 />} />
				<Route path="/itemdetails/:idDetails" element={<ItemDetails />} /> 
				<Route path="/ventas" element={<POSInterface />}/>

			</Routes>
			<Footer />
		</div>
	);
}

export default App;