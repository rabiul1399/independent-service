import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2 className='text-center mt-4 text-info'>I am Detailes {serviceId}</h2>
        </div>
    );
};

export default Details;