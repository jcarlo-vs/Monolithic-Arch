import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const resp = await fetch(import.meta.env.VITE_API_URL);
    const data = await resp.json();
    setData(data);
  };

  return (
    <>
      <button onClick={getData}>get Data</button>
    </>
  );
}

export default App;
