import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container ><div className='fluid text-justify top-item p-2'>
            <br />
            <br />
            <h1>Dentistry Done Right</h1>
            <br />

            <h6>Adults and kids, we welcome patients of all ages! Our<br /> team is passionate about building lifetime relationships <br />through positive experiences, featuring:</h6>
            <h6>Transparent Pricing</h6>
            <h6>Unparalleled Warranty</h6>
            <h6>FREE Whitening (for life!)</h6>
            <br />
            <br />
            <h6>“Our word is our worth. We promise to do it right, timely, and for a fair price.”</h6>
            <br />
            <br />
        </div>
            <div></div>
        </Container>

    );
};

export default Home;