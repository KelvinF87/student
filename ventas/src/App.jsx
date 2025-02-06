import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import Error404 from "./pages/ItemDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
