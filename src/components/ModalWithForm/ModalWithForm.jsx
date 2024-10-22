import React from "react";
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
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
        {additionalContent}
      </div>
    </div>
  );
}

export default ModalWithForm;
