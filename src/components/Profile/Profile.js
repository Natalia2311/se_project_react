import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar.js";
import "../Profile/Profile.css";

const Profile = ({ cards, handleCreateModal, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
};

export default Profile;
