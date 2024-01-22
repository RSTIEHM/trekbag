/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  function handleChange(e) {
    setItemText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemText) {
      alert("Can not Be Empty");
      inputRef.current.focus();
      return;
    }
    let newItem = itemText;
    onAddItem(newItem);
    setItemText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        onChange={(e) => handleChange(e)}
        value={itemText}
        type="text"
      />
      <Button>Add Item To List</Button>
    </form>
  );
}

export default AddItemForm;
