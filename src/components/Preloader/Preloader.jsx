import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
