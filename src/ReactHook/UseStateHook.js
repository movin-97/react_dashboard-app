import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('')
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-6">
            <h1>{count}</h1>
            <a className="btn btn-primary btn-sm" role="button" onClick={()=>setCount(count+1)}>
              +
            </a>
            <a className="btn btn-danger btn-sm ms-2" role="button" onClick={()=>setCount(count-1)}>
              -
            </a>
          </div>
          <div className="col">
            <label htmlFor="user" className="form-label">User Name</label>
            <input type="text" className="form-control" placeholder="enter value" value={user} onChange={(e)=>setUser(e.target.value)}/>
            <a className="btn btn-primary btn-sm mt-3" role="button" onClick={()=>console.log(user)}>click</a>
            <h1>{user}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;
