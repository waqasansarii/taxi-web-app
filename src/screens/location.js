import React from 'react'
import SearchInput from '../searchLocationComponent/searchInput/searchinput'
import Navbar2 from '../searchLocationComponent/navbar2/navbar2'
// import LocationList from '../searchLocationComponent/locationList/locationList'

export const Location = () => {
    return(
        <div>
            <Navbar2 />
            <SearchInput />
            {/* <LocationList /> */}
        </div>

    )
}