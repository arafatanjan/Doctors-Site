import React, { useEffect, useState } from 'react';
import Servicing from './Servicing';
import './Services.css'


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
                services.map(service => <Servicing
                    key={service.key}
                    service={service}>
                </Servicing>)

            }
        </div>
    );
};

export default Services;