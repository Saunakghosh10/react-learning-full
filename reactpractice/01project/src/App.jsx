import "./App.css";
import Chai from "./Chai";

function App() {
  const username = "johndoe";
  const password = 213123;

  return (
    <>
      <Chai />
      <h1>hello world {username}</h1>
      <h1>ur password {password}</h1>
    </>
  );
}

export default App;
