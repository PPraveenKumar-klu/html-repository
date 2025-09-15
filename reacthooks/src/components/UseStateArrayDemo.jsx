import { useState } from "react";

function UseStateArrayDemo() {
  //   const [items, setItems] = useState([]);

  //   function addItem() {
  //     const newItem = `Item ${items.length + 1}`;
  //     setItems([...items, newItem]);
  //   }

  const [items, setItems] = useState([]);

  function addItem() {
    confirm("Are you sure you want to add a new item?");
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  }

  return (
    <div>
      <button type="button" onClick={addItem} className="btn btn-primary m-3">
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateArrayDemo;
