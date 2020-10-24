import React from 'react';

export default function Overvies({info}){
    const { goals, matchs } = info;
    console.log(info)
    return (
        <div>
            {goals && matchs && 
                <div>
                    <p>Given: {goals.goalsFor.total}</p>
                    <p>Received: {goals.goalsAgainst.total}</p>
                    <p>Played: {matchs.matchsPlayed.total}</p>
                    <p>Win: {matchs.wins.total}</p>
                    <p>Draw: {matchs.draws.total}</p>
                    <p>Lost: {matchs.loses.total}</p>
                </div>
            }
        </div>
    )
}