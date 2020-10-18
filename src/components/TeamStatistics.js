import React, { useEffect, useState } from 'react';
import { getSquadStaticstics } from '../services/api';


export default function TeamStatistics(props) {
    const teamId = props.match.params.teamId;
    const leagueId = props.match.params.leagueId;
    const [Squad, setSquad] = useState([])

    useEffect(() => {
        getSquadStaticstics(leagueId, teamId).then(({api}) => setSquad(api.statistics))
        // getCurrentSeason().then(res => console.log(res))
    }, [leagueId, teamId])

    console.log(Squad)

    const { goals, matchs } = Squad;

    return (
        <div>
            {goals && matchs && 
                <div>
                    <p>Given: {goals.goalsFor.total}</p>
                    <p>Received: {goals.goalsAgainst.total}</p>
                    <p>Played: {matchs.matchsPlayed.total}</p>
                    <p>Win: {matchs.wins.total}</p>
                    <p>Draw: {matchs.draws.total}</p>
                    <p>Lost: {matchs.loses.total}</p>
                </div>
            }
        </div>
    )
}
