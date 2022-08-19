import React from 'react';
import pic from '../../pictures/shine-bright-today-village-dental.jpg'

const Warranty = () => {
    return (
        <div className='row my-4'>
            <div className='col px-4'>
                <img style={{ height: '100%', width: '100%' }} src={pic} alt="" />
            </div>
            <div className='col'>
                <h3>We stand behind our work</h3>
                <p>We’re the only dentist in Denver Tech Center to offer a lifetime warranty. We believe in the quality of our work and want to pass that confidence to you. If something breaks, we’ll fix it at no cost to you. Because it’s the right thing to do.</p>
                <h3>How It Works</h3>

                <h6>Our warranty applies to all restorative dental treatments</h6>

                <h6>Visit Village Dental every 6 months for routine cleanings & exams</h6>

                <h6>If something breaks, contact us. We’ll fix it.</h6>
            </div>
        </div>
    );
};

export default Warranty;