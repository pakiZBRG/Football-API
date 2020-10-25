import React from 'react';


export default function Player({squad}){
    const Goalkeeper = [];
    const Defender = [];
    const Midfielder = [];
    const Attacker = [];
    const playersGoalkeeper = () => squad.map(player => (player.position === 'Goalkeeper' ? Goalkeeper.push(player) : null));
    const playersDefender = () => squad.map(player => (player.position === 'Defender' ? Defender.push(player) : null));
    const playersMidfielder = () => squad.map(player => (player.position === 'Midfielder' ? Midfielder.push(player) : null));
    const playersAttacker = () => squad.map(player => (player.position === 'Attacker' ? Attacker.push(player) : null));
    playersGoalkeeper();
    playersDefender();
    playersMidfielder();
    playersAttacker();

    const displayPlayers = (pos, name, style) => (
        <div className='players-position'>
            <h2 className='position'>{`${name}s`} ({pos.length})</h2>
            <div className='squad-grid'>
                {pos.map((player, i) => (
                    <div key={i} className={`squad-flex ${player.position === name ? name : null}`}>
                        <h2>{player.player_name}</h2>
                        <h3>{player.nationality}</h3>
                        <p>{player.height}</p>
                        <p>{player.weight}</p>
                        <p>{player.birth_date}</p>
                        <p className='background-lastname' style={{mixBlendMode: style}}>{player.lastname}</p>
                    </div>
                ))}
            </div> 
        </div>
    )
    
    return (
        <>
            {displayPlayers(Goalkeeper, "Goalkeeper", "screen")}
            {displayPlayers(Defender, "Defender", "multiply")}
            {displayPlayers(Midfielder, "Midfielder", "multiply")}
            {displayPlayers(Attacker, "Attacker", "multiply")}
        </>
    )
}