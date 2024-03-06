import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function getDate() {
  const currectDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return <span>{currectDate}</span>;
}

const Header = ({ onCreateModal, location }) => {
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
        <div>
          <button type="text" className="button" onClick={onCreateModal}>
            + Add сlothes
          </button>
        </div>
        <Link to="/profile" className="username">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
