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
   
      }).then(handleResponse)
      .catch((err) => {
        console.log(err);
        throw err;
      });
  
    }

    
   
 // Edit profile   

  const updateUser = ({ name, avatar, token }) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        body: JSON.stringify({ name, avatar }),
      }).then(handleResponse)
      .catch((err) => {
                console.log(err);
                throw err;
      });
    };

    const auth = {
      createUser,
      checkToken,
      login,
      updateUser,

    }

   export default auth;