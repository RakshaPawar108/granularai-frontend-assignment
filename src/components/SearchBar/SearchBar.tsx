import React from "react";
import { HistoryButton } from "../HistoryButton/HistoryButton";
import "./SearchBar.css";

type Props = {
  searchQuery: string;
  handleStringChange: (stringVal: string) => void;
};

export const SearchBar = ({
  searchQuery,
  handleStringChange,
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
      <HistoryButton />
    </div>
  );
};
