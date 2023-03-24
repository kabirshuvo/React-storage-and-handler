import './Cosmetics.css';

import React from 'react';
import { add } from '../../utilities/calculation';
//import add from '../../utilities/calculation';

const Cosmetics = () => {
    const first = 5;
    const second = 10;

    const total = add(first, second)
    return (
        <div>
            <h1>Inside from Cosmetics</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;
