import { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CountriesSection from "./CountriesSection";
import "../src/index.css";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useOutletContext();

  return (
    <main className={isDark ? "dark" : ""}>
      <section className="search-filter">
        <SearchBar setQuery={setQuery} />
        <Filter />
      </section>
      <CountriesSection query={query} />
    </main>
  );
};

export default Home;
