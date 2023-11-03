import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: rgb(206, 212, 218);
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  padding: 1.2rem 4.8rem;

  @media (max-width: 991.98px) {
    padding: 1.2rem 2.4rem;
  }

  @media (max-width: 767.98px) {
    padding: 1.2rem;
  }
`;
