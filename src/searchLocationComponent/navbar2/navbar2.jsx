import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './style.css'



const Navbar2 = () => {
    return(
        <div>
            <div className='nav2_div'>
                <Link className='nav2_link' to='/'>
                <FontAwesomeIcon  className='arrow_icon' icon={faArrowLeft} />
                
                </Link>

            </div>
        </div>
    )
}
export default Navbar2