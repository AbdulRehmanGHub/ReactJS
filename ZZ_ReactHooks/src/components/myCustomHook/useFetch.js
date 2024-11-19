import React, { useEffect, useState } from "react";

export const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await fetch(apiUrl);
        const result = await apiCall.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};
