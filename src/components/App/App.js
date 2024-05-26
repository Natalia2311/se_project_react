import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import auth from "../../utils/auth";
import { addLike, removeLike } from '../../utils/auth';
import DeleteModal from "../DeleteModal/DeleteModal";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLoacation,
} from "../../utils/weatherApi";
import "../../vendor/fonts.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";

import { addItem, deleteItems, getItemsList } from "../../utils/api";
import Profile from "../Profile/Profile";

import { defaultClotingItems } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../../utils/ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClotingItems);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //const navigate = useNavigate();

  // function handleCheckToken(token) {
  //   auth
  //   .checkToken(token)
  //   .then((res) => {
  //     if (res && res.data) {
  //       setIsLoggedIn(true);
  //       setCurrentUser(res.data);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  

  const handleLoginModal = (email, password) => {
    auth
      .login({ email, password })
      .then((res) => {
        console.log(res);
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);
          auth.checkToken(res.token).then((data) => {
            setCurrentUser(data.user);
            handleCloseModal();
            setIsLoggedIn(true);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally();
  };

  const history = useHistory();

  const handleRegisterModal = (name, avatar, email, password) => {
    auth
      .createUser({ name, avatar, email, password })
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        setCurrentUser(res.data);
        handleCloseModal();
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditProfile = (name, avatar) => {
    const jwt = localStorage.getItem("jwt");
    auth
      .updateUser({ name, avatar }, jwt)
      .then((res) => {
      
       setIsLoggedIn(true);
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);

    setCurrentUser(null);
  };

  
  // const handleCardLike = ({ id, isLiked }) => {
    // const updatedCard = cards.map((item) => {
    //   if (item.id === id) {
    //     return {...item, isLiked };
    //   }
    //   return item;
    // })
  //   const jwt= localStorage.getItem("jwt");
  //   // Check if this card is not currently liked
  //   !isLiked
  //     ? // if so, send a request to add the user's id to the card's likes array
  //       //api
  //         // the first argument is the card's id
  //         addLike(id, jwt)
  //         .then((updatedCard) => {
  //           setClothingItems((cards) =>
  //             cards.map((item) => (item._id === id ? updatedCard : item))
  //           );
  //         })
  //         .catch((err) => console.log(err))
  //     : // if not, send a request to remove the user's id from the card's likes array
  //      // api
  //         // the first argument is the card's id
  //         removeLike(id, jwt) 
  //         .then((updatedCard) => {
  //           setClothingItems((cards) =>
  //             cards.map((item) => (item._id === id ? updatedCard : item))
  //           );
  //         })
  //         .catch((err) => console.log(err));
  // };

   const handleCardLike = (id, isLiked) => {
    const jwt = localStorage.getItem("jwt");
    if (!isLiked) { 
    
    addLike(id, jwt)
  
    .then((updatedCard) => {
     
      setClothingItems((cards) => {
        return cards.map((item) => (item._id === id ? updatedCard.data : item))
      });
    })
    .catch((err)=> console.log(err))
  } else {
    removeLike(id, jwt)
    .then ((updatedCard) => {
      setClothingItems((cards) => {
        return cards.map((item) => (item._id === id ? updatedCard.data : item))
      });
    })
    .catch((err)=> console.log(err));
  };
   };

   

  // const  handleCheckToken = () => {
  //   const token = localStorage.getItem('jwt');
  //   if(token) {
  //     return auth
  //     .checkToken(token)
  //     .then((user) => {
  //       console.log(user);
  //       setCurrentUser(user, token, true);
  //       setIsLoggedIn(true);
  //       return user;

  //     })

  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   }
  //   return token;
  // };

  // useEffect(() => {
  //   handleCheckToken();
  // }, []);

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        console.log(jwt);
        auth

          .checkToken(jwt)
          .then((res) => {
            if (res) {
              setCurrentUser(res.user);
              setIsLoggedIn(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    tokenCheck();
  }, []);

 const handleCheckToken = (jwt) =>{
    auth
      .checkToken(jwt)
      .then((res) => {
        if (res && res.data) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      localStorage.setItem("jwt", token);
      auth

        .checkToken(token)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenSighupModal = () => {
    setActiveModal("signup");
  };

  const handleOpenEditModal = () => {
    setActiveModal("update");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleOpenDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = () => {
    const jwt = localStorage.getItem("jwt")
    deleteItems(selectedCard._id, jwt)
      .then(() => {
        const newItemList = clothingItems.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setClothingItems(newItemList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    const item = { name, imageUrl, weather };
    const jwt= localStorage.getItem("jwt");
    
    addItem(item, jwt)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const city = parseLoacation(data);
        setLocation(city);
      })
      .catch((err) => {
        console.log(err);
      });
    getItemsList()
      .then((res) => {
        setClothingItems(res);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <CurrentUserContext.Provider value={{ currentUser }} isLoggedIn={isLoggedIn}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            temp={temp}
            location={location}
            handleOpenSighupModal={handleOpenSighupModal}
            handleOpenLoginModal={handleOpenLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                temp={temp}
                clothingItems={clothingItems}
                handleCardLike= {handleCardLike}
              />
            </Route>

            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onSelectCard={handleSelectedCard}
                handleCreateModal={handleCreateModal}
                cards={clothingItems}
                isLoggedIn={isLoggedIn}
                handleEditProfile={handleEditProfile}
                onClose={handleCloseModal}
                handleLogout={handleLogout}
                handleOpenEditModal={handleOpenEditModal}
                //  handleLikeClick={handleLikeClick}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
         
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onConfirm={handleDeleteCard}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              handleOpenSighupModal={handleOpenSighupModal}
              onClose={handleCloseModal}
              onSubmit={handleRegisterModal}
              handleOpenLoginModal={handleOpenLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleOpenLoginModal={handleOpenLoginModal}
              onClose={handleCloseModal}
              handleOpenSignupModal={handleOpenSighupModal}
              onSubmit={handleLoginModal}
            />
          )}
          {activeModal === "update" && (
            <EditProfileModal
              handleOpenEditModal={handleOpenEditModal}
              onClose={handleCloseModal}
              onSubmit={handleEditProfile}
            />
          )}
          {activeModal === "delete" && (
            <DeleteModal
            handleOpenDeleteModal={handleOpenDeleteModal}
              onClose={handleCloseModal}
              onConfirm={handleDeleteCard}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
