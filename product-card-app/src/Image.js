// src/Image.js
import React from "react";
import product from "./product";

const Image = () => {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{ width: "100%", borderRadius: "10px" }}
    />
  );
};

export default Image;
