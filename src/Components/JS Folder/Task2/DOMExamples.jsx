import React, { useState } from "react";

export default function DOMExample() {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [bgColor, setBgColor] = useState("#f5f5f5");

  const switchTheme = () => {
    setDark(!dark);
  };

  const increaseFont = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFont = () => {
    setFontSize(fontSize > 10 ? fontSize - 2 : 10);
  };

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: `${fontSize}px`,
        backgroundColor: bgColor,
        color: dark ? "#f5f5f5" : "#333",
        padding: "20px",
        transition: "all 0.3s ease",
        minHeight: "100vh",
      }}
      className={dark ? "dark" : ""}
    >
      <h1>DOM Manipulation Example</h1>
      <p>
        This is a sample text. Use the controls below to change theme, font size,
        and background color.
      </p>

      <div className="controls" style={{ marginBottom: "20px" }}>
        <button
          onClick={switchTheme}
          style={btnStyle}
        >
          Toggle Dark / Light Theme
        </button>

        <button onClick={increaseFont} style={btnStyle}>
          Increase Font
        </button>
        <button onClick={decreaseFont} style={btnStyle}>
          Decrease Font
        </button>

        <button onClick={() => changeBackground("#f5f5f5")} style={btnStyle}>
          White BG
        </button>
        <button onClick={() => changeBackground("#ffeb3b")} style={btnStyle}>
          Yellow BG
        </button>
        <button onClick={() => changeBackground("#90caf9")} style={btnStyle}>
          Blue BG
        </button>
        <button onClick={() => changeBackground("#a5d6a7")} style={btnStyle}>
          Green BG
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  margin: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  transition: "0.2s",
};
