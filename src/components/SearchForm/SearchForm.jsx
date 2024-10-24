import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="search-form" onSubmit={handleSearch}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleEnter}
      />
      <button className="search-form__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
