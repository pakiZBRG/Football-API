import React, {useState, useEffect} from 'react'
import {getFixturesByTeam, getTeamData} from '../services/api';
import {Link} from 'react-router-dom';


export default function FixturesByTeam(props) {
    const teamId = props.match.params.teamId
    const [fixtureByTeam, setFixtureByTeam] = useState([]);
    const [teamData, setTeamData] = useState([]);
    
    useEffect(() => {
        getFixturesByTeam(teamId).then(({api}) => setFixtureByTeam(api.fixtures));
        getTeamData(teamId).then(({api}) => setTeamData(api.teams[0]))
    }, [teamId]);
    
    const wins = () => {
        const wins = [];
        fixtureByTeam.map(fixture => {
            const {awayTeam, homeTeam, goalsAwayTeam, goalsHomeTeam} = fixture;
            if((awayTeam.team_name === name && goalsAwayTeam > goalsHomeTeam) || (homeTeam.team_name === name && goalsHomeTeam > goalsAwayTeam)){
                wins.push(fixture);
            }
            return true;
        });
        return wins.length
    }
    
    const draws = () => {
        const draws = [];
        fixtureByTeam.map(fixture => {
            if(fixture.goalsAwayTeam === fixture.goalsHomeTeam) draws.push(fixture);
            return true;
        })
        return draws.length
    }

    const goalsGiven = () => {
        let goals = 0;
        fixtureByTeam.map(fixture => {
            if(fixture.awayTeam.team_name === name) goals += fixture.goalsAwayTeam
            else if(fixture.homeTeam.team_name === name) goals += fixture.goalsHomeTeam
            return true;
        })
        return goals;
    }

    const goalsReceived = () => {
        let goals = 0;
        fixtureByTeam.map(fixture => {
            if(fixture.awayTeam.team_name === name) goals += fixture.goalsHomeTeam
            else if(fixture.homeTeam.team_name === name) goals += fixture.goalsAwayTeam
            return true;
        })
        return goals
    }

    const matchForm = () => {
        const form = [];
        fixtureByTeam.map(fixture => {
            if((fixture.awayTeam.team_name === name && fixture.goalsAwayTeam > fixture.goalsHomeTeam) || (fixture.homeTeam.team_name === name && fixture.goalsHomeTeam > fixture.goalsAwayTeam)){
                form.push("W")
            } else if(fixture.goalsAwayTeam === fixture.goalsHomeTeam){
                form.push("D")
            } else form.push("L")
            return true;
        })
        return form.map((f, i) => (
            f === 'W' ? <span key={i} className='table-group-form win'>{f}</span> :
            f === 'D' ? <span key={i} className='table-group-form draw'>{f}</span> : 
            <span key={i} className='table-group-form lost'>{f}</span>
        ))
    }

    const {logo, name} = teamData
    return (
        <React.Fragment>
            <h1 className='center top'>Last 50 Matches - {name}</h1>
            <div className='stats-flex'>
                <img src={logo} alt={name}/>
                <h2 className='top'>{name}</h2>
                <h3>Wins: {wins()}</h3>
                <h3>Draws: {draws()}</h3>
                <h3>Lost: {50 - wins() - draws()}</h3>
                <h3>Goals Given: {goalsGiven()} {(goalsGiven()/50).toFixed(2)}</h3>
                <h3>Goals Received: {goalsReceived()} {(goalsReceived()/50).toFixed(2)}</h3>
                <div className='form-wrap'>{matchForm()}</div>
            </div>
            <div className='fixture-grid'>
                {fixtureByTeam && fixtureByTeam.map((fixture, i) => {
                    const {awayTeam, homeTeam, score, round, event_date, fixture_id} = fixture;
                    return (
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
                })}
            </div>
        </React.Fragment>
    )
}
