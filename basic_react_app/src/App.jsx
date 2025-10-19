import "./App.css";
import Button from "./Button";
import ButtonHover from "./ButtonHover";
import CardTab from "./CardTab";
// import ProductTab from "./ProductTab";

function App() {
  return (
    <>
      {/* <ProductTab /> */}
      <CardTab className="CardTab" />
      <Button />
      <ButtonHover />
    </>
  );
}

export default App;
