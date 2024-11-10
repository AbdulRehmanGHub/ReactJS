const Filter = () => {
  return (
    <div className="filter">
      <select id="filterByRegion">
        <option defaultValue="filter-by-region" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
