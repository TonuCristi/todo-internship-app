import { useEffect, useState } from "react";
import Title from "../components/Title";
import Item from "../components/List/Item";
import AddForm from "../components/List/AddForm";
import SearchBar from "../components/List/SearchBar";
import { Container } from "../components/styles/Container.styled";

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
      <div className="list">
        <div className="cat-fact">Cat fact: {catFact.data}🐈</div>
        <div className="title-utilities">
          <Title>List📃</Title>
          <SearchBar
            searchValue={searchValue}
            onSearchValue={handleSearchValue}
          />
          <div className="show-form-btn" onClick={handleIsOpen}>
            +
          </div>
          {isOpen && <AddForm onAddItem={onAddItem} data={data} />}
        </div>
        <div className="items">
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
        </div>
      </div>
    </Container>
  );
}
