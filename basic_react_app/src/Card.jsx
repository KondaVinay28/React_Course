import Price from "./Price";
function Card({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let descriptions = [
    "8000 DPI",
    "Intuitive touch surface",
    "Designed for ipad pro",
    "Wirelss mouse 2.4 GHz",
  ];
  return (
    <div className="Card">
      <h4>{title}</h4>
      <h5>{descriptions[idx]}</h5>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Card;
