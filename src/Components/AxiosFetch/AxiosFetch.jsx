import React, { use } from 'react';

const AxiosFetch = ({ axiosdata }) => {
    const promiseData = use(axiosdata);
    const data = promiseData.data;
    const finaldata = data.map(pro => {
        const student = {
            id: pro.id,
            name: pro.name,
            physics: pro.marks.physics
        }
        return student;
    })
    console.log(finaldata);
    return (
        <div>

        </div>
    );
};

export default AxiosFetch;