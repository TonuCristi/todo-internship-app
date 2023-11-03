import styled from "styled-components";

export const StyledList = styled.div`
  height: 100%;
  /* width: 100%; */
  background-color: ${({ theme }) => theme.list.colors.bg};
  border-radius: 2.7rem;
  padding: 2.4rem 4.8rem;
  color: ${({ theme }) => theme.list.colors.color};
  font-weight: 700;

  @media (max-width: 767.98px) {
    padding: 2.4rem;
  }
`;

export const CatFact = styled.p`
  font-size: ${({ theme }) => theme.list.fontSize.catFact};
  text-align: center;
  margin-bottom: 1.6rem;
  line-height: 1.4;

  @media (max-width: 1399.98px) {
    font-size: 1.4rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.list.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.list.fontSize.title};
  align-self: center;

  @media (max-width: 1399.98px) {
    font-size: 2rem;
  }
`;

export const TitleUtilities = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
  margin-bottom: 2.4rem;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const ShowFormBtn = styled.button`
  background: none;
  border: 3px solid ${({ theme }) => theme.list.colors.color};
  color: ${({ theme }) => theme.list.colors.color};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.list.fontSize.showFormBtn};
  padding: 0.6rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2.7rem;
  cursor: pointer;
`;

export const StyledSearchBar = styled.input`
  width: 50%;
  font-size: ${({ theme }) => theme.list.fontSize.input};
  font-weight: 700;
  font-family: inherit;
  border: 3px solid ${({ theme }) => theme.list.colors.color};
  border-radius: 2.7rem;
  padding: 0.6rem 1.2rem;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.list.colors.white};

  @media (max-width: 767.98px) {
    width: 80%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: scroll;
  overflow-x: hidden;
  /* height: 50vh; */
  width: 50%;
  margin: 0 auto;
  padding: 0 0 0 4rem;

  &::-webkit-scrollbar {
    width: 1.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.list.colors.color};
    border-radius: 1.3rem;
  }

  @media (max-width: 767.98px) {
    width: 90%;
    padding: 0 0 0 1.2rem;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;
