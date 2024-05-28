import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "../Profile/Profile.css";
import "../ClothesSection/ClothesSection.css";

const ClothesSection = ({
  cards,
  handleCreateModal,
  onSelectCard,
  isLoggedIn,
  handleCardLike,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const filteredItems = cards?.filter((card) => {
    return card.owner._id === currentUser._id;
  });

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
        {filteredItems.map((card) => {
          return (
            <ItemCard
              key={card._id}
              item={card}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              handleCardLike={handleCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
