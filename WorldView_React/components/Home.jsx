import { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CountriesSection from "./CountriesSection";
import "../src/index.css";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <section className="search-filter">
        <SearchBar setQuery={setQuery} />
        <Filter />
      </section>
      <CountriesSection query={query} />
    </main>
  );
};

export default Home;
