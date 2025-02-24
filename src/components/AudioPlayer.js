import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import "./AudioPlayer.css";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <FaStepBackward className="icon" />
      {isPlaying ? (
        <FaPause className="icon" onClick={togglePlayPause} />
      ) : (
        <FaPlay className="icon" onClick={togglePlayPause} />
      )}
      <FaStepForward className="icon" />
    </div>
  );
}

export default AudioPlayer;
