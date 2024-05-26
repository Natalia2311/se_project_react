import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onConfirm, isLoggedIn }) => {
  console.log("item modal");
  const { currentUser } = useContext(CurrentUserContext);
  console.log({ currentUser });
  const isOwn = selectedCard.owner === currentUser?._id;
  
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

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
              {isOwn && (
                <button
                  type="button"
                  onClick={() => onConfirm(selectedCard)}
                  className={itemDeleteButtonClassName}
                >
                  Delete item
                </button>
              )}
            </div>
          </div>
          <div> Weather type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
