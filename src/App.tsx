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
  const [center, setCenter] = useState<[number, number]>([42.3601, -71.0589]);

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
      <MapComponent center={center} />
    </div>
  );
}

export default App;
