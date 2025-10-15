function Price({ oldPrice, newPrice }) {
  return (
    <div>
      <span className="oldPrice">{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span>{newPrice}</span>
    </div>
  );
}
export default Price;
