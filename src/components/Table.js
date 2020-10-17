import React from 'react'

export default function Table({team}) {
    const {teamName, rank, points, logo, all, goalsDiff, forme} = team

    return (
        <>
            <p>{rank}</p>
            <p> <img src={logo} alt={teamName}/> {teamName}</p>
            <p>{all.win}</p>
            <p>{all.draw}</p>
            <p>{all.lose}</p>
            <p>{all.goalsFor}</p>
            <p>{all.goalsAgainst}</p>
            <p>{forme}</p>
            <p>{goalsDiff}</p>
            <p>{points}</p>
        </>
    )
}
