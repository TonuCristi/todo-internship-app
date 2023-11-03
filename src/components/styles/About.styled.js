import styled from "styled-components";

export const StyledAbout = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.about.colors.bg};
  border-radius: 2.7rem;
  padding: 2.4rem 4.8rem;
  color: ${({ theme }) => theme.about.colors.color};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

  @media (max-width: 1399.98px) {
    gap: 4.8rem;
  }

  @media (max-width: 991.98px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767.98px) {
    padding: 2.4rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.about.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.about.fontSize.title};
  align-self: center;

  @media (max-width: 1399.98px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  width: 50%;
  font-size: ${({ theme }) => theme.about.fontSize.description};
  line-height: 1.6;
  text-align: center;

  @media (max-width: 1399.98px) {
    font-size: 1.6rem;
    width: 70%;
  }

  @media (max-width: 991.98px) {
    font-size: 1.4rem;
    width: 90%;
  }
`;

export const Emoji = styled.div`
  font-size: 6.4rem;
`;
