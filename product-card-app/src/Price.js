// src/Price.js
import React from "react";
import product from "./product";

const Price = () => {
  return (
    <p style={{ color: "#28a745", fontSize: "1.25rem" }}>{product.price}</p>
  );
};

export default Price;
