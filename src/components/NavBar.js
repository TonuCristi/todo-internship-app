import { StyledNavBar } from "./styles/NavBar.styled";
import { NavBarContainer } from "./styles/NavBar.styled";
import { Title } from "./styles/NavBar.styled";
import { StyledLink } from "./styles/NavBar.styled";
import { Links } from "./styles/NavBar.styled";

export default function NavBar() {
  return (
    <NavBarContainer>
      <StyledNavBar>
        <Title>
          <StyledLink to={`/`}>MyToDo📒</StyledLink>
        </Title>

        <Links>
          <li>
            <StyledLink to={`/`}>List📃</StyledLink>
          </li>
          <li>
            <StyledLink to={"statistics"}>Statistics📊</StyledLink>
          </li>
          <li>
            <StyledLink to={"about"}>About🙈</StyledLink>
          </li>
        </Links>
      </StyledNavBar>
    </NavBarContainer>
  );
}
