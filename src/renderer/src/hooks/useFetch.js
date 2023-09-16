import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [complete, setComplete] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setComplete(false);
      } catch (error) {
        setError(error)
        setComplete(false);
      }
    };

    fetchData();
  }, []);

  return {data, complete, error};
};

export default useFetch;
