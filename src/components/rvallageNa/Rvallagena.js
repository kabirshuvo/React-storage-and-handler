import React from 'react';

const RvallageNa = (props) => {
    const {date, time, id} = props.vallagena;
    return (
        <div>
            <h3>{date} time {time} id {id}</h3>
        </div>
    );
};

export default RvallageNa;