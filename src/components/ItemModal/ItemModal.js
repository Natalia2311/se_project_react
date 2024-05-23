import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onConfirm, isLoggedIn, }) => {

  console.log("item modal");
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = currentUser && selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = (
    `item__delete-button ${isOwn ? 'item__delete-button_visible' : 'item__delete-button_hidden'}` );


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

//that className={...} can only go inside a tag like <sometag className={...}>

// className {
//   isOpen
//   ? `item-modal modal __type ${selectedCard}`
//   : `modal __type ${selectedCard} item-modal__hidden`
// }
// onClick={onClick}