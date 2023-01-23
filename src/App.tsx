import React, { useEffect, useState } from "react";
import "./App.css";
import {
  HistoryList,
  InformationContainer,
  MapComponent,
  OptionList,
  SearchBar,
} from "./components";
import { SearchData } from "./data/searchdata";
import { getData } from "./utils";

type SearchResults = SearchData[];

function App() {
  const [optionList, setOptionList] = useState<SearchResults>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [center, setCenter] = useState<[number, number]>([42.3601, -71.0589]);
  const [newData, setNewData] = useState<SearchData | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get("search");
    if (searchQuery) {
      setSearchQuery(searchQuery);
    } else setSearchQuery("Boston, Massachusetts");
    localStorage.setItem("selected", "true");
  }, []);

  const clickHandler = () => {
    if (searchQuery.length > 2) {
      getData(searchQuery, setOptionList, setLoading, setNewData);
    }
  };

  // useEffect(() => {
  //   if (searchQuery.length > 2) {
  //     getData(searchQuery, setOptionList, setLoading, setNewData);
  //   }
  // }, [searchQuery]);

  useEffect(() => {
    if (newData) {
      setCenter([Number(newData.lat), Number(newData.lon)]);
      // setOptionList([]);
    }
  }, [newData]);

  const handleStringChange = (stringVal: string) => {
    setSearchQuery(stringVal);
  };

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        handleStringChange={handleStringChange}
        clickHandler={clickHandler}
      />

      {optionList.length > 0 && (
        <OptionList
          options={optionList}
          setNewData={setNewData}
          loading={loading}
        />
      )}

      <HistoryList />
      <MapComponent center={center} />
      <InformationContainer newData={newData} />
    </div>
  );
}

export default App;
