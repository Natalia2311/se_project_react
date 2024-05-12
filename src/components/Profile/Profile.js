import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar.js";
import "../Profile/Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ cards, handleCreateModal, onSelectCard, handleEditProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <SideBar
      name={currentUser.name}
      avatar={currentUser.avatar} />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
      />
    </div>
  );
};

export default Profile;
