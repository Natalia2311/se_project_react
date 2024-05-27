import './DeleteModal.css';

const DeleteModal = ({ 
    onDelete,  
    onSubmit,
    handleCloseModal,
    selectedCard,
    handleDeleteCard }) => {

    const handleDelete = (e) => {
        e.preventDefault();
        onSubmit(selectedCard);
    }

return (
    <div className='modal-delete'  >
        <div className='modal__content'>
        <button type="button" className="form__button-close" onClick={handleCloseModal}>
          {" "}
        </button>   
            <p className='modal__text'>
                Are you sure you want to delete {onDelete.name}?
                This action is irreversible.
            </p>
            <div className='modal__buttons'>
            <button 
                type="submit"
                className='modal__button'
                onSubmit={handleDeleteCard}>Yes,delete item
                </button>
                <button
                type="button"
                className='modal__button'
                onClick={handleCloseModal}>Cancel
                </button>
               
            </div>
        </div>
    </div>
)


}

export default DeleteModal;