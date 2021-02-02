import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/fontawesome-free-brands';
import logo from '../../images/logo.png'
import './navbar.css'
import { NavList } from './navList'
import { Link } from 'react-router-dom'
import TemporaryDrawer from './navList'

const Navbar = () => {


    let [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='nav_container'>
            <div className='main_nav_div'>
                <div className='logo_div'>
                    <Link to='/'>
                        <img className='logo_img' src={logo} alt="" />

                    </Link>
                </div>
                <div className='ul_div'>
                    <ul className='ul'>
                        <li>
                            <button className='book_btn'>
                                <Link className='book_btn_link' to='/location'>
                                    back   <FontAwesomeIcon className='book' icon={faBook} />
                                </Link>
                            </button>
                        </li>

                        <li>
                            <FontAwesomeIcon className='user' icon={faUser} />
                        </li>
                        <li className='nav_liii' onClick={handleOpen}>
                            {/* <FontAwesomeIcon className='bar' icon={faBars} /> */}
                            <TemporaryDrawer />


                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
