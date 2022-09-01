import React from "react";

const ProductsHook = React.memo(({ name, price, func }) => {
  console.log("called");
  return (
    <div className="p-5 bg-light shadow-lg rounded">
      <h1>{name}</h1>
      <p className="text-danger">Rs.{price}</p>
      <button className="btn btn-danger" onClick={func}>
        Add To Card
      </button>
    </div>
  );
});

export default ProductsHook; 
