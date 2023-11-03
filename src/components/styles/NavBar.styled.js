import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  width: 100%;
  padding: 2.4rem 4.8rem 1.2rem;
  position: relative;

  @media (max-width: 991.98px) {
    padding: 1.2rem 2.4rem;
  }

  @media (max-width: 767.98px) {
    padding: 1.2rem;
  }
`;

export const StyledNavBar = styled.nav`
  background-color: ${({ theme }) => theme.navBar.colors.bg};
  border-radius: 2.7rem;
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerContainer = styled.div`
  display: none;
  position: relative;
  background-color: ${({ theme }) => theme.navBar.colors.color};
  border-radius: 100%;
  padding: 0.4rem;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  @media (max-width: 767.98px) {
    display: block;
    z-index: 4;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 2.2rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.navBar.colors.bg};
  border-radius: 2.7rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.navBar.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.navBar.fontSize.title};
  align-self: center;
`;

export const BurgerTitle = styled.h1`
  display: none;
  color: ${({ theme }) => theme.navBar.colors.bg};
  font-weight: 900;
  font-size: ${({ theme }) => theme.navBar.fontSize.title};
  align-self: center;

  @media (max-width: 1399.98px) {
    font-size: 2rem;
  }

  @media (max-width: 991.98px) {
    font-size: 1.8rem;
  }

  @media (max-width: 767.98px) {
    display: block;
  }
`;

export const Links = styled.ul`
  font-size: ${({ theme }) => theme.navBar.fontSize.link};
  display: flex;
  gap: 4.8rem;
  list-style: none;
  font-weight: 700;

  @media (max-width: 1399.98px) {
    font-size: 1.6rem;
  }

  @media (max-width: 991.98px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767.98px) {
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.navBar.colors.color};
    color: ${({ theme }) => theme.navBar.colors.bg};
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    transition: all 0.3s ease;

    :only-child {
      @media (max-width: 767.98px) {
        color: ${({ theme }) => theme.navBar.colors.bg};
      }
    }
  }
`;

export const BurgerStyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.navBar.colors.color};

  @media (max-width: 767.98px) {
    color: ${({ theme }) => theme.navBar.colors.bg};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.navBar.colors.color};
`;
