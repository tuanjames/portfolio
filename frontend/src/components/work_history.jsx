import { useState } from "react";
import "./styles/aboutme.css";

export default function WorkHistorySection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
      <button
        className="toggle-bar"
        onClick={() => setOpen(!open)}
      >
        {open ? "▲ Hide Info" : "▼ My Wroks History"}
      </button>

      <div className={`about-content ${open ? "open" : ""}`}>
        <h2>Bosch Global Software Technologies</h2>
        <p><strong>Role:</strong> Software Automovetive Embedded Developer </p>
        <p><strong>Duration:</strong> Jul 2021 - Mar 2022</p>
        <p><strong>Customer:</strong>Honda, hino, suzuki</p>
        <p><strong>Description:</strong> Worked on developing and maintaining embedded software solutions for automotive applications, ensuring high performance and reliability in compliance with industry standards.</p>
        <h2>Endava Viet Nam</h2>
        <p><strong>Role:</strong> Software Developer </p>
        <p><strong>Duration:</strong> Mar 2022 - Present</p>
        <h3>Endava's Projects:</h3>
        <h4><strong>Ericsson:</strong></h4>
        <p><strong>Skills:</strong> Python, bash, Jenkins, Docker, microservices</p>
        <p><strong>Description:</strong> 5G core, maintaining, testing, create testcases to validate 5G system features</p>
        <h4><strong>SmartOptics:</strong></h4>
        <p><strong>Skills:</strong> React, Docker, RESTful API, WebSocket, nginx, Postgres</p>
        <p><strong>Description:</strong> Develop and maintain web applications for managing optical network devices, ensuring seamless integration with backend services and databases.</p>
      </div>
    </div>
  );
}