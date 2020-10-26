import React, {useState, useEffect} from 'react';
import {getPlayer} from '../services/api';
import shortid from 'shortid'


export default function PlayerInfo(props){
    const playerId = props.match.params.playerId;
    const [Player, setPlayer] = useState([])

    useEffect(() => {
        getPlayer(playerId).then(({api}) => setPlayer(api.players))
    }, [playerId]);

    Player.sort((a,b) => (a.season < b.season) ? 1 : ((b.season < a.season) ? -1 : 0));
    console.log(Player);
    
    return(
        <>
            {Player[0] && (
                    <div className='squad-flex'>
                        <h2><i className="fa fa-user"></i> {Player[0].firstname} {Player[0].lastname}</h2>
                        <h3><i className="fa fa-map-marker"></i> {Player[0].birth_country} {Player[0].birth_place}</h3>
                        <h3><i className="fa fa-calendar"></i> {Player[0].birth_date} ({Player[0].age})</h3>
                        <h3>{Player[0].position}</h3>
                        <h3>{Player[0].height}</h3>
                        <h3>{Player[0].weight}</h3>
                    </div>
                )
            }
            <div className='squad-grid'>
                {Player.map(player => {
                    const { cards, position, games, goals, passes, penalty, duels, shots, tackles, season, team_name, league } = player;
                    return (
                        <>
                        {games.appearences !== 0 ? 
                            <div className='team-flex' key={shortid.generate()}>
                                <h3>{team_name} ({season})</h3>
                                <h4>{league}</h4>
                                <h4>Games: {games.appearences}</h4>
                                {position === 'Goalkeeper' ? null : <h4><i className='fa fa-futbol'></i> {goals.total} ({penalty.success})</h4>}
                                <h4>Assists: {goals.assists}</h4>
                                <h4>Passes: {passes.total} {passes.accuracy}%</h4>
                                {position === 'Midfielder' ? <h4>Key Passes: {passes.key}</h4> : null}
                                <h4>Red: {cards.red} Yellow: {cards.yellow}</h4>
                                {position === 'Goalkeeper' ? null : <h4>Shots: {shots.total}</h4>}
                                {position === 'Defender' ? <><h4>Tackles: {tackles.total}</h4><h4>Interception: {tackles.interceptions}</h4><h4>Duels: {duels.total} Won: {duels.won}</h4></> : null}
                                {position === 'Goalkeeper' ? <><p>Conceded: {goals.conceded}</p><p>Saves: {goals.saves}</p></> : null}
                            </div> : null
                        }   
                        </>
                    )
                    })}
            </div>
        </>
    )
}