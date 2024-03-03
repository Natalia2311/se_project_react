 import ItemCard from "../ItemCard/ItemCard";
 import "../Profile/Profile.css";

 const ClothesSection = ({  clothingItems, handleCreateModal, onSelectCard }) => {
    return (
        <div classname="clothes__section">
            <div className="clothes__section">
                <p className="clothes__title">Your items</p>
                <button 
                className="clothes__button"
                onClick={handleCreateModal}
                type="text"
                >
                 + Add New
                 </button>                
            </div>
            <div className="clothes__items">
                { clothingItems.map((item) => {
                    return (
                        <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
                    );
                })}
            </div>
        </div>
    );
 };

 export default ClothesSection;