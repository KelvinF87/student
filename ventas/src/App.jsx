import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import DashBoard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import POSInterface from "./pages/PosVen";
import Error404 from "./components/Error404";
import productsData from "./data/productos.json";
import "./App.css";

function App() {
  const [products] = useState(productsData);
  // const [selectedComponent, setSelectedComponent] = useState("Dashboard")
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard  />} />
        <Route path="/itemdetails/:idDetails" element={<ItemDetails />} />
        <Route path="/ventas" element={<POSInterface products={products} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
