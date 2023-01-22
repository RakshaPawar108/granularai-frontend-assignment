import React from 'react';
import './App.css';
import { HistoryList, MapComponent, OptionList, SearchBar } from './components';

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
