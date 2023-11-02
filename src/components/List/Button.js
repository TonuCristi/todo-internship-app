import { Btn } from "../styles/List/Item.styled";

export default function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
