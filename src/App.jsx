"use client";
import { useState, useEffect } from "react";
import CentisibleWidget from "./components/CentsibleWidgets";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [smallWidget, setSmallWidget] = useState(false);

  // Dark mode class toggle on body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div
  style={{
    height: "100vh",       // Fix height exactly viewport height
    width: "100vw",
    backgroundColor: darkMode ? "#121212" : "#fff",
    color: darkMode ? "#fff" : "#111",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,           // Less padding to save vertical space
    boxSizing: "border-box",
    fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
    transition: "all 0.3s ease",
    overflow: "hidden",
  }}
>

      {/* Title */}
      <h1
  style={{
    fontSize: 48,             
    fontWeight: 700,
    marginBottom: 0,
    textAlign: "center",
    color: darkMode
          ? " #ffffff"
          : " #2a2a2a",
  }}
>
  Be Centsible on the Go
</h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 20,
          color: darkMode ? "#bbb" : "#666",
          textAlign: "center",
          maxWidth: 360,
        }}
      >
        Your pocket-sized finance assistant, inspired by Apple’s clean design
        language.
      </p>

      {/* Toggles */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 20,
        }}
      >
        <button
          onClick={() => setDarkMode((d) => !d)}
          style={{
            padding: "10px 20px",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#444" : "#ddd",
            color: darkMode ? "#fff" : "#111",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          onClick={() => setSmallWidget((s) => !s)}
          style={{
            padding: "10px 20px",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#444" : "#ddd",
            color: darkMode ? "#fff" : "#111",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          aria-label="Toggle Widget Size"
        >
          {smallWidget ? "Content Widget" : "Fill Widget"}
        </button>
      </div>

      {/* Budget Widget */}
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff"
        }}
      >
        <CentisibleWidget 
        darkMode={darkMode} 
        smallWidget={smallWidget} 
        />
      </div>
    </div>
  );
}

export default App;
