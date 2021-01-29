import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car from '../../images/car.png'

import './taxislider.css'


const TaxiSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='taxis_container'>
            <div className='main_taxis_div'>
                <h2 style={{ textAlign: 'center' }}>Our Fleet</h2>

                <Slider {...settings} className='slider'>
                    <div className='div34' >
                        {/* <h3>1</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                        {/* <h3>2</h3> */}
                    </div>
                    <div>
                        {/* <h3>3</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>4</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>5</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
                            <p className='taxi_price'>4 Pax</p>
                        </div>
                    </div>
                    <div>
                        {/* <h3>6</h3> */}
                        <div className='taxi_card1'>
                            <img className='card1' src={car} alt="" />
                            <p className='taxi_decs'>Standard Taxi</p>
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