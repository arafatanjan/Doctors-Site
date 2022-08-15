import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <br />
            <br />
            <br />
            <h2>For booking    </h2>
            <h2>please register/login first</h2>
            <br />
            <Button variant="info">Booking Service {serviceId}</Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
};

export default Booking;