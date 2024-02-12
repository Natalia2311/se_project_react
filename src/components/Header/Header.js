import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";

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
          <img src={logo} alt="logo" />
        </div>
        <div className="date">{getDate()},</div>
        <div className="location">{location}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" className="button" onClick={onCreateModal}>
            + Add сlothes
          </button>
        </div>
        <p className="username">Terrence Tegegne</p>
        <div>
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
