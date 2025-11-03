import { useState } from "react";
import "./styles/aboutme.css";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about-container">
      <button
        className="toggle-bar"
        onClick={() => setOpen(!open)}
      >
        {open ? "▲ Hide Info" : "▼ About Me"}
      </button>

      <div className={`about-content ${open ? "open" : ""}`}>
        <p><strong>Name:</strong> Tuan Anh Huynh</p>
        <p><strong>Role:</strong> Software Developer</p>
        <p><strong>Birthday:</strong> 15 March 1999</p>
        <p><strong>Current company:</strong> Endava Viet Nam</p>
        <p><strong>Hobbies:</strong> video games, badmintion ...</p>
        <p><strong>Email:</strong>huynhtuan12309@gmail.com</p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/huynh.anh.tuan.859337/" target="_blank" rel="noreferrer">Facebook Profile</a></p>
        
      </div>
    </div>
  );
}
