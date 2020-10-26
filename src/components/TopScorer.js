import React from 'react';

export default function TopScorer({scorers}) {
    return(
        <>
            <h2 className='center'>Top Scorer</h2>
            <table className='table-league' style={{width: '70%'}}>
                <thead>
                    <tr>
                        <td>Player</td>
                        <td className='center'>Appereances</td>
                        <td className='center'>Assists</td>
                        <td className='center'>Goals (Penalties)</td>
                        <td className='center'>Ratio</td>
                    </tr>
                </thead>
                <tbody>
                    {scorers.map((scorer, i) => {
                        const {player_name, team_name, penalty: {success}, goals: {total, assists}, games: {appearences}} = scorer;
                        return (
                            <tr key={i}>
                                <td><h3>{player_name}</h3> <p style={{color: 'rgb(68, 68, 68)'}}>{team_name}</p></td>
                                <td className='center'>{appearences}</td>
                                <td className='center'>{assists}</td>
                                <td className='center'><span style={{fontSize: '1.2rem'}}>{total}</span> {success !== null && success !== 0 ? `(${success})` : null}</td>
                                <td className='center'>{(total/appearences).toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}