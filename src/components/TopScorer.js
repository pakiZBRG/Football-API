import React from 'react';

export default function TopScorer({scorer}) {
    const {player_name, team_name, penalty: {success}, goals: {total, assists}, games: {appearences}} = scorer;

    return(
        <tr>
            <td><h3>{player_name}</h3> <p style={{color: 'rgb(68, 68, 68)'}}>{team_name}</p></td>
            <td className='center'>{appearences}</td>
            <td className='center'>{assists}</td>
            <td className='center'><span style={{fontSize: '1.2rem'}}>{total}</span> {success !== null && success !== 0 ? `(${success})` : null}</td>
            <td className='center'>{(total/appearences).toFixed(2)}</td>
        </tr>
    )
}