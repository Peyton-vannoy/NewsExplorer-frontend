import React from "react";
import bookmarkIcon from "../../assets/bookmarkIcon.png";
import bookmarkIconActive from "../../assets/bookmarkIconActive.png";
import "./NewsCard.css";

function NewsCard({
  title,
  description,
  publishedAt,
  source,
  urlToImage,
  onSignInClick,
}) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="news__card">
      <img className="news__card-image" src={urlToImage} alt={title} />
      <div className="news__card-bookmark">
        <button className="news__card-tooltip" onClick={onSignInClick}>
          Sign in to save articles
        </button>
        <button className="news__card-bookmark-button">
          <img
            className="news__card-bookmark-icon"
            src={bookmarkIcon}
            alt="bookmark"
          />
          <img
            className="news__card-bookmark-icon news__card-bookmark-icon_active"
            src={bookmarkIconActive}
            alt="bookmark"
          />
        </button>
      </div>
      <div className="news__card-context">
        <p className="news__card-date">{formatDate(publishedAt)}</p>
        <h3 className="news__card-title">{title}</h3>
        <p className="news__card-description">{description}</p>
        <p className="news__card-source">{source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
