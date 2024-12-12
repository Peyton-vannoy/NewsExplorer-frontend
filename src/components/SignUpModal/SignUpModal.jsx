import React, { useState, useEffect, useCallback } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/formValidation";
import SignUpSuccess from "../SignUpSuccess/SignUpSuccess";
import "./SignUpModal.css";

function SignUpModal({ isOpen, onClose, onSignInClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [formError, setFormError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    if (email === "example@test.com") {
      setFormError("This email is not available");
      setEmailError("");
    } else {
      setShowSuccessModal(true);
      onClose();
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
    setFormError("");
    checkFormValidity();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
    checkFormValidity();
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value));
    checkFormValidity();
  };

  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  };

  const checkFormValidity = useCallback(() => {
    setIsFormValid(
      email.trim() !== "" &&
        !emailError &&
        password.trim() !== "" &&
        !passwordError &&
        username.trim() !== "" &&
        !usernameError
    );
  }, [email, password, username, emailError, passwordError, usernameError]);

  useEffect(() => {
    checkFormValidity();
    setFormError("");
  }, [email, password, username, emailError, passwordError, usernameError]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setEmailError("");
      setPasswordError("");
      setUsernameError("");
      setFormError("");
    }
  }, [isOpen]);

  const additionalContent = (
    <>
      <p className="modal__signup-button">
        or{" "}
        <span className="modal__signup-button-text" onClick={handleSignInClick}>
          Sign in
        </span>
      </p>
    </>
  );

  return (
    <>
      <ModalWithForm
        isOpen={isOpen && !showSuccessModal}
        onClose={onClose}
        title="Sign up"
        name="signup"
        buttonText="Sign up"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        additionalContent={additionalContent}
        errorMessage={formError}
      >
        <label
          htmlFor="signUpEmail"
          className="modal__label modal__label-email"
        >
          Email
        </label>
        <div className="modal__input-container">
          <input
            id="signUpEmail"
            className="modal__input modal__input-email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <p className={`modal__error ${emailError ? "visible" : ""}`}>
            {emailError}
          </p>
        </div>

        <label
          htmlFor="signUpPassword"
          className="modal__label modal__label-password"
        >
          Password
        </label>
        <div className="modal__input-container">
          <input
            id="signUpPassword"
            className="modal__input modal__input-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p className={`modal__error ${passwordError ? "visible" : ""}`}>
            {passwordError}
          </p>
        </div>

        <label
          htmlFor="signUpUsername"
          className="modal__label modal__label-username"
        >
          Username
        </label>
        <div className="modal__input-container">
          <input
            id="signUpUsername"
            className="modal__input modal__input-username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <p className={`modal__error ${usernameError ? "visible" : ""}`}>
            {usernameError}
          </p>
        </div>
      </ModalWithForm>

      <SignUpSuccess
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onSignInClick={onSignInClick}
      />
    </>
  );
}

export default SignUpModal;
