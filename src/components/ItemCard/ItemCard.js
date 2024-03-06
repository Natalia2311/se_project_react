import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
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
      <p className="card__name"> {item.name} </p>
    </div>
  );
};

export default ItemCard;
