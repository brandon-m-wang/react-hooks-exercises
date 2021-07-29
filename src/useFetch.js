import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ fact: null, loading: true });
  useEffect(() => {
    setData({ fact: null, loading: true });
    fetch(url).then((response) =>
      response.text().then((fact) => setData({ fact: fact, loading: false }))
    );
  }, [url]);
  return data;
};
