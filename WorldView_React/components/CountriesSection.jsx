// import React from "react";
import { useState } from "react";
import allCountries from "../allCountries";
import CountryCard from "./CountryCard";

export default function CountriesSection({ query }) {
  return (
    <>
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
