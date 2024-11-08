import React from "react";
import allCountries from "../allCountries";
import CountryCard from "./CountryCard";

console.log(React);

export default function CountriesSection() {
  console.log(allCountries);
  return (
    <>
      <section className="data">
      {<CountryCard />}
      </section>
    </>
  );
}
