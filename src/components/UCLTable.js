import React from 'react';

export default function UCLTable({groups}) {
    return (
        <React.Fragment>
            {groups.map((group, i) => (
                <div key={i}>
                    <h2 className='center top'>{group[0].group}</h2>
                    <table className='table-league'>
                        <thead>
                            <tr>
                                <td className='center'></td>
                                <td className='none'>Club</td>
                                <td className='center'>P</td>
                                <td className='center'>W</td>
                                <td className='center'>D</td>
                                <td className='center'>L</td>
                                <td className='center'>Goals</td>
                                <td className='center'>Diff</td>
                                <td className='center'>Points</td>
                                <td className='center'>Form</td>
                            </tr>
                        </thead>
                        <tbody>
                            {group.map((team, i) => {
                                const {description, teamName, rank, points, logo, all, goalsDiff, forme} = team;
                                const {win, draw, lose, goalsFor, goalsAgainst} = all;
                                const promotion = type => description && !description.search(type) && 'promotion';
                                const relegation = () => description && !description.search('Relegation') && 'relegation';
                                const form = forme.split('');
                                return (
                                    <tr key={i} className={`
                                        ${relegation() || promotion('CONMEBOL') || promotion('Championship') || promotion('8th') || promotion('16th') || promotion('UEFA') || promotion('Final Series') || promotion('Champion') || promotion('Promotion')}
                                    `}>
                                        <td className='center'><h3>{rank}.</h3></td>
                                        <td className='table-group-teamname'><img src={logo} alt={teamName}/> <h4>{teamName}</h4></td>
                                        <td className='center'>{win + draw + lose}</td>
                                        <td className='center'>{win}</td>
                                        <td className='center'>{draw}</td>
                                        <td className='center'>{lose}</td>
                                        <td className='center'>{goalsFor}:{goalsAgainst}</td>
                                        <td className='center'>{goalsDiff}</td>
                                        <td className='center'><strong style={{fontSize: '1.1rem'}}>{points}</strong></td>
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
                                )})
                            }
                        </tbody>
                    </table>
                </div>
            ))}
        </React.Fragment>
    )
}
