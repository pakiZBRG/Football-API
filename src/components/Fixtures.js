import React from 'react';
import {Link} from 'react-router-dom';


export default function Fixtures({games}){
    return (
        games.map((game, i) => {
            const { fixture_id, round, awayTeam, homeTeam, event_date, score } = game;
            return(
                <div key={i} className='fixture-flex-shadow'>
                    <Link to={`/fixture/${fixture_id}`}>
                        <h3 className='round'>{round.replace('Regular Season - ', 'Matchday ')}</h3>
                        {/* HOME */}
                        <div className='home-team'>
                            <div className='teamName'>
                                <img src={homeTeam.logo} alt={homeTeam.team_name} height='75px' style={{marginBottom: '.7rem'}}/>
                                {score.fulltime && (score.fulltime.split('')[0] > score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] > score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] > score.extratime.split('')[2])) ? 
                                    <span className='winner'><h3>{homeTeam.team_name}</h3><p>WINNER</p></span> 
                                    : 
                                    <h3>{homeTeam.team_name}</h3>
                                }
                            </div>
                            <div className='flex-score'>
                                <h1>{score.fulltime ? score.fulltime.split('-')[0] : '-'}</h1>
                                <span className='divider'></span>
                                <h3>{score.halftime ? score.halftime.split('-')[0] : '-'}</h3>
                                {score.extratime !== null && <h3>({score.extratime.split('-')[0]})</h3>}
                                {score.penalty !== null && <h3>{score.penalty.split('-')[0]}</h3>}
                            </div>
                        </div>
                        {/* AWAY */}
                        <div className='away-team'>
                            <div className='teamName'>
                                <img src={awayTeam.logo} alt={awayTeam.team_name} height='75px' style={{marginBottom: '.7rem'}}/>
                                {score.fulltime && (score.fulltime.split('')[0] < score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] < score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] < score.extratime.split('')[2])) ? 
                                    <span className='winner'><h3>{awayTeam.team_name}</h3><p>WINNER</p></span>
                                    :
                                    <h3>{awayTeam.team_name}</h3>
                                }
                            </div>
                            <div className='flex-score'>
                                <h1>{score.fulltime ? score.fulltime.split('-')[1] : '-'}</h1>
                                <span className='divider'></span>
                                <h3>{score.halftime ? score.halftime.split('-')[1] : '-'}</h3>
                                {score.extratime !== null && <h3>({score.extratime.split('-')[1]})</h3>}
                                {score.penalty !== null && <h3>{score.penalty.split('-')[1]}</h3>}
                            </div>
                        </div>
                        <div className='center' style={{color: '#000'}}>
                            <p>{`${event_date.substr(0, 10).split('-')[2]}/${event_date.substr(0, 10).split('-')[1]}/${event_date.substr(0, 10).split('-')[0]}`}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    )
}