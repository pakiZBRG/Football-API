import React from 'react';

export default function Overvies({info}){
    const { goals, matchs } = info;

    return (
        <div>
            {goals && matchs && 
                <div className='team-grid'>
                    <div className='team-flex'>
                        <h1>Home</h1>
                        <h2>Wins: {matchs.wins.home}</h2>
                        <h2>Draws: {matchs.draws.home}</h2>
                        <h2>Loses: {matchs.loses.home}</h2>
                        <h2>Given: {goals.goalsFor.home} <i className='fa fa-futbol'></i></h2>
                        <h2>Received: {goals.goalsAgainst.home} <i className='fa fa-futbol'></i></h2>
                    </div>
                    <div className='team-flex'>
                        <h1>Away</h1>
                        <h2>Wins: {matchs.wins.away}</h2>
                        <h2>Draws: {matchs.draws.away}</h2>
                        <h2>Loses: {matchs.loses.away}</h2>
                        <h2>Given: {goals.goalsFor.away} <i className='fa fa-futbol'></i></h2>
                        <h2>Received: {goals.goalsAgainst.away} <i className='fa fa-futbol'></i></h2>
                    </div>
                    <div className='team-flex'>
                        <h1>Total</h1>
                        <h2>Wins: {matchs.wins.total}</h2>
                        <h2>Draws: {matchs.draws.total}</h2>
                        <h2>Loses: {matchs.loses.total}</h2>
                        <h2>Given: {goals.goalsFor.total} <i className='fa fa-futbol'></i></h2>
                        <h2>Received: {goals.goalsAgainst.total} <i className='fa fa-futbol'></i></h2>
                    </div>
                </div>
            }
        </div>
    )
}