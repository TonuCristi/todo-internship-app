import { useState } from "react";

export default function AddForm({ data, onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({
      id: data.length,
      text: inputValue,
      checked: false,
      creationDate: new Date().toLocaleString(),
    });
    setInputValue("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        className="add-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write something..."
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
