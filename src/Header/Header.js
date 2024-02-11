import './Header.css';



function getDate() {
  const currectDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return <span>{currectDate}</span>;
}

 const Header = ({onCreateModal, location}) => {
    console.log('Header');

    return (
        
          <header className="header">
          <div className="header__logo">
          <div>
            <img src={require ("../images/logo.svg").default} alt="logo" />
            </div>    
            <div className="date">{getDate()},</div>
            <div className="location">{location}</div>  
            </div>
            <div className="header__avatar-logo">
            <div>
                <button type="text" className="button" onClick={onCreateModal}>+ Add сlothes</button>
                </div>     
                <div className="username">Terrence Tegegne</div>
                <div><img src="./images/avatar.svg" alt="logo" /></div>
                </div>
          </header>
       
      );
    }

    export default Header;