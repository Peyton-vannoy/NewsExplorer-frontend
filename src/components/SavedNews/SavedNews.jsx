import "./SavedNews.css";

function SavedNews() {
  return (
    <div className="saved__news">
      <div className="saved__news-header">
        <p className="saved__news-label">Saved articles</p>
        <h1 className="saved__news-title">Peyton, you have 5 saved articles</h1>
        <p className="saved__news-keywords">
          By keywords:{" "}
          <span className="saved__news-keywords-bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </div>
  );
}

export default SavedNews;
