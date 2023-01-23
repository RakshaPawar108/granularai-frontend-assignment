import React from "react";
import { HistoryButton } from "../HistoryButton/HistoryButton";
import "./SearchBar.css";

type Props = {
  searchQuery: string;
  handleStringChange: (stringVal: string) => void;
  clickHandler: () => void;
  historyClickHandler: () => void;
};

export const SearchBar = ({
  searchQuery,
  handleStringChange,
  clickHandler,
  historyClickHandler
}: Props) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search"
        className="searchbar"
        value={searchQuery}
        onChange={(e) => handleStringChange(e.target.value)}
      />
      <div className="search-button" onClick={clickHandler}>Search</div>
      <HistoryButton historyClickHandler={historyClickHandler} />
    </div>
  );
};
