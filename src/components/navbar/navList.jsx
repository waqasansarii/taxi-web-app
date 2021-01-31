import React from 'react'
import {Link} from 'react-router-dom'


export  const NavList = ({navOpen}) => {
    if(!navOpen){
        return null
    }
    return(
        <div>
            <div className='navlist_div'>
                <ul className='navlist_ul'>
                    <li>
                        <Link to='/' className='navlist_link'>Home</Link>
                    </li>
                    <li>
                    <Link className='navlist_link' to='/location'>Book Taxi</Link>

                    </li>
                    <li>
                    <Link className='navlist_link' to='/travel-tips'>Travel Tips</Link>

                    </li>
                    <li>
                    <Link className='navlist_link' to='/faq'>FAQ</Link>

                    </li>
                    <li>
                    <Link to='/contact' className='navlist_link'>Contact Us</Link>

                    </li>
                    <li>
                    <Link className='navlist_link' to='/csAndTs'>T's & C's</Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}