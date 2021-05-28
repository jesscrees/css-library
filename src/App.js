import "./App.css";
import Search from "./Search/Search";
import List from "./List/List";
import React, { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>CSS Library</h1>
      </header>
      <section className="App__content-container">
        <Search onChange={(text) => setSearchText(text)} />
        <List searchText={searchText} />
      </section>
      <footer>No copyright, help yourself!</footer>
    </div>
  );
}

export default App;
