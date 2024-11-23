import React from "react";
import bookmarkIcon from "../../assets/bookmarkIcon.png";
import bookmarkIconActive from "../../assets/bookmarkIconActive.png";
import trashIcon from "../../assets/trash.svg";
import "./NewsCard.css";

function NewsCard({
  title,
  description,
  publishedAt,
  source,
  urlToImage,
  onSignInClick,
  isInSavedNews,
  keyword,
  onRemoveArticle,
  isLoggedIn,
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
      {isInSavedNews && <span className="news__card-keyword">{keyword}</span>}
      <div className="news__card-bookmark">
        {isInSavedNews ? (
          <button
            className="news__card-trash-button"
            onClick={() => onRemoveArticle()}
          >
            <button className="news__card-trash-tooltip">
              Remove from saved
            </button>
            <img
              className="news__card-trash-icon"
              src={trashIcon}
              alt="trash"
            />
          </button>
        ) : (
          <>
            {!isLoggedIn && (
              <button className="news__card-tooltip" onClick={onSignInClick}>
                Sign in to save articles
              </button>
            )}
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
          </>
        )}
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
