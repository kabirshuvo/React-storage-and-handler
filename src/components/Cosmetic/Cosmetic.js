import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {id, name, price, brand} =props.cosmetic;
    const addToCart = (id) =>{
        console.log('Added To The Cart', id)
    }
    return (
        <div className='product'>
            <h3> 
                {name} <br /> 
                $ <small>{price}</small> <br /> 
                {brand}
            </h3>

        <button onClick={()=>addToCart(id)}>
            Append Me (+) 
        </button>
        </div>
    );
};

export default Cosmetic;