import { useState, useEffect } from "react";
const API_KEY = "AIzaSyCmr6-tWHzmqgMM6mT-oTTf8OnGDlzLi58";

const CONTEXT_KEY = "d04f75df5bb5b841a";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
