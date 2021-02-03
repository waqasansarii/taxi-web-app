import React from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './location.css'
import { Link } from 'react-router-dom'


const Location = () => {
    return (
        <div className='location_container'>
            <div className='location_div'>
                <div className='input_and_map'>
                    <Link className='location_link' to='/location'>

                        <FontAwesomeIcon className='map_marker' icon={faMapMarkerAlt} />
                        <input type="text" className='location_input' placeholder='Enter Your Pickup Location' name="" id=""/>
                        {/* <span style={{marginLeft:'10px',fontWeight:'bold',color:'grey'}}>
                         Enter Your Pickup Location
                            
                        </span> */}
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Location