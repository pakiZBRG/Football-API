import React from 'react';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Leagues}/>
      <Route path='/league/:leagueId' component={Teams}/>
    </Router>
  );
}

export default App;
