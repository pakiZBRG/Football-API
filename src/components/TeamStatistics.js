import React, { useEffect, useState } from 'react';
import { getSquadStaticstics } from '../services/api';
// import Player from './Player';


export default function TeamStatistics(props) {
    const teamId = props.match.params.teamId;
    const leagueId = props.match.params.leagueId;
    const [Info, setInfo] = useState([]);
    // const [Squad, setSquad] = useState([]);

    useEffect(() => {
        getSquadStaticstics(leagueId, teamId).then(({api}) => setInfo(api.statistics));
        // getSquad(teamId, "2018").then(({api}) => setSquad(api));
        // getCurrentSeason().then(res => console.log(res))
    }, [leagueId, teamId])

    // console.log(Squad)
    const { goals, matchs } = Info;

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
            {/* {Squad && Squad.map((player, i) => <Player player={player} key={i}/>)} */}
        </div>
    )
}
