// import { useState } from "react";
// import PureComp from "./classes/PureComp";
// import UseCallbackHook from "./ReactHook/UseCallbackHook";
// import UseReducerHook from "./ReactHook/UseReducerHook";
// import ContextApi from "./ReactHook/ContextHook";
import UseEffectHook from "./ReactHook/UseEffectHook";
// import UseMemoHook from "./ReactHook/UseMemoHook";
// import UseStateHook from "./ReactHook/UseStateHook";
// import ValidateForm from "./Views/Auth/ValidateForm";
import RouterProvider from "./Router";

import UserDataList from "./HOC/HocComponents/UserList";

function App() {
  return (
    <div className="container">

      {/* {
        text ? <h1>Hello</h1> : <h1>Not Hello</h1>
      } */}
      <RouterProvider />

      {/* <ValidateForm/> */}

      {/* <UseStateHook/> */}

      <UseEffectHook/>

      {/* <ContextApi/> */}

      {/* <UseMemoHook /> */}

      {/* <UseReducerHook/> */}

      {/* <UseCallbackHook/> */}
      
      {/* <UserDataList/> */}

      {/* <PureComp/> */}

      {/* <button className="btn btn-success" onClick={()=> setClick(!click)}>Click</button>
      {click ? <ValidateForm/> : <ContextApi/>} */}
    </div>
  );
}

export default App;
