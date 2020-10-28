import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import TeamStatistics from './components/TeamStatistics';
import PlayerInfo from './components/PlayerInfo';
import SingleFixture from './components/SingleFixture';


function App() {
  return (
    <Router>
      <Route path='/' exact component={Leagues}/>
      <Route path='/league/:name/:leagueId' component={Teams}/>
      <Route path='/statistic/squad/:leagueId/:teamId' component={TeamStatistics}/>
      <Route path='/player/:name/:playerId' component={PlayerInfo}/>
      <Route path='/fixture/:fixtureId' component={SingleFixture}/>
    </Router>
  );
}

export default App;
