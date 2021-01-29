import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car from '../../images/car.png'

import './style.css'


const TaxtSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='taxis_container'>
            <div className='main_taxis_div'>

                <Slider {...settings} className='slider2'>
                    <div >
                        <div className='taxt1_div'>
                            <h1 className='taxt_head'>Are taxis in Jamaica safe? </h1>
                            <p className='taxt_para'>Yes public taxis are safe, but can be a bit overwhelming.
                             If you are on your holiday we recommend you book a private taxi to get to and 
                             from your hotel or other venues. A private taxi may even cost less than a shared
                              taxis depending on the number of passengers. We are a tourism registered taxi 
                              service company in Jamaica and we are reliable, safe and comfortable.
                              </p>
                        </div>
                    </div>
                    <div>
                        <div className='taxt2_div'>
                            <h1 className='taxt_head'>Whats the best way to get around in Jamaica?</h1>
                            <p className='taxt_para'>
                            Jamaica has a lot to see, if you need to get around safely and comfortably, 
                            we highly recommend you book a private taxi to take you to and from the different 
                            tourist attractions including: Dunn’s River Falls, Bob Marley Tour and Dolphins Cove.
                             We cater for all types of transportation needs in Jamaica including: tourists, 
                             locals, weddings & business travelers.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='taxt3_div'>
                            <h1 className='taxt_head'>Make your trip special? </h1>
                            <p className='taxt_para'>Every trip to Jamaica is special and thats why we offer
                             numerous VIP packages and add-ons for those who want to add a bit of “shazam” 
                             to their Jamaica experience. Our professional and courteous drivers aspire
                              to share our island’s lively and welcoming culture with you. We are ready
                               to help create an unforgettable experience for all traveling to Jamaica.
                               </p>
                        </div>
                    </div>
                   
                </Slider>
            </div>

        </div>
        // </div >
    )
}

export default TaxtSlider