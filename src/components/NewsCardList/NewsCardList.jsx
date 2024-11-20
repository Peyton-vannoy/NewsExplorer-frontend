import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles }) {
  return (
    <section className="news-cards">
      <div className="news-cards__container">
        {articles.length > 0 &&
          articles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
      </div>
    </section>
  );
}

export default NewsCardList;
