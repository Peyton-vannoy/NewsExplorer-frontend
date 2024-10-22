import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="main-section">
          <div className="main-section__content">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </div>
        {/* <NotFound /> */}
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
