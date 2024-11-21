import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults({ isLoading, searchResults }) {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      {!isLoading && searchResults.length > 0 && (
        <NewsCardList articles={searchResults} />
      )}
      <button className="search-results__button">Show more</button>
    </section>
  );
}

export default SearchResults;
