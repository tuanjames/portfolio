import { useState, useRef  } from "react";
import "./styles/aboutme.css";

export default function AboutSection() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);


  const handleToggle = () => {
        setOpen(!open);

        // Play music only when opening
        if (!open && audioRef.current) {
        audioRef.current.play().catch((err) => console.log("Audio play blocked:", err));
        } else if (open && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        }
    };
  return (
    <div className="about-container">
      <button
        className="toggle-bar" 
        onClick={handleToggle}
      >
        {open ? "▲ Hide Info" : "▼ About Me"}
      </button>
      <audio ref={audioRef} src="./bg_music.mp3" preload="auto" />
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
