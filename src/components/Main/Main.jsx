import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./Main.css";

function Main({ onSearchResults }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);
    setIsSearched(true);

    onSearchResults({ isLoading: true, isSearched: true, results: [] });

    setTimeout(() => {
      const mockResults = [
        {
          title: "Sample News Article",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage: "https://via.placeholder.com/150",
        },
        {
          title: "Sample News Article",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage: "https://via.placeholder.com/150",
        },
        {
          title: "Sample News Article",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage: "https://via.placeholder.com/150",
        },
      ];
      setSearchResults(mockResults);
      setIsLoading(false);
      onSearchResults({
        isLoading: false,
        isSearched: true,
        results: mockResults,
      });
    }, 1000);
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
