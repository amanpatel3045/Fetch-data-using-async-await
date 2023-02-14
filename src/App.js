import "./styles.css";
import React from "react";
import { useEffect } from "react";

export default function App() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async (API) => {
    try {
      const res = await fetch(API);
      const detail = await res.json();
      console.log(detail);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData(API);
  }, []);
  return (
    <div className="App">
      <h1>Table</h1>
    </div>
  );
}
