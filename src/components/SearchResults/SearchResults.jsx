import { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SearchResults.css";

function SearchResults({
  isLoading,
  searchResults,
  onSignInClick,
  onSaveArticle,
  isLoggedIn,
  savedArticles = [],
  keyword,
}) {
  const [visibleArticles, setVisibleArticles] = useState(3);

  const handleShowMore = () => {
    setVisibleArticles((prevCount) => prevCount + 3);
  };

  const visibleResults = searchResults.slice(0, visibleArticles);
  const hasMoreResults = visibleArticles < searchResults.length;

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      {!isLoading && searchResults.length > 0 && (
        <NewsCardList
          articles={visibleResults}
          onSignInClick={onSignInClick}
          onSaveArticle={onSaveArticle}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          keyword={keyword}
        />
      )}
      {hasMoreResults && (
        <button className="search-results__button" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}

export default SearchResults;
