import React from "react";
import { useSelector } from "react-redux";

const Service = () => {
  const users = useSelector((state) => state.user.value);
  console.log("service");
  return (
    <div className="mt-5 p-5 bg-success text-white">
      <h1>All State List Item</h1>
      <div className="">
        <h1>
          {users.names}
        </h1>
        <p>
          {users.price}
        </p>
      </div>
    </div>
  );
};

export default Service;
