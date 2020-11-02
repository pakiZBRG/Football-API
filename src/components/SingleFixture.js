import React, {useState, useEffect} from 'react';
import dfl from '../images/dfl.png';
import supercoppa from '../images/supercoppa.png';
import copa_del_rey from '../images/copa_del_rey.png';
import portugal from '../images/portugal.png';
import taca_da_liga from '../images/taca_da_liga.png';
import knvb from '../images/knvb.png';
import russia from '../images/russia.png';
import argentina from '../images/argentina.png';
import scotland from '../images/scotland.png';
import belgium from '../images/belgium.png';
import subsist from '../images/subsist.png';
import yellow from '../images/yellow.png';
import red from '../images/red.png';
import {getSingleFixture} from '../services/api';
import {Link} from 'react-router-dom';


export default function SingleFunction(props){
    const fixtureId = props.match.params.fixtureId;
    const [Fixture, setFixture] = useState([]);

    useEffect(() => {
        getSingleFixture(fixtureId).then(({api}) => setFixture(api.fixtures[0]));
    }, [fixtureId]);

    const missingImages = () => {
        switch(league_id){
            case 2751:
                return <img src={dfl} alt={league.name}/>
            case 1601:
                return <img src={supercoppa} alt={league.name}/>
            case 973:
                return <img src={copa_del_rey} alt={league.name}/>
            case 1608:
                return <img src={portugal} alt={league.name}/>
            case 949:
                return <img src={taca_da_liga} alt={league.name}/>
            case 1591:
                return <img src={knvb} alt={league.name}/>
            case 947:
                return <img src={russia} alt={league.name}/>
            case 321:
                return <img src={argentina} alt={league.name}/>
            case 1524:
                return <img src={belgium} alt={league.name}/>
            case 1232:
                return <img src={scotland} alt={league.name}/>
            default: 
                return <img src={league.logo} alt={league.name}/>
        }
    }

    const renderStatistics = string => (
        <tr>
            {statistics && <>
                <td style={{fontSize: '1.2rem'}}>{statistics[string].home !== null ? statistics[string].home : '-'}</td>
                <td><h3>{string}</h3></td>
                <td style={{fontSize: '1.2rem'}}>{statistics[string].away !== null ? statistics[string].away : '-'}</td>
            </>}
        </tr>
    )

    const { league_id, awayTeam, homeTeam, event_date, round, events, league, lineups, referee, score, statistics, venue } = Fixture;
    return(
        <div>
            {Fixture.elapsed ?
            <div className='single-width'>
                <div className='single-fixture'>
                    {missingImages()}
                    <h2 className='top'>{league.name}</h2>
                    <h3>{round}</h3>
                </div>
                <div>
                    {referee && <p className='center'>Referee: {referee.split(',')[0]}</p>}
                    {venue && <p className='center'>Stadium: {venue}</p>}
                    <p className='center'>{`${event_date.substr(0,10).split('-')[2]}/${event_date.substr(0,10).split('-')[1]}/${event_date.substr(0,10).split('-')[0]}`}</p>
                </div>
                <div className='fixture-flex'>
                    <div className='single-fixture'>
                        <img src={homeTeam.logo} alt={homeTeam.team_name}/>
                        <h2 className='top'>{homeTeam.team_name}</h2>
                    </div>
                    <div className='single-fixture'>
                        <h1>{score.fulltime}</h1>
                        <h2>({score.halftime})</h2>
                        {score.extratime && <h3>ET: {score.extratime}</h3>}
                        {score.penalty && <h3>PK: {score.penalty}</h3>}
                    </div>
                    <div className='single-fixture'>
                        <img src={awayTeam.logo} alt={awayTeam.team_name}/>
                        <h2 className='top'>{awayTeam.team_name}</h2>
                    </div>
                </div>
                <Link to={`/h2h/${homeTeam.team_id}/${awayTeam.team_id}`} className='team-info' style={{margin: '1.5rem 0'}}>
                    <button className='get-fixture'>Head To Head Fixtures</button>
                </Link>
                <table className='table-fixture-info'>
                    <tbody>  
                        {renderStatistics("Ball Possession")}
                        {renderStatistics("Total passes")}
                        {renderStatistics("Passes %")}
                        {renderStatistics("Corner Kicks")}
                        {renderStatistics("Offsides")}
                        {renderStatistics("Total Shots")}
                        {renderStatistics("Shots on Goal")}
                        {renderStatistics("Goalkeeper Saves")}
                        {renderStatistics("Yellow Cards")}
                        {renderStatistics("Red Cards")}
                    </tbody>  
                </table> 

                <h1 className='center' style={{marginBottom: '2rem'}}>Timeline</h1>
                {events && events.map((event, i) => {
                    const {elapsed, type, player, assist, detail, teamName} = event;
                    return (
                        <div key={i} className={`${teamName === homeTeam.team_name ? 'red' : 'black'} fixture-events`}>
                            <p className='centered'>{elapsed > 45 ? `${elapsed}''` : `${elapsed}'`}</p>
                            {player && <h4>{type === 'Goal' && <i className='fa fa-futbol'></i>} {type === 'subst' ? <span style={{color: 'crimson'}}>{player}</span> : player}</h4>}
                            <p className='assist'>{type === 'Goal' && assist}</p>
                            <p>{type === 'subst' && <img src={subsist} alt='subsist' height='30px'/>}</p>
                            <p>{detail === 'Normal Goal' || detail.includes('Card') ? null : <span style={{color: 'green'}}>{detail}</span>}</p>
                            {detail === 'Yellow Card' && <img src={yellow} alt='yellow' height='30px'/>}
                            {detail === 'Red Card' && <img src={red} alt='red' height='30px'/>}
                        </div>
                    )
                })}

                <div className='table-flex'>
                    {lineups &&
                    <div>
                        <h3 className='table-team'>
                            <img src={homeTeam.logo} alt={homeTeam.team_name} height='55px'/> 
                            <span className='table-team-name'>
                                <span>{homeTeam.team_name}</span>
                                <span>{[Object.keys(lineups)[0]].formation}</span>
                            </span>
                        </h3>
                        <table className='table-fixture'>
                            <thead>
                                <tr>
                                    <td colSpan='2'>Coach</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td></td><td>{lineups[Object.keys(lineups)[0]].coach}</td></tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <td colSpan='2'>Starting Lineup</td>
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
                                    <td colSpan='2'>Substitutions</td>
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
                    </div>}

                    {lineups && 
                    <div>
                        <h3 className='table-team'>
                            <img src={awayTeam.logo} alt={awayTeam.team_name} height='55px'/> 
                            <span className='table-team-name'>
                                <span>{awayTeam.team_name}</span>
                                <span>{lineups[Object.keys(lineups)[1]].formation}</span>
                            </span>
                        </h3>
                        <table className='table-fixture'>
                            <thead>
                                <tr>
                                    <td colSpan='2'>Coach</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td></td><td>{lineups[Object.keys(lineups)[1]].coach}</td></tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <td colSpan='2'>Starting Lineup</td>
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
                                    <td colSpan='2'>Substitutions</td>
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
                    </div>}
                </div>
            </div> : <p className='loading'>Loading fixture...</p>}
        </div>
    )
}