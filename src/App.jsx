import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Characters from "./pages/characters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Characters />
    </>
  );
}

export default App;
