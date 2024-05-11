import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

const LoginModal = ({
    handleCloseModal,
     handleLoginModal,
    onSubmit,
    handleOpenSighupModal,
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
return (
    <ModalWithForm
    title='Log In'
    buttonText={'Log In'}
    onClose={handleCloseModal}
    onSubmit={handleSubmit}
    handleOpenLoginModal={handleOpenLoginModal}
    className='log in'
    >
     <div className='modal__content-inputs'>
     <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>
            <label className='modal__label'>
            Email 
            </label>
            <input className='modal__label-email'
            name='email'
            type='email'
            placeholder='Email' required
            value={email}
            onChange={handleEmailChange}>
            </input>
            </div>
            <div>
            <label className='modal__label'>
            Password 
            </label>
            <input className='modal__label-password'
            name='password'
            type='password'
            placeholder='Password' required
            value={password}
            onChange={handlePasswordChange}>
            </input>
        </div>
        <div>
            <button className='modal__form-signup' type="submit"  onClick={handleOpenSighupModal}>
                Sign Up
            </button>
            <button className='modal__form-login' type="submit" onSubmit={handleLoginModal}>
                or Log In
            </button>
        </div>
       
    </ModalWithForm>
);
};

export default LoginModal;

