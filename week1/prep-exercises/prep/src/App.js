import { useState } from "react";
import style from "./style.css";

function Counter() {
  const [count, setCount] = useState(0);

  const subtractOne = () => {
    setCount(Number(count - 1));
  };

  const addOne = () => {
    setCount(Number(count + 1));
  };
  const feedBack = count < 10 ? "Keep counting..." : `"It's higher than 10!"`;
  return (
    <div className="Counter">
      <h1> count </h1>

      <div className="number-inputs">
        <input type="number" value={count} placeholder="0" />
      </div>

      <button class="btn btn-primary" onClick={addOne}>
        Add 1!
      </button>
      <button class="btn btn-danger" onClick={subtractOne}>
        Add - 1!
      </button>
      <p>{feedBack}</p>
    </div>
  );
}

export default Counter;
