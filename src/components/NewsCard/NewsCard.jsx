import React from "react";
import "./NewsCard.css";

function NewsCard({ title, description, publishedAt, source, urlToImage }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="news-card">
      <img className="news-card__image" src={urlToImage} alt={title} />
      <div className="news-card__context">
        <p className="news-card__date">{formatDate(publishedAt)}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
