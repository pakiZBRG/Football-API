import React, { useEffect, useState } from 'react';
import { getSingleLeague, getLeagueTable } from '../services/api';
import Team from './Team';
import Table from './Table';


export default function Teams(props) {
    const leagueId = props.match.params.leagueId;
    const [Teams, setTeams] = useState([]);
    const [Tables, setTables] = useState([]);

    useEffect(() => {
        getSingleLeague(leagueId).then(({api}) => setTeams(api.teams));
        getLeagueTable(leagueId).then(({api}) => setTables(api.standings[0]));
    }, [leagueId]);

    return (
        <React.Fragment>
            {Tables && 
                <table className='table-league'>
                    <thead>
                        <tr>
                            <td style={{textAlign: 'center'}}></td>
                            <td className='none'>Club</td>
                            <td style={{textAlign: 'center'}}>P</td>
                            <td style={{textAlign: 'center'}}>W</td>
                            <td style={{textAlign: 'center'}}>D</td>
                            <td style={{textAlign: 'center'}}>L</td>
                            <td style={{textAlign: 'center'}}>A</td>
                            <td style={{textAlign: 'center'}}>F</td>
                            <td style={{textAlign: 'center'}}>Diff</td>
                            <td style={{textAlign: 'center'}}>Points</td>
                            <td style={{textAlign: 'center'}}>Form</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Tables.map((team, i) => (<tr key={i}><Table team={team}/></tr>))}
                    </tbody>
                </table>
            }
            <div className='league-flex'>
                <div className='league-row'>
                    {Teams && Teams.map((team, i) => <Team team={team} key={i} leagueId={leagueId}/>)}
                </div>
            </div>
        </React.Fragment>
    )
}
