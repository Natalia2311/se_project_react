import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLoacation,
} from "../../utils/weatherApi";
import "../../vendor/fonts.css";

function App() {
  const weatherTemp = "86";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const city = parseLoacation(data);
        setLocation(city);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <Header
        onCreateModal={handleCreateModal}
        temp={temp}
        location={location}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              className="modal__form-input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
            />
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__form-input"
              type="url"
              name="link"
              minLength="1"
              maxLength="300"
              placeholder="Image URL"
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
              /> 
              <span>Cold</span>
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
