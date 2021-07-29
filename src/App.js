import { useEffect, useRef, useState } from "react";
import "./App.css";
import { dateGenerator } from "./dateGenerator";
import { useFetch } from "./useFetch";

function App() {
  const [date, setDate] = useState(() => localStorage.getItem("date") || "1/1");
  const { fact, loading } = useFetch(`http://numbersapi.com/${date}/date`);

  useEffect(() => {
    localStorage.setItem("date", date);
  });

  const factRef = useRef();

  return (
    <div>
      <button
        onClick={() => {
          setDate(dateGenerator());
          factRef.current.style.color = "red";
        }}
      >
        {date}
      </button>
      <div ref={factRef}>{loading ? "Loading..." : fact}</div>
    </div>
  );
}

export default App;
