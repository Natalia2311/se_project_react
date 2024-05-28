import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar.js";
import "../Profile/Profile.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  cards,
  handleCardLike,
  isLoggedIn,
  handleCreateModal,
  onSelectCard,
  handleOpenEditModal,
  handleEditProfile,
  handleLogout,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <SideBar
        name={currentUser.name}
        avatar={currentUser.avatar}
        handleEditProfile={handleEditProfile}
        handleLogout={handleLogout}
        handleOpenEditModal={handleOpenEditModal}
      />
      <ClothesSection
        cards={cards}
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        isLoggedIn={isLoggedIn}
        handleCardLike={handleCardLike}
      />
    </div>
  );
};

export default Profile;
