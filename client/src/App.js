import "./App.css";
import React, { useState } from "react";

function App() {
  const [subdomain, setSubdomain] = useState("");

  const handleChange = (e) => {
    setSubdomain(e.target.value);
  };

  const handleClick = () => {
    console.log("Clicked");
    const url = "https://" + subdomain + ".sites.localdomain";
    window.location.href = url;
  };

  return (
    <div className="App">
      <h1>Hello Friend 👋, Type in any Subdomain</h1>
      <input value={subdomain} onChange={handleChange} type="text"></input>
      <button onClick={handleClick}>Let's Go</button>
    </div>
  );
}

export default App;
