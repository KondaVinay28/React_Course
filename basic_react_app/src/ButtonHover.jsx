function handleHover() {
  console.log("Event triggered on Hover");
}
export default function ButtonHover() {
  return (
    <div>
      <button onMouseOver={handleHover}> ! Hover Me !</button>
    </div>
  );
}
