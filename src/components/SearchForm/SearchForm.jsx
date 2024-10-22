import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search-form__button">Search</button>
    </div>
  );
}

export default SearchForm;
