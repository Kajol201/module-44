import React, { useState, useEffect } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Recharts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('Rechardata.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>

            <LineChart width={500} height={400} data={data}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'physics'} stroke='red'></Line>


            </LineChart>
           
        </div>
    );
};

export default Recharts;
