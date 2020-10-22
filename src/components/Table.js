import React from 'react';
import nouva_cosenza from '../images/spal.png';


export default function Table({team}) {
    const {team_id, description, teamName, rank, points, logo, all, goalsDiff, forme} = team;
    const {win, draw, lose, goalsFor, goalsAgainst} = all;

    const missingImages = () => {
        switch(team_id){
            case 10137:
                return <img src={nouva_cosenza} alt={teamName}/>
            default: 
                return <img src={logo} alt={teamName}/>
        }
    }

    // Get W, D, L from forme
    const form = forme.split('');

    return (
        <tr className={`
            ${(description && !description.search('Relegation') ? 'relegation' : '') || 
            (description && !description.search('CONMEBOL') ? 'promotion' : '') ||
            (description && !description.search('Championship') ? 'promotion' : '') ||
            (description && !description.search('8th') ? 'promotion' : '') ||
            (description && !description.search('16th') ? 'promotion' : '') ||
            (description && !description.search('UEFA') ? 'promotion' : '') ||
            (description && !description.search('Champion') ? 'promotion' : '') ||
            (description && !description.search('Promotion') ? 'promotion' : '')}

        `}>
            <td className='center'>{rank}.</td>
            <td className='table-group-teamname'> {missingImages()} <h4>{teamName}</h4></td>
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
