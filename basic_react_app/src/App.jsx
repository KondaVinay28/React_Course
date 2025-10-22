import "./App.css";
import Button from "./Button";
import ButtonHover from "./ButtonHover";
import CardTab from "./CardTab";
import Counter from "./Counter";
import Form from "./Form";
// import ProductTab from "./ProductTab";

function App() {
  return (
    <>
      {/* <ProductTab /> */}
      <CardTab className="CardTab" />
      <Button />
      <ButtonHover />
      <Form />
      <Counter />
    </>
  );
}

export default App;
