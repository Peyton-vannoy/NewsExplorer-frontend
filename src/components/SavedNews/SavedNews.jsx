import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  const savedArticles = [
    {
      title: "Title",
      description: "Description",
      publishedAt: "2024-01-01",
      source: "Source",
      urlToImage: "https://via.placeholder.com/150",
    },
    {
      title: "Title",
      description: "Description",
      publishedAt: "2024-01-01",
      source: "Source",
      urlToImage: "https://via.placeholder.com/150",
    },
    {
      title: "Title",
      description: "Description",
      publishedAt: "2024-01-01",
      source: "Source",
      urlToImage: "https://via.placeholder.com/150",
    },
    {
      title: "Title",
      description: "Description",
      publishedAt: "2024-01-01",
      source: "Source",
      urlToImage: "https://via.placeholder.com/150",
    },
    {
      title: "Title",
      description: "Description",
      publishedAt: "2024-01-01",
      source: "Source",
      urlToImage: "https://via.placeholder.com/150",
    },
  ];

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
        <NewsCardList articles={savedArticles} />
      </section>
    </div>
  );
}

export default SavedNews;
