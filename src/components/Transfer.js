import React from 'react';
import shortid from 'shortid';

export default function Transfer({transfer}){    
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
                        const {player_name, type, transfer_date, team_in, team_out} = player
                        const date = transfer_date.split('-')
                        return (
                            <div className='team-flex' key={shortid.generate()}>
                                <h2>{player_name}</h2>
                                <p>{team_out.team_name} {`----->`} {team_in.team_name}</p>
                                <p>{type}</p>
                                <p>{`${date[2]}/${date[1]}/${date[0]}`}</p>
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