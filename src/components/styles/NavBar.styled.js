import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  width: 100%;
  padding: 2.4rem 4.8rem 1.2rem;
`;

export const StyledNavBar = styled.nav`
  background-color: ${({ theme }) => theme.navBar.bg};
  border-radius: 2.7rem;
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.navBar.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.navBar.titleFS};
  align-self: center;
`;

export const Links = styled.ul`
  font-size: ${({ theme }) => theme.navBar.linkFS};
  display: flex;
  gap: 4.8rem;
  list-style: none;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.navBar.color};
`;
