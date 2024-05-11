import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import auth from "../../utils/auth";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLoacation,
} from "../../utils/weatherApi";
import "../../vendor/fonts.css";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
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
  // const [openLoginModal, setOpenLoginModal] = useState(false);
  // const [openSighupModal, setOpenSighupModal] = useState(false);
  // const [openEditModal, setOpenEditModal] = useState(false);

  //const navigate = useNavigate();


  const handleLoginModal = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
    .login({ email, password })
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      auth.checkToken(data.token)
      .then((data) => {
        setCurrentUser(data.token, true);
        setIsLoggedIn(true);
        handleCloseModal();
        //navigate('/profile');
      });
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(handleCloseModal);
  };

  const history = useHistory();

const handleRegisterModal = ({ name, avatar, email, password }) => {
    auth
    .createUser(name, avatar, email, password)
    .then((res) => {
      console.log(res);
      setIsLoggedIn(true);
      setCurrentUser(res.userData);
      handleCloseModal();
      history.push("/profile");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleEditProfile = ({ name, avatar }) => {
    auth
    .updateUser(name, avatar)
    .then((data) => {
      setCurrentUser(data);

    }).catch((error) => {});

  };


//  const handleLogout =() => {
//   localStorage.removeItem("jwt");
//   setIsLoggedIn(false);
//   setUserState({ name: '', avatar:'', _id: ''});
//   setCurrentUser(null);


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
            setIsLoggedIn(true);
            // You should set the user data here
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  tokenCheck();
}, []);


function handleCheckToken(token) {
  auth
  .checkToken(token)
  .then((res) => {
    if (res && res.data) {
      setIsLoggedIn(true);
      setCurrentUser(true); //(res.data);
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

useEffect(() => {
  const token = localStorage.getItem('jwt');
  if (token) {
    localStorage.setItem('jwt', token);
    auth
    .checkToken(token)
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
}, [isLoggedIn]);


const handleOpenLoginModal = () => {
 setActiveModal('login');
};

const handleOpenSighupModal = () => {
 setActiveModal('signup');
};

const handleOpenEditModal = () => {
   setActiveModal('update');
};

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = () => {
    deleteItems(selectedCard._id)
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
    addItem(item)
      .then((item) => {
        console.log(item);
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

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     const token = localStorage.getItem("jwt");
  //     checkToken(token)
  //       .then((userData) => {
  //         setCurrentUser(userData);
  //       })
  //       .catch(console.error);
  //   }
  // }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              temp={temp}
              clothingItems={clothingItems}
            />
          </Route>

          <ProtectedRoute path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              handleCreateModal={handleCreateModal}
              cards={clothingItems}
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
          />
        )}
         {activeModal === "login" && (
          <LoginModal
          handleOpenLoginModal={handleOpenLoginModal}
          onClose={handleCloseModal}
          onSubmit={handleLoginModal}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
      
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
