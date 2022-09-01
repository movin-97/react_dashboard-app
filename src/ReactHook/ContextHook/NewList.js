import React, { useContext } from "react";
import { Context } from "./ContextAPI";

const NewList = () => {
  const [user, setUser] = useContext(Context);
  return (
    <div>
      <div className="col-3"></div>
        <div className="col-6 bg-dark rounded  p-4 mt-3 w-100">
            {user.map((item,i)=>{
              return(
                <h1 key={i} className="text-white">{item}</h1>
              )
            })}
        </div>
        <div className="col-3"></div>
    </div>
  );
};

export default NewList;
