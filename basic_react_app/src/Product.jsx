import "./Product.css";
function Product({ title }) {
  let color = { color: "orange" };
  return (
    <div className="Product">
      <h4 style={color}>{title} </h4>
    </div>
  );
}

export default Product;
