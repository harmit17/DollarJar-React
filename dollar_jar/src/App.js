import React from 'react';
import './App.css';
import HomePage from './HomePage';
import DollarJar from './DollarJar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//Route - render out the component based on the url
//every thing between <Router> can use the ability to use routing
function App() {

  return (
    
      <Router>
        <div>
          <nav>
              {/* <Link to="/">Home</Link> */}
              <br/>              
              {/* <Link to="/DollarJar">DollarJar</Link> */}
          </nav>
          <Route path="/" component={HomePage} exact/>
          <Route path="/DollarJar" component={DollarJar} />
        </div>
      </Router>
  );
}

export default App;
