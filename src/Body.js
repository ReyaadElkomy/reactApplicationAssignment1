import React from "react";
import DisplayProducts from "./DisplayProducts";

function Body() {
  const products = [
    {
      productName: "Dell Labtop",
      price: 8900
    },
    {
      productName: "LENEVO Labtop",
      price: 12500
    },
    {
      productName: "Note X3 Mobile Phone",
      price: 4500
    },
    {
      productName: "iPad X3",
      price: 5620
    }
  ];

  //const allProducts = products.map(item => <h3> Product : {item.productName}, Price: {item.price} </h3> );
  const allProducts = products.map((items) => (
    <DisplayProducts productObject={items} />
  ));

  return (
    <div className="bodyStyle">
      {/* {allProducts} */}
      {allProducts}
    </div>
  );
}

export default Body;
