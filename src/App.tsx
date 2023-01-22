import React from 'react';
import './App.css';
import { MapComponent, OptionList, SearchBar } from './components';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <OptionList />
      <MapComponent />
    </div>
  );
}

export default App;
