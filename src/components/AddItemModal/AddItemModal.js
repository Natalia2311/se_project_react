import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherType = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__form-input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__form-input"
          type="url"
          name="imageUrl"
          minLength="1"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <div className="weather__type-text">Select the weather type:</div>
      <div className="modal__radio">
        <div>
          <label className="modal__input">
            <input
              type="radio"
              name="weatherType"
              id="hot"
              value="hot"
              className="modal__input-radio"
              onChange={handleWeatherType}
            />
            <span>Hot</span>
          </label>
        </div>
        <div>
          <label className="modal__input">
            <input
              type="radio"
              name="weatherType"
              id="warm"
              value="warm"
              className="modal__input-radio"
              onChange={handleWeatherType}
            />
            <span>Warm</span>
          </label>
        </div>
        <div>
          <label className="modal__input">
            <input
              type="radio"
              name="weatherType"
              id="cold"
              value="cold"
              className="modal__input-radio"
              onChange={handleWeatherType}
            />
            <span>Cold</span>
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
