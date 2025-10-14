import "./Product.css";
function Product({ title }) {
  let colors = { color: title == "Hello, Vinay" ? "yellow" : "red" };
  return (
    <div className="Product">
      <h4 style={colors}>{title}</h4>
    </div>
  );
}

export default Product;
