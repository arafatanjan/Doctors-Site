import React from 'react';

const Servicing = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='servicing-container pb-3'>
            <div className='col-md-4 col-xs-6 d-block m-auto'> <img className='img-fluid img-circle' w-100 src={img} alt="" /></div>
            <h4>{name}</h4>
            <div className="d-block m-auto"><p6>{description}</p6></div>
            <h6>{price}</h6>
            <button className='btn btn-warning'>Booking Now</button>
        </div>
    );
};

export default Servicing;