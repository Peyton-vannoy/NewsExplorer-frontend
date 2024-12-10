import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, keyword }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="search"
          placeholder="Enter topic"
          value={searchQuery}
          defaultValue={keyword}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
