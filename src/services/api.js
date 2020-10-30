import axios from 'axios';

const apiKey = 'f5f4167653mshb2633e377f5276fp160fe8jsne5c859e1da57';
const host = 'api-football-v1.p.rapidapi.com'
const baseUrl = 'https://api-football-v1.p.rapidapi.com/v2/';
const singleLeagueUrl = `${baseUrl}teams/league`;
//https://api-football-v1.p.rapidapi.com/v2/statistics/{league_id}/{team_id}
const squadStaticsticsUrl = `${baseUrl}statistics`;
//https://api-football-v1.p.rapidapi.com/v2/leagueTable/{league_id}
const leagueTableUrl = `${baseUrl}leagueTable`;
//https://api-football-v1.p.rapidapi.com/v2/topscorers/{league_id}
const topScorerUrl = `${baseUrl}topscorers`;
//https://api-football-v1.p.rapidapi.com/v2/players/squad/{team_id}/{season} 2019-2020
const squadUrl = `${baseUrl}players/squad`
//https://api-football-v1.p.rapidapi.com/v2/leagues/seasonsAvailable/{league_id}
const leagueBySeasonUrl = `${baseUrl}leagues/seasonsAvailable`
//https://api-football-v1.p.rapidapi.com/v2/leagues/seasonsAvailable/{league_id}/{season}
const tableBySeasonUrl = `${baseUrl}leagues/seasonsAvailable`;
//https://api-football-v1.p.rapidapi.com/v2/teams/team/{team_id}
const teamDataUrl = `${baseUrl}teams/team`;
//https://api-football-v1.p.rapidapi.com/v2/coachs/team/{team_id}
const coachUrl = `${baseUrl}coachs/team`
//https://api-football-v1.p.rapidapi.com/v2/players/player/{player_id}
const playerUrl = `${baseUrl}players/player`
//https://api-football-v1.p.rapidapi.com/v2/transfers/team/{team_id}
const transferUrl = `${baseUrl}transfers/team`;
//https://api-football-v1.p.rapidapi.com/v2/fixtures/league/{league_id}
const fixtureUrl = `${baseUrl}fixtures/league`;
//https://api-football-v1.p.rapidapi.com/v2/fixtures/id/{fixture_id}
const singleFixtureUrl = `${baseUrl}fixtures/id`;
//https://api-football-v1.p.rapidapi.com/v2/leagues/current/
const currentSeasonsUrl = `${baseUrl}leagues/current`


export const leagueIds = [2790, 2794, 2725, 2791, 2755, 2743, 2677, 2751, 2833, 2847, 973, 1629, 2857, 2946, 2941, 1601, 2664, 2652, 783, 1237, 2673, 2749, 1591, 2660, 1524, 2826, 949, 2750, 2815, 2816, 1612, 2855, 2824, 2679, 2707, 2787, 1396, 1333, 2277, 3023, 1400, 1522, 2696, 2772, 2874, 3025, 2801, 2715, 1264, 1355, 2777, 2771, 2809]

export const getCurrentSeasons = () => {
    const options = {
        method: 'GET',
        url: `${currentSeasonsUrl}`,
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

export const getTopScorer = league_id => {
    const options = {
        method: 'GET',
        url: `${topScorerUrl}/${league_id}`,
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

export const getSquad = (team_id, season) => {
    const options = {
        method: 'GET',
        url: `${squadUrl}/${team_id}/${season}`,
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

export const getLeagueBySeason = league_id => {
    const options = {
        method: 'GET',
        url: `${leagueBySeasonUrl}/${league_id}`,
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

export const getTableBySeason = (league_id, season) => {
    const options = {
        method: 'GET',
        url: `${tableBySeasonUrl}/${league_id}/${season}`,
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

export const getTeamData = team_id => {
    const options = {
        method: 'GET',
        url: `${teamDataUrl}/${team_id}`,
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

export const getCoach = team_id => {
    const options = {
        method: 'GET',
        url: `${coachUrl}/${team_id}`,
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

export const getPlayer = player_id => {
    const options = {
        method: 'GET',
        url: `${playerUrl}/${player_id}`,
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

export const getTransfer = team_id => {
    const options = {
        method: 'GET',
        url: `${transferUrl}/${team_id}`,
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

export const getFixtures = league_id => {
    const options = {
        method: 'GET',
        url: `${fixtureUrl}/${league_id}`,
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

export const getSingleFixture = fixture_id => {
    const options = {
        method: 'GET',
        url: `${singleFixtureUrl}/${fixture_id}`,
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