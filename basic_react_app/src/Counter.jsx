import { useState } from "react";

// let count = 0;
// function handleClick() {
//   count++;
//   console.log(count);
// }

function Counter() {
  const [count, setCount] = useState(0);
  /* hooks should be defined inside a functional component */

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Counter;
