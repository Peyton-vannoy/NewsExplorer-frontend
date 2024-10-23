import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/formValidation";
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  onSignInClick,
  onSignUpClick,
  type,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    if (type === "signup" && email === "example@test.com") {
      setFormError("This email is not available");
    } else {
      console.log("Form submitted");
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

  const checkFormValidity = () => {
    setIsFormValid(
      email.trim() !== "" &&
        !emailError &&
        password.trim() !== "" &&
        !passwordError &&
        (type === "signin" || (username.trim() !== "" && !usernameError))
    );
  };

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
    <p className="modal__signup-button">
      or{" "}
      <span
        className="modal__signup-button-text"
        onClick={type === "signin" ? onSignUpClick : onSignInClick}
      >
        {type === "signin" ? "Sign up" : "Sign in"}
      </span>
    </p>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={type === "signin" ? "Sign in" : "Sign up"}
      name={type}
      buttonText={type === "signin" ? "Sign in" : "Sign up"}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      additionalContent={additionalContent}
      errorMessage={formError}
    >
      <label className="modal__label modal__label-email">Email</label>
      <div className="modal__input-container">
        <input
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

      <label className="modal__label modal__label-password">Password</label>
      <div className="modal__input-container">
        <input
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

      {type === "signup" && (
        <>
          <label className="modal__label modal__label-username">Username</label>
          <div className="modal__input-container">
            <input
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
        </>
      )}
    </ModalWithForm>
  );
}

export default PopupWithForm;