import React, { useState } from 'react'
import { faArrowRight, faMapMarkerAlt, faTimes,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompass} from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'

import './style.css'
import '../locationList/style.css'
// import LocationList from '../locationList/locationList'
import {Location_state} from '../../globalState/locationData'



const SearchInput = () => {

    // FISRT INPUT FILED 
    let [val, setVal] = useState('')
    // SECOND INPUT FIELD 
    let [val2, setVal2] = useState('')
    // FIRST LOCATION LIST 
    let [hide , setHide] = useState(false)
    // SECOND LOCATION LIST 
    let [hide2 , setHide2] = useState(false)
    let [hide3 , setHide3] = useState(false)

    // FISRT INPUT FILED FUNCTION

    const handleSearch = (e) => {
        // console.log(e.target.value)
        setVal(e.target.value)
        setHide(true)
        setHide2(false)
    }
    // SECOND INPUT FILED FUNCTION

    const handleSearch2 = (e) => {
        // console.log(e.target.value)
        setVal2(e.target.value)
        setHide2(true)
        setHide(false)
    }



    const handleCancle = () => {
        setVal('')
    }
    const handleCancle2 = () => {
        setVal2('')
    }

    // FISRT LOCATION LIST FILTER 


    let filter = Location_state.location.filter((value)=>{

        return value.city.toLowerCase().startsWith(val.toLowerCase())
    })

    // SECOND LOCATION LIST FILTER 


    let filter2 = Location_state.location.filter((value)=>{

        return value.city.toLowerCase().startsWith(val2.toLowerCase())
    })

    // SELECT LOCATION ONCLICK FOR FIRST INPUT FIELD


    const handleSelect = (e) => {
            setVal(e.city)
            setHide(false)

    }
    // SELECT LOCATION ONCLICK FOR SECOND INPUT FIELD

    const handleSelect2 = (e) => {
        setVal2(e.city)
        setHide2(false)
}

    return (
        <div>

               
                       {/* SEARCH BAR INPUT FIELDS  */}


            <div className='input_div'>
                <div className='searchinp_div'>

                    <FontAwesomeIcon className='map_marker2' icon={faMapMarkerAlt} />
                    <input value={val} onChange={(e) => handleSearch(e)} className='search_in1' placeholder='Where From?' type="text" name="" id="" />
                    {val ?
                        <FontAwesomeIcon onClick={handleCancle} className='arrow2' icon={faTimes} />
                        :
                        <FontAwesomeIcon className='arrow2' icon={faArrowRight} />
                    }

                </div>
                <div className='searchinp_div2'>

                    <FontAwesomeIcon className='map_marker3' icon={faMapMarkerAlt} />
                    <input value={val2} onChange={(e) => handleSearch2(e)} className='search_in2' placeholder='Where To?' type="text" name="" id="" />
                    {val2 ?
                        <FontAwesomeIcon onClick={handleCancle2} className='arrow2' icon={faTimes} />
                        :
                        <FontAwesomeIcon className='arrow2' icon={faArrowRight} />
                    }
                </div>



            </div>

                               {/* SEARAC one BAR LIST  */}


            <div style={{ marginTop: '20px' }}>
                {
                    hide ?
                    
                    <div className='list_container'>
                    {filter.map((val) => {
                        return (
                            <div onClick={() => handleSelect(val)} className='location_list_div' key={val.id}>
                                <div className='location_name'>
                                    <p className='location_para' >{val.city}</p>
                                    <p className='location_para2' >{val.desc}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='compas' icon={faCompass} />
                                </div>

                            </div>
                        )
                    })

                    }

                </div>
                :
                null
                }
            </div>


                               {/* SEARAC TWO BAR LIST  */}
            

            <div style={{ marginTop: '20px' }}>
                {
                    hide2 ?
                    
                    <div className='list_container'>
                    {filter2.map((val) => {
                        return (
                            <div onClick={() => handleSelect2(val)} className='location_list_div' key={val.id}>
                                <div className='location_name'>
                                    <p className='location_para' >{val.city}</p>
                                    <p className='location_para2' >{val.desc}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='compas' icon={faCompass} />
                                </div>

                            </div>
                        )
                    })

                    }

                </div>
                :
                null
                }
            </div>

            <div className='show_price_div'>
                <Link className='show_price_link' to='/book-taxi'>
                <FontAwesomeIcon icon={faMoneyBillAlt} />
                <span style={{marginLeft:'10px'}}>Show Price</span>

                </Link>

            </div>
            {/* <LocationList loc={val} /> */}
            {/* <p className='foter2'>Booking Online Easy but We Are Here!</p> */}

        </div>
    )
}
export default SearchInput 