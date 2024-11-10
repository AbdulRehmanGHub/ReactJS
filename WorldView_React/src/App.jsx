import { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
// import CountryCard from "../components/CountryCard.jsx";
import CountriesSection from "../components/CountriesSection.jsx";
import "./index.css";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <section className="search-filter">
          <SearchBar setQuery={setQuery} />
          <Filter />
        </section>
        <CountriesSection query={query} />
        {/* <CountryCard /> */}
      </main>
    </>
  );
};

export default App;
