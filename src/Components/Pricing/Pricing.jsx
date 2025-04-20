import React, { use } from 'react';
import Card from '../Card/Card';

const Pricing = ({pricingData}) => {
    const priceDatajs= use(pricingData);


    return (
        <div className='grid grid-cols-3'>
            {
                priceDatajs.map(price =><Card key={price.id} price={price}></Card>)
            }

            
        </div>
    );
};

export default Pricing;