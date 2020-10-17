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

    leagueIds.map(id => {
        seasone20.find(league => league.league_id === id ? leagues.push(league) : null)
    });

    return (
        <div className='league-flex'>
            <div className='league-row'>
                {leagues.map((league, i) => <League league={league} key={i}/>)}
            </div>
        </div>
    )
}