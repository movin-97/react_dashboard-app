import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="" >
      <div className="row bg-primary text-white" style={{height:'50px'}}>
        <div className="col-12 d-flex justify-content-around align-items-center">
          <NavLink to={"home"} className="nav-link">
            Home
          </NavLink>
          <NavLink to={"products"} className="nav-link">
            Products
          </NavLink>
          <NavLink to={"service"} className="nav-link">
            Service
          </NavLink>
          <NavLink to={"about"} className="nav-link">
            About
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
