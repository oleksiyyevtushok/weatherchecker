import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

import Header from '../Header/Header';
import Card from '../Card/Card';
import Search from '../Search/Search';

ReactGA.initialize('UA-161537135-1');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.set({dimension1: "Member"});

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
