import React from 'react';
import { useParams } from 'react-router-dom';


const Detailes = () => {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <h3>this is details</h3>
        </div>
    );
};

export default Detailes;