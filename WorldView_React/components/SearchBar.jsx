const SearchBar = () => {
  return (
    <div className="search">
      <input
        type="text"
        id="search-country"
        placeholder="Search for a country"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
