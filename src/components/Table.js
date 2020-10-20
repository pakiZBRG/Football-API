import React from 'react'

export default function Table({team}) {
    const {description, teamName, rank, points, logo, all, goalsDiff, forme} = team;
    const {win, draw, lose, goalsFor, goalsAgainst} = all

    // Get W, D, L from forme
    const form = forme.split('');

    return (
        <tr className={`
            ${description && description.search('Promotion') ? 'relegation' : ''}
            ${description && description.search('Relegation') ? 'promotion' : ''}
        `}>
            <td className='center'>{rank}.</td>
            <td className='table-group-teamname'> <img src={logo} alt={teamName}/> <h4>{teamName}</h4></td>
            <td className='center'>{win + draw + lose}</td>
            <td className='center'>{win}</td>
            <td className='center'>{draw}</td>
            <td className='center'>{lose}</td>
            <td className='center'>{goalsFor}</td>
            <td className='center'>{goalsAgainst}</td>
            <td className='center'>{goalsDiff}</td>
            <td className='center'>{points}</td>
            <td className='center'>
                <div className='width'>
                    {form.map((f, i) => {
                        if(f === 'W') return <span key={i} className='table-group-form win'>{f}</span>
                        if(f === 'D') return <span key={i} className='table-group-form draw'>{f}</span>
                        if(f === 'L') return <span key={i} className='table-group-form lost'>{f}</span>
                        return true;
                    })}
                </div>
            </td>
        </tr>
    )
}
