import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

function increment() {
  setInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);
}

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>
        <img
          src="Snip20250716_81.png"
       width={20}
          alt="bellicon"
        />
      </button>
    </div>
  );
};
