import { useState } from "react";
import "./styles/aboutme.css";

export default function MyEduSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
      <button
        className="toggle-bar"
        onClick={() => setOpen(!open)}
      >
        {open ? "▲ Hide Info" : "▼ My Education & Skills"}
      </button>

      <div className={`about-content ${open ? "open" : ""}`}>
        <h3>Education</h3>
        <p><strong>University:</strong> Ho Chi Minh City University of Technology and Education</p>
        <p><strong>Degree:</strong> Automation Engineer</p>
        <p><strong>Graduation Year:</strong> 2022</p>
        <h3>Skills</h3>
        <p><strong>Programming Languages:</strong> Python, bash, c#,c</p>
        <p><strong>Technologies:</strong> desgin system controller, robot dynamic, forward/inverse robot kinematic</p>
        <p><strong>Actuator:</strong> Servo Control, Sensor read/modify values, GUI desgin</p>
        <h3>Thesis</h3>
        <p><strong>Title:</strong> Design and Build a 6-DOF Robotic Arm Controlled</p>
        <p><strong>Description:</strong> The project involves designing and building a 6-degree-of-freedom robotic arm that can be controlled through various methods GUI, and predefined scripts. The arm is capable of performing complex tasks with precision and flexibility.</p>
        
      </div>
    </div>
  );
}