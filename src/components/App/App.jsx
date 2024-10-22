import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import SignInModal from "../SignInModal/SignInModal";
import Footer from "../Footer/Footer";
import About from "../About/About";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSignInClick = () => {
    setActiveModal("Sign In");
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

      <SignInModal
        isOpen={activeModal === "Sign In"}
        onClose={() => setActiveModal("")}
      />
    </div>
  );
}

export default App;
