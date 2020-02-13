import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


function App() {

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
