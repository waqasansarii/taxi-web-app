import React, { useState } from 'react'
import './style.css'
import { faMapMarkerAlt, faSpa ,faDollarSign,faGlassMartiniAlt, faCalendar,faUser,faPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import plane from '../../images/plane.png'
// import { faMap } from '@fortawesome/free-regular-svg-icons'



const CheckoutMoreInfo = () => {

    let [showMore, setShowMore] = useState(false)

    const handleShow = () => {
        setShowMore(!showMore)
    }

    return (
        <div className='select_extra_moreinfo_container'>
            <div className='main_moreinfo_div'>
                <div className='head_div'>
                  <h3 className='moreinfo_head'>Standard Taxi</h3>
                  <p className='selectExtra_para1'>Up To 4 Pax - Up To 4 Suitcases</p>

                </div>
                {showMore ?
                    <button onClick={handleShow} className='lessinfo_btn'>Less Info</button>

                    :
                    <button onClick={handleShow} className='moreinfo_btn'>More Info</button>
                }

            </div>
            {
                showMore ?

                    <div className='main_moreinfo_card_div'>
                        <div className='moreinfo_card_div'>
                            <div className='date_price_div'>
                                <div className='date_div'>
                                <FontAwesomeIcon className='plane2' icon={faCalendar} />
                                <span className='date'>2021-01-14</span>
                                <span className='time'>15:21</span>

                                </div>
                                <div className='checkout_user_info_div'>
                                    {/* <img className='plane2' src={plane} alt=""/> */}
                                    <FontAwesomeIcon className='plane2' icon={faPlane}/>
                                    <p className='checkout_ticket_num'>  AA54321</p>
                                    <FontAwesomeIcon className='checkout_user_icon' icon={faUser} />
                                    <p className='checkout_ticket_num'>02</p>
                                </div>

                                <p className='price_para2'>$40</p>
                            </div>
                            <div className='moreinfo_card1_div'>

                                <div className='moreinfo_para1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Sangster International Airport, Montego Bay</span>
                                </div>
                                <div className='moreinfo_para2'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Sandals Hotel, Montego Bay</span>
                                </div>
                            </div>
                            <div className='date_price_div'>
                                <div className='date_div'>
                                <FontAwesomeIcon className='plane2' icon={faCalendar} />
                                <span className='date'>2021-01-20</span>
                                <span className='time'>20:21</span>

                                </div>
                                <div className='checkout_user_info_div'>
                                    {/* <img className='plane2' src={plane} alt=""/> */}
                                    <FontAwesomeIcon className='plane2' icon={faPlane}/>
                                    <p className='checkout_ticket_num'>  AA54321</p>
                                    <FontAwesomeIcon className='checkout_user_icon' icon={faUser} />
                                    <p className='checkout_ticket_num'>02</p>
                                </div>

                                <p className='price_para2'>$40</p>
                            </div>
                            <div className='moreinfo_card1_div'>

                                <div className='moreinfo_para1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Sangster International Airport, Montego Bay</span>
                                </div>
                                
                                <div className='moreinfo_para2'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span>Sandals Hotel, Montego Bay</span>
                                </div>
                            </div>
                            <p className='moreinfo_para3'>Trip Extras</p>
                            <div className='moreinfo_para4'>
                                <div className='main_champagne_div'>

                               <div className='champagne_div'>
                                   <FontAwesomeIcon icon={faGlassMartiniAlt} />
                                   <span className='champagne_para'>Champagne</span>
                               </div>
                               <div>
                                   <span className='multiple'>x1</span>
                                   <span className='extra_price_para'>$20</span>
                               </div>
                                </div>
                                <div className='main_flower_div'>

                               <div >
                                   <FontAwesomeIcon icon={faSpa} />
                                   <span className='champagne_para'>Flower</span>
                               </div>
                               <div>
                                   <span className='multiple'>x2</span>
                                   <span className='extra_price_para'>$10</span>
                               </div>
                                </div>
                            </div>
                            <div className='moreinfo_total_div'>
                                <p className='moreinfo_para5'>Total</p>
                                <div className='total_price_div'>
                                    <FontAwesomeIcon className='tag_icon' icon={faDollarSign} />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default CheckoutMoreInfo