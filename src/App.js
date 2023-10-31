
const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [increaseCount, setIncreaseCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(0);

  const handleIncrease = (price) => {
    setIncreaseCount(increaseCount + 1);
    setTotalPrice(totalPrice + price);
  };

  const handleDecrease = (price) => {
    if (totalPrice - price >= 0) {
      setDecreaseCount(decreaseCount + 1);
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="nav w-full h-24 bg-green-300 my-4 p-7 flex items-center justify-between px-6">
        <h1 className="text-2xl text-black font-semibold">Hot Deal's</h1>
        <div className="w-full flex items-center justify-evenly px-10">
      <h1 className="text-2xl font-bold my-4">Total Price: ${totalPrice}</h1>
    </div>
        <div className="flex">
        <i class="fa-solid fa-bag-shopping text-4xl text-black"></i>
          <p className="text-lg pl-1">{increaseCount}</p>
        </div>
      
      </div>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import { items } from "./data";

const Item = ({ item, onIncrease, onDecrease }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    onIncrease(item.price);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrease(item.price);
    }
  };

  return (
    <>

    <div className="border p-4 mb-4">
      <div className="flex items-center justify-center space-x-4">
        <img src={item.image} alt={item.title} className="w-32 h-32" />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p>${item.price}</p>
        </div>
        <div className="flex items-center justify-evenly w-24">
          <button
            onClick={increaseCount}
            className="text-2xl"
          >
            +
          </button>
          <p className="text-lg">{count}</p>
          <button onClick={decreaseCount} className="text-2xl">
            -
          </button>
        </div>
      </div>
    </div>
    
    
    
    </>
  );
};
