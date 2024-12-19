import { useEffect } from "react";
import "./ModalWithForm.css";
import closeIcon from "../../assets/closeButton.svg";

function ModalWithForm({
  isOpen,
  title,
  onSubmit,
  children,
  buttonText,
  additionalContent,
  onClose,
  isFormValid,
  errorMessage,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <p className={`modal__form-error  ${errorMessage ? "visible" : ""}`}>
            {errorMessage}
          </p>
          <button
            className="modal__submit-button"
            type="submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
        {additionalContent}
      </div>
    </div>
  );
}

export default ModalWithForm;
