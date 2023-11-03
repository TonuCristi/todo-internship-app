import { useState } from "react";
import { StyledAddForm, Input, AddBtn } from "../styles/List/AddForm.styled";

export default function AddForm({ data, onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({
      id: data.length,
      text: inputValue.toLowerCase(),
      checked: false,
      creationDate: new Date().toLocaleString(),
    });
    setInputValue("");
  }

  return (
    <StyledAddForm onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write something..."
      />
      <AddBtn>Add</AddBtn>
    </StyledAddForm>
  );
}
