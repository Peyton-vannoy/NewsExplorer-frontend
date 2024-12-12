import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { fetchNews } from "../../utils/newsExplorerApi";
import "./Main.css";

function Main({ onSearchResults }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setIsSearched(true);

    onSearchResults({
      isLoading: true,
      isSearched: true,
      results: [],
      keyword: query,
      error: null,
    });

    const result = await fetchNews(query);

    if (result.ok) {
      onSearchResults({
        isLoading: false,
        isSearched: true,
        results: result.data,
        keyword: query,
        error: null,
      });
    } else {
      onSearchResults({
        isLoading: false,
        isSearched: true,
        results: [],
        keyword: query,
        error: result.error,
      });
    }

    setIsLoading(false);
  };

  return (
    <main className="hero-content__wrapper">
      <h1 className="hero-content__title">What's going on in the world?</h1>
      <p className="hero-content__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={handleSearch} />
    </main>
  );
}

export default Main;
