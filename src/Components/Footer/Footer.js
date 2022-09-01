import React from 'react';


const Footer = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h4>Frequently Asked Questions</h4>
                    <h6 className='d-block m-auto'>More questions? We are  ready to help. Give us a call at (303) 220-7662 or book your free consultation now.</h6>
                </div>
                <div className="col"><div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h6 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #1
                            </button>
                        </h6>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>We’re a group of energetic, values-driven dental clinicians </strong>  dedicated to caring for all people — young to young at heart. Since 2002, we’ve been combining exciting technology with a warm and friendly team to deliver exceptional dentistry in Greenwood Village.

                                Find all the dental care you need (and then some) here in our beautiful office, designed for  <code>.your comfort and rejuvenation.</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h6 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h6>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h6 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h6>
                        <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> <p>
                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit </p>.
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>
            <p> <small>copyright@arafatanjan</small></p>
        </div>
    );
};

export default Footer;