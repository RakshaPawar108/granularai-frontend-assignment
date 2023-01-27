import locationIcon from "../../assets";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src={locationIcon} alt="Locator App Icon" className="header-icon" />
      <span className='header-text'>Locator App</span>
    </div>
  );
};
