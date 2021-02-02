import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './style.css'


const Navbar4 = ()=>{
    return(
        <>
        <div>
            <div className='navbar3_div'>
                <div className='header_nav4'>

                <Link className='nav4_link' to='/select-extra'>
                   <FontAwesomeIcon className='arrow3_icon' icon={faArrowLeft} />
                </Link>

                <h1 className='checkout_head'>Checkout</h1>
                {/* <Link className='skip_extra' to='/checkout'>Skip Extra</Link> */}

                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar4