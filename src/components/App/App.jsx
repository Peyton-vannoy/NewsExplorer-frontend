import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <div className="main-section">
            <div className="main-section__content">
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
