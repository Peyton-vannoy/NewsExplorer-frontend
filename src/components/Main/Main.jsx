import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { API_KEY, BASE_URL } from "../../utils/newsExplorerApiKey";
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
    });

    try {
      const response = await fetch(
        `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();
      setSearchResults(data.articles);
      onSearchResults({
        isLoading: false,
        isSearched: true,
        results: data.articles,
        keyword: query,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoading(false);
    }
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
