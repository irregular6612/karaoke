import './App.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './Main';
import Song from './Song';

function App() {

  return (
    <HashRouter>
      <Route exact path="/" component={Main} ></Route>
      <Route exact path="/song/:videoId" component={Song} ></Route>
    </HashRouter>
  );
}


export default App;
