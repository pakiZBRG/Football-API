import React from 'react';

export default function Fixtures({games}){
    return (
        <>
            {games.map((game, i) => {
                const { round, awayTeam, homeTeam, venue, event_date, score } = game;

                return(
                    <div key={i}>
                        <h1 className='center' style={{padding: '1rem 0'}}>{round}</h1>
                        <div className='fixture-flex-shadow'>
                            <div className='fixture-flex'>
                                <div className='flex-away'>
                                    <img src={homeTeam.logo} alt={homeTeam.team_name}/>
                                    {(score.fulltime.split('')[0] > score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] > score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] > score.extratime.split('')[2])) ? 
                                        <span className='winner'><h2>{homeTeam.team_name}</h2><p>WINNER</p></span> 
                                        : 
                                        <h2>{homeTeam.team_name}</h2>
                                }
                                </div>
                                <div className='flex-score'>
                                    <h1>{score.fulltime.replace('-', ':')}</h1> <h3>{score.halftime.replace('-', ':')}</h3>
                                    {score.extratime !== null ? <h3>({score.extratime.replace('-', ':')})</h3> : null}
                                    {score.penalty !== null ? <h3>{score.penalty.replace('-', ':')}</h3> : null}
                                </div>
                                <div className='flex-home'>
                                    <img src={awayTeam.logo} alt={awayTeam.team_name}/>
                                    {(score.fulltime.split('')[0] < score.fulltime.split('')[2] || (score.penalty !== null && score.penalty.split('')[0] < score.penalty.split('')[2]) || (score.extratime !== null && score.extratime.split('')[0] < score.extratime.split('')[2])) ? 
                                        <span className='winner'><h2>{awayTeam.team_name}</h2><p>WINNER</p></span>
                                        :
                                        <h2>{awayTeam.team_name}</h2>
                                    }
                                </div>
                            </div>
                            <div className='flex-away'>
                                <h3>{venue}</h3>
                                <p>{event_date.substr(0, 10)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}