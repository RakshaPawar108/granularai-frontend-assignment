import { HistoryButton } from "../HistoryButton/HistoryButton";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search" className='searchbar' />
      <HistoryButton />
    </div>
  );
};
