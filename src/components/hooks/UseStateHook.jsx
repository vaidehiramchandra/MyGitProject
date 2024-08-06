import React, { useState } from "react";

function UseStateHook(props) {
  const [fruit, setFruit] = useState("Apple");
  const handleClick = () => {
    setFruit("Mango");
  };
  return (
    <div>
      <h4>We learn useState hook in js</h4>
      <h3>fruit name : {fruit}</h3>

      <button onClick={handleClick}> Change Fruit</button>
    </div>
  );
}

export default UseStateHook;
