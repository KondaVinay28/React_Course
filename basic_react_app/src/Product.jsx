import "./Product.css";
function Product({ userName, textColor }) {
  let colors = { color: textColor };
  return (
    <div className="Product">
      <h4 style={colors}>{userName}</h4>
    </div>
  );
}

export default Product;
