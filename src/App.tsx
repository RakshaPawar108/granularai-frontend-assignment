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
import { useMap } from "react-leaflet";
import { ToastContainer } from "react-toastify";

type SearchResults = SearchData[];

function App() {
  const [optionList, setOptionList] = useState<SearchResults>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [center, setCenter] = useState<[number, number]>([42.3601, -71.0589]);
  const [newData, setNewData] = useState<SearchData | null>(null);
  const [historyList, setHistoryList] = useState<string[]>(
    JSON.parse(localStorage.getItem("history") ?? "[]")
  );
  const [showHistoryList, setShowHistoryList] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get("search");
    if (searchQuery) {
      setSearchQuery(searchQuery);
    } else setSearchQuery("Boston, MA");
    localStorage.setItem("selected", "true");
  }, []);

  const historyClickHandler = () => {
    setShowHistoryList(!showHistoryList);
  };

  useEffect(() => {
    if (searchQuery.length > 2) {
      getData(searchQuery, setOptionList, setLoading, setNewData);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (newData) {
      setCenter([Number(newData.lat), Number(newData.lon)]);
    }
  }, [newData]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify([...new Set(historyList)]));
  }, [historyList]);

  const handleStringChange = (stringVal: string) => {
    setSearchQuery(stringVal);
  };

  function ChangeLocation() {
    const map = useMap();
    map.flyTo(center, 11);
    setChangeLocation(false);
    return null;
  }

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        handleStringChange={handleStringChange}
        historyClickHandler={historyClickHandler}
        setChangeLocation={setChangeLocation}
        newData={newData}
        setHistoryList={setHistoryList}
      />

      {optionList.length > 0 && (
        <OptionList
          options={optionList}
          setNewData={setNewData}
          loading={loading}
          setSearchQuery={setSearchQuery}
          setOptionList={setOptionList}
        />
      )}

      <HistoryList
        showHistoryList={showHistoryList}
        setShowHistoryList={setShowHistoryList}
        setSearchQuery={setSearchQuery}
        historyList={historyList}
      />
      <MapComponent
        center={center}
        newData={newData}
        ChangeLocation={<ChangeLocation />}
        changeLocation={changeLocation}
      />
      <ToastContainer style={{ fontSize: "1.5rem" }} />
      <InformationContainer newData={newData} />
    </div>
  );
}

export default App;
