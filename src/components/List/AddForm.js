import { useState } from "react";
import { StyledAddForm, Input, AddBtn } from "../styles/List/AddForm.styled";

export default function AddForm({ data, onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    if (e.target.value.split(" ").length <= 5) setInputValue(e.target.value);
  };

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
        onChange={handleChange}
        placeholder="Write something..."
      />
      <AddBtn>Add</AddBtn>
    </StyledAddForm>
  );
}
