import React, { useReducer } from "react";

function reducer(state, action) {
  //   if (action.type === "plus") {
  //     return state + 1;
  //   } else {
  //     return state - 1;
  //   }
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "changeColor":
      return { ...state, color: !state.color };
    case "userInput":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

const UseReducerHook = () => {
  const [val, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    data: "",
  });

  //   function plus() {
  //     dispatch({ type: "plus" });
  //   }
  //   function minus() {
  //     dispatch({ type: "minus" });
  //   }
  return (
    <div>
      <h1 style={{ color: val.color ? "red" : "blue" }}>Counter :{val.count}</h1>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "plus" })}
      >
        +
      </button>
      <button
        className="btn btn-danger ms-3"
        onClick={() => dispatch({ type: "minus" })}
      >
        -
      </button>
      <button
        className="btn btn-info ms-3"
        onClick={() => dispatch({ type: "changeColor" })}
      >
        Change Text Color
      </button>
      <input
        className="form-control mt-4"
        type="text"
        placeholder="enter now...."
        value={val.data}
        onChange={(e) =>
          dispatch({ type: "userInput", payload: e.target.value })
        }
      />
      <h2 style={{ color: val.color ? "green" : "pink" }}>{val.data}</h2>
    </div>
  );
};

export default UseReducerHook;
