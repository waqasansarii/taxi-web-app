import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from '../../images/car1.png'
import car2 from '../../images/car2.png'
import car3 from '../../images/car3.png'
import car4 from '../../images/car4.png'
import car5 from '../../images/car5.png'
import car6 from '../../images/car6.png'

// import car from '../../images/car.png'

import './taxislider.css'


const TaxiSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

    };
    return (
        <div className='taxis_container'>
            <div className='main_taxis_div'>
                <h2 style={{ textAlign: 'center' }}>Our Fleet</h2>

                <Slider {...settings} className='slider'>
                    <div className='div34' >
                        {/* <h3>1</h3> */}
                        <div className='taxi_card1'>
                            <img className='card0' src={car1} alt="" />
                            <p className='taxi_decs'>Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        <div className='taxi_card1'>
                            <img className='card2' src={car2} alt="" />
                            <p className='taxi_decs'>VIP & Exec</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                        {/* <h3>2</h3> */}
                    </div>
                    <div>
                        {/* <h3>3</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car3} alt="" />
                            <p className='taxi_decs'>Small Bus</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>4</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car4} alt="" />
                            <p className='taxi_decs'>Family Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>5</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car5} alt="" />
                            <p className='taxi_decs'>Coach</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>6</h3> */}
                        <div className='taxi_card1'>
                            <img className='card6' src={car6} alt="" />
                            <p className='taxi_decs'>Mini Bus</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
        // </div >
    )
}

export default TaxiSlider