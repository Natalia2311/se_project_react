import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={"modal"}>
      <div className="modal__content-item">
        <button
          className="item__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link} />
        <div className="card__name-item">
          <div>{selectedCard.name}</div>
          <div> Weather type: {selectedCard.weather} </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
