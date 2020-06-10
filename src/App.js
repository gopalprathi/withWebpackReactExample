import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'><Login /></Route>
          <Route path='/home'><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
