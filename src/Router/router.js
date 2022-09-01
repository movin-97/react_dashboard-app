import React from "react";
import { Navigate } from "react-router-dom";
import HomeComp from "../Components/HomeComp";
import About from "../Views/About";
import Login from "../Views/Auth/Login";
import Home from "../Views/Home";
import Products from "../Views/Products";
import Service from "../Views/Service";

const router = [
  {
    path: "/",
    component: <Navigate to={"dashboard"} replace />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/dashboard",
    component: <HomeComp />,
    children: [
      {
        path: "",
        component: <Navigate to={"home"} replace />,
      },
      {
        path: "home",
        component: <Home />,
      },
      {
        path: "about",
        component: <About />,
      },
      {
        path: "products",
        component: <Products />,
      },
      {
        path: "service",
        component: <Service />,
      },
    ],
  },
];
export default router;
