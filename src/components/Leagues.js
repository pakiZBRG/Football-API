import React, {useEffect, useState} from 'react';
import League from './League';
import { getLeagues, leagueIds } from '../services/api';


export default function Leagues() {
    const [AllLeagues, setAllLeagues] = useState([]);
    const leagues = [];

    useEffect(() => {
        // Get all leagues ~3000
        getLeagues().then(({api: {leagues}}) => setAllLeagues(leagues));
    }, []);

    // Filter only leagues in season 2020/2021 ~550
    const seasone20 = AllLeagues.filter(league => league.season === 2019);
console.log(AllLeagues)
    leagueIds.map(id => {
        seasone20.find(league => {
            if(league.league_id === id) 
                leagues.push(league)
            return null;
        });
        return true;
    });

    return (
        <div className='league-flex'>
            <div className='league-row'>
                {leagues.map((league, i) => <League league={league} key={i}/>)}
            </div>
        </div>
    )
}