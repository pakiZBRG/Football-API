import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable, getTopScorer, getLeagueBySeason, getFixtures } from '../services/api';
import Team from './Team';
import UCLTable from './UCLTable';
import Scorer from './TopScorer';
import Fixtures from './Fixtures';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const [ Teams, setTeams] = useState([]);
    const [ Tables, setTables] = useState([]);
    const [ TopScorer, setTopScorer] = useState([]);
    const [ LeaguesBySeason, setLeaguesBySeason ] = useState([]);
    const [ Fixture, setFixture ] = useState([]);

    useEffect(() => {
        getLeagueBySeason(leagueId).then(({api}) => setLeaguesBySeason(api.leagues));
        getLeagueTable(leagueId).then(({api}) => setTables(api.standings));
        getSingleLeague(leagueId).then(({api}) => setTeams(api.teams));
        getTopScorer(leagueId).then(({api}) => setTopScorer(api.topscorers))
    }, [leagueId]);

    const getFixture = () => getFixtures(leagueId).then(({api}) => setFixture(api.fixtures));

    return (
        <React.Fragment>
            {Tables &&
                <>
                    <UCLTable groups={Tables}/>
                    <Scorer scorers={TopScorer}/>
                </>
            }

            {LeaguesBySeason[0] &&
                <>
                    <h1 className='center' style={{marginBottom: '2rem'}}>Fixtures</h1>
                    <div className='team-info'>
                        <button 
                            onClick={getFixture}
                            className='get-fixture'
                        >
                            Get Fixtures
                        </button>
                    </div>
                    {Fixture && <div className='fixture-grid'><Fixtures games={Fixture}/></div>}
                </>
            }
            
            <h1 className='center' style={{margin: '2rem 0'}}>Teams</h1>
            <div className='league-flex'>
                <div className='teams-row'>
                    {Teams && Teams.map((team, i) => <Team team={team} key={i} leagueId={leagueId}/>)}
                </div>
            </div>
        </React.Fragment>
    )
}
