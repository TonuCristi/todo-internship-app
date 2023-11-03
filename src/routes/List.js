import { useEffect, useState } from "react";
import Item from "../components/List/Item";
import AddForm from "../components/List/AddForm";
import SearchBar from "../components/List/SearchBar";
import { Container } from "../components/styles/Container.styled";
import {
  CatFact,
  StyledList,
  Title,
  TitleUtilities,
  ShowFormBtn,
  Items,
} from "../components/styles/List/List.styles";

export default function List({
  data,
  onAddItem,
  onRemoveItem,
  onCheckItem,
  onEditItem,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [catFact, setCatFact] = useState([]);
  const url = "https://meowfacts.herokuapp.com/";

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  const handleSearchValue = (value) => setSearchValue(value);

  const filterData = data.filter((item) => item.text.includes(searchValue));

  function getJSON(url) {
    return fetch(url).then((res) => {
      if (!res.ok) throw new Error("Something went wrong!");
      return res.json();
    });
  }

  // Fetching data
  function fetchData() {
    return getJSON(url)
      .then((data) => {
        setCatFact(data);
      })
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <StyledList>
        <CatFact>🐈Cat fact: {catFact.data}🐈</CatFact>
        <TitleUtilities>
          <Title>List📃</Title>
          <SearchBar
            searchValue={searchValue}
            onSearchValue={handleSearchValue}
          />
          <ShowFormBtn onClick={handleIsOpen}>+</ShowFormBtn>
          {isOpen && <AddForm onAddItem={onAddItem} data={data} />}
        </TitleUtilities>
        <Items>
          {filterData.map((item, i) => (
            <Item
              key={item.id}
              ind={i}
              item={item}
              onRemoveItem={onRemoveItem}
              onCheckItem={onCheckItem}
              onEditItem={onEditItem}
            />
          ))}
        </Items>
      </StyledList>
    </Container>
  );
}
