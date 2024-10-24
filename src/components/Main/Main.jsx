import React, { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
function Main() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchResults(query);
  };

  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world?</h1>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={handleSearch} />
      {searchResults.length > 0 && <SearchResults articles={searchResults} />}
    </main>
  );
}

export default Main;
