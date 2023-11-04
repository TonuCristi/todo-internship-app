import { useState } from "react";
import { EditBtn, Input, StyledEditForm } from "../styles/List/EditForm.styled";

function EditForm({ id, onEditItem, onCloseEditForm }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    if (e.target.value.split(" ").length <= 5) setInputValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length > 0) {
      onEditItem(id, inputValue);
      onCloseEditForm();
    }
  }

  return (
    <StyledEditForm onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="New text..."
      />
      <EditBtn className="edit-btn">Edit</EditBtn>
    </StyledEditForm>
  );
}

export default EditForm;
