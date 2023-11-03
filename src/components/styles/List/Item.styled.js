import styled from "styled-components";

// ----- Item -----
export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.list.fontSize.item};
  padding: 0.6rem 1.2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Nr = styled.span`
  border: 3px solid ${({ theme }) => theme.list.colors.color};
  border-radius: 2.7rem;
  padding: 0.4rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

// ----- Controls -----
export const Controls = styled.div`
  display: flex;
  gap: 0.6rem;

  @media (max-width: 575.98px) {
    gap: 0.4rem;
  }
`;

export const Btn = styled.button`
  background: none;
  border: none;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.list.fontSize.btn};
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  position: relative;
`;

// ----- Info -----
export const StyledInfo = styled.div`
  list-style-type: none;
  background-color: ${({ theme }) => theme.list.colors.bg};
  position: absolute;
  top: 130%;
  right: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 2.7rem;
  border: 3px solid ${({ theme }) => theme.list.colors.color};
  box-shadow: 0rem 1.2rem 1.2rem rgb(252, 196, 25, 0.2);
  width: 35rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 575.98px) {
    top: 130%;
    left: 0;
    transform: translateX(-70%);
    width: 20rem;
  }
`;
