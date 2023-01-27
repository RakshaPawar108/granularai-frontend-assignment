import React from "react";
import { HistoryButton } from "../HistoryButton/HistoryButton";
import "./SearchBar.css";
import { SearchData } from "../../data/searchdata";
import { Header } from "../Header/Header";

type Props = {
  searchQuery: string;
  handleStringChange: (stringVal: string) => void;
  historyClickHandler: () => void;
  setChangeLocation: any;
  newData: SearchData | null;
  setHistoryList: any;
};

export const SearchBar = ({
  searchQuery,
  handleStringChange,
  historyClickHandler,
  setChangeLocation,
  newData,
  setHistoryList,
}: Props) => {
  return (
    <div className='main-wrapper'>
      <Header />
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search"
          className="searchbar"
          value={searchQuery}
          onChange={(e) => handleStringChange(e.target.value)}
        />
        <div
          className="search-button"
          onClick={() => {
            setChangeLocation(true);
            if (newData) {
              setHistoryList((historyList: string[]) => [
                ...new Set([
                  ...historyList,
                  newData.namedetails["name:en"] ??
                    newData.namedetails.name ??
                    newData.display_name,
                ]),
              ]);
            }
          }}
        >
          Fly To Location
        </div>
        <HistoryButton historyClickHandler={historyClickHandler} />
      </div>
    </div>
  );
};
