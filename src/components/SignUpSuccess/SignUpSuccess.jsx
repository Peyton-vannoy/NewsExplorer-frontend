import "./SignUpSuccess.css";
import closeIcon from "../../assets/closeButton.svg";

function SignUpSuccess({ isOpen, onClose, onSignInClick }) {
  const handleSuccessClose = () => {
    onClose();
    onSignInClick();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__signup-container">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        <h2 className="modal__signup-title">
          Registration successfully completed!
        </h2>
        <p className="modal__signup_button">
          <span
            className="modal__signup_button-text"
            onClick={handleSuccessClose}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpSuccess;
