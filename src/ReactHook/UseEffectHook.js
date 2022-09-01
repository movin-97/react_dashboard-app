import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [card, setCard] = useState([]);
  const baseURL = "https://fakestoreapi.com/products?limit=4";

  const getData = async () => {
    let cardItems = await axios
      .get(baseURL)
      .then((resp) => {
        setCard(resp.data);
        console.log(resp.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      {card.map((items) => {
        return (
          <div className="card m-2 p-3" style={{ width: "16rem" }} key={items.id}>
            <img src={items.image} className="card-img-top" width={400} height={200} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{items.category}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">$.{items.price}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectHook;
