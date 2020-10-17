import React, { useEffect, useState } from 'react';
import { getSingleLeague } from '../services/api';
import Team from './Team';


export default function Teams(props) {
    const [Teams, setTeams] = useState([])

    useEffect(() => {
        getSingleLeague(props.match.params.leagueId).then(({api}) => setTeams(api.teams));
    }, []);

    return (
        <div className='league-flex'>
            <div className='league-row'>
                {Teams.map((team, i) => <Team team={team} key={i}/>)}
            </div>
        </div>
    )
}
