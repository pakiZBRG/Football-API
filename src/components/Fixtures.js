import React from 'react';
import {Link} from 'react-router-dom';


export default function Fixtures({games}){
    return (
        games.map((game, i) => {
            const { fixture_id, round, awayTeam, homeTeam, venue, event_date, score } = game;
            return(
                <div key={i} className='fixture-flex-shadow'>
                    <Link to={`/fixture/${fixture_id}`}>
                    <h3 className='round'>{round}</h3>
                        <div className='fixture-flex'>
                            <div className='flex-away'>
                                <img src={homeTeam.logo} alt={homeTeam.team_name} height='75px' style={{marginBottom: '.7rem'}}/>
                                {score.fulltime && (score.fulltime.split('')[0] > score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] > score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] > score.extratime.split('')[2])) ? 
                                    <span className='winner'><h3>{homeTeam.team_name}</h3><p>WINNER</p></span> 
                                    : 
                                    <h3>{homeTeam.team_name}</h3>
                                }
                            </div>
                            <div className='flex-score'>
                                <h1>{score.fulltime ? score.fulltime.replace('-', ':') : '-'}</h1> <h3>{score.halftime ? score.halftime.replace('-', ':') : '-'}</h3>
                                {score.extratime !== null ? <h3>({score.extratime.replace('-', ':')})</h3> : null}
                                {score.penalty !== null ? <h3>{score.penalty.replace('-', ':')}</h3> : null}
                            </div>
                            <div className='flex-home'>
                                <img src={awayTeam.logo} alt={awayTeam.team_name} height='75px' style={{marginBottom: '.7rem'}}/>
                                {score.fulltime && (score.fulltime.split('')[0] < score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] < score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] < score.extratime.split('')[2])) ? 
                                    <span className='winner'><h3>{awayTeam.team_name}</h3><p>WINNER</p></span>
                                    :
                                    <h3>{awayTeam.team_name}</h3>
                                }
                            </div>
                        </div>                        
                        <div className='flex-away'>
                            <h3>{venue}</h3>
                            <p>{event_date.substr(0, 10)}</p>
                        </div>
                    </Link>
                </div>
            )
        })
    )
}