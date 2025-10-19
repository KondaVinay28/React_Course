function handleClick() {
  console.log("Button Clicked!!");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}> ! click Me !</button>
    </div>
  );
}
