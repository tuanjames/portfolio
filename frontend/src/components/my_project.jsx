import { useState } from "react";
import "./styles/aboutme.css";

export default function MyProjectSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
      <button
        className="toggle-bar"
        onClick={() => setOpen(!open)}
      >
        {open ? "▲ Hide Info" : "▼ My Projects"}
      </button>

      <div className={`about-content ${open ? "open" : ""}`}>
        <h3>My Projects:</h3>
        <h1><strong>Project:</strong> I feel lazy now, update later</h1>

      </div>
    </div>
  );
}