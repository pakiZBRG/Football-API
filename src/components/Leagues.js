import React, {useEffect, useState} from 'react';
import League from './League';
import { getCurrentSeasons, leagueIds } from '../services/api';


export default function Leagues() {
    const leagues = [];
    const [CurrentLeagues, setCurrentLeagues] = useState([]);

    useEffect(() => {
        getCurrentSeasons().then(({api: {leagues}}) => setCurrentLeagues(leagues));
    }, []);

    leagueIds.map(id => {
        CurrentLeagues.find(league => {
            if(league.league_id === id) 
                leagues.push(league)
            return null;
        });
        return true;
    });

    return (
        <div className='league-flex'>
            <div className='league-row'>
                {leagues[0] ? leagues.map((league, i) => <League league={league} key={i}/>) : <p className='loading'>Fetching leagues...</p>}
            </div>
        </div>
    )
}