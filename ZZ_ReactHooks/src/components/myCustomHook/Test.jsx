import React from "react";
import { useFetch } from "./useFetch";

const Test = () => {
  const { loading, data, error } = useFetch("https://dummyjson.com/recipes");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error while fetching data...</p>}
      {data && data.recipes && (
        <ul>
          {data.recipes.map((recipe) => (
            <li key={Math.random()}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
