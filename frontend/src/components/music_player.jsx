import { useRef, useState } from "react";
import "./styles/music.css";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <button onClick={toggleMusic}>
        {playing ? "⏸ Pause Music" : "▶ Click Me :)"}
      </button>
      <audio ref={audioRef} src="/bg_music.mp3" loop preload="auto" />
    </div>
  );
}
