import "./App.css";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
function App() {
  const [ressa, setRessa] = useState("");
  const [url, setUrl] = useState("");
  var method = "";
  const options = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
  ];
  function handleClick(e) {
    method = e.value;
  }
  function handleInput(e) {
    setUrl(e.target.value);
  }
  async function handleButton(e) {
    if (method == "GET") {
      await axios
        .get(url)
        .then((res) => {
          setRessa(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Couldn't request");
    }
  }
  const returnRes = () => {
    return <div className="request">{ressa}</div>;
  };

  return (
    <div className="App">
      <h1 id="title">API TESTER</h1>
      <div className="container">
        <Select
          onChange={handleClick}
          id="selecting"
          options={options}
        ></Select>
        <input onChange={handleInput} type="text" placeholder="URL" id="url" />
        <button onClick={handleButton} type="submit" id="submit">
          REQUEST
        </button>
        {returnRes()}
      </div>
    </div>
  );
}

export default App;
