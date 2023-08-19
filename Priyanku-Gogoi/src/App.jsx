/* eslint-disable no-unused-vars */
import { useState } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-5 ">
        Bubble Clicker
      </h1>
      <GameBoard />
    </>
  );
}

export default App;
