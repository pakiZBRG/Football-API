import React from 'react';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import TeamStatistics from './components/TeamStatistics';


function App() {
  return (
    <Router>
      <Route path='/' exact component={Leagues}/>
      <Route path='/league/:leagueId' component={Teams}/>
      <Route path='/statistic/squad/:leagueId/:teamId' component={TeamStatistics}/>
    </Router>
  );
}

export default App;
