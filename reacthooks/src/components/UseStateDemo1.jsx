import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function UseStateDemo1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>UseStateDemo1</h2>

      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h3>{count}</h3>

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default UseStateDemo1;
