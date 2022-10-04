import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, SetError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        SetError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { data, isloading, error };
};
export default useFetch;
