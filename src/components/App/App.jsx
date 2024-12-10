import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchResults from "../SearchResults/SearchResults";
import SavedNews from "../SavedNews/SavedNews";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import Footer from "../Footer/Footer";
import About from "../About/About";

function App() {
  // State management
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      const articles = localStorage.getItem("savedArticles");
      return articles ? JSON.parse(articles) : [];
    }
    return [];
  });
  const [searchState, setSearchState] = useState({
    isLoading: false,
    isSearched: false,
    results: [],
    keyword: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Article handlers
  const verifyArticleExists = async (article) => {
    try {
      if (!article.urlToImage) return false;

      const imageResponse = await fetch(article.urlToImage, {
        mode: "no-cors",
      });

      return true;
    } catch (error) {
      console.error("Error verifying article existence:", error);
      return true;
    }
  };

  const handleSearchResults = (articles) => {
    setSearchState(articles);
  };

  const handleSavedArticles = (article) => {
    const isAlreadySaved = savedArticles.some(
      (saved) => saved.title === article.title
    );

    setSavedArticles(
      isAlreadySaved
        ? savedArticles.filter((saved) => saved.title !== article.title)
        : [
            ...savedArticles,
            { ...article, keyword: searchState.keyword, url: article.url },
          ]
    );
  };

  const handleRemoveSavedArticle = (indexToRemove) => {
    setSavedArticles(
      savedArticles.filter((_, index) => index !== indexToRemove)
    );
  };

  // Modal handlers
  const handleSignInClick = () => setActiveModal("Sign In");
  const handleSignUpClick = () => setActiveModal("Sign Up");
  const handleSignOutClick = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setSavedArticles([]);
  };
  const handleCloseModal = () => setActiveModal("");

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    const savedArticles = localStorage.getItem("savedArticles");
    if (savedArticles) {
      setSavedArticles(JSON.parse(savedArticles));
    }
  };

  // Render helpers
  const renderSearchContent = () => {
    if (searchState.isLoading) return <Preloader />;

    if (!searchState.isLoading && searchState.isSearched) {
      return searchState.results.length === 0 ? (
        <NotFound />
      ) : (
        <SearchResults
          isLoading={searchState.isLoading}
          isSearched={searchState.isSearched}
          searchResults={searchState.results}
          onSignInClick={handleSignInClick}
          onSaveArticle={handleSavedArticles}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          keyword={searchState.keyword}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    }
  }, [savedArticles, isLoggedIn]);

  useEffect(() => {
    const checkSavedArticles = async () => {
      const validArticles = [];
      for (const article of savedArticles) {
        const exists = await verifyArticleExists(article);
        if (exists) {
          validArticles.push(article);
        }
      }
      if (validArticles.length !== savedArticles.length) {
        setSavedArticles(validArticles);
      }
    };
    checkSavedArticles();
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero-section">
                  <div className="hero-content">
                    <Header
                      onSignInClick={handleSignInClick}
                      onSignOutClick={handleSignOutClick}
                      isLoggedIn={isLoggedIn}
                    />
                    <Main onSearchResults={handleSearchResults} />
                  </div>
                </div>
                {renderSearchContent()}
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <Header
                  onSignInClick={handleSignInClick}
                  onSignOutClick={handleSignOutClick}
                  isLoggedIn={isLoggedIn}
                  isDark={true}
                />
                <SavedNews
                  onRemoveArticle={handleRemoveSavedArticle}
                  savedArticles={savedArticles}
                />
              </>
            }
          />
        </Routes>

        <Footer />

        <SignInModal
          isOpen={activeModal === "Sign In"}
          onClose={handleCloseModal}
          onSignUpClick={handleSignUpClick}
          onLogin={handleLogin}
        />
        <SignUpModal
          isOpen={activeModal === "Sign Up"}
          onClose={handleCloseModal}
          onSignInClick={handleSignInClick}
        />
      </div>
    </div>
  );
}

export default App;
