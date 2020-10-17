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
            <div className='table-league'>
                <div>
                        <p>No.</p>
                        <p>Name</p>
                        <p>W</p>
                        <p>D</p>
                        <p>L</p>
                        <p>A</p>
                        <p>F</p>
                        <p>Form</p>
                        <p>Diff</p>
                        <p>Points</p>
                </div>
                <div>
                    {Tables.map((team, i) => (<div key={i}><Table team={team}/></div>))}
                </div>
            </div>
            <div className='league-flex'>
                <div className='league-row'>
                    {Teams.map((team, i) => <Team team={team} key={i} leagueId={leagueId}/>)}
                </div>
            </div>
        </React.Fragment>
    )
}
