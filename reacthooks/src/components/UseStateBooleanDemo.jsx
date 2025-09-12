import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function UseStateBooleanDemo() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <h1>UseStateBooleanDemo</h1>
      {isVisible && <p>This is a toggled paragraph.</p>}
      <button
        className="btn btn-primary"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Paragraph
      </button>
    </>
  );
}

export default UseStateBooleanDemo;
