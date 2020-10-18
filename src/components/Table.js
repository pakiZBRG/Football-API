import React from 'react'

export default function Table({team}) {
    const {teamName, rank, points, logo, all, goalsDiff, forme} = team

    // Get W, D, L from forme
    const form = forme.split('')

    return (
        <>
            <td style={{textAlign: 'center'}}>{rank}.</td>
            <td className='table-group-teamname'> <img src={logo} alt={teamName}/> <h4>{teamName}</h4></td>
            <td style={{textAlign: 'center'}}>{all.win+all.draw+all.lose}</td>
            <td style={{textAlign: 'center'}}>{all.win}</td>
            <td style={{textAlign: 'center'}}>{all.draw}</td>
            <td style={{textAlign: 'center'}}>{all.lose}</td>
            <td style={{textAlign: 'center'}}>{all.goalsFor}</td>
            <td style={{textAlign: 'center'}}>{all.goalsAgainst}</td>
            <td style={{textAlign: 'center'}}>{goalsDiff}</td>
            <td style={{textAlign: 'center'}}>{points}</td>
            <td style={{textAlign: 'center'}}>
                <div className='width'>
                    {form.map((f, i) => {
                        if(f === 'W') return <span key={i} className='table-group-form win'>{f}</span>
                        if(f === 'D') return <span key={i} className='table-group-form draw'>{f}</span>
                        if(f === 'L') return <span key={i} className='table-group-form lost'>{f}</span>
                        return true;
                    })}
                </div>
            </td>
        </>
    )
}
