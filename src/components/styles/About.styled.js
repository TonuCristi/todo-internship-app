import styled from "styled-components";

export const StyledAbout = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.about.colors.bg};
  border-radius: 2.7rem;
  padding: 2.4rem 4.8rem;
  color: ${({ theme }) => theme.about.colors.color};
  font-size: ${({ theme }) => theme.about.fontSize.description};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.8rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.about.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.about.fontSize.title};
  align-self: center;
`;

export const Description = styled.p`
  width: 50%;
  line-height: 1.6;
  text-align: center;
`;
