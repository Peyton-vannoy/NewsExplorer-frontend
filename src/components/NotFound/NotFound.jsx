import React from "react";
import "./NotFound.css";
import notFoundImage from "../../assets/not-found.png";

function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="Not found" />
      <h1 className="not-found__title">Nothing found</h1>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
