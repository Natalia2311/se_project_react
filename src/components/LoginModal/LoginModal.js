import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

const LoginModal = ({
    handleCloseModal,
     handleLoginModal,
    onSubmit,
    handleOpenSignupModal,
    handleOpenLoginModal,
    onClose }) => {

const [email, setEmail] = useState('');
const handleEmailChange = (e) => {
    setEmail(e.target.value);
};  

const [password, setPassword] = useState('');
const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
};

 const switchModal = (e) => {
    e.preventDefault(); 
    handleOpenSignupModal(); 
  };

return (
    <ModalWithForm
    title='Log In'
    buttonText={'Log In'}
    onClose={handleCloseModal}
    onSubmit={handleSubmit}
    handleOpenLoginModal={handleOpenLoginModal}
    className='log in'
    onClick={handleOpenSignupModal}
    >
        
     <div onSubmit={onSubmit} className="modal__form">
     <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>
            <label className='modal__label'>
            Email 
           
            <input className='modal__form-input'
            name='email'
            type='email'
            placeholder='Email' required
            value={email}
            onChange={handleEmailChange}>
            </input>
            </label>
          
            <label className='modal__label'>
            Password 
            
            <input className='modal__form-input'
            name='password'
            type='password'
            placeholder='Password' required
            value={password}
            onChange={handlePasswordChange}>
            </input>
            </label>
       
        <div className='modal__button'>
            {/* <button className='modal__submit-button' type="submit"  >
            Log In
            </button> */}
            <button className='modal__submit-signup' type="button"  onClick={switchModal}>
            or Sign Up
            </button>
             
        </div>
        </div>
       
    </ModalWithForm>
);
};

export default LoginModal;

