// import React from "react";
import { useEffect, useState } from "react";
// import allCountries from "../allCountries";
import CountryCard from "./CountryCard";

export default function CountriesSection({ query }) {
  const [allCountries, setAllCountries] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      });
    return () => {
      console.log("cleaning");
    };
  }, []);

  useEffect(() => {
    console.log("hi");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button> <br></br>{" "}
      <br></br>
      <button onClick={() => setAllCountries([])}>Remove All Countries</button>
      <section className="data">
        {allCountries
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital?.[0]}
              />
            );
          })}
      </section>
    </>
  );
}
