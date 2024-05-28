import React, { useState } from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const EditProfileModal = ({
  handleOpenEditModal,
  handleCloseModal,
  handleEditProfile,
  onSubmit,
  onClose,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar || "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    onSubmit(name, avatar, token);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={"Save changes"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      handleOpenEditModal={handleOpenEditModal}
      className="update"
    >
      <div onSubmit={onSubmit} className="modal__form">
        <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>
        <label className="modal__label-edit">
          Name*
          <input
            className="modal__form-input-edit"
            name="name"
            type="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>

        <label className="modal__label-edit">
          Avatar*
          <input
            className="modal__form-input-edit"
            name="avatar"
            type="avatar"
            placeholder="Avatar URL"
            required
            value={avatar}
            onChange={handleAvatarChange}
          ></input>
        </label>
        <button
          className="modal__submit-button-save"
          type="submit"
          onSubmit={handleEditProfile}
        >
          Save changes
        </button>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
