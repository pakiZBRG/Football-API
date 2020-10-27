import React from 'react';
import salmrohr from '../images/salmrohr.png';
import nouva_cosenza from '../images/spal.png';
import { Link } from 'react-router-dom';


export default function Team({team, leagueId}) {
    const {team_id, logo, name, venue_city} = team;

    const missingImages = () => {
        switch(team_id){
            case 4264:
                return <img src={salmrohr} alt={name} height='145px'/>
            case 10137:
                return <img src={nouva_cosenza} alt={name} height='145px'/>
            default: 
                return <img src={logo} alt={name} height='145px'/>
        }
    }

    return (
        <Link to={`/statistic/squad/${leagueId}/${team_id}`} className='single-league'>
            <div className='single-league-img'>
                {missingImages()}
            </div>
            <div className='single-league-text'>
                <h3>{name}</h3>
                <p>{venue_city}</p>
            </div>
        </Link>
    )
}