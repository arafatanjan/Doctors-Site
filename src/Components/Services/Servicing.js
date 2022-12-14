import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Servicing.css'

const Servicing = ({ service }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/booking/${id}`);
    }
    return (
        <div className='servicing-container pb-3 card w-100 m-2 d-flex justify-content-center'>
            <img className='img-fluid card-img-top' src={img} alt="" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className='card-text'>{description}</p>
                <h6>{price}</h6>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-warning'>Booking Now</button>
            </div>



        </div>
    );
};

export default Servicing;

// {/* card */}
{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h4 class="card-title">{name}</h4>
  <p class="card-text">{description}.</p>
  <a href="{`/booking/${id}`}" class="btn btn-primary">Booking Now</a>
</div> */}