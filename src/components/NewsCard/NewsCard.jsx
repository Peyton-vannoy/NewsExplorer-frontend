import React from "react";
import bookmarkIcon from "../../assets/bookmarkIcon.png";
import bookmarkIconHover from "../../assets/bookmarkIconHover.png";
import bookmarkIconSaved from "../../assets/bookmarkIconSaved.png";
import trashIcon from "../../assets/trash.svg";
import trashIconActive from "../../assets/trashActive.svg";
import "./NewsCard.css";

function NewsCard({
  title,
  description,
  publishedAt,
  source,
  urlToImage,
  onSignInClick,
  keyword,
  onRemoveArticle,
  onSaveArticle,
  isLoggedIn,
  isInSavedNews,
  isSaved,
  url,
}) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      onSignInClick();
      return;
    }
    onSaveArticle({
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      keyword,
      url,
    });
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onRemoveArticle({
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      keyword,
      url,
    });
  };

  return (
    <li className="news__card" onClick={handleCardClick}>
      <img className="news__card-image" src={urlToImage} alt={title} />
      {isInSavedNews && <span className="news__card-keyword">{keyword}</span>}
      <div className="news__card-bookmark">
        {isInSavedNews ? (
          <button
            className="news__card-trash-button"
            onClick={handleDeleteClick}
          >
            <div className="news__card-trash-tooltip">
              <p className="news__card-trash-tooltip-text">Remove from saved</p>
            </div>
            <img
              className="news__card-trash-icon"
              src={trashIcon}
              alt="trash"
            />
            <img
              className="news__card-trash-icon news__card-trash-icon_active"
              src={trashIconActive}
              alt="trash"
            />
          </button>
        ) : (
          <>
            {!isLoggedIn && (
              <div
                className="news__card-tooltip"
                onClick={(e) => {
                  e.stopPropagation();
                  onSignInClick();
                }}
              >
                <p className="news__card-tooltip-text">
                  Sign in to save articles
                </p>
              </div>
            )}
            <button
              className={`news__card-bookmark-button ${
                isSaved ? "news__card-bookmark-button_saved" : ""
              }`}
              onClick={handleBookmarkClick}
            >
              <img
                className="news__card-bookmark-icon"
                src={isSaved ? bookmarkIconSaved : bookmarkIcon}
                alt="bookmark"
              />
              <img
                className="news__card-bookmark-icon news__card-bookmark-icon_active"
                src={isSaved ? bookmarkIconSaved : bookmarkIconHover}
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
    </li>
  );
}

export default NewsCard;
