import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable, getTopScorer, getLeagueBySeason, getTableBySeason } from '../services/api';
import Team from './Team';
import Table from './Table';
import Scorer from './TopScorer';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const leagueName = props.match.params.name;
    const [ Teams, setTeams] = useState([]);
    const [ Tables, setTables] = useState([]);
    const [ TopScorer, setTopScorer] = useState([]);
    const [ LeaguesBySeason, setLeaguesBySeason ] = useState([]);
    const [ TableBySeason, setTableBySeason ] = useState([]);
    const [ Year, setYear ] = useState(2019);

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

    return (
        <React.Fragment>
            <h2 className='center' style={{marginTop: '2rem'}}>{leagueName} {Year}</h2>
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
            {Tables[0] && 
                <>
                    <table className='table-league'>
                        <thead>
                            <tr>
                                <td className='center'></td>
                                <td className='none'>Club</td>
                                <td className='center'>P</td>
                                <td className='center'>W</td>
                                <td className='center'>D</td>
                                <td className='center'>L</td>
                                <td className='center'>Goals</td>
                                <td className='center'>Diff</td>
                                <td className='center'>Points</td>
                                <td className='center'>Form</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            leagueId === 530 
                                ? 
                            (Tables.map(group => group.map((team, i) => <Table team={team} key={i}/>))) 
                                : 
                            (leagueId === 294 
                                ?
                            Tables[0].map((team, i) => <Table team={team} key={i}/>) 
                                :
                            Tables.map(group => group.map((team, i) => <Table team={team} key={i}/>))
                            )
                            }
                        </tbody>
                    </table>
                    {/* TOP SCORER */}
                    <h2 className='center'>Top Scorer</h2>
                    <table className='table-league' style={{width: '70%'}}>
                        <thead>
                            <tr>
                                <td>Player</td>
                                <td className='center'>Appereances</td>
                                <td className='center'>Assists</td>
                                <td className='center'>Goals (Penalties)</td>
                                <td className='center'>Ratio</td>
                            </tr>
                        </thead>
                        <tbody>
                            {TopScorer.map((scorer, i) => <Scorer scorer={scorer} key={i}/>)}
                        </tbody>
                    </table>
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
