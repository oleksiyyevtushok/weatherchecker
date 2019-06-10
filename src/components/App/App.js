import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Card from '../Card/Card';
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Card />
    </div>
  );
}

export default App;
