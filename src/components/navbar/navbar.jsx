import React,{useState} from 'react'
import Logo from '../../images/car.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBook,faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faLinkedin, faGithub, faFacebookMessenger } from '@fortawesome/fontawesome-free-brands';
import './navbar.css'
import {NavList} from './navList'



const Navbar = () => {

   
    let [open , setOpen] = useState(false) 
    const handleOpen =() => {
      setOpen(!open)
    }

    return (
        <div className='nav_container'>
            <div className='main_nav_div'>
                <div className='logo_div'>
                    <img className='logo_img' src={Logo} alt="" />
                </div>
                <div className='ul_div'>
                    <ul className='ul'>
                        <li>
                            <button className='book_btn'>
                                back   <FontAwesomeIcon className='book' icon={faBook} />
                            </button>
                        </li>

                        <li>
                            {/* <FontAwesomeIcon className='font-awesome' icon={faGithub} /> */}
                            <FontAwesomeIcon className='user' icon={faUser} />
                        </li>
                        <li className='nav_liii' onClick={handleOpen}>
                            <FontAwesomeIcon className='bar' icon={faBars} />
                            

                        </li>
                    </ul>
                </div>

            </div>
                    <NavList navOpen ={open} />
        </div>
    )
}

export default Navbar
