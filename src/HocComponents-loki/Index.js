import React from "react";
import EnhancedMenu from "./component/Menu";
import EnhancedUsers from "./component/Users"

const Index = () => {
  
  return (
    <div className="d-flex">
      <EnhancedMenu />
      <EnhancedUsers/>
    </div>
  );
};

export default Index;