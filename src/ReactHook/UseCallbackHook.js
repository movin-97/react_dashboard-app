import React, { useCallback, useState } from "react";
import ProductsHook from "./ProductsHook";

const UseCallbackHook = () => {
  const [card, setCard] = useState([
    { name: "Product 1", price: "234" },
    { name: "Product 2", price: "294" },
  ]);
  const [conuter, setConuter] = useState(0);
  const [cardCount, setCardCount] = useState(0);

  const AddToCard = useCallback(()=>{
      setCardCount(cardCount+1)
  },[cardCount])
  return (
    <div className="">
      <div className="row">
        <h1 className="text-center mt-5 display-1">{cardCount}</h1>
        {card.map((item, i) => {
          return (
            <div className="col-6 mt-5" key={i}>
              <ProductsHook name={item.name} price={item.price} func={AddToCard} />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <h1>{conuter}</h1>
        <button
          className="btn btn-success"
          onClick={() => setConuter(conuter + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
