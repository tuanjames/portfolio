import { useState } from "react";
import "./styles/aboutme.css";

export default function MyStackSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
      <button
        className="toggle-bar"
        onClick={() => setOpen(!open)}
      >
        {open ? "▲ Hide Info" : "▼ My Stacks"}
      </button>

      <div className={`about-content ${open ? "open" : ""}`}>
        <p><strong>Languages:</strong> Python, Golang, React, bash</p>
        <p><strong>Technologies:</strong> Docker, Git, RESTful API, WebSocket, Jenkins, nginx</p>
        <p><strong>Cloud Platforms:</strong> AWS</p>
        <p><strong>WorkFlow:</strong> Scrum/agile</p>
        <p><strong>Database:</strong> Postgres, mySQL, mongoDB</p>
       
        
      </div>
    </div>
  );
}
