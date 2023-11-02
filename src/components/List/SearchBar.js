import { StyledSearchBar } from "../styles/List/List.styles";

export default function SearchBar({ searchValue, onSearchValue }) {
  const handleChange = (e) => {
    onSearchValue(e.target.value);
  };

  return (
    <StyledSearchBar
      value={searchValue}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}
