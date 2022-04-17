import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container my-5 '>
            <h2 className='text-center text-success mb-4'>Get A Perfect Body</h2>

            <div className='row g-4 ' >
                {

                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>




        </div>
    );
};

export default Services;