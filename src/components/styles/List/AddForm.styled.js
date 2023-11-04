import styled from "styled-components";

export const StyledAddForm = styled.form`
  background-color: ${({ theme }) => theme.list.colors.bg};
  position: absolute;
  top: 130%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 2.7rem;
  border: 3px solid ${({ theme }) => theme.list.colors.color};
  box-shadow: 0rem 1.2rem 1.2rem rgb(252, 196, 25, 0.2);
  z-index: 2;

  @media (max-width: 767.98px) {
    top: 105%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export const Input = styled.input`
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
    width: 100%;
  }
`;

export const AddBtn = styled.button`
  background-color: ${({ theme }) => theme.list.colors.color};
  color: ${({ theme }) => theme.list.colors.bg};
  border: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.list.fontSize.btn};
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 2.7rem;
  cursor: pointer;
`;
