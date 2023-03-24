import React from 'react';
import { add, multiply } from '../../utilities/calculation';
import './Shoes.css';

const Shoes = () => {
    const first = 5;
    const second = 10;
    const result = multiply(first, second);
    const jog = add(first, second);
    return (
        <div>
            <h3>This is Shoes Component </h3>
            <p>Total: {result} and {jog}</p>
        </div>
    );
};

export default Shoes;
