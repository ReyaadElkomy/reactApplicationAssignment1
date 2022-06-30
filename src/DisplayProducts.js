import React from "react";
import "./styles.css";

function DisplayProducts({ productObject }) {
  return (
    <div style={{ width: "500px", textAlign: "left" }}>
      <h3>
        {" "}
        Product : <span> {productObject.productName} </span> , Price:{" "}
        <span> {productObject.price} </span>{" "}
      </h3>
    </div>
  );
}

export default DisplayProducts;
