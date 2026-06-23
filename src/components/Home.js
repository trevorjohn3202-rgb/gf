import 'bootstrap/dist/css/bootstrap.css';//for styling UI
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link} from "react-router-dom";


const Home = () => {
    const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            };

    return(
        // Home paragraph
        
        <div className="container-fluid">
            {/* Carousel starts here  */}
            
                    <div className="fluid-container"> 

                          <div className='container-fluid m-0'>
                           <Slider {...settings}>
                                 <div>
                                    <img src="/images/al_capone1.jpeg" alt="car1" className="home-carousel-image" />
                                 </div>
                                <div>
                                    <img src="/images/al_capone2.jpeg" alt="car2" className="home-carousel-image" />
                                </div>
                                 <div>
                                    <img src="/images/al_capone3.jpeg" alt="car3" className="home-carousel-image" />
                                 </div>
                                 <div>
                                    <img src="/images/caro6.jpg" alt="car4" className="home-carousel-image" />
                                 </div>
                           </Slider>
                        </div>

                    </div>

                    
                    <br/>
                    <br/>
                    
                
                {/* Card*/}
               <div className='row'
                     style={{
                            fontFamily : "ui-serif"
                             }}
 >
                 <div className='col-md-3  mb-4'>
                        <div className='card h-100 shadow border-0 pb-0 text-center'>
                            <h5 className='card-header bg-white border-0 pt-0 text-center'>
                            EVENTS
                            </h5>
                            <div className='card-body d-flex flex-column align-items-center p-3'>
                            <img src='/images/events.jpeg' alt='caro1' className="home-card-image" style={{objectFit : "revert-layer"}}></img>
                            </div>
                            <div className='card-footer bg-white border-0 pb-3 d-grid'>
                                <Link to = '/Event' className='btn btn-outline-dark btn-md fw-semibold shadow-sm
                                rounded-2'>VIEW EVENTS </Link>

                            </div>
                         </div>
                    </div>

                  <div className='col-md-3  mb-4'>
                        <div className='card h-100 shadow border-0 pb-0 text-center'>
                            <h5 className='card-header bg-white border-0 pt-0 text-center'>
                            AVAILABLE DRINKS
                            </h5>
                            <div className='card-body d-flex flex-column align-items-center p-3'>
                            <img src='/images/drinks.jpeg' alt='caro1' className="home-card-image" style={{objectFit : "revert-layer"}}></img>
                            </div>
                            <div className='card-footer bg-white border-0 pb-3 d-grid'>
                                <Link to = '/Drinks' className='btn btn-outline-dark btn-md fw-semibold shadow-sm
                                rounded-2'>ALL DRINKS </Link>

                            </div>
                         </div>
                    </div>

                  <div className='col-md-3  mb-4'>
                        <div className='card h-100 shadow border-0 pb-0 text-center'>
                            <h5 className='card-header bg-white border-0 pt-0 text-center'>
                            FOOD MENU
                            </h5>
                            <div className='card-body d-flex flex-column align-items-center p-3'>
                            <img src='/images/food.jpeg' alt='caro1' className="home-card-image" style={{objectFit : "revert-layer"}}></img>
                            </div>
                            <div className='card-footer bg-white border-0 pb-3 d-grid'>
                                <Link to = '/Foodmenu' className='btn btn-outline-dark btn-md fw-semibold shadow-sm
                                rounded-2'>TAKE A MEAL </Link>

                            </div>
                         </div>
                    </div>

                <div className='col-md-3  mb-4'>
                        <div className='card h-100 shadow border-0 pb-0 text-center'>
                            <h5 className='card-header bg-white border-0 pt-0 text-center'>
                            RESERVATIONS
                            </h5>
                            <div className='card-body d-flex flex-column align-items-center p-3'>
                            <img src='/images/reserve.jpeg' alt='caro1' className="home-card-image" style={{objectFit : "revert-layer"}}></img>
                            </div>
                            <div className='card-footer bg-white border-0 pb-3 d-grid'>
                                <Link to = '/Reservations' className='btn btn-outline-dark btn-md fw-semibold shadow-sm
                                rounded-2'>FOR AN EARLY RESERVATION </Link>

                            </div>
                         </div>
                 </div>
                
               </div>

                    <br/>
                    <br/>

                {/* Map navigation */}
                <div className="container-fluid px-3">
                    <div className="row">
                        <div className="col-12 text-center mb-3" style={{ fontFamily: 'ui-serif' }}>
                            <h2 style={{ fontWeight: 'bold' }}>FIND US HERE</h2>
                            <p className="text-muted mb-0">Open the map to navigate to our venue</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '56.25%',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                                }}
                            >
                                <iframe
                                    title="Venue Location"
                                    src="https://www.google.com/maps?q=Al%20Capone%20Lounge%2C%20Nairobi&output=embed"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0,
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="text-center mt-2" style={{ fontFamily: 'ui-serif' }}>
                                <a
                                    className="btn btn-dark"
                                    href="https://www.google.com/maps?q=Al%20Capone%20Lounge%20Nairobi&output=html"
                                    target="_blank"
                                    rel="noreferrer"
                                >Open Directions</a>
                            </div>
                        </div>
                    </div>
                </div>

                   
                     
            

            </div>

        

    );
};

export default Home