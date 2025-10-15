import Card from "./Card";
function CardTab() {
  return (
    <div className="CardTab">
      <Card title="Logitech Mx Master 35" idx={0} />
      <Card title="Apple pencil(2nd Gen)" idx={1} />
      <Card title="Zebronics Zeb-Transformer" idx={2} />
      <Card title="Portronics Toad 23" idx={3} />
    </div>
  );
}

export default CardTab;
