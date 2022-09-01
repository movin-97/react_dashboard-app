import React from "react";
import { useSelector } from "react-redux";

const About = React.memo(() => {
  const users = useSelector((state) => state.user.value);
  console.log("About")
  return (
    <div className="mt-5 p-5 bg-success text-white">
      <h1>Last State Updata</h1>
      <div className="bg-light  rounded shadow-lg p-5 m-3">
        <h1 className="text-success">
          Product : <span className="text-dark">{users.names}</span>
        </h1>
        <h2 className="text-success">
          Price :{" "}
          <span
            className={`${users.price === 0 ? "text-danger" : "text-dark"}`}
          >
            {users.price}.Rs
          </span>
        </h2>
      </div>
    </div>
  );
});

export default About;
