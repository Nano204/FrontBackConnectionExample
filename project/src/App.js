import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  const handleOnClick = async (event) => {
    event.preventDefault();
    // setList([...list, word]);
    await axios
      .post("http://localhost:3001/", { word })
    axios
      .get("http://localhost:3001/")
      .then((response) => setList(response.data));
  };

  const handleOnChange = (event) => {
    setWord(event.target.value);
  };
  return (
    <div className="App">
      <button onClick={handleOnClick}>Submit</button>
      <textarea onChange={handleOnChange} />
      <ul>
        {list.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
