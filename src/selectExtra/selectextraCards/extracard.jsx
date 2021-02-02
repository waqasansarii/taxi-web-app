import React, { useState } from 'react'
import './style.css'
import rose from '../../images/rose.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import label from '../../images/label.png'
import { Location_state } from '../../globalState/locationData'
import Options from '../selectOption/option'

const SelectExtra = () => {


    const [showText, setShowText] = useState(false)
    const [add, setAdd] = useState(false)
    const [showSelect, setShowSelect] = useState(false)

    const OpenText = () => {
        setShowText(!showText)
        console.log(showText)
    }
    const openSelect = () => {
        setShowSelect(!showSelect)
    }
    const handleAdd=()=>{
     setAdd(!add)
     console.log('run')
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
                                            <img className='extra_img' src={rose} alt="" />

                                            <div className='name_div'>


                                                <p className='taxi_name'>{val.name}</p>
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
                                            {showText ?
                                                <img src={label} className='taxi_tag' />

                                                :

                                                <span className='from'>From</span>
                                            }
                                            {/* <FontAwesomeIcon className='taxi_dollar' icon={faDollarSign} /> */}
                                            <span className='taxi_dollar'>${val.price}</span>
                                            {showSelect?
                                                null
                                                :
                                            <div className='addme_btn_div' onClick={openSelect}>
                                                <Link className='Add_me_btn' to='/select-extra'>Add Me</Link>
                                            </div>
                                            }
                                        </div>



                                    </div>
                                    {showSelect  ?
                                        <div className='select_fields'>
                                            <Options selectFunc={openSelect} addfunc={handleAdd}/>

                                        </div>
                                        : null
                                    }

                                    {showText ?

                                        <div className='details_taxi'>
                                            {/* <p>{val.name}</p> */}
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
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectExtra