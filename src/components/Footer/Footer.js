import "./Footer.css";

const currentYear = new Date().getFullYear();
const Footer = () => {
  console.log("footer");
  return (
    <footer className="footer">
      <div>Developed by NS </div>
      <div>{currentYear}</div>
    </footer>
  );
};

export default Footer;
