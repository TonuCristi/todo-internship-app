import { useState } from "react";
import Button from "./Button";
import Info from "./Info";
import EditForm from "./EditForm";

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
    <div className="item">
      <div className="item-text">
        <span className="item-nr">{ind + 1}</span>&nbsp;
        <div className={`${item.checked ? "checked" : ""}`}>{item.text}</div>
      </div>
      <div className="controls">
        <div className="info-container">
          <Button
            className="info-btn"
            onClick={() => setIsInfoOpen((prev) => !prev)}
          >
            🗒️
          </Button>
          {isInfoOpen && <Info item={item} />}
        </div>
        <div className="edit-container">
          <Button
            className="edit-show-btn"
            onClick={() => setIsEditOpen((prev) => !prev)}
          >
            ✏️
          </Button>
          {isEditOpen && <EditForm id={item.id} onEditItem={onEditItem} />}
        </div>
        <Button className="check-btn" onClick={() => onCheckItem(item.id)}>
          ✅
        </Button>
        <Button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
          ❌
        </Button>
      </div>
    </div>
  );
}
