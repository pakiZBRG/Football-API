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
                <table className='table-league'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>From</td>
                            <td>To</td>
                            <td>Payment</td>
                        </tr>
                    </thead>
                    <tbody>
                        {season.map(player => {
                            const {player_name, type, team_in, team_out} = player
                            return (
                                <tr key={shortid.generate()}>
                                    <td><h4>{player_name}</h4></td>
                                    <td>{team_out.team_name}</td>
                                    <td>{team_in.team_name}</td>
                                    <td className={`${team_in.team_name === name && type.includes('€') ? 'deficit' : null} ${team_in.team_name !== name && type.includes('€') ? 'profit' : null}`}><strong>{type}</strong></td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
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