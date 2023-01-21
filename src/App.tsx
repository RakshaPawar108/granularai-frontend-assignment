import React from 'react';
import './App.css';
import { InformationContainer, MapComponent } from './components';

function App() {
  return (
    <div className="App">
      <MapComponent />
      <InformationContainer />
    </div>
  );
}

export default App;
