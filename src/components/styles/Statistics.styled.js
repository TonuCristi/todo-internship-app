import styled from "styled-components";

export const StyledStatistics = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.statistics.colors.bg};
  border-radius: 2.7rem;
  padding: 2.4rem 4.8rem;
  color: ${({ theme }) => theme.statistics.colors.color};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 767.98px) {
    padding: 2.4rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.statistics.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.statistics.fontSize.title};
  align-self: center;

  @media (max-width: 1399.98px) {
    font-size: 2rem;
  }
`;

export const StatisticsContainer = styled.div`
  justify-self: center;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 991.98px) {
    width: 90%;
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }

  @media (max-width: 575.98px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
  }
`;

export const StatisticsList = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.statistics.fontSize.list};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 767.98px) {
    font-size: 1.4rem;
    align-items: center;
  }
`;

export const Stat = styled.li`
  text-align: center;
`;

export const Emoji = styled.div`
  font-size: ${({ theme }) => theme.statistics.fontSize.emoji};

  @media (max-width: 767.98px) {
    font-size: 20rem;
  }
`;
