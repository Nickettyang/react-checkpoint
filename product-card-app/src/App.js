// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "John"; // Change this to your first name

  return (
    <div className="container mt-5">
      <Card
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <h3 className="mt-3 text-center" style={{ color: "#333" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>
      {firstName && (
        <img
          src="https://via.placeholder.com/50"
          alt="Avatar"
          style={{ borderRadius: "50%", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default App;
