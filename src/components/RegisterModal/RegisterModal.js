import React, { useState } from 'react';
import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';


const RegisterModal = ({ 
    handleCloseModal, 
    handleOpenLoginModal,   
    onSubmit,
    handleRegisterModal,
    onClose }) => {

const [name, setName] = useState('');
const handleNameChange = (e) => {
    setName(e.target.value);
};  

const [avatar, setAvatar] = useState('');
const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
};  

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
    onSubmit(name, avatar, email, password);
};


return (
    <ModalWithForm
    title='Sign up'
    buttonText={'Sign Up'}
    onClose={handleCloseModal}
    onSubmit={handleSubmit}
    onClick={handleRegisterModal}
    className='register'
    >
        
        <div >
        <button type="button" className="form__button-close" onClick={onClose}>
          {" "}
        </button>
        <div className='modal__content-inputs'>
            <label className='modal__label'>
            Email* 
            </label>
            <input className='modal__input'
            name='email'
            type='email'
            placeholder='Email' required
            value={email}
            onChange={handleEmailChange}>
            </input>
            </div>
           
            <div className='modal__content-inputs'>
            <label className='modal__label'>
            Password* 
            </label>
            <input className='modal__input'
            name='password'
            type='password'
            placeholder='Password' required
            value={password}
            onChange={handlePasswordChange}>
            </input>
        </div>
        <div className='modal__content-inputs'>
        <label className='modal__label'>
            Name* 
            </label>
            <input className='modal__input'
            name='name'
            type='name'
            placeholder='Name' required
            value={name}
            onChange={handleNameChange}>
            </input>
        </div>
        <div className='modal__content-inputs'>
        <label className='modal__label'>
            Avatar URL* 
            </label>
            <input className='modal__input'
            name='avatar'
            type='avatar'
            placeholder='Avatar URL' required
            value={avatar}
            onChange={handleAvatarChange}>
            </input>
        </div>
        </div>
        <div>
            <button className='modal__submit-button' type="submit" onSubmit={handleSubmit} >
                Sign Up
            </button>
            <button className='modal__submit-login' type="submit" onClick={handleOpenLoginModal}>
                or Log In
            </button>
        </div>


    </ModalWithForm>
);
};

export default RegisterModal;