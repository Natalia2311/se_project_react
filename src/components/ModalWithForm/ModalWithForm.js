import "./ModalWithForm.css";

const ModalWithForm = ({
  children,

  title,
  onClose,
  name,
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
         
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
