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
            <div>
                <h2 className='center' style={{marginTop: '1rem'}}>Player Info</h2>
                <table className='table-league'>
                    <thead>
                        <tr>
                            <td className='center'></td>
                            <td className='none'>Club</td>
                            <td className='center'>P</td>
                            <td className='center'>W</td>
                            <td className='center'>D</td>
                            <td className='center'>L</td>
                            <td className='center'>Goals</td>
                            <td className='center'>Diff</td>
                            <td className='center'>Points</td>
                            <td className='center'>Form</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Player.map(player => {
                            const { cards, position, games, goals, passes, penalty, duels, shots, tackles, season, team_name, league } = player;
                            return (
                                <>
                                {games.appearences !== 0 ? 
                                    <tr key={shortid.generate()}>
                                        <td>{team_name} ({season})</td>
                                        <td>{league}</td>
                                        <td>Games: {games.appearences}</td>
                                        {position === 'Goalkeeper' ? null : <td><i className='fa fa-futbol'></i> {goals.total} ({penalty.success})</td>}
                                        <td>Assists: {goals.assists}</td>
                                        <td>Passes: {passes.total} {passes.accuracy}%</td>
                                        {position === 'Midfielder' ? <td>Key Passes: {passes.key}</td> : null}
                                        <td>Red: {cards.red} Yellow: {cards.yellow}</td>
                                        {position === 'Goalkeeper' ? null : <td>Shots: {shots.total}</td>}
                                        {position === 'Defender' ? <><td>Tackles: {tackles.total}</td><td>Interception: {tackles.interceptions}</td><td>Duels: {duels.total} Won: {duels.won}</td></> : null}
                                        {position === 'Goalkeeper' ? <><td>Conceded: {goals.conceded}</td><td>Saves: {goals.saves}</td></> : null}
                                    </tr> : null
                                }   
                                </>
                        )})}
                    </tbody>
                </table>
            </div>
        </>
    )
}