import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, keyword }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (error) setError("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          className={`search-form__input ${
            error ? "search-form__input-error" : ""
          }`}
          type="search"
          placeholder="Enter topic"
          value={searchQuery}
          defaultValue={keyword}
          onChange={handleInputChange}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </div>
      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
