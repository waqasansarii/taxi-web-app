import React, { useState } from 'react'
import './style.css'
// import car2 from '../../images/car2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag,  faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import label from '../../images/label.png'
import { Location_state } from '../../globalState/locationData'

const SelectTaxi = () => {


    const [showText, setShowText] = useState(false)

    const OpenText = (data) => {
        setShowText(!showText)
        // console.log(data2)
        

    }

    return (
        <div>
            <div className='main_selecttaxi_div'>
                <h3 className='selectTaxi_head'>Select Taxi</h3>
                {
                    Location_state.taxiData.map((val) => {
                        return (
                            <>
                                <div className='btnAndCard_div'>
                                    <div className='select_taxi_card_div' key={val.id}>
                                        <div className='imgAndName_div'>
                                            <img className='taxi_img' src={val.car} alt="" />

                                            <div className='name_div'>


                                                <p className='taxi_name'>{val.name}</p>
                                                <div style={{ marginTop: '10px' }} className='uptoJ_user_div'>

                                                    <FontAwesomeIcon className='taxi_user' icon={faUser} />
                                                    <span className='taxi_span'>Up To  4</span>
                                                </div>
                                                <div className='uptoJ_user_div2'>

                                                    <FontAwesomeIcon className='taxi_bag' icon={faShoppingBag} />
                                                    <span className='taxi_span'>Up To  4</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='taxi_price'>
                                            <img src={label} className='taxi_tag' alt='' />
                                            {/* <FontAwesomeIcon className='taxi_dollar' icon={faDollarSign} /> */}
                                            <span className='taxi_dollar'>${val.price}</span>
                                        </div>



                                    </div>
                                    <div className='bootme_btn_div'>
                                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={()=>OpenText(val)} icon={faInfoCircle} />
                                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                                        {/* <button>Book Me</button> */}
                                    </div>

                                    {showText ?

                                        <div className='details_taxi'>
                                            <p className='select_para1'>Included In the Price:</p>
                                            <ul className='detail_ul'>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Free Waiting Time</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Free Meet & Greet with Welcome Sign</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Your Own Private Transfer, Not Shared</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Max Capacity: 30 Passengers & 30 Suitcases</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Vehicle will be Toyota Voxy or Similar</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                                    <span className='detail_span'>Free Cancellation</span>
                                                </li>
                                            </ul>
                                        </div>
                                        :
                                        null

                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectTaxi