import React, { useEffect, useState } from 'react';
import './EditProfileModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';


const EditProfileModal = ({ 
    handleOpenEditModal,
    handleCloseModal,
    handleEditProfile,
    onSubmit,
    onClose,

}) => {
    const { currentUser } = useContext(CurrentUserContext);

 const [name, setName] = useState(currentUser.name || '');
 const handleNameChange = (e) => {
        setName(e.target.value);
    };  

const [avatar, setAvatar] = useState(currentUser.avatar || '');
const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
};  


const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    onSubmit(name, avatar, token);
};

// useEffect(() => {
//     if (handleEditProfile) {
//         setName(currentUser.name);
//         setAvatar(currentUser.avatar);
//     }
// }, [currentUser.avatar, currentUser.name, handleEditProfile]);

return (
    <ModalWithForm
    title='Change profile data'
    buttonText={'Save changes'}
    onClose={handleCloseModal}
    onSubmit={handleSubmit}
    handleOpenEditModal={handleOpenEditModal}
    className='update'
    >
<div onSubmit={onSubmit} className="modal__form">
<button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>   
<label className='modal__label'>
            Name* 
           
            <input className='modal__form-input'
            name='name'
            type='name'
            placeholder='Name' required
            value={name}
            onChange={handleNameChange}>
            </input>
            </label>
      
        <label className='modal__label'>
            Avatar* 
          
            <input className='modal__form-input'
            name='avatar'
            type='avatar'
            placeholder='Avatar URL' required
            value={avatar}
            onChange={handleAvatarChange}>
            </input>
            </label>
            <button className='modal__submit-button' 
            type="submit" onSubmit={handleEditProfile} >
                Save changes
            </button>
</div>
    </ModalWithForm>
)

}



export default EditProfileModal;











// const handleChange = (event) => {
//     const { value, name } = event.target;
// console.log(name, value) 
//     setValues({ ...values, [name]: value });
// };

{/* <input type='text' id='name' className='form__input' placeholder='Name' name="name" minLength={1} maxLength={30} onChange={handleChange} value={values.name}/>
Lets add the value prop/attribute to the input element */}

// useEffect( () => { 
  //   if(values && values.name === "" && values.avatar === "" && userData?.name)
  //     { setValues(userData)}}, 
  //   {[]})