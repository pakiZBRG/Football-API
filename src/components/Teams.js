import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable, getTopScorer } from '../services/api';
import Team from './Team';
import Table from './Table';
import Scorer from './TopScorer';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const [Teams, setTeams] = useState([]);
    const [Tables, setTables] = useState([]);
    const [TopScorer, setTopScorer] = useState([]);

    useEffect(() => {
        getSingleLeague(leagueId).then(({api}) => setTeams(api.teams));
        getLeagueTable(leagueId).then(({api}) => setTables(api.standings[0]));
        getTopScorer(leagueId).then(({api}) => setTopScorer(api.topscorers));
    }, [leagueId]);

    console.log(TopScorer)

    return (
        <React.Fragment>
            {Tables && 
                <>
                    <h2 className='center'>Table 2019/2020</h2>
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
                            {Tables.map((team, i) => <Table team={team} key={i}/>)}
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
