import { useState } from "react";
import { EditBtn, Input, StyledEditForm } from "../styles/List/EditForm.styled";

function EditForm({ id, onEditItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onEditItem(id, inputValue);
  }

  return (
    <StyledEditForm onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="New text..."
      />
      <EditBtn className="edit-btn">Edit</EditBtn>
    </StyledEditForm>
  );
}

export default EditForm;
