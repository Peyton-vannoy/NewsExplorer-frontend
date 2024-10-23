import React, { useState, useEffect } from "react";
import { validateEmail, validatePassword } from "../../utils/formValidation";
import "./SignInModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
function SignInModal({ isOpen, onClose, setActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const isValid = email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isValid);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
    checkFormValidity();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
    checkFormValidity();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("Form submitted");
  };

  const handleSignUpClick = () => {
    onClose();
    setActiveModal("Sign Up");
  };

  useEffect(() => {
    checkFormValidity();
  }, [email, password]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    }
  }, [isOpen]);

  const additionalContent = (
    <p className="modal__signup-button">
      or{" "}
      <span className="modal__signup-button-text" onClick={handleSignUpClick}>
        Sign up
      </span>
    </p>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign In"
      buttonText="Sign in"
      onSubmit={handleSubmit}
      onClose={onClose}
      additionalContent={additionalContent}
      isFormValid={isFormValid}
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
      {emailError && <p className="modal__error">{emailError}</p>}

      <label className="modal__label modal__label-password">Password</label>
      <input
        className="modal__input modal__input-password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        required
        minLength={8}
        maxLength={20}
      />
      {passwordError && <p className="modal__error">{passwordError}</p>}
    </ModalWithForm>
  );
}

export default SignInModal;
