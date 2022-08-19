import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../pictures/caro1.jpg'
import banner2 from '../../pictures/caro2.jpg'
import banner3 from '../../pictures/caro3.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto"
                        style={{ height: '50%' }}
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p>

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;