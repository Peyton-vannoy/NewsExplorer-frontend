import notFoundImage from "../../assets/not-found.svg";
import "./NotFound.css";

function NotFound({ message }) {
  const defaultMessage = "Sorry, but nothing matched your search terms.";
  const errorMessage =
    "Sorry, something went wrong during the request. Please try again later.";

  return (
    <div className="not-found">
      <img className="not-found__image" src={notFoundImage} alt="not found" />
      <h1 className="not-found__title">Nothing found</h1>
      <p className="not-found__text">
        {message === `error` ? errorMessage : defaultMessage}
      </p>
    </div>
  );
}

export default NotFound;
