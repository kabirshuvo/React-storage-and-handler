import React from 'react';
import RvallageNa from '../rvallageNa/Rvallagena';

const RvallageNas = () => {
    const rvallageNas = [
        {id: 1, date: 'Saterday', time: 'Shokale'},
        {id: 2, date: 'Sunday', time: 'Bikale'},
        {id: 3, date: 'Monday', time: 'Shondhai'},
        {id: 4, date: 'Twesday', time: 'Rate'},
        {id: 5, date: 'Wednesday', time: 'Shokale'},
        {id: 6, date: 'Thersday', time: 'Dupure'},
        {id: 7, date: 'Friday', time: 'Fullday'}
    ]
    return (
        <div>
            <h1>R Vallage Na</h1>
            {
                rvallageNas.map(rvallageNa => <RvallageNa 
                    key={rvallageNa.id}
                    vallagena={rvallageNa}
                />)
            }
        </div>
    );
};

export default RvallageNas;