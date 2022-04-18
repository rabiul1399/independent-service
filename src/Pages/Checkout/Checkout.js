import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams()
    return (
        <div className='my-5 text-center'>
            <h2 className=' mb-5 text-success'>Pleace buy this course and healthy your body : {serviceId}</h2>
            <button className='btn btn-outline-primary'>Buy Now</button>
        </div>
    );
};

export default Checkout;