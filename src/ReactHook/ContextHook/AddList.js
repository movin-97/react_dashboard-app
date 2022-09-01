import React, { useContext } from "react";
import { Context } from "./ContextAPI";

const AddList = () => {
  const  [user, setUser] = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user])
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 bg-dark rounded  p-4 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="name" className="form-label text-white"></label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="component"
              placeholder="Enter Component Name"
              onChange={(e)=>setUser([...user,e.target.value])}
            />
          </div>
          {/* <div className="col-12">
            <label htmlFor="dec" className="form-label">{user.name}</label>
            <input
              type="text"
              id="dec"
              className="form-control"
              name="component"
              placeholder="Enter Dec"
              onChange={(e)=>setUser(e.target.value)}
            />
          </div> */}
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default AddList;
