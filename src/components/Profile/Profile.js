import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "../Profile/Profile.css";


const Profile = ({ cards, handleCreateModal, onSelectCard }) => {
    return (
        <div className="profile">
            <div className="profile__sideBar">
                <SideBar />
            </div>
            <div className="profile__clothes">
                <ClothesSection
                cards={cards}
                onSelectCard={onSelectCard}
                handleCreateModal={handleCreateModal} />
               
            </div>
        </div>
    );
};

export default Profile;