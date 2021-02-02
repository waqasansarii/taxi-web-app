import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import label from '../../images/label.png'
import car1 from '../../images/car1.png'
import car2 from '../../images/car2.png'
import car3 from '../../images/car3.png'
import car4 from '../../images/car4.png'
import car5 from '../../images/car5.png'
import car6 from '../../images/car6.png'

const SelectTaxi = () => {


    const [showText, setShowText] = useState(false)
    const [showText2, setShowText2] = useState(false)
    const [showText3, setShowText3] = useState(false)
    const [showText4, setShowText4] = useState(false)
    const [showText5, setShowText5] = useState(false)
    const [showText6, setShowText6] = useState(false)

    const OpenText = () => {
        setShowText(!showText)
        // console.log(data2)
    }
    const OpenText2 = () => {
        setShowText2(!showText2)
        // console.log(data2)
    }
    const OpenText3 = () => {
        setShowText3(!showText3)
        // console.log(data2)
    }
    const OpenText4 = () => {
        setShowText4(!showText4)
        // console.log(data2)
    }
    const OpenText5 = () => {
        setShowText5(!showText5)
        // console.log(data2)
    }
    const OpenText6 = () => {
        setShowText6(!showText6)
        // console.log(data2)
    }
    return (
        <div>
            <div className='main_selecttaxi_div'>
                <h3 className='selectTaxi_head'>Select Taxi</h3>
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car1} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>Standard Taxi</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText} icon={faInfoCircle} />
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
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car2} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>VIP & Exec</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText2} icon={faInfoCircle} />
                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                        {/* <button>Book Me</button> */}
                    </div>

                    {showText2 ?

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
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car3} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>Coach</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText3} icon={faInfoCircle} />
                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                        {/* <button>Book Me</button> */}
                    </div>

                    {showText3 ?

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
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car4} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>Taxi</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText4} icon={faInfoCircle} />
                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                        {/* <button>Book Me</button> */}
                    </div>

                    {showText4 ?

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
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car5} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>Mini Taxi</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText5} icon={faInfoCircle} />
                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                        {/* <button>Book Me</button> */}
                    </div>

                    {showText5 ?

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
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='taxi_img' src={car6} alt="" />

                            <div className='name_div'>


                                <p className='taxi_name'>Taxi</p>
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
                            <span className='taxi_dollar'>$10</span>
                        </div>

                    </div>
                    <div className='bootme_btn_div'>
                        <FontAwesomeIcon className={showText ? 'factorial_icon2' : 'factorial_icon'} onClick={OpenText6} icon={faInfoCircle} />
                        <Link className='book_me_btn' to='/select-extra'>Book Me</Link>
                        {/* <button>Book Me</button> */}
                    </div>

                    {showText6 ?

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
                

            </div>
        </div>
    )
}

export default SelectTaxi