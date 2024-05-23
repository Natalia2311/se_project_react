import './DeleteModal.css';

const DeleteModal = ({ 
    onDelete, 
    onCancel, 
    onConfirm, 
    handleOpenDeleteModal, 
    onClose }) => {

    const handeDelete = (e) => {
        e.preventDefault();
        onConfirm();
    }

return (
    <div className='modal-delete' >
        <div className='modal__content'>
        <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>   
            <p className='modal__text'>
                Are you sure you want to delete {onDelete.name}?
                This action is irreversible.
            </p>
            <div className='modal__buttons'>
            <button 
                type="button"
                className='modal__button'
                onClick={handeDelete}>Yes,delete item
                </button>
                <button
                type="button"
                className='modal__button'
                onClick={onCancel}>Cancel
                </button>
               
            </div>
        </div>
    </div>
)


}

export default DeleteModal;