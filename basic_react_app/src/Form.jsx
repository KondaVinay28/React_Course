import React from "react";
function handleFormSubmit(event) {
  event.preventDefault(); //Prevents default behaviour of the form
  console.log(event);
}

function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}

export default Form;
