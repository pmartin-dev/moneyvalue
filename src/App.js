import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./containers/search-bar";
import RateExchangeList from "./containers/rate-exchange-list";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <RateExchangeList />
    </div>
  );
}

export default App;
