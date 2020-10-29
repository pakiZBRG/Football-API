import React, {useEffect, useState} from 'react';
import League from './League';
import { getCurrentSeasons, leagueIds, getSearchByCountry } from '../services/api';


export default function Leagues() {
    const leagues = [];
    const [CurrentLeagues, setCurrentLeagues] = useState([]);
    const [Search, setSearch] = useState([]);

    useEffect(() => {
        getCurrentSeasons().then(({api: {leagues}}) => setCurrentLeagues(leagues));
        getSearchByCountry('Croatia').then(({api}) => setSearch(api.leagues));
    }, []);

    console.log(Search)

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
            {Search ? Search.map((search, i) => <League key={i} league={search}/>) : <p>Loading</p>}
                {leagues[0] ? leagues.map((league, i) => <League league={league} key={i}/>) : <p>Loading</p>}
            </div>
        </div>
    )
}