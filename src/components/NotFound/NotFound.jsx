import React from "react";
import notFoundImage from "../../assets/not-found.svg";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__image" src={notFoundImage} alt="not found" />
      <h1 className="not-found__title">Nothing found</h1>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
