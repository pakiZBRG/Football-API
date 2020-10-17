import React from 'react';
import { Link } from 'react-router-dom';

export default function Team({team}) {
    const {team_id, logo, name, venue_city} = team;

    return (
        <Link to={`/league/team/${team_id}`} className='single-league'>
            <div className='single-league-img'>
                <img src={logo} alt={name}/>
            </div>
            <div className='single-league-text'>
                <h2>{name}</h2>
                <p>{venue_city}</p>
            </div>
        </Link>
    )
}