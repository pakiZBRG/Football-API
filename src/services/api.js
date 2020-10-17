import axios from 'axios';

const apiKey = 'f5f4167653mshb2633e377f5276fp160fe8jsne5c859e1da57';
const host = 'api-football-v1.p.rapidapi.com'
const baseUrl = 'https://api-football-v1.p.rapidapi.com/v2/';
const leagueUrl = `${baseUrl}leagues`;
const singleLeagueUrl = `${baseUrl}teams/league`;
//https://api-football-v1.p.rapidapi.com/v2/statistics/{league_id}/{team_id}
const squadStaticsticsUrl = `${baseUrl}statistics`;
//https://api-football-v1.p.rapidapi.com/v2/leagueTable/{league_id}
const leagueTableUrl = `${baseUrl}leagueTable`;

//https://api-football-v1.p.rapidapi.com/v2/leagues/current/
const currentSeasonUrl = `${baseUrl}leagues/current`


export const getLeagues = () => {
    const options = {
        method: 'GET',
        url: `${leagueUrl}`,
        headers: {
            'x-rapidapi-host': `${host}`,
            'x-rapidapi-key': `${apiKey}`
        }
    };
    
    const leagues = axios
        .request(options)
        .then(({data}) => data)
        .catch(error => console.log(error));

    return leagues;
}

// 40 picked leagues to show
export const leagueIds = [524, 565, 581, 1063, 1560, 583, 754, 755, 1564, 753, 869, 891, 902, 1601, 525, 526, 783, 1237, 775, 776, 973, 1629, 779, 782, 940, 1612, 765, 766, 1608, 949, 566, 784, 1591, 576, 942, 511, 947, 282, 357, 358, 321, 780, 899, 1522, 573, 1232, 656, 1524, 787, 910, 577, 568, 793, 514, 530];

export const getSingleLeague = league_id => {
    const options = {
        method: 'GET',
        url: `${singleLeagueUrl}/${league_id}`,
        headers: {
        'x-rapidapi-host': `${host}`,
        'x-rapidapi-key': `${apiKey}`
        }
    };
    
    const singleLeague = axios
        .request(options)
        .then(({data}) => data)
        .catch(error => console.log(error));

    return singleLeague;
}

export const getSquadStaticstics = (league_id, team_id) => {
    const options = {
        method: 'GET',
        url: `${squadStaticsticsUrl}/${league_id}/${team_id}`,
        headers: {
            'x-rapidapi-host': `${host}`,
            'x-rapidapi-key': `${apiKey}`
        }
    };
    
    const singleLeague = axios
        .request(options)
        .then(({data}) => data)
        .catch(error => console.log(error));

    return singleLeague;
}

export const getLeagueTable = league_id => {
    const options = {
        method: 'GET',
        url: `${leagueTableUrl}/${league_id}`,
        headers: {
            'x-rapidapi-host': `${host}`,
            'x-rapidapi-key': `${apiKey}`
        }
    };
    
    const singleLeague = axios
        .request(options)
        .then(({data}) => data)
        .catch(error => console.log(error));

    return singleLeague;
}

//Iskoristiti kasnije obavezno
export const getCurrentSeason = () => {
    const options = {
        method: 'GET',
        url: `${currentSeasonUrl}`,
        headers: {
            'x-rapidapi-host': `${host}`,
            'x-rapidapi-key': `${apiKey}`
        }
    };
    
    const singleLeague = axios
        .request(options)
        .then(({data}) => data)
        .catch(error => console.log(error));

    return singleLeague;
}