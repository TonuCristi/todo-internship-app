import Title from "../components/Title";
import { FcStatistics } from "react-icons/fc";

function Statistics({ data }) {
  // The count of todos
  const toDoCount = data.length;

  // The count of words
  const wordCount = data
    .map((item) => item.text.split(" "))
    .reduce((acc, curVal) => acc + curVal.length, 0);

  // The count of letters
  const letterCount = data
    .map((item) => item.text.split(" ").join(""))
    .reduce((acc, curVal) => acc + curVal.length, 0);

  // Newest todo
  const newestTodo = data.length
    ? data.map((item) => item.creationDate)[0]
    : "";

  // Oldest todo
  const oldestTodo = data.length
    ? data.map((item) => item.creationDate)[data.length - 1]
    : "";

  // This function gets the most common words
  function getCommonWords() {
    const countCompare = wordCount / toDoCount;
    const wordsUses = [];
    const allWords = data.flatMap((item) => item.text.split(" "));

    // Here we find the unique words
    const uniqueWords = allWords.filter(
      (word, i) => allWords.indexOf(word) === i
    );

    // Here we count how many times the unique words were used
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

  const commonWords = getCommonWords().map((item, i) => (
    <span key={item.word}>{`${i > 0 ? ", " : ""}${item.word}`}</span>
  ));

  // This function check if there are any todos
  const checkToDos = (stat) => (data.length ? stat : "No todos");

  return (
    <div className="container">
      <div className="statistics">
        <Title>Statistics📊</Title>
        <div className="statistics-container">
          <ul className="statistics-list">
            <li className="stat">Nr. todos: {checkToDos(toDoCount)}</li>
            <li className="stat">Nr. words: {checkToDos(wordCount)}</li>
            <li className="stat">Nr. letters: {checkToDos(letterCount)}</li>
            <li className="stat">Oldest todo: {checkToDos(oldestTodo)}</li>
            <li className="stat">Newest todo: {checkToDos(newestTodo)}</li>
            <li className="stat">
              Most common words: {checkToDos(commonWords)}
            </li>
          </ul>
          <div className="emoji">
            <FcStatistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
