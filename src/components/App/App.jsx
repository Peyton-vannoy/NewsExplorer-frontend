import "./App.css";
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
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [searchState, setSearchState] = useState({
    isLoading: false,
    isSearched: false,
    results: [],
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSearchResults = (newState) => {
    setSearchState(newState);
  };

  const handleSignInClick = () => {
    setActiveModal("Sign In");
  };

  const handleSignUpClick = () => {
    setActiveModal("Sign Up");
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
  };

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
                {searchState.isLoading && <Preloader />}

                {!searchState.isLoading &&
                  searchState.isSearched &&
                  searchState.results.length === 0 && <NotFound />}

                {!searchState.isLoading &&
                  searchState.isSearched &&
                  searchState.results.length > 0 && (
                    <SearchResults
                      isLoading={searchState.isLoading}
                      isSearched={searchState.isSearched}
                      searchResults={searchState.results}
                      onSignInClick={handleSignInClick}
                    />
                  )}
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
                />
                <SavedNews onSearchResults={handleSearchResults} />
              </>
            }
          />
        </Routes>

        <Footer />

        <SignInModal
          isOpen={activeModal === "Sign In"}
          onClose={() => setActiveModal("")}
          onSignUpClick={handleSignUpClick}
        />
        <SignUpModal
          isOpen={activeModal === "Sign Up"}
          onClose={() => setActiveModal("")}
          onSignInClick={handleSignInClick}
        />
      </div>
    </div>
  );
}

export default App;
