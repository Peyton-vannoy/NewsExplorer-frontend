import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { validateEmail } from "../../utils/formValidation";
import "./SignUpModal.css";

function SignUpModal({ isOpen, onClose, onSignInClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("Form submitted");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
    checkFormValidity();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    checkFormValidity();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    checkFormValidity();
  };

  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  };

  const checkFormValidity = () => {
    setIsFormValid(email.trim() !== "" && !emailError);
  };

  useEffect(() => {
    checkFormValidity();
  }, [email, password, username]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setEmailError("");
    }
  }, [isOpen]);

  const additionalContent = (
    <p className="modal__signup-button">
      or{" "}
      <span className="modal__signup-button-text" onClick={handleSignInClick}>
        Sign in
      </span>
    </p>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      name="signup"
      buttonText="Sign up"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      additionalContent={additionalContent}
    >
      <label className="modal__label modal__label-email">Email</label>
      <input
        className="modal__input modal__input-email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error">{emailError}</span>
      <label className="modal__label modal__label-password">Password</label>
      <input
        className="modal__input modal__input-password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <label className="modal__label modal__label-username">Username</label>
      <input
        className="modal__input modal__input-username"
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
    </ModalWithForm>
  );
}

export default SignUpModal;
