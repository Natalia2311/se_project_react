import "./DeleteModal.css";

const DeleteModal = ({ onDelete, onClick, handleCloseModal, selectedCard }) => {
  const handleDelete = (e) => {
    e.preventDefault();

    onClick(selectedCard);
  };

  return (
    <div className="modal">
      <div className="modal__content-delete">
        <button
          type="button"
          className="form__button-close"
          onClick={handleCloseModal}
        >
          {" "}
        </button>
        <p className="modal__text">
          Are you sure you want to delete {onDelete.name}? This action is
          irreversible.
        </p>
        <div className="modal__buttons">
          <button
            type="submit"
            className="modal__button-delete"
            onClick={handleDelete}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="modal__button-cancel"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
