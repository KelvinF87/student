import SideBar from "../components/Sidebar";
import { useState } from "react";

export default function DashBoard() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="container-dashboard">
      <SideBar onSelectItem={setSelectedItem} />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Dashboard is a page that displays the user's data and statistics.</p>
        <p>It is a page that displays the user's data and statistics.</p>
        {selectedItem && <h3>{selectedItem}</h3>}
      </div>
    </div>
  );
}
