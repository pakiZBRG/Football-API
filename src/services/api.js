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


// 40 picked leagues to show
export const leagueIds = [524, 565, 581, 1063, 1560, 583, 754, 755, 1564, 753, 869, 891, 902, 1601, 525, 526, 783, 1237, 775, 776, 973, 1629, 779, 782, 940, 1612, 765, 766, 1608, 949, 566, 784, 1591, 576, 942, 511, 947, 282, 357, 358, 321, 780, 899, 1522, 573, 1232, 656, 1524, 787, 910, 577, 568, 793, 294, 514, 530];

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