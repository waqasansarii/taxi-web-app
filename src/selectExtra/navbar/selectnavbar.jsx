import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import SelectExtra from '../selectextraCards/extracard'
import SelectExtraMoreInfo from '../moreInfo/selectmoreInfo'
import './style.css'


const Navbar3 = ()=>{
    return(
        <>
        <div>
            <div className='navbar3_div'>
                <div className='header_nav3'>

                <Link className='nav3_link' to='/book-taxi'>
                   <FontAwesomeIcon className='arrow3_icon' icon={faArrowLeft} />
                </Link>

                <h1 className='select_extra_head'>Select Extra</h1>
                <Link className='skip_extra' to='/checkout'>Skip Extra</Link>

                </div>
            </div>
        </div>
        <SelectExtraMoreInfo />

        <SelectExtra />
        </>
    )
}
export default Navbar3