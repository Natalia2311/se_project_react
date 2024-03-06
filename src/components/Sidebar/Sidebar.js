import React from "react";
import './Sidebar.css';
import avatar from '../../images/avatar.svg';

const Sidebar = () => (
    <div className="sidebar">
        <img src={avatar} alt="sidebar__avatar" className="sidebar__avatar" />
        <p className="sidebar__name">Terrence Tegegne</p>
        
    </div>
);

export default Sidebar;