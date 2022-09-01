import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/UserDetalis";

const BasicLogin = () => {
  const dispatch = useDispatch();

  const [names, setNames] = useState("");
  const [price, setPrice] = useState('');

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Enter Products Detalis</h3>
          <div className="mb-3 mt-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Product Name"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Price"
              alue={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              dispatch(
                login({
                  names,
                  price,
                })
              );
              setNames('')
              setPrice('')
            }}
          >
            Send to About
          </button>
        </form>
      </div>
      <div className="col-5"></div>
    </div>
  );
};

export default BasicLogin;
