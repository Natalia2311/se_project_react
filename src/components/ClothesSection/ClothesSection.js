import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';
import ItemCard from "../ItemCard/ItemCard";
import "../Profile/Profile.css";
import "../ClothesSection/ClothesSection.css";
import { clothingItems } from "../../utils/constants";

const ClothesSection = ({ cards, handleCreateModal, onSelectCard, clothingItems }) => {

  const currentUser = React.useContext(CurrentUserContext);

  // const profileCards = clothingItems.filter(
  //   (item) => item.owner === currentUser._id
  // );

  return (
    <div className="clothes__section">
      <div className="clothes__section-items">
        <p className="clothes__title">Your items</p>
        <button
          className="clothes__button"
          onClick={handleCreateModal}
          type="text"
        >
          + Add New
        </button>
      </div>
      <ul className="clothes__items">
        {cards.map((card) => {
          return (
            <ItemCard 
            key={card._id} 
            item={card} 
            onSelectCard={onSelectCard} />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
