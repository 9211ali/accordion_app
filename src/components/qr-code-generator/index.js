import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div style={{ margin: "10px" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter Some Value"
          value={input}
          className="qr-input"
        />
        <button
          type="button"
          onClick={generateQrCode}
          disabled={input?.trim() == ""}
          className="qr-btn"
        >
          Generate Code
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
    </div>
  );
};

export default QrCodeGenerator;
