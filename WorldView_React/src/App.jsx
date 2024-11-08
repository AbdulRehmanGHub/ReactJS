import "./index.css";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import CountryCard from "../components/CountryCard.jsx";
import CountriesSection from "../components/CountriesSection.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="search-filter">
          <SearchBar />
          <Filter />
        </section>
        <CountriesSection />
        <CountryCard />
      </main>
    </>
  );
};

export default App;
