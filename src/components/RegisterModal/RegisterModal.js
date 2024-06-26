import React, { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  handleOpenLoginModal,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, avatar, email, password);
  };

  const switchModal = (e) => {
    e.preventDefault();
    handleOpenLoginModal();
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText={"Sign Up"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      className="register"
      onClick={handleOpenLoginModal}
      handleOpenLoginModal={handleOpenLoginModal}
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__form-input"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>

      <label className="modal__label">
        Password*
        <input
          className="modal__form-input"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </label>

      <label className="modal__label">
        Name*
        <input
          className="modal__form-input"
          name="name"
          type="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>

      <label className="modal__label">
        Avatar URL*
        <input
          className="modal__form-input"
          name="avatar"
          type="avatar"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </label>

      <div className="modal__button">
        <button className="modal__submit-button" type="submit">
          Sign Up
        </button>
        <button
          className="modal__submit-login"
          type="button"
          onClick={switchModal}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
