import React, { useEffect, useState } from 'react';
import { getSquadStaticstics, getTeamData, getSquad, getCoach } from '../services/api';
import Player from './Player';
import Overview from './Overview';


export default function TeamStatistics(props) {
    const teamId = props.match.params.teamId;
    const leagueId = props.match.params.leagueId;
    const [Info, setInfo] = useState([]);
    const [TeamData, setTeamData] = useState([]);
    const [Coach, setCoach] = useState([]);
    const [Squad, setSquad] = useState([]);

    useEffect(() => {
        getSquadStaticstics(leagueId, teamId).then(({api}) => setInfo(api.statistics));
        getTeamData(teamId).then(({api}) => setTeamData(api.teams[0]));
        getSquad(teamId, "2019").then(({api}) => setSquad(api.players));
        getCoach(teamId).then(({api}) => setCoach(api.coachs[0]));
    }, [leagueId, teamId])

    const {logo, country, name, founded, venue_city, venue_name, venue_capacity} = TeamData

    return (
        <div>
            {TeamData &&
                <div className='team-info'>
                    <img src={logo} alt={name}/>
                    <h1>{name}</h1>
                    <p><i className="fa fa-calendar"></i> {founded}</p>
                    <p><i className="fa fa-map-marker"></i> {country}, {venue_city}</p>
                    <p><i className="fa fa-futbol"></i> {venue_name} ({venue_capacity})</p>
                    {Coach && <p><i className="fa fa-user"></i> {Coach.name} ({Coach.nationality})</p>}
                </div>
            }
            {Info && <Overview info={Info}/>}
            {Squad !== [] && <Player squad={Squad}/>}
        </div>
    )
}
