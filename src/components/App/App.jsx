import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Footer from "../Footer/Footer";
import About from "../About/About";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignInClick = () => {
    setActiveModal("Sign In");
  };

  const handleSignUpClick = () => {
    setActiveModal("Sign Up");
  };

  return (
    <div className="page">
      <div className="main-section">
        <div className="main-section__content">
          <Header onSignInClick={handleSignInClick} />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
      {/* <NotFound /> */}
      <About />
      <Footer />

      <PopupWithForm
        isOpen={activeModal === "Sign In"}
        onClose={() => setActiveModal("")}
        onSignUpClick={handleSignUpClick}
        onSignInClick={handleSignInClick}
        type="signin"
      />

      <PopupWithForm
        isOpen={activeModal === "Sign Up"}
        onClose={() => setActiveModal("")}
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        type="signup"
      />
    </div>
  );
}

export default App;
