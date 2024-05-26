import "./Header.css";
//import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function getDate() {
  const currectDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return <span>{currectDate}</span>;
}

const Header = ({
  onCreateModal,
  location,
  isLoggedIn,
  handleOpenSighupModal,
  handleOpenLoginModal,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="date">{getDate()},</div>
        <div className="location">{location}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button type="text" className="button" onClick={onCreateModal}>
              + Add сlothes
            </button>

            <Link to="/profile" className="username">
              {currentUser?.name}
            </Link>

            <div className="header__avatar">
              <img
                src={currentUser?.avatar}
                alt="avatar"
                className="header__avatar-logo"
              />
              <p className="header__avatar-logo-letter">
                {currentUser?.name && currentUser?.name[0].toUpperCase()}
              </p>
            </div>
          </>
        ) : (
          <>
            <button className="button" onClick={handleOpenSighupModal}>
              Sign Up
            </button>
            <button className="button" onClick={handleOpenLoginModal}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
