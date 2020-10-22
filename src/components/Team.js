import React from 'react';
import salmrohr from '../images/salmrohr.png';
import nouva_cosenza from '../images/spal.png';
import { Link } from 'react-router-dom';


export default function Team({team, leagueId}) {
    const {team_id, logo, name, venue_city} = team;

    const missingImages = () => {
        switch(team_id){
            case 4264:
                return <img src={salmrohr} alt={name}/>
            case 10137:
                return <img src={nouva_cosenza} alt={name}/>
            default: 
                return <img src={logo} alt={name}/>
        }
    }

    return (
        <Link to={`/statistic/squad/${leagueId}/${team_id}`} className='single-league'>
            <div className='single-league-img'>
                {missingImages()}
            </div>
            <div className='single-league-text'>
                <h2>{name}</h2>
                <p>{venue_city}</p>
            </div>
        </Link>
    )
}