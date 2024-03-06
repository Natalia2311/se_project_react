import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onConfirm }) => {
  console.log("item modal");

  return (
    <div className={"modal"}>
      <div className="modal__content-item">
        <button
          className="item__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="card__name-item">
          <div className="card__modal-name">
            <div>{selectedCard.name}</div>
            <div>
              <button
                className="card__modal-delete"
                type="button"
                onClick={() => onConfirm(selectedCard)}
              >
                Delete item
              </button>
            </div>
          </div>
          <div> Weather type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
