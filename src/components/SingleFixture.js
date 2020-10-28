import React, {useState, useEffect} from 'react';
import {getSingleFixture} from '../services/api'


export default function SingleFunction(props){
    const fixtureId = props.match.params.fixtureId;
    const [Fixture, setFixture] = useState([]);

    useEffect(() => {
        getSingleFixture(fixtureId).then(({api}) => setFixture(api.fixtures[0]));
    }, [fixtureId]);

    console.log(Fixture);
    const { awayTeam, homeTeam, event_date, round, events, league, lineups, players, referee, score, statistics, venue } = Fixture;

    return(
        <div>
            {Fixture.elapsed &&
            <>
                <div className='flex-score'>
                    <img src={league.logo} alt={league.name}/>
                    <h2 className='top'>{league.name}</h2>
                    <h3>{round}</h3>
                </div>
                <div className='fixture-flex'>
                    <div className='flex-score'>
                        <img src={homeTeam.logo} alt={homeTeam.team_name}/>
                        <h2 className='top'>{homeTeam.team_name}</h2>
                    </div>
                    <div className='flex-score'>
                        <h1>{score.fulltime}</h1>
                        <h2>{score.halftime}</h2>
                    </div>
                    <div className='flex-score'>
                        <img src={awayTeam.logo} alt={awayTeam.team_name}/>
                        <h2 className='top'>{awayTeam.team_name}</h2>
                    </div>
                </div>
                <table className='table-fixture-info'>    
                    <tbody>    
                        <tr>
                            <td>{statistics["Ball Possession"].home}</td>
                            <td>Ball Possesion</td>
                            <td>{statistics["Ball Possession"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Total passes"].home}</td>
                            <td>Total passes</td>
                            <td>{statistics["Total passes"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Passes %"].home}</td>
                            <td>Passes %</td>
                            <td>{statistics["Passes %"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Corner Kicks"].home}</td>
                            <td>Corner Kicks</td>
                            <td>{statistics["Corner Kicks"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Offsides"].home}</td>
                            <td>Offsides</td>
                            <td>{statistics["Offsides"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Total Shots"].home}</td>
                            <td>Total Shots</td>
                            <td>{statistics["Total Shots"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Shots on Goal"].home}</td>
                            <td>Shots on Goal</td>
                            <td>{statistics["Shots on Goal"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Goalkeeper Saves"].home}</td>
                            <td>Goalkeeper Saves</td>
                            <td>{statistics["Goalkeeper Saves"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Fouls"].home}</td>
                            <td>Fouls</td>
                            <td>{statistics["Fouls"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Yellow Cards"].home}</td>
                            <td>Yellow Cards</td>
                            <td>{statistics["Yellow Cards"].away}</td>
                        </tr>
                        <tr>
                            <td>{statistics["Red Cards"].home === null ? 0 : statistics["Red Cards"].home}</td>
                            <td>Red Cards</td>
                            <td>{statistics["Red Cards"].away === null ? 0 : statistics["Red Cards"].away}</td>
                        </tr>
                    </tbody>  
                </table> 

                {events.map((event, i) => {
                    const {elapsed, type, player, assist, detail, teamName} = event;
                    return (
                        <div key={i} className={`${teamName === homeTeam.team_name ? 'red' : 'black'} fixture-events`}>
                            <p className='centered'>{elapsed}</p>
                            <h4>{type === 'Goal' ? <i className='fa fa-futbol'></i> : null} {player}</h4>
                            <p className='assist'>{assist}</p>
                            <p>{type === 'Card' || type === 'subst' ? type : null}</p>
                            <p>{detail === 'Normal Goal' ? null : detail}</p>
                        </div>
                    )
                })}


                Coach: <h3>{lineups[Object.keys(lineups)[1]].coach}</h3>
                Formation: <h3>{lineups[Object.keys(lineups)[1]].formation}</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Starting Lineup</td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Extra</td>
                        </tr>
                    </thead>
                    <tbody>
                        {lineups[Object.keys(lineups)[1]].startXI.map((player, i) => (
                            <tr key={i}>
                                <td>{player.number}</td>
                                <td>{player.player}</td>
                            </tr>
                        ))}
                    </tbody>
                    <thead>
                        <tr>
                            <td>Substitutions</td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {lineups[Object.keys(lineups)[1]].substitutes.map((player, i) => (
                            <tr key={i}>
                                <td>{player.number}</td>
                                <td>{player.player}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                Coach: <h3>{lineups[Object.keys(lineups)[0]].coach}</h3>
                Formation: <h3>{lineups[Object.keys(lineups)[0]].formation}</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Starting Lineup</td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {lineups[Object.keys(lineups)[0]].startXI.map((player, i) => (
                            <tr key={i}>
                                <td>{player.number}</td>
                                <td>{player.player}</td>
                            </tr>
                        ))}
                    </tbody>
                    <thead>
                        <tr>
                            <td>Substitutions</td>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {lineups[Object.keys(lineups)[0]].substitutes.map((player, i) => (
                            <tr key={i}>
                                <td>{player.number}</td>
                                <td>{player.player}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}
        </div>
    )
}