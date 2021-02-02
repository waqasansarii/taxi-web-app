import React from 'react'
import MapContainer from '../taxiBookComponent/map/map'
import MoreInfo from '../taxiBookComponent/moreInfo/moreInfo'
import Navbar2 from '../searchLocationComponent/navbar2/navbar2'
import '../taxiBookComponent/moreInfo/style.css'
import SelectTaxi from '../taxiBookComponent/selectTaxi/selectTaxi'



export const MapAndTaxiScreen = () => {



    return (
        <div>
            <div className='for_map_comp'>
                <Navbar2 />
            </div>

            <MapContainer />
            <MoreInfo />
            <SelectTaxi />
        </div>
    )
}