import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useForm } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseLoacation,
} from "../../utils/weatherApi";
import "../../vendor/fonts.css";
import {CurrentTemperatureUnitContext} from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from 'react-router-dom';
import AddItemModal from "../AddItemModal/AddItemModal";
import ClothesSection from "../ClothesSection/ClothesSection";
import { addItem, deleteItems, getItemsList } from "../../utils/api";
import Profile from "../Profile/Profile";
import SideBar from "../SideBar/SideBar";
import { defaultClotingItems } from "../../utils/constants";


function App() {
  const weatherTemp = "86";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F"); 
  const [clothingItems, setClothingItems] = useState(defaultClotingItems);

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

  const handleDeleteCard = (card) => {
    deleteItems(card._id)
    .then(() => {
    console.lod(card._id);
    });
   }
  deleteItems();




  const handleAddItemSubmit = (values) => {
    const item = {
      name: values.name,
      weather: values.weatherType,
      imageUrl: values.link,
    };
    addItem(item)
    .then((res) => {
      console.log(res);
      setClothingItems([res, ...clothingItems]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleToggleSwitchChange =() => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit ("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit ("F");
  }


  const onAddItem =(values) => {
    console.log(values);
    // console.log(e.target.value);
    handleCloseModal();
  }

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
      // getItemsList()
      // .then((items) => {
      //   setClothingItems(items);
      // })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 //console.log(currentTemperatureUnit);  
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}} >
      <Header
        onCreateModal={handleCreateModal}
        temp={temp}
        location={location}
      />
      <Switch>
        <Route exact path="/">
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} clothingItems={clothingItems}/>
      </Route>
      <Route path="/profile">
        <Profile
        onSelectCard={handleSelectedCard}
        onCreateModal={handleCreateModal}
        cards={clothingItems}
        />
      </Route>
      </Switch>  
      <Footer />
      {activeModal === "create" && <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} 
      onAddItem={handleAddItemSubmit}/>}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
      
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};


export default App;
