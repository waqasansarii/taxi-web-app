import React from 'react'
import Navbar from '../components/navbar/navbar'
import Service from '../components/service/service'
import Location from '../components/location/location'
import Points from '../components/points/points'
import Contact from '../components/contactUs/contact'
import TaxiSlider from '../components/taxiSlider/taxiSlider'
import WhoAreWe from '../components/whoareyou/whoareyou'
import Approach from '../components/approach/approach'
import TaxtSlider from '../components/homeTextSlider/hometextSlider'


export  const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Service />
            <Location />
            <Points />
            <TaxiSlider />
            <WhoAreWe />
            <Approach />
            <TaxtSlider />
            <Contact />
        </div>
    )
}