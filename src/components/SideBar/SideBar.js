import React from "react";
import './SideBar.css';
import avatar from '../../images/avatar.svg';

const SideBar = () => (
    <div className="sideBar">
        <img src={avatar} alt="sideBar__avatar" className="sideBar__avatar" />
        <p className="sideBar__name">Natalia</p>
        nello
    </div>
);

export default SideBar;