import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  console.log("ModalWithForm");

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>
        <h3>{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>  
         
        </form>
       
         
      </div>
    </div>
  );
};

export default ModalWithForm;
