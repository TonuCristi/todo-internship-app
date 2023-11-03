import { FcStatistics } from "react-icons/fc";
import { Container } from "../components/styles/Container.styled";
import {
  Emoji,
  StatisticsContainer,
  StatisticsList,
  StyledStatistics,
  Title,
  Stat,
} from "../components/styles/Statistics.styled";

function Statistics({ data }) {
  // - The count of todos
  const toDoCount = data.length;

  // - The count of words
  const wordCount = data
    .map((item) => item.text.split(" "))
    .reduce((acc, curVal) => acc + curVal.length, 0);

  // - This function gets the most common words
  function getCommonWords() {
    const countCompare = wordCount / toDoCount;
    const wordsUses = [];
    const allWords = data.flatMap((item) => item.text.split(" "));

    // - Here we find the unique words
    const uniqueWords = allWords.filter(
      (word, i) => allWords.indexOf(word) === i
    );

    // - Here we count how many times the unique words were used
    for (let i = 0; i < uniqueWords.length; i++) {
      let curWord = uniqueWords[i];
      let count = 0;
      for (let j = 0; j < allWords.length; j++) {
        if (allWords[j] === curWord) {
          count++;
        }
      }
      wordsUses.push({ word: curWord, uses: count });
    }

    return wordsUses.filter((word) => word.uses >= Math.round(countCompare));
  }

  // - This function check if there are any todos
  const checkToDos = (stat) => (data.length ? stat : "No todos");

  const stats = [
    {
      name: "Nr. todos",
      value: toDoCount,
    },
    {
      name: "Nr. words",
      value: wordCount,
    },
    {
      name: "Nr. letters",
      value: data
        .map((item) => item.text.split(" ").join(""))
        .reduce((acc, curVal) => acc + curVal.length, 0),
    },
    {
      name: "Oldest todo",
      value: data.map((item) => item.creationDate)[data.length - 1],
    },
    {
      name: "Newest todo",
      value: data.map((item) => item.creationDate)[0],
    },
    {
      name: "Most common words",
      value: getCommonWords().length
        ? getCommonWords().map((item, i) => (
            <span key={item.word}>{`${i > 0 ? ", " : ""}${item.word}`}</span>
          ))
        : "Not enough words",
    },
  ];

  return (
    <Container>
      <StyledStatistics>
        <Title>Statistics📊</Title>
        <StatisticsContainer>
          <StatisticsList>
            {stats.map((stat) => (
              <Stat key={stat.name}>
                {stat.name}: {checkToDos(stat.value)}
              </Stat>
            ))}
          </StatisticsList>
          <Emoji>
            <FcStatistics />
          </Emoji>
        </StatisticsContainer>
      </StyledStatistics>
    </Container>
  );
}

export default Statistics;
