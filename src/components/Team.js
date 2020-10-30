import React from 'react';
import { Link } from 'react-router-dom';


export default function Team({team, leagueId}) {
    const {team_id, logo, name, venue_city} = team;

    return (
        <Link to={`/statistic/squad/${leagueId}/${team_id}`} className='single-league'>
            <div className='single-league-img'>
            <img src={logo} alt={name} height='145px'/>
            </div>
            <div className='single-league-text'>
                <h3>{name}</h3>
                <p>{venue_city}</p>
            </div>
        </Link>
    )
}