import React from 'react';
import shortid from 'shortid';

export default function Transfer({transfer, name}){    
    const market2020 = []
    const market2019 = []
    const market2018 = []

    const displayTransferMarket = (season, year) => {
        // get for specific year
        transfer.map(player => {
            const { type, transfer_date } = player;
            if(transfer_date.includes(year) && (type !== null && type !== 'N/A')){
                season.push(player)
            }
            return null
        });
        
        // sort by type
        season.sort((a,b) => (a.type < b.type) ? 1 : ((b.type < a.type) ? -1 : 0));

        // render
        return (
            <React.Fragment>
                <h1 className='center'>Transfer Window {year}</h1>
                <div className='squad-grid'>
                    {season.map(player => {
                        const {player_name, type, team_in, team_out} = player
                        return (
                            <div className='team-flex' key={shortid.generate()}>
                                <h3>{player_name}</h3>
                                <p style={{margin: '.4rem'}}>{team_out.team_name} {`----->`} {team_in.team_name}</p>
                                <h3 className={`${team_in.team_name === name && type.includes('€') ? 'deficit' : null} ${team_in.team_name !== name && type.includes('€') ? 'profit' : null}`}>{type}</h3>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
    
    return (
        <>
            {displayTransferMarket(market2020, '2020')}
            {displayTransferMarket(market2019, '2019')}
            {displayTransferMarket(market2018, '2018')}
        </>
    )
}