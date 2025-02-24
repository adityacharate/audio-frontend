import React from "react";
import { FaPlay } from "react-icons/fa";
import "./SongList.css";

const songs = [
  { id: 1, title: "Song One", artist: "Artist A", cover: "https://via.placeholder.com/150" },
  { id: 2, title: "Song Two", artist: "Artist B", cover: "https://via.placeholder.com/150" },
  { id: 3, title: "Song Three", artist: "Artist C", cover: "https://via.placeholder.com/150" },
  { id: 4, title: "Song Four", artist: "Artist D", cover: "https://via.placeholder.com/150" },
];

function SongList() {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <div key={song.id} className="song-card">
          <img src={song.cover} alt={song.title} className="song-cover" />
          <div className="song-info">
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
          <FaPlay className="play-icon" />
        </div>
      ))}
    </div>
  );
}

export default SongList;
