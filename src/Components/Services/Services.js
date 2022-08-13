import React, { useEffect, useState } from 'react';
import Service from './service';

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    return (
        <div className='service-container'>

            {
                services.map(service => <Service></Service>)
            }
        </div>
    );
};

export default Services;