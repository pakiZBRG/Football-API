import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable, getTopScorer, getLeagueBySeason, getTableBySeason, getFixtures } from '../services/api';
import Team from './Team';
import UCLTable from './UCLTable';
import Scorer from './TopScorer';
import Fixtures from './Fixtures';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const leagueName = props.match.params.name;
    const [ Teams, setTeams] = useState([]);
    const [ Tables, setTables] = useState([]);
    const [ TopScorer, setTopScorer] = useState([]);
    const [ LeaguesBySeason, setLeaguesBySeason ] = useState([]);
    const [ TableBySeason, setTableBySeason ] = useState([]);
    const [ Year, setYear ] = useState(2020);
    const [ Fixture, setFixture ] = useState([]);

    useEffect(() => {
        getTableBySeason(leagueId, Year).then(({api}) => setTableBySeason(api.leagues[0]));
        getLeagueBySeason(leagueId).then(({api}) => setLeaguesBySeason(api.leagues));
        getLeagueTable(leagueId).then(({api}) => setTables(api.standings));
        getSingleLeague(leagueId).then(({api}) => setTeams(api.teams));
        getTopScorer(leagueId).then(({api}) => setTopScorer(api.topscorers));
    }, [leagueId, Year]);
    
    const { league_id } = TableBySeason;
    const displayYear = e => {
        getLeagueTable(league_id).then(({api}) => setTables(api.standings));
        getSingleLeague(league_id).then(({api}) => setTeams(api.teams));
        getTopScorer(league_id).then(({api}) => setTopScorer(api.topscorers));
        setYear(e.target.value)
    }

    const getFixture = () => {
        getFixtures(leagueId).then(({api}) => setFixture(api.fixtures));
    }

    console.log(Fixture)

    return (
        <React.Fragment>
            <h2 className='center' style={{marginTop: '2rem'}}>
                <span style={{marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{leagueName} {Year}</span>
                <select 
                    onChange={displayYear} 
                    value={Year}
                    className='select-year'
                >
                    {LeaguesBySeason.map(({season}, i) => 
                        <option key={i} value={season}>
                            {season} / {season+1}
                        </option>
                    )}
                </select>
            </h2>

            {LeaguesBySeason[0] && LeaguesBySeason[0].type === 'Cup' 
                ? 
            <>
                <button onClick={getFixture}>Get Fixture</button>
                {Fixture && <Fixtures games={Fixture}/>}
            </>
                : 
            null}
            
            {Tables[0] && 
                <>
                    <UCLTable groups={Tables}/>
                    <Scorer scorers={TopScorer}/>
                </>
            }
            <div className='league-flex'>
                <div className='league-row'>
                    {Teams && Teams.map((team, i) => <Team team={team} key={i} leagueId={leagueId}/>)}
                </div>
            </div>
        </React.Fragment>
    )
}
