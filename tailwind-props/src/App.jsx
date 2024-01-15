import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Card name="ABOUT ME" username="click me" />
      <Card username="click me" name="ABOUT ME" />
    </>
  );
}

export default App;
