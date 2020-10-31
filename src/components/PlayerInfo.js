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
                            <td>Club</td>
                            <td>Season</td>
                            <td>League</td>
                            <td>Games</td>
                            {Player[0] && Player[0].position === 'Goalkeeper' ? <><td>Conceded</td><td>Saves</td></> : <><td>Goals (Penalty)</td></>}
                            <td>Assists</td>
                            <td>Passes</td>
                            {Player[0] && Player[0].position === 'Midfielder' ? <><td>Pass %</td><td>Key Passes</td></> : null}
                            <td>Red</td>
                            <td>Yellow</td>
                            {Player[0] && Player[0].position === 'Defender' ? <><td>Tackles</td><td>Interceptions</td><td>Duels (won)</td></> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {Player.map(player => {
                            const { cards, position, games, goals, passes, penalty, duels, tackles, season, team_name, league } = player;
                            return (
                                <>
                                {games.appearences !== 0 ? 
                                    <tr key={shortid.generate()}>
                                        <td>{team_name}</td>
                                        <td>{season}</td>
                                        <td>{league}</td>
                                        <td>{games.appearences}</td>
                                        {position === 'Goalkeeper' ? <><td>{goals.conceded}</td><td>{goals.saves}</td></> : <><td><i className='fa fa-futbol'></i> {goals.total} ({penalty.success})</td></>}
                                        <td>{goals.assists}</td>
                                        <td>{passes.total}</td>
                                        {position === 'Midfielder' ? <><td>{passes.accuracy}%</td><td>{passes.key}</td></> : null}
                                        <td>{cards.red}</td>
                                        <td>{cards.yellow}</td>
                                        {position === 'Defender' ? <><td>{tackles.total}</td><td>{tackles.interceptions}</td><td>{duels.total} ({duels.won})</td></> : null}
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