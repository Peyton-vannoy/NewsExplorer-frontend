import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { fetchNews } from "../../utils/newsExplorerApi";
import "./Main.css";

function Main({ onSearchResults }) {
  // const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setIsSearched(true);

    const searchState = {
      isLoading: true,
      isSearched: true,
      results: [],
      keyword: query,
      error: null,
    };

    onSearchResults(searchState);
    localStorage.setItem("searchState", JSON.stringify(searchState));

    const result = await fetchNews(query);

    if (result.ok) {
      const newSearchState = {
        isLoading: false,
        isSearched: true,
        results: result.data,
        keyword: query,
        error: null,
      };

      onSearchResults(newSearchState);
      localStorage.setItem("searchState", JSON.stringify(newSearchState));
    } else {
      const errorSearchState = {
        isLoading: false,
        isSearched: true,
        results: [],
        keyword: query,
        error: result.error,
      };

      onSearchResults(errorSearchState);
      localStorage.setItem("searchState", JSON.stringify(errorSearchState));
    }

    setIsLoading(false);
  };

  return (
    <main className="hero-content__wrapper">
      <h1 className="hero-content__title">
        What&apos;s going on in the world?
      </h1>
      <p className="hero-content__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={handleSearch} />
    </main>
  );
}

export default Main;
