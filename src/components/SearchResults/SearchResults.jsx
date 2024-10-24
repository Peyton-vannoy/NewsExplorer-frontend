import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults({ articles }) {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search Results</h2>
      <div className="search-results__cards">
        <NewsCardList articles={articles} />
      </div>
    </section>
  );
}

export default SearchResults;
