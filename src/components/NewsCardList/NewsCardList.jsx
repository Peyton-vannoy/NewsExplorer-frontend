import React from "react";

import "./NewsCardList.css";

function NewsCardList({ articles }) {
  return (
    <div className="news-card-list">
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
}

export default NewsCardList;
