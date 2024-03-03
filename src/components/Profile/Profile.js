import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "../Profile/Profile.css";
import ItemCard from "../ItemCard/ItemCard";

const Profile = ({ cards, handleCreateModal, onSelectCard }) => {
    return (
        <div className="profile">
            <div className="profile__sidebar">
                <SideBar />
            </div>
            <div className="profile__clothes">
                <ClothesSection
                cards={cards}
                onSelectCard={onSelectCard}
                handleCreateModal={handleCreateModal} />
                <section className="cards">
                    <ul className="cards__list">
                        {cards.map((card) => (
                            <ItemCard
                            key={card._id}
                            name={card.name}
                            item={card}
                            id={card.id}
                            weather={card.weather}
                            link={card.link}
                            handleCreateModal={handleCreateModal} />

                        ))}
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default Profile;