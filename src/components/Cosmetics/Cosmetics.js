import './Cosmetics.css';

import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
//import add from '../../utilities/calculation';

const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([]) ;

   useEffect(()=>{
    fetch('data.json').then(resp => resp.json()).then(data => setCosmetics(data));
   },[])
  
    return (
        <div>
            <h1>Inside from Cosmetics</h1>
            <p>Total: {}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}/>)
            }
        </div>
    );
};

export default Cosmetics;
