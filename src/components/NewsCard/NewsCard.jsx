import React from "react";
import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="news-card">
      <img
        src="https://via.placeholder.com/160x120"
        alt="Image"
        className="news-card__image"
      />
      <div className="news-card__content">
        <h3 className="news-card__title">Title</h3>
        <p className="news-card__description">Description</p>
        <p className="news-card__source">Source</p>
      </div>
    </div>
  );
}

export default NewsCard;
