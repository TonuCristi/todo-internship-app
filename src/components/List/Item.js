import { useState } from "react";
import Button from "./Button";
import Info from "./Info";
import EditForm from "./EditForm";
import {
  StyledItem,
  Content,
  Nr,
  Text,
  Controls,
  BtnContainer,
} from "../styles/List/Item.styled";

export default function Item({
  item,
  ind,
  onRemoveItem,
  onCheckItem,
  onEditItem,
}) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <StyledItem>
      <Content>
        <Nr>{ind + 1}</Nr>&nbsp;
        <Text checked={item.checked}>{item.text}</Text>
      </Content>
      <Controls>
        <BtnContainer>
          <Button onClick={() => setIsInfoOpen((prev) => !prev)}>🗒️</Button>
          {isInfoOpen && <Info item={item} ind={ind} />}
        </BtnContainer>
        <BtnContainer>
          <Button onClick={() => setIsEditOpen((prev) => !prev)}>✏️</Button>
          {isEditOpen && <EditForm id={item.id} onEditItem={onEditItem} />}
        </BtnContainer>
        <Button onClick={() => onCheckItem(item.id)}>✅</Button>
        <Button onClick={() => onRemoveItem(item.id)}>❌</Button>
      </Controls>
    </StyledItem>
  );
}
