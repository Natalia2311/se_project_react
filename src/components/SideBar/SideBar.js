import React from "react";
import "./SideBar.css";


const SideBar = ({ name, avatar, handleEditProfile, handleLogout }) => (
  
  <div className="sidebar">
    <img src={avatar} alt="sidebar__avatar" className="sidebar__avatar" />
    <p className="sidebar__name">{name}</p>
    <div className="sidebar__button">
      <button
      onSubmit={handleEditProfile}
      type="button"
      className="sidebar__edit-button">
        Change profile data 
        </button>
        <button
       onClick={handleLogout}
      type="button"
      className="sidebar__logout-button">
        Log Out
        </button>
    </div>
  </div>
);

export default SideBar;
