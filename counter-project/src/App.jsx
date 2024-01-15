import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
    if (counter === 20) {
      setcounter(20);
    }
  };
  const removevalue = () => {
    setcounter(counter - 1);
    if (counter === 0) {
      setcounter(0);
    }
  };
  return (
    <>
      <h1>hello counter</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
