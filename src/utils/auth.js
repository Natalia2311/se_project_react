import { handleResponse } from './api';

const baseUrl = "http://localhost:3001";

//Sigh up
const createUser = ({ name, avatar, email, password }) => {
    return fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ name, avatar, email, password }),
      }).then(handleResponse);
    };

//Sign in
const login = ({ email, password }) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ email, password }),
      }).then(handleResponse);
    };

// Check token
const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        body: JSON.stringify({}),
      }).then(handleResponse);
    };
   
 // Edit profile   

 const updateUser = ({ name, avatar }) => {
    return fetch(`${baseUrl}/signup`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ name, avatar}),
      }).then(handleResponse);
    };

    const auth = {
        createUser,
        login,
        checkToken,
        updateUser,
    }

    export default auth;