import { useState } from "react";

function EditForm({ id, onEditItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onEditItem(id, inputValue);
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        className="edit-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="New text..."
      />
      <button className="edit-btn">Edit</button>
    </form>
  );
}

export default EditForm;
