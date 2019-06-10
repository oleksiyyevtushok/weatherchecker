import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Cards from '../CardsList/CardsList';
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
