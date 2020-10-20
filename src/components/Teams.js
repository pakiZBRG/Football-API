import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable, getTopScorer } from '../services/api';
import Team from './Team';
import Table from './Table';
import Scorer from './TopScorer';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const leagueName = props.match.params.name;
    const [Teams, setTeams] = useState([]);
    const [Tables, setTables] = useState([]);
    const [TopScorer, setTopScorer] = useState([]);

    useEffect(() => {
        getSingleLeague(leagueId).then(({api}) => setTeams(api.teams));
        getLeagueTable(leagueId).then(({api}) => setTables(api.standings));
        getTopScorer(leagueId).then(({api}) => setTopScorer(api.topscorers));
    }, [leagueId]);

    return (
        <React.Fragment>
            {Tables[0] && 
                <>
                    <h2 className='center' style={{marginTop: '2rem'}}>{leagueName} 2019/2020</h2>
                    <table className='table-league'>
                        <thead>
                            <tr>
                                <td className='center'></td>
                                <td className='none'>Club</td>
                                <td className='center'>P</td>
                                <td className='center'>W</td>
                                <td className='center'>D</td>
                                <td className='center'>L</td>
                                <td className='center'>A</td>
                                <td className='center'>F</td>
                                <td className='center'>Diff</td>
                                <td className='center'>Points</td>
                                <td className='center'>Form</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            leagueId !== 530 
                                ? 
                            (Tables.map(group => group.map((team, i) => <Table team={team} key={i}/>))) 
                                : 
                            (Tables[0].map((team, i) => <Table team={team} key={i}/>))
                            }
                        </tbody>
                    </table>
                </>
            }
            {TopScorer && 
                <>
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
