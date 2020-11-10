import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import TeamStatistics from './components/TeamStatistics';
import PlayerInfo from './components/PlayerInfo';
import SingleFixture from './components/SingleFixture';
import HeadToHead from './components/HeadToHead';
import FixturesByTeam from './components/FixturesByTeam';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Leagues}/>
        <Route path='/league/:name/:leagueId' component={Teams}/>
        <Route path='/statistic/squad/:leagueId/:teamId' component={TeamStatistics}/>
        <Route path='/player/:name/:playerId' component={PlayerInfo}/>
        <Route path='/fixture/:fixtureId' component={SingleFixture}/>
        <Route path='/h2h/:teamId1/:teamId2' component={HeadToHead}/>
        <Route path='/team/fixture/:teamId' component={FixturesByTeam}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
