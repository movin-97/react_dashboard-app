import React from "react";
import AddList from "./AddList";
import ContextProvider from "./ContextAPI";
import NewList from "./NewList";

const ContextApi = () => {
  return (
    <ContextProvider>
      <div className="row">
        <AddList/>
        <NewList />
      </div>
    </ContextProvider>
  );
};

export default ContextApi;
