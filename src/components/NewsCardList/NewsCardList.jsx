import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  onSignInClick,
  onRemoveArticle,
  onSaveArticle,
  isLoggedIn,
  isInSavedNews,
  savedArticles = [],
  keyword,
}) {
  return (
    <section className="news__card-list">
      <ul className="news__card-list-container">
        {articles.length > 0 &&
          articles.map((article, index) => (
            <NewsCard
              key={index}
              {...article}
              keyword={article.keyword || keyword}
              onSignInClick={onSignInClick}
              onRemoveArticle={() => onRemoveArticle(index)}
              onSaveArticle={onSaveArticle}
              isLoggedIn={isLoggedIn}
              isInSavedNews={isInSavedNews}
              isSaved={savedArticles.some(
                (saved) => saved.title === article.title
              )}
              url={article.url}
            />
          ))}
      </ul>
    </section>
  );
}

export default NewsCardList;
