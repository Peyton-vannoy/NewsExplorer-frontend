import React, { useState } from "react";
import "./SignInModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
function SignInModal({ isOpen, onClose, setActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignUpClick = () => {
    onClose();
    setActiveModal("Sign Up");
  };

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
    >
      <label className="modal__label modal__label-email">Email</label>
      <input
        className="modal__input modal__input-email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="modal__label modal__label-password">Password</label>
      <input
        className="modal__input modal__input-password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </ModalWithForm>
  );
}

export default SignInModal;
