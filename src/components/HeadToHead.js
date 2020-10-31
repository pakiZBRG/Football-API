import React, {useState, useEffect} from 'react';
import {getH2H} from '../services/api';
import { Link } from 'react-router-dom';


export default function HeadToHead(props){
    const team1 = props.match.params.teamId1;
    const team2 = props.match.params.teamId2;
    const [H2H, setH2H] = useState([]);

    useEffect(() => {
        getH2H(team1, team2).then(({api}) => setH2H(api))
    }, [team1, team2]);

    const { fixtures, teams } = H2H;
    fixtures && fixtures.sort((a,b) => (a.event_date < b.event_date) ? 1 : ((b.event_date < a.event_date) ? -1 : 0));

    return(
        <div className='h2h-width'>
            <div className='h2h-stats'>
                {teams &&
                <div>
                    <img src={teams[0].team_logo} alt={teams[0].team_name}/>
                    <h2 className='top'>{teams[0].team_name}</h2>
                    <div>
                        <p>Wins: {teams[0].statistics.wins.total > teams[1].statistics.wins.total ? <strong>{teams[0].statistics.wins.total}</strong> : teams[0].statistics.wins.total}</p>
                        <p>Draws: {teams[0].statistics.draws.total}</p>
                        <p>Loses: {teams[0].statistics.loses.total > teams[1].statistics.loses.total ? <strong>{teams[0].statistics.loses.total}</strong> : teams[0].statistics.loses.total}</p>
                    </div>
                </div>}
                {teams &&
                <div>
                    <img src={teams[1].team_logo} alt={teams[1].team_name}/>
                    <h2 className='top'>{teams[1].team_name}</h2>
                    <div>
                        <p>Wins: {teams[0].statistics.wins.total < teams[1].statistics.wins.total ? <strong>{teams[1].statistics.wins.total}</strong> : teams[1].statistics.wins.total}</p>
                        <p>Draws: {teams[0].statistics.draws.total}</p>
                        <p>Loses: {teams[0].statistics.loses.total < teams[1].statistics.loses.total ? <strong>{teams[1].statistics.loses.total}</strong> : teams[1].statistics.loses.total}</p>
                    </div>
                </div>}
            </div>
            
            {fixtures && fixtures.map((fixture, i) => {
                const {fixture_id, awayTeam, event_date, league, homeTeam, score} = fixture;
                return (
                    <Link to={`/fixture/${fixture_id}`} key={i} className='h2h-single-fixture'>
                        <div className='center h2h-league-time'>
                            <h4>{league.name}</h4>
                            <p style={{color: '#000'}}>
                                {`${event_date.substr(0,10).split('-')[2]}/${event_date.substr(0,10).split('-')[1]}/${event_date.substr(0,10).split('-')[0]}`}
                            </p>
                        </div>
                        <div className='h2h-flex'>
                            <div>
                                <img src={homeTeam.logo} alt={homeTeam.team_name}/>
                                {score.fulltime && score.fulltime.split('')[0] > score.fulltime.split('')[2] ? <p className='winner'>{homeTeam.team_name}</p> : <p>{homeTeam.team_name}</p>}
                            </div>
                            <div>
                                <p style={{fontSize: '1.4rem'}}>{score.fulltime !== null ? score.fulltime.replace('-', ":") : '-'}</p>
                            </div>
                            <div>
                                {score.fulltime && score.fulltime.split('')[0] < score.fulltime.split('')[2] ? <p className='winner'>{awayTeam.team_name}</p> : <p>{awayTeam.team_name}</p>}
                                <img src={awayTeam.logo} alt={awayTeam.team_name}/>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}