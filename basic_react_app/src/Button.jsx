function doSomething() {
  console.log("Button Clicked!!");
}
export default function Button() {
  return (
    <div>
      <button onClick={doSomething}> ! click Me !</button>
    </div>
  );
}
