import React, { useState } from 'react'
import './style.css'
import rose from '../../images/rose.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import label from '../../images/label.png'
import Options from '../selectOption/option'

const SelectExtra = () => {


    const [showText, setShowText] = useState(false)
    const [showText2, setShowText2] = useState(false)
    const [showText3, setShowText3] = useState(false)
    const [showText4, setShowText4] = useState(false)

    const [add, setAdd] = useState(false)
    const [add2, setAdd2] = useState(false)
    const [add3, setAdd3] = useState(false)
    const [add4, setAdd4] = useState(false)

    const [showSelect, setShowSelect] = useState(false)
    const [showSelect2, setShowSelect2] = useState(false)
    const [showSelect3, setShowSelect3] = useState(false)
    const [showSelect4, setShowSelect4] = useState(false)

    const OpenText = () => {
        setShowText(!showText)
        // console.log(showText)
    }
    const OpenText2 = () => {
        setShowText2(!showText2)
        // console.log(showText)
    }
    const OpenText3 = () => {
        setShowText3(!showText3)
        // console.log(showText)
    }
    const OpenText4 = () => {
        setShowText4(!showText4)
        // console.log(showText)
    }
    const openSelect = () => {
        setShowSelect(!showSelect)
    }
    const openSelect2 = () => {
        setShowSelect2(!showSelect2)
    }
    const openSelect3 = () => {
        setShowSelect3(!showSelect3)
    }
    const openSelect4 = () => {
        setShowSelect4(!showSelect4)
    }
    const handleAdd = () => {
        setAdd(!add)
        // console.log('run')
    }
    const handleAdd2 = () => {
        setAdd2(!add2)
        // console.log('run')
    }
    const handleAdd3 = () => {
        setAdd3(!add3)
        // console.log('run')
    }
    const handleAdd4 = () => {
        setAdd4(!add4)
        // console.log('run')
    }
    return (
        <div>
            <div className='main_selecttaxi_div'>
                <h3 className='selectTaxi_head'>Select Taxi</h3>
                <div className='btnAndCard_div'>
                    <div className='select_taxi_card_div' >
                        <div className='imgAndName_div'>
                            <img className='extra_img' src={rose} alt="rose" />
                            <div className='name_div'>
                                <p className='taxi_name'>Red Stripe Beer</p>
                                <div style={{ marginTop: '10px' }} className='uptoJ_user_div'>
                                    <span className='taxi_span'>4pk</span>
                                </div>
                                <div className='uptoJ_user_div2'>
                                    <FontAwesomeIcon className={showText ? 'factorial2_icon2' :
                                        'factorial2_icon'} onClick={OpenText} icon={faInfoCircle} />
                                </div>
                            </div>
                        </div>
                        <div className='taxi_price'>
                            {add ?
                                <img src={label} className='taxi_tag' alt='' />
                                :
                                <span className='from'>From</span>
                            }
                            <span className='taxi_dollar'>$10</span>
                            {showSelect ?
                                null
                                :
                                <div className='addme_btn_div' onClick={openSelect}>
                                    <Link className='Add_me_btn' to='/select-extra'>Add Me</Link>
                                </div>
                            }
                        </div>
                    </div>
                    {showSelect ?
                        <div className='select_fields'>
                            <Options selectFunc={openSelect} addfunc={handleAdd} />
                        </div>
                        : null
                    }
                    {showText ?
                        <div className='details_taxi'>
                            <p className='select_para1'>Included In the Price:</p>
                            <ul className='detail_ul'>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Select From Medium or Large Bouquet</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented Inside the Vehicle</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented on Inbound Journey</span>
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
                            <img className='extra_img' src={rose} alt="rose" />
                            <div className='name_div'>
                                <p className='taxi_name'>Champagne</p>
                                <div style={{ marginTop: '10px' }} className='uptoJ_user_div'>
                                    <span className='taxi_span'>4pk</span>
                                </div>
                                <div className='uptoJ_user_div2'>
                                    <FontAwesomeIcon className={showText2 ? 'factorial2_icon2' :
                                        'factorial2_icon'} onClick={OpenText2} icon={faInfoCircle} />
                                </div>
                            </div>
                        </div>
                        <div className='taxi_price'>
                            {add2 ?
                                <img src={label} className='taxi_tag' alt='' />
                                :
                                <span className='from'>From</span>
                            }
                            <span className='taxi_dollar'>$10</span>
                            {showSelect2 ?
                                null
                                :
                                <div className='addme_btn_div' onClick={openSelect2}>
                                    <Link className='Add_me_btn' to='/select-extra'>Add Me</Link>
                                </div>
                            }
                        </div>
                    </div>
                    {showSelect2 ?
                        <div className='select_fields'>
                            <Options selectFunc={openSelect2} addfunc={handleAdd2} />
                        </div>
                        : null
                    }
                    {showText2 ?
                        <div className='details_taxi'>
                            <p className='select_para1'>Included In the Price:</p>
                            <ul className='detail_ul'>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Select From Medium or Large Bouquet</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented Inside the Vehicle</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented on Inbound Journey</span>
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
                            <img className='extra_img' src={rose} alt="rose" />
                            <div className='name_div'>
                                <p className='taxi_name'>Flowers</p>
                                <div style={{ marginTop: '10px' }} className='uptoJ_user_div'>
                                    <span className='taxi_span'>1 Bouquet</span>
                                </div>
                                <div className='uptoJ_user_div2'>
                                    <FontAwesomeIcon className={showText3 ? 'factorial2_icon2' :
                                        'factorial2_icon'} onClick={OpenText3} icon={faInfoCircle} />
                                </div>
                            </div>
                        </div>
                        <div className='taxi_price'>
                            {add3 ?
                                <img src={label} className='taxi_tag' alt='' />
                                :
                                <span className='from'>From</span>
                            }
                            <span className='taxi_dollar'>$10</span>
                            {showSelect3 ?
                                null
                                :
                                <div className='addme_btn_div' onClick={openSelect3}>
                                    <Link className='Add_me_btn' to='/select-extra'>Add Me</Link>
                                </div>
                            }
                        </div>
                    </div>
                    {showSelect3 ?
                        <div className='select_fields'>
                            <Options selectFunc={openSelect3} addfunc={handleAdd3} />
                        </div>
                        : null
                    }
                    {showText3 ?
                        <div className='details_taxi'>
                            <p className='select_para1'>Included In the Price:</p>
                            <ul className='detail_ul'>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Select From Medium or Large Bouquet</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented Inside the Vehicle</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented on Inbound Journey</span>
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
                            <img className='extra_img' src={rose} alt="rose" />
                            <div className='name_div'>
                                <p className='taxi_name'>VIP Pass</p>
                                <div style={{ marginTop: '10px' }} className='uptoJ_user_div'>
                                    <span className='taxi_span'>Club & Airport</span>
                                </div>
                                <div className='uptoJ_user_div2'>
                                    <FontAwesomeIcon className={showText4 ? 'factorial2_icon2' :
                                        'factorial2_icon'} onClick={OpenText4} icon={faInfoCircle} />
                                </div>
                            </div>
                        </div>
                        <div className='taxi_price'>
                            {add4 ?
                                <img src={label} className='taxi_tag' alt='' />
                                :
                                <span className='from'>From</span>
                            }
                            <span className='taxi_dollar'>$10</span>
                            {showSelect4 ?
                                null
                                :
                                <div className='addme_btn_div' onClick={openSelect4}>
                                    <Link className='Add_me_btn' to='/select-extra'>Add Me</Link>
                                </div>
                            }
                        </div>
                    </div>
                    {showSelect4 ?
                        <div className='select_fields'>
                            <Options selectFunc={openSelect4} addfunc={handleAdd4} />
                        </div>
                        : null
                    }
                    {showText4 ?
                        <div className='details_taxi'>
                            <p className='select_para1'>Included In the Price:</p>
                            <ul className='detail_ul'>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Select From Medium or Large Bouquet</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented Inside the Vehicle</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='check_taxi' icon={faCheck} />
                                    <span className='detail_span'>Presented on Inbound Journey</span>
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

export default SelectExtra