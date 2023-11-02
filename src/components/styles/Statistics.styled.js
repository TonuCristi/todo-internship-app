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
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.statistics.colors.color};
  font-weight: 900;
  font-size: ${({ theme }) => theme.statistics.fontSize.title};
  align-self: center;
`;

export const StatisticsContainer = styled.div`
  justify-self: center;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatisticsList = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.statistics.fontSize.list};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Emoji = styled.div`
  font-size: ${({ theme }) => theme.statistics.fontSize.emoji};
`;
