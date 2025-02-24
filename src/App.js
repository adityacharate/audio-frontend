import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import UploadForm from "./components/UploadForm";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("library");

  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar onSectionChange={setCurrentSection} />
        <div className="content">
          {currentSection === "library" && <h2>Your Music Library</h2>}
          {currentSection === "upload" && <UploadForm />}
          {currentSection === "player" && <AudioPlayer />}
        </div>
      </div>
    </div>
  );
}

export default App;
