import React from 'react'
import plane from '../../images/plane.png'
import pin from '../../images/pin (5).png'
import building from '../../images/building.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css'


const Ticket = () => {
    return(
        <div>
            <div className='main_ticket_div'>
                <div>
                    <div className='feild1'>
                      <img src={pin} alt=""/>
                      <span>Sangster International Airport, Montego Bay</span>
                    </div>
                    <div className='pickandflight_div'>
                        <div className='pick_div'>
                            <p>Pickup Date & Time</p>
                            <span className='ticket_date'>20-01-21</span>
                            <span className='ticket_time'>16:30</span>
                        </div>
                        <div className='flight_div'>
                            <span className='flight_span'>Flight Number </span><span className='flight_span2'>(If Known)</span>
                            <p>AA54321</p>
                        </div>
                    </div>
                    <div className='feild1'>
                      {/* <img src={pin} alt=""/> */}
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>Sandals Hotel, Montego Bay</span>
                    </div>
                </div>
                <div>

                <img className='plane' src={plane} alt=""/>
                <div className='dot_div'>

                </div>
                <img className='building' src={building} alt=""/>
                </div>


            </div>
        </div>
    )
}

export default Ticket