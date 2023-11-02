import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 1.2rem 4.8rem 2.4rem;
`;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer.colors.bg};
  border-radius: 2.7rem;
  padding: 1.2rem;
  color: ${({ theme }) => theme.footer.colors.color};
  font-size: ${({ theme }) => theme.footer.fontSize.size};
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
