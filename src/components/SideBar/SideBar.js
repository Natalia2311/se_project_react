import React from "react";
import "./SideBar.css";

const SideBar = ({
  name,
  avatar,
  handleLogout,
  handleOpenEditModal,
}) => (
  <div className="sidebar">
    <div className="sidebar__user">
      <img src={avatar} alt="sidebar__avatar" className="sidebar__avatar" />
      <p className="sidebar__name">{name}</p>
    </div>
    <div className="sidebar__button">
      <button
        onClick={handleOpenEditModal}
        type="button"
        className="sidebar__edit-button"
      >
        Change profile data
      </button>
      <button
        onClick={handleLogout}
        type="button"
        className="sidebar__logout-button"
      >
        Log Out
      </button>
    </div>
  </div>
);

export default SideBar;
