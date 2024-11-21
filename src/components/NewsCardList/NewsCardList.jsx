import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles }) {
  return (
    <section className="news__card-list">
      <div className="news__card-list-container">
        {articles.length > 0 &&
          articles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
      </div>
    </section>
  );
}

export default NewsCardList;
