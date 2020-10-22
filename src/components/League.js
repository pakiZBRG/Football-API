import React from 'react';
import dfl from '../images/dfl.png';
import supercoppa from '../images/supercoppa.png';
import copa_del_rey from '../images/copa_del_rey.png';
import portugal from '../images/portugal.png';
import taca_da_liga from '../images/taca_da_liga.png';
import knvb from '../images/knvb.png';
import russia from '../images/russia.png';
import argentina from '../images/argentina.png';
import scotland from '../images/scotland.png';
import belgium from '../images/belgium.png';
import { Link } from 'react-router-dom';


export default function League({league}) {
    const {league_id, country, flag, logo, name} = league;

    const missingImages = () => {
        switch(league_id){
            case 1564:
                return <img src={dfl} alt={name}/>
            case 1601:
                return <img src={supercoppa} alt={name}/>
            case 973:
                return <img src={copa_del_rey} alt={name}/>
            case 1608:
                return <img src={portugal} alt={name}/>
            case 949:
                return <img src={taca_da_liga} alt={name}/>
            case 1591:
                return <img src={knvb} alt={name}/>
            case 947:
                return <img src={russia} alt={name}/>
            case 321:
                return <img src={argentina} alt={name}/>
            case 1524:
                return <img src={belgium} alt={name}/>
            case 1232:
                return <img src={scotland} alt={name}/>
            default: 
                return <img src={logo} alt={name}/>
        }
    }

    return (
        <Link to={`/league/${name}/${league_id}`} className='single-league'>
            <div className='single-league-img'>
                {missingImages()}
            </div>
            <div className='single-league-text'>
                <h2>{name}</h2>
                <p>{flag !== null ? <img src={flag} alt={country}/> : null}</p>
            </div>
        </Link>
    )
}