import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import UploadForm from "./components/UploadForm";  // <-- Import UploadForm
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <h2>Welcome to Your Music Library</h2>
          <UploadForm />  {/* <-- Add UploadForm Here */}
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
