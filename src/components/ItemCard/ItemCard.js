import "./ItemCard.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, handleCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  const handleLike = () => {
    handleCardLike({
      id: item._id,
      isLiked: isLiked,
      currentUser: currentUser,
    });
  };

  return (
    <div className="card__container">
      <div>
        <img
          src={item.imageUrl || item.link}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <div className="card">
        <p className="card__name"> {item.name} </p>
        <button
          onClick={() => handleLike(item._id, isLiked)}
          type="button"
          className={
            isLiked
              ? "card__like-button card__like-button_active"
              : "card__like-button"
          }
        ></button>
      </div>
    </div>
  );
};

export default ItemCard;
