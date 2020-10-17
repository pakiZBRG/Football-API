import React from 'react';
import { Link } from 'react-router-dom';

export default function League({league}) {
    const {league_id, country, logo, name} = league;

    return (
        <Link to={`/league/${league_id}`} className='single-league'>
            <div className='single-league-img'>
                <img src={logo} alt={name}/>
            </div>
            <div className='single-league-text'>
                <h2>{name}</h2>
                <p>{country}</p>
            </div>
        </Link>
    )
}
