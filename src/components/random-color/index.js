import React, { useState } from "react";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomNumber = (value) => {
    return Math.floor(Math.random() * value);
  };

  const generateRandomColor = () => {
    let currentColor = "";
    if (colorType === "hex") {
      const hex = "0123456789ABCDEF";
      currentColor = "#";

      for (let i = 0; i < 6; i++) {
        currentColor += hex[randomNumber(16)];
      }
    } else {
      const red = randomNumber(256);
      const green = randomNumber(256);
      const blue = randomNumber(256);
      currentColor = `rgb(${red}, ${green}, ${blue})`;
    }
    setColor(currentColor);
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <header style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Random Color Generator
      </header>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setColorType("hex")}
          style={{ marginRight: "10px" }}
        >
          Set HEX Color
        </button>
        <button
          onClick={() => setColorType("rgb")}
          style={{ marginRight: "10px" }}
        >
          Set RGB Color
        </button>
        <button onClick={generateRandomColor}>Random Color</button>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", fontSize: "1.5rem" }}
      >
        <h2>{colorType.toUpperCase()} Color:</h2>
        <h2 style={{ marginLeft: "10px" }}>{color}</h2>
      </div>
    </main>
  );
}

export default RandomColor;
