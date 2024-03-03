import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "../Profile/Profile.css";

const Profile = ({ clothingItems, handleCreateModal, onSelectCard }) => {
    return (
        <div className="profile">
            <div className="profile__sidebar">
                <SideBar />
            </div>
            <div className="profile__clothesSection">
                <ClothesSection
                clothingItems={clothingItems}
                onSelectCard={onSelectCard}
                handleCreateModal={handleCreateModal} />

            </div>
        </div>
    );
};

export default Profile;