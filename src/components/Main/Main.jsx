import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main({ onSearchResults }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);
    setIsSearched(true);

    onSearchResults({
      isLoading: true,
      isSearched: true,
      results: [],
      keyword: query,
    });

    setTimeout(() => {
      const mockResults = [
        {
          title: "Sample News",
          description:
            "This is a sample newsle This ia sample news article This is a sample news article This is a sample news article This is a sample news article This is a sample news article This is a sample e This is a sample e This is a sample news article This is a sample news article This is a sample news article  This is a sample news article This is a sample news article This is a sample news article This is a sample news article ",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "Sample",
          description:
            "We all know how good nature can make us feel. We have known it for millennia: the sound We all know how good nature can make us feel. We have known it for millennia: the soundWe all know how good nature can make us feel. We have known it for millennia: the sound...",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731329891228-c5009dc54fb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        },
        {
          title: " News",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "Article",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "blue",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "cloud",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "Book",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        {
          title: "Tree",
          description: "This is a sample news article",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" },
          urlToImage:
            "https://images.unsplash.com/photo-1731762512307-2271665eb149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
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
