import React, { useState } from 'react'
import './style.css'
import { faMapMarkerAlt ,faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMap } from '@fortawesome/free-regular-svg-icons'



const MoreInfo = () => {

    let [showMore, setShowMore] = useState(false)

    const handleShow = () => {
        setShowMore(!showMore)
    }

    return (
        <div>
            <div className='main_moreinfo_div'>
                <h3 className='moreinfo_head'>Booking Summary</h3>
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
                            <p className='moreinfo_para4'>No Extras</p>
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

export default MoreInfo