import React, { useMemo, useState } from "react";
import { useCounter, useTimer } from './CustomHooks';

const useMemoHook = () => {
  // const [count, setCount] = useState(10);
  

  
  const count= useTimer();
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  function memoHook() {
    console.log(`change`);
    return Math.max(data);
  }
// const incr = () => {
  //   setCount(count + 1);
  // };
  useMemo(() => memoHook(), []);

  
 
  return (
    <div>
      <h1>UseMemo</h1>
      <div className="">
        <h3>{count}</h3>
        <h3>{JSON.stringify(data)}</h3>
        <button className="btn btn-success" >
          +
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={() => setData([...data, Math.round(count * Math.random())])}
        >
          Change MemoHook
        </button>
      </div>
    </div>
  );
};

export default useMemoHook;
