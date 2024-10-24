import React from "react";
import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
