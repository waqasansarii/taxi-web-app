import React from 'react'
import './points.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'


const Points = () => {
    return(
        <div className='point_container'>
            <div className='main_point_div'>
                <div className='points_div1'>
                    <div className='point1'>
                        <FontAwesomeIcon className='check' icon={faCheck} />
                        <span className='point_span'>Free Cancellation</span>
                    </div>
                    <div className='point2'>
                        <FontAwesomeIcon className='check' icon={faCheck} />
                        <span className='point_span'>Free Meet & Greet</span>
                    </div>
                </div>
                <div className='points_div2'>
                    <div className='point3' >
                        <FontAwesomeIcon className='check' icon={faCheck} />
                        <span className='point_span'>Free Waiting Time</span>
                    </div>
                    <div className='point4'>
                        <FontAwesomeIcon className='check' icon={faCheck} />
                        <span className='point_span'>Tourism Drivers</span>
                    </div>
                </div>
            </div>
            <div className='main2_pont_div'>
                <p className='safety_para'>Your Comfort & safety is Our Top Priority</p>

            </div>
        </div>
    )
}

export default Points