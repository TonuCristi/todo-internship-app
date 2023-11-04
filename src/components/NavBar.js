import {
  StyledNavBar,
  NavBarContainer,
  Title,
  StyledLink,
  Links,
  BurgerMenu,
  Line,
  BurgerContainer,
  BurgerTitle,
  BurgerStyledLink,
} from "./styles/NavBar.styled";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    document.body.style.overflowY = !isOpen ? "hidden" : "auto";
  };

  const burgerStyle = {
    backgroundColor: `${isOpen ? "rgb(33, 37, 41)" : "rgb(252, 196, 25)"}`,
  };

  const lineStyle = {
    backgroundColor: `${isOpen ? "rgb(252, 196, 25)" : "rgb(33, 37, 41)"}`,
  };

  return (
    <NavBarContainer>
      <StyledNavBar>
        <Title>
          <StyledLink to={`/`}>MyToDo📒</StyledLink>
        </Title>

        <BurgerContainer onClick={handleClick} style={burgerStyle}>
          <BurgerMenu>
            <Line style={lineStyle} />
            <Line style={lineStyle} />
            <Line style={lineStyle} />
          </BurgerMenu>
        </BurgerContainer>

        <Links
          onClick={handleClick}
          style={{
            right: `${isOpen ? "0%" : "-100%"}`,
          }}
        >
          <li>
            <BurgerTitle>
              <BurgerStyledLink to={`/`}>MyToDo📒</BurgerStyledLink>
            </BurgerTitle>
          </li>
          <li>
            <StyledLink to={`/`}>List📃</StyledLink>
          </li>
          <li>
            <StyledLink to={"statistics"}>Statistics📊</StyledLink>
          </li>
          <li>
            <StyledLink to={"about"}>About😺</StyledLink>
          </li>
        </Links>
      </StyledNavBar>
    </NavBarContainer>
  );
}
