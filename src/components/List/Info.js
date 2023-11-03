import { StyledInfo } from "../styles/List/Item.styled";

export default function Info({ item, ind }) {
  return (
    <StyledInfo>
      <li className="data">Id: {ind + 1}</li>
      <li className="data">Text: {item.text}</li>
      <li className="data">Creation Date: {item.creationDate}</li>
    </StyledInfo>
  );
}
