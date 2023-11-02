export default function SearchBar({ searchValue, onSearchValue }) {
  const handleChange = (e) => {
    onSearchValue(e.target.value);
  };

  return (
    <input
      className="searchBar"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}
