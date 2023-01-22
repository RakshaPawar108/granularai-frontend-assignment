import React, { useEffect, useState } from "react";
import "./App.css";
import { HistoryList, MapComponent, OptionList, SearchBar } from "./components";
import { SearchData } from "./data/searchdata";
import { getData } from "./utils";

type SearchResults = SearchData[];

function App() {
  const [optionList, setOptionList] = useState<SearchResults>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get("search");
    if (searchQuery) {
      setSearchQuery(searchQuery);
    } else setSearchQuery("Boston");
  }, []);

  useEffect(() => {
    if (searchQuery.length > 3) {
      getData(searchQuery, setOptionList, setLoading);
    }
  }, [searchQuery]);

  const handleStringChange = (stringVal: string) => {
    setSearchQuery(stringVal);
  };

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        handleStringChange={handleStringChange}
      />
      <OptionList />
      <HistoryList />
      <MapComponent />
    </div>
  );
}

export default App;
