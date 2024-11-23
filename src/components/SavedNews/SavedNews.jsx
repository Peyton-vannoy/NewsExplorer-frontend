import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ onRemoveArticle, savedArticles }) {
  return (
    <div className="saved__news">
      <section className="saved__news-header">
        <p className="saved__news-label">Saved articles</p>
        <h1 className="saved__news-title">Peyton, you have 5 saved articles</h1>
        <p className="saved__news-keywords">
          By keywords:{" "}
          <span className="saved__news-keywords-bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </section>
      <section className="saved__news-cards">
        <NewsCardList
          articles={savedArticles}
          onRemoveArticle={onRemoveArticle}
          isInSavedNews={true}
        />
      </section>
    </div>
  );
}

export default SavedNews;
