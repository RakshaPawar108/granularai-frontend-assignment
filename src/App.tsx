import React from 'react';
import './App.css';
import { HistoryList, MapComponent, OptionList, SearchBar } from './components';
import { SearchData } from './data/searchdata';

type SearchResults = SearchData[];

function App() {

  
  return (
    <div className="App">
      <SearchBar />
      <OptionList />
      <HistoryList />
      <MapComponent />
    </div>
  );
}

export default App;
