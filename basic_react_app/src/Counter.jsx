let count = 0;
function handleClick() {
  count++;
  console.log(count);
}

function Counter() {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Counter</button>
    </>
  );
}

export default Counter;
