import React from 'react'
// import './points.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck ,faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons'
import {  faClock,faStar,faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import './style.css'


const Approach = () => {
    return(
        <div className='point_container2'>
            <div>
                <h1 className='point_head'>Our Client First Approach</h1>
            </div>
            <div className='main_point2_div'>
                <div className='points2_div1'>
                    <div className='point1_2'>
                        <FontAwesomeIcon className='check2' icon={faMoneyCheckAlt} />
                        <span className='point_span2'>Free Cancellation</span>
                        <p className='points_para2'>100% refund if you cancel 24 hrs. before your pick-up time.</p>
                    </div>
                    <div className='point2_2'>
                        <FontAwesomeIcon className='check2' icon={faClock} />
                        <span className='point_span2'>Free Waiting Time</span>
                        <p className='points_para2'>Fight is late! We will wait. You must provide a flight number.</p>
                    </div>
                </div>
                <div className='points2_div2'>
                    <div className='point3_2' >
                        <FontAwesomeIcon className='check2' icon={faStar} />
                        <span className='point_span2'>First Class Service</span>
                        <p className='points_para2'>Meet & greet, friendly drivers, helpful customer service.</p>
                    </div>
                    <div className='point4_2'>
                        <FontAwesomeIcon className='check2' icon={faCheckSquare} />
                        <span className='point_span2'>Certified Drivers</span>
                        <p className='points_para2'>Certified Vehicles & Drivers. Your safety is our top priority.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Approach