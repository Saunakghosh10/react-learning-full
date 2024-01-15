import { useState } from "react";
import "./App.css";

function App() {
  //clicking on the button will add value
  let [counter, setCounter] = useState(5);

  // adding value to counter
  function addvalue() {
    setCounter(counter + 1);
    if (counter == 20) {
      alert("you have reached the limit");
      setCounter(20);
    }
  }
  function removevalue() {
    setCounter(counter - 1);
    if (counter == 0) {
      alert("you have reached the limit");
      setCounter(0);
    }
  }

  return (
    <>
      <h1>counter </h1>
      <button onClick={addvalue}>addvalue {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>removevalue {counter}</button>
    </>
  );
}

export default App;
