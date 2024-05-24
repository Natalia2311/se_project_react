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
 const checkToken = (jwt) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
   
      }).then(handleResponse)
      .catch((err) => {
        console.log(err);
        throw err;
      });
  
    }

    
   
 // Edit profile   

  const updateUser = ({ name, avatar}, jwt ) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${jwt}`,
          },
        body: JSON.stringify({ name, avatar }),
      }).then(handleResponse)
      .catch((err) => {
                console.log(err);
                throw err;
      });
    };

    // Like

    const addLike = (id, jwt) => {
      return fetch(`${baseUrl}/items/${id}/likes`, {
          method: "PUT",
          headers: {
             // "Content-Type": "application/json",
              authorization: `Bearer ${jwt}`,
            },
          //body: JSON.stringify({ name, avatar }),
        }).then(handleResponse);
        // .catch((err) => {
        //           console.log(err);
        //           throw err;
        // });
      };


      const removeLike = (id, jwt) => {
        return fetch(`${baseUrl}/items/${id}/likes`, {
            method: "DELETE",
            headers: {
               // "Content-Type": "application/json",
                authorization: `Bearer ${jwt}`,
              },
            //body: JSON.stringify({ name, avatar }),
          }).then(handleResponse);
          // .catch((err) => {
          //           console.log(err);
          //           throw err;
          // });
        };
  


    const auth = {
      createUser,
      checkToken,
      login,
      updateUser,
      addLike,
      removeLike,

    }

   export default auth;