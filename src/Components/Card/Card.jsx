import React from 'react';
const Card = ({price}) => {
  
   
    return (
        <div className='bg-amber-200 p-8 gap-5 rounded-2xl space-y-3'>
            <h1>{price.title}</h1>
            <h1>{price.price}</h1>
           <div>

            {
                price.features.map(feat=><p>{feat}</p>)
            }

           </div>
           <div>
            <button>{price.buttonText}</button>
           </div>
            
        </div>
    );
};

export default Card;